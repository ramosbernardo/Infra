import { ALL_EDITAL_ITEMS, EDITAL_ITEM_MAP, OFFICIAL_EDITAL } from '../src/data/edital';
import { INITIAL_QUESTIONS } from '../src/data/questionBank';

const total = INITIAL_QUESTIONS.length;
const correctDist: Record<number, number> = { 0: 0, 1: 0, 2: 0, 3: 0 };
const patternDist: Record<string, number> = {};
const styleDist: Record<string, number> = {};
const axisDist: Record<string, number> = {};
const axisVfNegDist: Record<string, number> = {};

let longestCorrectCount = 0;
let sumCorrectLen = 0;
let sumWrongLen = 0;
let wrongOptionSamples = 0;

const statementLengths: number[] = [];
const invalidItemIds: Array<{ id: string; editalItemId: string }> = [];
const incompleteOptionErrors: Array<{ id: string; missingIndices: number[] }> = [];
const lengthRatioViolations: Array<{ id: string; ratio: string }> = [];
const negativeFormatViolations: string[] = [];
const vfFormatViolations: string[] = [];
const vfDistractorViolations: string[] = [];
const duplicateIds: string[] = [];
const seenIds = new Set<string>();
const coveredItemIds = new Set<string>();
const itemQuestionMap = new Map<string, typeof INITIAL_QUESTIONS[number][]>();
const itemCorrectDist = new Map<string, [number, number, number, number]>();

function tokenizeStatement(text: string): Set<string> {
  const normalized = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
  if (!normalized) return new Set();
  return new Set(normalized.split(/\s+/).filter(Boolean));
}

function jaccardSimilarity(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 && b.size === 0) return 1;
  if (a.size === 0 || b.size === 0) return 0;
  let intersection = 0;
  for (const token of a) {
    if (b.has(token)) intersection++;
  }
  const union = a.size + b.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

const vfComboDist: Record<string, number> = {
  VVV: 0,
  VVF: 0,
  VFV: 0,
  VFF: 0,
  FVV: 0,
  FVF: 0,
  FFV: 0,
  FFF: 0,
};
let vfFirstFalseCount = 0;
let vfTotalCount = 0;

const afirmativasComboDist: Record<string, number> = {};
let afirmativasOnlyIvFalseCount = 0;
let afirmativasTotalCount = 0;
let oldBoardStyleCount = 0;

function extractVfCode(opt: string): string {
  return opt.replace(/[^VF]/gi, '').toUpperCase();
}

function hammingDistance(a: string, b: string): number {
  if (a.length !== b.length) return 99;
  let d = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) d++;
  }
  return d;
}

for (const q of INITIAL_QUESTIONS) {
  if (seenIds.has(q.id)) {
    duplicateIds.push(q.id);
  }
  seenIds.add(q.id);

  if (/Banca Própria/i.test(q.boardStyle)) {
    oldBoardStyleCount += 1;
  }

  const item = EDITAL_ITEM_MAP[q.editalItemId];
  if (!item) {
    invalidItemIds.push({ id: q.id, editalItemId: q.editalItemId });
  } else {
    axisDist[item.axisId] = (axisDist[item.axisId] ?? 0) + 1;
    if (q.style === 'vf' || q.style === 'negativa') {
      axisVfNegDist[item.axisId] = (axisVfNegDist[item.axisId] ?? 0) + 1;
    }
    coveredItemIds.add(q.editalItemId);
    const list = itemQuestionMap.get(q.editalItemId) ?? [];
    list.push(q);
    itemQuestionMap.set(q.editalItemId, list);
    const dist = itemCorrectDist.get(q.editalItemId) ?? [0, 0, 0, 0];
    if (q.correctIndex >= 0 && q.correctIndex <= 3) {
      dist[q.correctIndex] += 1;
    }
    itemCorrectDist.set(q.editalItemId, dist);
  }

  if (q.extraEditalItemIds) {
    for (const extraId of q.extraEditalItemIds) {
      if (!EDITAL_ITEM_MAP[extraId]) {
        invalidItemIds.push({ id: q.id, editalItemId: extraId });
      }
    }
  }

  correctDist[q.correctIndex] = (correctDist[q.correctIndex] ?? 0) + 1;

  const pat = q.questionPattern ?? 'cenario';
  patternDist[pat] = (patternDist[pat] ?? 0) + 1;

  const styleVal = q.style ?? 'nao_definido';
  styleDist[styleVal] = (styleDist[styleVal] ?? 0) + 1;

  if (q.style === 'negativa') {
    if (!/\b(EXCETO|INCORRETA|NÃO)\b/.test(q.statement) || /__/.test(q.statement)) {
      negativeFormatViolations.push(q.id);
    }
  }

  if (q.style === 'vf') {
    vfTotalCount += 1;
    const has3Checks = (q.statement.match(/\( \)/g) ?? []).length === 3;
    const endsCorrectly = q.statement.trim().endsWith('As afirmativas são, respectivamente,');
    if (!has3Checks || !endsCorrectly) {
      vfFormatViolations.push(q.id);
    }
    const correctCode = extractVfCode(q.options[q.correctIndex] ?? '');
    if (correctCode in vfComboDist) {
      vfComboDist[correctCode] += 1;
    }
    if (correctCode.startsWith('F')) {
      vfFirstFalseCount += 1;
    }
    const distractorDistancesOk = q.options.every((opt, idx) => {
      if (idx === q.correctIndex) return true;
      return hammingDistance(correctCode, extractVfCode(opt)) === 1;
    });
    if (!distractorDistancesOk) {
      vfDistractorViolations.push(q.id);
    }
  }

  if (q.style === 'afirmativas') {
    afirmativasTotalCount += 1;
    const ans = (q.options[q.correctIndex] ?? '').trim();
    afirmativasComboDist[ans] = (afirmativasComboDist[ans] ?? 0) + 1;
    if (/I,\s*II\s*e\s*III/i.test(ans)) {
      afirmativasOnlyIvFalseCount += 1;
    }
  }

  statementLengths.push(q.statement.length);

  const lens = q.options.map((o) => o.length);
  let maxOptRatio = 0;
  for (let i = 0; i < 4; i++) {
    const othersAvg =
      lens.reduce((acc, l, idx) => (idx === i ? acc : acc + l), 0) / 3;
    const ratio = lens[i] / (othersAvg || 1);
    if (ratio > maxOptRatio) maxOptRatio = ratio;
  }
  if (maxOptRatio > 1.3) {
    lengthRatioViolations.push({ id: q.id, ratio: maxOptRatio.toFixed(2) });
  }

  const correctLen = q.options[q.correctIndex]?.length ?? 0;
  sumCorrectLen += correctLen;

  let maxWrongLen = 0;
  const missingErrs: number[] = [];
  for (let i = 0; i < 4; i++) {
    if (i === q.correctIndex) continue;
    const wLen = q.options[i]?.length ?? 0;
    sumWrongLen += wLen;
    wrongOptionSamples += 1;
    if (wLen > maxWrongLen) maxWrongLen = wLen;

    const err = q.optionErrors?.[i];
    if (!err || !err.trim()) {
      missingErrs.push(i);
    }
  }
  if (correctLen > maxWrongLen) {
    longestCorrectCount += 1;
  }
  if (missingErrs.length > 0) {
    incompleteOptionErrors.push({ id: q.id, missingIndices: missingErrs });
  }
}

statementLengths.sort((a, b) => a - b);
const mid = Math.floor(statementLengths.length / 2);
const medianStatementLen =
  statementLengths.length === 0
    ? 0
    : statementLengths.length % 2 === 0
    ? Math.round((statementLengths[mid - 1] + statementLengths[mid]) / 2)
    : statementLengths[mid];

const pctLongest = total > 0 ? ((longestCorrectCount / total) * 100).toFixed(1) : '0.0';
const avgCorrectLen = total > 0 ? sumCorrectLen / total : 0;
const avgWrongLen = wrongOptionSamples > 0 ? sumWrongLen / wrongOptionSamples : 1;
const lenRatio = (avgCorrectLen / avgWrongLen).toFixed(2);

const vfCount = styleDist['vf'] ?? 0;
const negCount = styleDist['negativa'] ?? 0;
const vfNegPct = total > 0 ? (((vfCount + negCount) / total) * 100).toFixed(1) : '0.0';
const vfFirstFalsePct =
  vfTotalCount > 0 ? ((vfFirstFalseCount / vfTotalCount) * 100).toFixed(1) : '0.0';
const vfMaxComboPct =
  vfTotalCount > 0
    ? ((Math.max(...Object.values(vfComboDist)) / vfTotalCount) * 100).toFixed(1)
    : '0.0';
const afirmativasOnlyIvFalsePct =
  afirmativasTotalCount > 0
    ? ((afirmativasOnlyIvFalseCount / afirmativasTotalCount) * 100).toFixed(1)
    : '0.0';

const uncoveredItems = ALL_EDITAL_ITEMS.filter((it) => !coveredItemIds.has(it.id)).map(
  (it) => it.id
);

const itemsUnder7 = ALL_EDITAL_ITEMS.filter(
  (it) => (itemQuestionMap.get(it.id)?.length ?? 0) < 7
).map((it) => `${it.id}(${itemQuestionMap.get(it.id)?.length ?? 0})`);

const axis4ItemsUnder7 = ALL_EDITAL_ITEMS.filter(
  (it) => it.axisId === '4' && (itemQuestionMap.get(it.id)?.length ?? 0) < 7
).map((it) => `${it.id}(${itemQuestionMap.get(it.id)?.length ?? 0})`);

const nearDuplicatePairs: Array<{ itemId: string; idA: string; idB: string; similarityPct: string }> = [];
for (const [itemId, qs] of itemQuestionMap.entries()) {
  const tokenSets = qs.map((q) => tokenizeStatement(q.statement));
  for (let i = 0; i < qs.length; i++) {
    for (let j = i + 1; j < qs.length; j++) {
      const sim = jaccardSimilarity(tokenSets[i], tokenSets[j]);
      if (sim > 0.7) {
        nearDuplicatePairs.push({
          itemId,
          idA: qs[i].id,
          idB: qs[j].id,
          similarityPct: (sim * 100).toFixed(1),
        });
      }
    }
  }
}

const letters = ['A', 'B', 'C', 'D'] as const;
const itemLetterBias: Array<{ itemId: string; details: string }> = [];
for (const it of ALL_EDITAL_ITEMS) {
  const dist = itemCorrectDist.get(it.id);
  if (!dist) continue;
  const flagged = dist
    .map((count, idx) => (count >= 3 ? `${letters[idx]}=${count}` : null))
    .filter((v): v is string => v !== null);
  if (flagged.length > 0) {
    itemLetterBias.push({
      itemId: it.id,
      details: `${flagged.join(', ')} (total=${dist.reduce((a, b) => a + b, 0)})`,
    });
  }
}

console.log('=== VERIFICAÇÃO DO BANCO DE QUESTÕES ===');
console.log(`Total de questões: ${total}`);
console.log(
  `Distribuição de correctIndex: A=${correctDist[0]}, B=${correctDist[1]}, C=${correctDist[2]}, D=${correctDist[3]}`
);
console.log(
  `Correta é a mais longa: ${longestCorrectCount}/${total} (${pctLongest}%) | Razão média correta/erradas: ${lenRatio}x`
);
console.log(
  `Alternativas > 1,3x da média das outras (${lengthRatioViolations.length}): ${
    lengthRatioViolations.length
      ? lengthRatioViolations.map((v) => `${v.id}(${v.ratio}x)`).join(', ')
      : 'nenhuma'
  }`
);
console.log(`Mediana de tamanho dos enunciados: ${medianStatementLen} caracteres`);
console.log(`Distribuição por questionPattern: ${JSON.stringify(patternDist)}`);
console.log(`Distribuição por style: ${JSON.stringify(styleDist)}`);
console.log(`V/F + Negativa: ${vfCount + negCount}/${total} (${vfNegPct}%)`);
console.log(
  `Gabaritos V/F (${vfTotalCount}): ${Object.entries(vfComboDist)
    .map(([k, v]) => `${k}=${v}(${((v / (vfTotalCount || 1)) * 100).toFixed(1)}%)`)
    .join(' | ')} | Máx=${vfMaxComboPct}%`
);
console.log(
  `V/F com 1ª afirmativa falsa: ${vfFirstFalseCount}/${vfTotalCount} (${vfFirstFalsePct}%)`
);
console.log(
  `V/F distratores com distância != 1 da correta (${vfDistractorViolations.length}): ${
    vfDistractorViolations.length ? vfDistractorViolations.join(', ') : 'nenhuma'
  }`
);
console.log(
  `Gabaritos Afirmativas (${afirmativasTotalCount}): ${JSON.stringify(afirmativasComboDist)} | Apenas IV falsa: ${afirmativasOnlyIvFalseCount}/${afirmativasTotalCount} (${afirmativasOnlyIvFalsePct}%)`
);
console.log(
  `V/F + Negativa por eixo (1–16): ${OFFICIAL_EDITAL.axes
    .map((ax) => `${ax.number}:${axisVfNegDist[ax.id] ?? 0}`)
    .join(' | ')}`
);
console.log(
  `Questões por eixo (1–16): ${OFFICIAL_EDITAL.axes
    .map((ax) => `${ax.number}:${axisDist[ax.id] ?? 0}`)
    .join(' | ')}`
);
console.log(`boardStyle legado ("Banca Própria"): ${oldBoardStyleCount}`);
console.log(
  `Violações formato negativa (${negativeFormatViolations.length}): ${
    negativeFormatViolations.length ? negativeFormatViolations.join(', ') : 'nenhuma'
  }`
);
console.log(
  `Violações formato V/F (${vfFormatViolations.length}): ${
    vfFormatViolations.length ? vfFormatViolations.join(', ') : 'nenhuma'
  }`
);
console.log(
  `IDs duplicados (${duplicateIds.length}): ${duplicateIds.length ? duplicateIds.join(', ') : 'nenhum'}`
);
console.log(
  `editalItemId inválidos (${invalidItemIds.length}): ${
    invalidItemIds.length ? JSON.stringify(invalidItemIds) : 'nenhum'
  }`
);
console.log(
  `IDs sem optionErrors completos (${incompleteOptionErrors.length}): ${
    incompleteOptionErrors.length ? JSON.stringify(incompleteOptionErrors) : 'nenhum'
  }`
);
console.log(
  `Itens do edital sem questão (${uncoveredItems.length}/${ALL_EDITAL_ITEMS.length}): ${
    uncoveredItems.length ? uncoveredItems.join(', ') : 'nenhum'
  }`
);
console.log(
  `Questões por item (< 7 questões) (${itemsUnder7.length}/${ALL_EDITAL_ITEMS.length}): ${
    itemsUnder7.length ? itemsUnder7.join(', ') : 'nenhum'
  }`
);
console.log(
  `Eixo 4 — questões por item: ${ALL_EDITAL_ITEMS.filter((it) => it.axisId === '4')
    .map((it) => `${it.id}:${itemQuestionMap.get(it.id)?.length ?? 0}`)
    .join(' | ')} (faltando <7: ${axis4ItemsUnder7.length})`
);
console.log(
  `Quase-duplicadas no mesmo item (Jaccard > 70%) (${nearDuplicatePairs.length}): ${
    nearDuplicatePairs.length
      ? nearDuplicatePairs.map((p) => `${p.itemId}: ${p.idA} vs ${p.idB} (${p.similarityPct}%)`).join('; ')
      : 'nenhuma'
  }`
);
console.log(
  `Itens com >= 3 questões na mesma letra (${itemLetterBias.length}): ${
    itemLetterBias.length
      ? itemLetterBias.map((b) => `${b.itemId} [${b.details}]`).join('; ')
      : 'nenhum'
  }`
);

if (
  duplicateIds.length > 0 ||
  invalidItemIds.length > 0 ||
  incompleteOptionErrors.length > 0 ||
  negativeFormatViolations.length > 0 ||
  vfFormatViolations.length > 0 ||
  uncoveredItems.length > 0 ||
  nearDuplicatePairs.length > 0 ||
  itemLetterBias.length > 0 ||
  (styleDist['nao_definido'] ?? 0) > 0
) {
  process.exit(1);
}
