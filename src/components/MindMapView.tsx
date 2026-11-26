import { AlertTriangle, BookOpen, ChevronDown, ChevronUp, Network, X } from 'lucide-react';
import { KeyboardEvent, useId, useMemo, useState } from 'react';
import { EditalItem, StudyGuide } from '../types/edital';
import { FormattedInlineText } from './FormattedInlineText';

interface MindMapViewProps {
  guide: StudyGuide;
  item: EditalItem;
}

type BranchTone = 'summary' | 'glossary' | 'trap';

interface MindMapLeaf {
  id: string;
  label: string;
  lines: string[];
  firstLineBold?: boolean;
  content: string;
  tone: BranchTone;
  parentId: string;
  parentLabel: string;
}

interface MindMapBranch {
  id: string;
  label: string;
  lines: string[];
  content: string;
  tone: BranchTone;
  leaves: MindMapLeaf[];
}

type SelectableNode =
  | { kind: 'branch'; branch: MindMapBranch }
  | { kind: 'leaf'; leaf: MindMapLeaf };

function stripInlineMarkdown(text: string): string {
  return text.replace(/\*\*/g, '').replace(/`/g, '').replace(/\s+/g, ' ').trim();
}

function stripParentheticals(text: string): string {
  return text
    .replace(/\s*\([^)]*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncateLabel(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const slice = text.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(' ');
  const cut = lastSpace >= Math.floor(maxLength * 0.55) ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}…`;
}

function firstWords(text: string, maxWords: number): string {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length <= maxWords) return words.join(' ');
  return `${words.slice(0, maxWords).join(' ')}…`;
}

function wrapLines(text: string, maxCharsPerLine: number, maxLines = 2): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [''];

  const lines: string[] = [];
  let current = '';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const candidate = current ? `${current} ${word}` : word;

    if (candidate.length <= maxCharsPerLine) {
      current = candidate;
    } else if (!current) {
      if (lines.length === maxLines - 1) {
        lines.push(truncateLabel(word, maxCharsPerLine));
        return lines;
      }
      lines.push(word.slice(0, maxCharsPerLine));
      current = word.slice(maxCharsPerLine);
    } else {
      lines.push(current);
      if (lines.length === maxLines) {
        const prev = lines[maxLines - 1];
        lines[maxLines - 1] = truncateLabel(prev, maxCharsPerLine);
        return lines;
      }
      current = word;
    }
  }

  if (current) {
    if (lines.length < maxLines) {
      lines.push(current);
    } else {
      lines[maxLines - 1] = truncateLabel(
        `${lines[maxLines - 1]} ${current}`,
        maxCharsPerLine
      );
    }
  }

  return lines.slice(0, maxLines);
}

function buildMindMapData(guide: StudyGuide): MindMapBranch[] {
  const branches: MindMapBranch[] = [];

  guide.highYieldSummary.forEach((rawLine, idx) => {
    const trimmed = rawLine.trim();
    if (
      trimmed.startsWith('Definição e escopo') ||
      trimmed.startsWith('Exemplo operacional')
    ) {
      return;
    }

    const colonIdx = trimmed.indexOf(':');
    const rawPrefix = colonIdx >= 0 ? trimmed.slice(0, colonIdx) : trimmed;
    const rawContent = colonIdx >= 0 ? trimmed.slice(colonIdx + 1).trim() : trimmed;
    const withoutParens = stripParentheticals(stripInlineMarkdown(rawPrefix));
    const cleanLabel = truncateLabel(withoutParens, 60);

    branches.push({
      id: `summary-${idx}`,
      label: cleanLabel,
      lines: wrapLines(cleanLabel, 28, 2),
      content: rawContent,
      tone: 'summary',
      leaves: [],
    });
  });

  if (guide.keyTerms.length > 0) {
    const leaves: MindMapLeaf[] = guide.keyTerms.map((term, idx) => {
      const colonIdx = term.indexOf(':');
      const rawTerm = colonIdx >= 0 ? term.slice(0, colonIdx) : term;
      const rawDef = colonIdx >= 0 ? term.slice(colonIdx + 1).trim() : term.trim();
      const label = truncateLabel(stripInlineMarkdown(rawTerm), 48);

      return {
        id: `glossary-${idx}`,
        label,
        lines: wrapLines(label, 28, 2),
        content: rawDef,
        tone: 'glossary',
        parentId: 'branch-glossary',
        parentLabel: 'Glossário',
      };
    });

    branches.push({
      id: 'branch-glossary',
      label: 'Glossário',
      lines: ['Glossário'],
      content: `${leaves.length} termos-chave do item`,
      tone: 'glossary',
      leaves,
    });
  }

  if (guide.examTraps.length > 0) {
    const leaves: MindMapLeaf[] = guide.examTraps.map((trap, idx) => {
      const clean = stripInlineMarkdown(trap);
      const preview = firstWords(clean, 10);
      const previewLines = wrapLines(preview, 31, 2);

      return {
        id: `trap-${idx}`,
        label: `Pegadinha ${idx + 1}`,
        lines: [`Pegadinha ${idx + 1}`, ...previewLines],
        firstLineBold: true,
        content: trap,
        tone: 'trap',
        parentId: 'branch-traps',
        parentLabel: 'Pegadinhas',
      };
    });

    branches.push({
      id: 'branch-traps',
      label: 'Pegadinhas',
      lines: ['Pegadinhas'],
      content: `${leaves.length} pegadinhas recorrentes de banca`,
      tone: 'trap',
      leaves,
    });
  }

  return branches;
}

interface PositionedLeaf {
  leaf: MindMapLeaf;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface PositionedBranch {
  branch: MindMapBranch;
  x: number;
  y: number;
  w: number;
  h: number;
  side: 'left' | 'right';
  trunkX: number;
  leaves: PositionedLeaf[];
}

function getLeafHeight(leaf: MindMapLeaf): number {
  if (leaf.lines.length >= 3) return 70;
  return leaf.lines.length === 2 ? 54 : 44;
}

function getBranchBlockHeight(branch: MindMapBranch): number {
  if (branch.leaves.length === 0) return 58;
  const parentH = 42;
  const topGap = 12;
  const leafGap = 10;
  const leavesH =
    branch.leaves.reduce((acc, leaf) => acc + getLeafHeight(leaf), 0) +
    Math.max(0, branch.leaves.length - 1) * leafGap;
  return parentH + topGap + leavesH;
}

function layoutDesktopSide(
  branches: MindMapBranch[],
  side: 'left' | 'right',
  centerY: number
): { items: PositionedBranch[]; totalHeight: number } {
  const gapY = 18;
  const blockHeights = branches.map(getBranchBlockHeight);
  const totalHeight =
    blockHeights.reduce((acc, h) => acc + h, 0) +
    Math.max(0, branches.length - 1) * gapY;

  let cursorY = centerY - totalHeight / 2;
  const items: PositionedBranch[] = [];

  branches.forEach((branch, idx) => {
    const blockH = blockHeights[idx];
    const hasLeaves = branch.leaves.length > 0;
    const branchW = hasLeaves ? 132 : 266;
    const branchH = hasLeaves ? 42 : 58;
    const branchX = side === 'right' ? 482 : 278 - branchW;
    const branchY = hasLeaves ? cursorY : cursorY + (blockH - branchH) / 2;

    const leafW = 248;
    const leafGap = 10;
    const leafX = side === 'right' ? 500 : 12;
    const trunkX = side === 'right' ? 490 : 270;
    let leafCursorY = branchY + branchH + 12;

    const positionedLeaves: PositionedLeaf[] = branch.leaves.map((leaf) => {
      const lh = getLeafHeight(leaf);
      const item: PositionedLeaf = {
        leaf,
        x: leafX,
        y: leafCursorY,
        w: leafW,
        h: lh,
      };
      leafCursorY += lh + leafGap;
      return item;
    });

    items.push({
      branch,
      x: branchX,
      y: branchY,
      w: branchW,
      h: branchH,
      side,
      trunkX,
      leaves: positionedLeaves,
    });

    cursorY += blockH + gapY;
  });

  return { items, totalHeight };
}

function getToneSvgClasses(tone: BranchTone, isSelected: boolean) {
  if (tone === 'trap') {
    return {
      rect: isSelected
        ? 'fill-amber-100 dark:fill-amber-950/90 stroke-amber-600 dark:stroke-amber-400 print:fill-amber-50 print:stroke-amber-700'
        : 'fill-amber-50 dark:fill-amber-950/60 stroke-amber-400 dark:stroke-amber-600 hover:stroke-amber-500 print:fill-amber-50 print:stroke-amber-700',
      text: 'fill-amber-950 dark:fill-amber-100 print:fill-black',
      connector: 'stroke-amber-400 dark:stroke-amber-600 print:stroke-amber-700',
    };
  }
  if (tone === 'glossary') {
    return {
      rect: isSelected
        ? 'fill-emerald-50 dark:fill-emerald-950/80 stroke-emerald-600 dark:stroke-emerald-400 print:fill-slate-100 print:stroke-slate-700'
        : 'fill-white dark:fill-slate-900 stroke-emerald-400 dark:stroke-emerald-700 hover:stroke-emerald-500 print:fill-white print:stroke-slate-500',
      text: 'fill-slate-900 dark:fill-slate-100 print:fill-black',
      connector: 'stroke-emerald-400 dark:stroke-emerald-700 print:stroke-slate-500',
    };
  }
  return {
    rect: isSelected
      ? 'fill-sky-50 dark:fill-sky-950/80 stroke-sky-600 dark:stroke-sky-400 print:fill-slate-100 print:stroke-slate-700'
      : 'fill-white dark:fill-slate-900 stroke-slate-300 dark:stroke-slate-700 hover:stroke-sky-500 dark:hover:stroke-sky-400 print:fill-white print:stroke-slate-400',
    text: 'fill-slate-900 dark:fill-slate-100 print:fill-black',
    connector: 'stroke-sky-400/80 dark:stroke-sky-700 print:stroke-slate-400',
  };
}

function SvgMultilineText({
  lines,
  x,
  centerY,
  className,
  fontSize = 14,
  fontWeight = 500,
  firstLineBold = false,
}: {
  lines: string[];
  x: number;
  centerY: number;
  className: string;
  fontSize?: number;
  fontWeight?: number;
  firstLineBold?: boolean;
}) {
  const lineHeight = fontSize * 1.24;
  const totalHeight = (lines.length - 1) * lineHeight;
  const startY = centerY - totalHeight / 2 + fontSize * 0.35;

  return (
    <text
      x={x}
      y={startY}
      textAnchor="middle"
      fontSize={fontSize}
      fontWeight={fontWeight}
      className={`pointer-events-none select-none ${className}`}
    >
      {lines.map((line, idx) => (
        <tspan
          key={idx}
          x={x}
          dy={idx === 0 ? 0 : lineHeight}
          fontWeight={idx === 0 && firstLineBold ? 700 : undefined}
        >
          {line}
        </tspan>
      ))}
    </text>
  );
}

export function MindMapView({ guide, item }: MindMapViewProps) {
  const uid = useId();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const centralLabel = `${item.id} — ${item.literalText}`;
  const centralLines = useMemo(() => wrapLines(centralLabel, 14, 2), [centralLabel]);
  const branches = useMemo(() => buildMindMapData(guide), [guide]);

  // Divide metade esquerda / metade direita equilibrando ramos com folhas
  const { leftBranches, rightBranches } = useMemo(() => {
    const leftCount = Math.ceil(branches.length / 2);
    const summaryBranches = branches.filter((b) => b.tone === 'summary');
    const glossary = branches.find((b) => b.tone === 'glossary');
    const traps = branches.find((b) => b.tone === 'trap');

    if (glossary && traps && summaryBranches.length >= 2) {
      const left: MindMapBranch[] = [];
      const right: MindMapBranch[] = [];

      const leftTargetSummaries = Math.max(0, leftCount - 1);
      summaryBranches.forEach((b, idx) => {
        if (idx < leftTargetSummaries) left.push(b);
        else right.push(b);
      });

      left.push(traps);
      right.push(glossary);
      return { leftBranches: left, rightBranches: right };
    }

    return {
      leftBranches: branches.slice(0, leftCount),
      rightBranches: branches.slice(leftCount),
    };
  }, [branches]);

  const desktopLayout = useMemo(() => {
    const leftMeasure = layoutDesktopSide(leftBranches, 'left', 0);
    const rightMeasure = layoutDesktopSide(rightBranches, 'right', 0);
    const contentH = Math.max(leftMeasure.totalHeight, rightMeasure.totalHeight, 280);
    const svgH = Math.round(contentH + 40);
    const centerY = svgH / 2;

    return {
      width: 760,
      height: svgH,
      centerX: 380,
      centerY,
      centerBox: { x: 312, y: centerY - 30, w: 136, h: 60 },
      leftItems: layoutDesktopSide(leftBranches, 'left', centerY).items,
      rightItems: layoutDesktopSide(rightBranches, 'right', centerY).items,
    };
  }, [leftBranches, rightBranches]);

  const mobileLayout = useMemo(() => {
    const width = 360;
    const centerBox = { x: 76, y: 16, w: 208, h: 52 };
    let cursorY = 88;

    const positioned: Array<{
      branch: MindMapBranch;
      x: number;
      y: number;
      w: number;
      h: number;
      leaves: PositionedLeaf[];
    }> = [];

    branches.forEach((branch) => {
      const h = branch.leaves.length > 0 ? 44 : 56;
      const x = 42;
      const w = 306;
      const y = cursorY;
      cursorY += h + 10;

      const leaves: PositionedLeaf[] = branch.leaves.map((leaf) => {
        const lh = getLeafHeight(leaf);
        const leafItem: PositionedLeaf = {
          leaf,
          x: 66,
          y: cursorY,
          w: 282,
          h: lh,
        };
        cursorY += lh + 8;
        return leafItem;
      });

      positioned.push({ branch, x, y, w, h, leaves });
      cursorY += 8;
    });

    return {
      width,
      height: Math.max(cursorY + 12, 180),
      centerBox,
      items: positioned,
    };
  }, [branches]);

  const nodeLookup = useMemo(() => {
    const map = new Map<string, SelectableNode>();
    branches.forEach((branch) => {
      map.set(branch.id, { kind: 'branch', branch });
      branch.leaves.forEach((leaf) => {
        map.set(leaf.id, { kind: 'leaf', leaf });
      });
    });
    return map;
  }, [branches]);

  const selectedNode = selectedId ? nodeLookup.get(selectedId) ?? null : null;

  const handleToggleNode = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const handleNodeKeyDown = (e: KeyboardEvent<SVGGElement>, id: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggleNode(id);
    }
  };

  const desktopTitleId = `${uid}-desktop-title`;
  const desktopDescId = `${uid}-desktop-desc`;
  const mobileTitleId = `${uid}-mobile-title`;
  const mobileDescId = `${uid}-mobile-desc`;

  const svgTitle = `Mapa mental — ${centralLabel}`;
  const svgDescription = `Mapa mental do item ${centralLabel} com ${branches.length} ramos principais derivados do resumo de prova, glossário e pegadinhas de banca.`;

  return (
    <div className="space-y-4 print-surface">
      <div className="flex flex-wrap items-center justify-between gap-2 no-print">
        <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <Network className="w-3.5 h-3.5 text-sky-500 shrink-0" />
          <span>Clique ou pressione Enter em qualquer ramo para abrir o conteúdo completo.</span>
        </p>

        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          aria-expanded={showAll}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0"
        >
          {showAll ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" />
              Fechar todos
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" />
              Abrir todos
            </>
          )}
        </button>
      </div>

      {/* Canvas SVG */}
      <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950 p-2 sm:p-3 print:bg-white print:border-slate-300 print-surface overflow-x-auto">
        {/* Desktop & Print SVG (horizontal 2 lados) */}
        <svg
          viewBox={`0 0 ${desktopLayout.width} ${desktopLayout.height}`}
          role="img"
          aria-labelledby={`${desktopTitleId} ${desktopDescId}`}
          className="hidden sm:block print:block w-full min-w-[760px] print:min-w-0 h-auto"
        >
          <title id={desktopTitleId}>{svgTitle}</title>
          <desc id={desktopDescId}>{svgDescription}</desc>

          <rect
            x={0}
            y={0}
            width={desktopLayout.width}
            height={desktopLayout.height}
            rx={10}
            className="fill-transparent print:fill-white"
          />

          {/* Conectores curvos: centro -> ramos e tronco do ramo -> folhas */}
          {[...desktopLayout.leftItems, ...desktopLayout.rightItems].map((itemNode) => {
            const toneStyles = getToneSvgClasses(itemNode.branch.tone, false);
            const startX =
              itemNode.side === 'right'
                ? desktopLayout.centerBox.x + desktopLayout.centerBox.w
                : desktopLayout.centerBox.x;
            const startY = desktopLayout.centerY;
            const endX =
              itemNode.side === 'right' ? itemNode.x : itemNode.x + itemNode.w;
            const endY = itemNode.y + itemNode.h / 2;
            const ctrlOffset = (endX - startX) * 0.52;

            const lastLeaf = itemNode.leaves[itemNode.leaves.length - 1];

            return (
              <g key={`conn-${itemNode.branch.id}`}>
                <path
                  d={`M ${startX} ${startY} C ${startX + ctrlOffset} ${startY}, ${endX - ctrlOffset} ${endY}, ${endX} ${endY}`}
                  fill="none"
                  strokeWidth={2}
                  className={toneStyles.connector}
                />
                {lastLeaf && (
                  <path
                    d={`M ${itemNode.trunkX} ${itemNode.y + itemNode.h} L ${itemNode.trunkX} ${
                      lastLeaf.y + lastLeaf.h / 2 - 8
                    }`}
                    fill="none"
                    strokeWidth={1.5}
                    className={toneStyles.connector}
                  />
                )}
                {itemNode.leaves.map((leafNode) => {
                  const lEndX =
                    itemNode.side === 'right'
                      ? leafNode.x
                      : leafNode.x + leafNode.w;
                  const lEndY = leafNode.y + leafNode.h / 2;

                  return (
                    <path
                      key={`conn-${leafNode.leaf.id}`}
                      d={`M ${itemNode.trunkX} ${lEndY - 10} C ${itemNode.trunkX} ${lEndY}, ${
                        (itemNode.trunkX + lEndX) / 2
                      } ${lEndY}, ${lEndX} ${lEndY}`}
                      fill="none"
                      strokeWidth={1.5}
                      className={toneStyles.connector}
                    />
                  );
                })}
              </g>
            );
          })}

          {/* Nó central */}
          <g>
            <rect
              x={desktopLayout.centerBox.x}
              y={desktopLayout.centerBox.y}
              width={desktopLayout.centerBox.w}
              height={desktopLayout.centerBox.h}
              rx={14}
              strokeWidth={2}
              className="fill-sky-600 dark:fill-sky-500 stroke-sky-700 dark:stroke-sky-300 print:fill-white print:stroke-black"
            />
            <SvgMultilineText
              lines={centralLines}
              x={desktopLayout.centerX}
              centerY={desktopLayout.centerY}
              fontSize={16}
              fontWeight={700}
              className="fill-white dark:fill-slate-950 print:fill-black"
            />
          </g>

          {/* Ramos e folhas interativos */}
          {[...desktopLayout.leftItems, ...desktopLayout.rightItems].map((itemNode) => {
            const isBranchSelected = selectedId === itemNode.branch.id;
            const branchStyles = getToneSvgClasses(
              itemNode.branch.tone,
              isBranchSelected
            );

            return (
              <g key={itemNode.branch.id}>
                <g
                  role="button"
                  tabIndex={0}
                  aria-label={itemNode.branch.label}
                  aria-expanded={showAll || isBranchSelected}
                  onClick={() => handleToggleNode(itemNode.branch.id)}
                  onKeyDown={(e) => handleNodeKeyDown(e, itemNode.branch.id)}
                  className="cursor-pointer focus:outline-none focus-visible:[&>rect]:stroke-sky-500 focus-visible:[&>rect]:stroke-[3px]"
                >
                  <rect
                    x={itemNode.x}
                    y={itemNode.y}
                    width={itemNode.w}
                    height={itemNode.h}
                    rx={10}
                    strokeWidth={isBranchSelected ? 2.5 : 1.5}
                    className={`transition-colors ${branchStyles.rect}`}
                  />
                  <SvgMultilineText
                    lines={itemNode.branch.lines}
                    x={itemNode.x + itemNode.w / 2}
                    centerY={itemNode.y + itemNode.h / 2}
                    fontSize={14}
                    fontWeight={600}
                    className={branchStyles.text}
                  />
                </g>

                {itemNode.leaves.map((leafNode) => {
                  const isLeafSelected = selectedId === leafNode.leaf.id;
                  const leafStyles = getToneSvgClasses(
                    leafNode.leaf.tone,
                    isLeafSelected
                  );

                  return (
                    <g
                      key={leafNode.leaf.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`${leafNode.leaf.parentLabel}: ${leafNode.leaf.label}`}
                      aria-expanded={showAll || isLeafSelected}
                      onClick={() => handleToggleNode(leafNode.leaf.id)}
                      onKeyDown={(e) => handleNodeKeyDown(e, leafNode.leaf.id)}
                      className="cursor-pointer focus:outline-none focus-visible:[&>rect]:stroke-sky-500 focus-visible:[&>rect]:stroke-[3px]"
                    >
                      <rect
                        x={leafNode.x}
                        y={leafNode.y}
                        width={leafNode.w}
                        height={leafNode.h}
                        rx={8}
                        strokeWidth={isLeafSelected ? 2.5 : 1.25}
                        className={`transition-colors ${leafStyles.rect}`}
                      />
                      <SvgMultilineText
                        lines={leafNode.leaf.lines}
                        x={leafNode.x + leafNode.w / 2}
                        centerY={leafNode.y + leafNode.h / 2}
                        fontSize={13}
                        fontWeight={500}
                        firstLineBold={leafNode.leaf.firstLineBold}
                        className={leafStyles.text}
                      />
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>

        {/* Mobile SVG (< 640px): ramos empilhados verticalmente abaixo do nó central */}
        <svg
          viewBox={`0 0 ${mobileLayout.width} ${mobileLayout.height}`}
          role="img"
          aria-labelledby={`${mobileTitleId} ${mobileDescId}`}
          className="block sm:hidden print:hidden w-full h-auto"
        >
          <title id={mobileTitleId}>{svgTitle}</title>
          <desc id={mobileDescId}>{svgDescription}</desc>

          {/* Tronco principal descendo do nó central */}
          {mobileLayout.items.length > 0 && (
            <path
              d={`M ${mobileLayout.centerBox.x + mobileLayout.centerBox.w / 2} ${
                mobileLayout.centerBox.y + mobileLayout.centerBox.h
              } C ${mobileLayout.centerBox.x + mobileLayout.centerBox.w / 2} 80, 20 76, 20 96 L 20 ${
                mobileLayout.items[mobileLayout.items.length - 1].y +
                mobileLayout.items[mobileLayout.items.length - 1].h / 2
              }`}
              fill="none"
              strokeWidth={2}
              className="stroke-slate-300 dark:stroke-slate-700"
            />
          )}

          {/* Conectores curvos empilhados */}
          {mobileLayout.items.map((itemNode) => {
            const toneStyles = getToneSvgClasses(itemNode.branch.tone, false);
            const branchMidY = itemNode.y + itemNode.h / 2;

            return (
              <g key={`m-conn-${itemNode.branch.id}`}>
                <path
                  d={`M 20 ${branchMidY - 12} C 20 ${branchMidY}, 28 ${branchMidY}, ${itemNode.x} ${branchMidY}`}
                  fill="none"
                  strokeWidth={2}
                  className={toneStyles.connector}
                />
                {itemNode.leaves.map((leafNode) => {
                  const leafMidY = leafNode.y + leafNode.h / 2;
                  return (
                    <path
                      key={`m-conn-${leafNode.leaf.id}`}
                      d={`M ${itemNode.x + 12} ${itemNode.y + itemNode.h} C ${
                        itemNode.x + 12
                      } ${leafMidY}, ${itemNode.x + 18} ${leafMidY}, ${leafNode.x} ${leafMidY}`}
                      fill="none"
                      strokeWidth={1.5}
                      className={toneStyles.connector}
                    />
                  );
                })}
              </g>
            );
          })}

          {/* Nó central mobile */}
          <g>
            <rect
              x={mobileLayout.centerBox.x}
              y={mobileLayout.centerBox.y}
              width={mobileLayout.centerBox.w}
              height={mobileLayout.centerBox.h}
              rx={12}
              strokeWidth={2}
              className="fill-sky-600 dark:fill-sky-500 stroke-sky-700 dark:stroke-sky-300"
            />
            <SvgMultilineText
              lines={centralLines}
              x={mobileLayout.centerBox.x + mobileLayout.centerBox.w / 2}
              centerY={mobileLayout.centerBox.y + mobileLayout.centerBox.h / 2}
              fontSize={15}
              fontWeight={700}
              className="fill-white dark:fill-slate-950"
            />
          </g>

          {/* Ramos e folhas empilhados */}
          {mobileLayout.items.map((itemNode) => {
            const isBranchSelected = selectedId === itemNode.branch.id;
            const branchStyles = getToneSvgClasses(
              itemNode.branch.tone,
              isBranchSelected
            );

            return (
              <g key={`m-${itemNode.branch.id}`}>
                <g
                  role="button"
                  tabIndex={0}
                  aria-label={itemNode.branch.label}
                  aria-expanded={showAll || isBranchSelected}
                  onClick={() => handleToggleNode(itemNode.branch.id)}
                  onKeyDown={(e) => handleNodeKeyDown(e, itemNode.branch.id)}
                  className="cursor-pointer focus:outline-none focus-visible:[&>rect]:stroke-sky-500 focus-visible:[&>rect]:stroke-[3px]"
                >
                  <rect
                    x={itemNode.x}
                    y={itemNode.y}
                    width={itemNode.w}
                    height={itemNode.h}
                    rx={10}
                    strokeWidth={isBranchSelected ? 2.5 : 1.5}
                    className={branchStyles.rect}
                  />
                  <SvgMultilineText
                    lines={itemNode.branch.lines}
                    x={itemNode.x + itemNode.w / 2}
                    centerY={itemNode.y + itemNode.h / 2}
                    fontSize={13.5}
                    fontWeight={600}
                    className={branchStyles.text}
                  />
                </g>

                {itemNode.leaves.map((leafNode) => {
                  const isLeafSelected = selectedId === leafNode.leaf.id;
                  const leafStyles = getToneSvgClasses(
                    leafNode.leaf.tone,
                    isLeafSelected
                  );

                  return (
                    <g
                      key={`m-${leafNode.leaf.id}`}
                      role="button"
                      tabIndex={0}
                      aria-label={`${leafNode.leaf.parentLabel}: ${leafNode.leaf.label}`}
                      aria-expanded={showAll || isLeafSelected}
                      onClick={() => handleToggleNode(leafNode.leaf.id)}
                      onKeyDown={(e) => handleNodeKeyDown(e, leafNode.leaf.id)}
                      className="cursor-pointer focus:outline-none focus-visible:[&>rect]:stroke-sky-500 focus-visible:[&>rect]:stroke-[3px]"
                    >
                      <rect
                        x={leafNode.x}
                        y={leafNode.y}
                        width={leafNode.w}
                        height={leafNode.h}
                        rx={8}
                        strokeWidth={isLeafSelected ? 2.5 : 1.25}
                        className={leafStyles.rect}
                      />
                      <SvgMultilineText
                        lines={leafNode.leaf.lines}
                        x={leafNode.x + leafNode.w / 2}
                        centerY={leafNode.y + leafNode.h / 2}
                        fontSize={12.5}
                        fontWeight={500}
                        firstLineBold={leafNode.leaf.firstLineBold}
                        className={leafStyles.text}
                      />
                    </g>
                  );
                })}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Painel interativo de detalhe (quando um único ramo/folha está aberto na tela) */}
      {!showAll && selectedNode && (
        <div
          className={`no-print rounded-xl border p-4 space-y-2 ${
            (selectedNode.kind === 'branch'
              ? selectedNode.branch.tone
              : selectedNode.leaf.tone) === 'trap'
              ? 'border-amber-300 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/30'
              : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950'
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-0.5">
              {selectedNode.kind === 'leaf' && (
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  {selectedNode.leaf.parentLabel}
                </div>
              )}
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                {(selectedNode.kind === 'branch'
                  ? selectedNode.branch.tone
                  : selectedNode.leaf.tone) === 'trap' ? (
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                ) : (
                  <BookOpen className="w-4 h-4 text-sky-500 shrink-0" />
                )}
                <span>
                  {selectedNode.kind === 'branch'
                    ? selectedNode.branch.label
                    : selectedNode.leaf.label}
                </span>
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setSelectedId(null)}
              aria-label="Fechar painel do ramo"
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {selectedNode.kind === 'leaf' ? (
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <FormattedInlineText text={selectedNode.leaf.content} />
            </p>
          ) : selectedNode.branch.leaves.length > 0 ? (
            <ul className="space-y-2 pt-1 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {selectedNode.branch.leaves.map((leaf) => (
                <li key={leaf.id} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className={
                      leaf.tone === 'trap' ? 'text-amber-500 mt-0.5' : 'text-sky-500 mt-0.5'
                    }
                  >
                    •
                  </span>
                  <span>
                    {leaf.tone === 'glossary' && (
                      <strong className="font-semibold text-slate-900 dark:text-slate-100">
                        {leaf.label}:{' '}
                      </strong>
                    )}
                    <FormattedInlineText text={leaf.content} />
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              <FormattedInlineText text={selectedNode.branch.content} />
            </p>
          )}
        </div>
      )}

      {/* Lista completa expandida ("Abrir todos" na tela e sempre visível em @media print) */}
      <div
        className={`${
          showAll ? 'block' : 'hidden'
        } print:block space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800 print:border-slate-300`}
      >
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-black">
          Conteúdo completo dos ramos — {centralLabel}
        </h3>
        <div className="space-y-2.5">
          {branches.map((branch) => {
            const isSelectedBranch = selectedId === branch.id;
            return (
              <div
                key={`exp-${branch.id}`}
                className={`rounded-lg border p-3.5 space-y-1.5 print-box print-surface ${
                  branch.tone === 'trap'
                    ? 'border-amber-300 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 print:bg-white print:border-amber-600'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 print:bg-white print:border-slate-300'
                } ${isSelectedBranch ? 'ring-2 ring-sky-500 print:ring-0' : ''}`}
              >
                <div className="text-xs font-semibold text-slate-900 dark:text-slate-100 print:text-black">
                  {branch.label}
                </div>
                {branch.leaves.length === 0 ? (
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 print:text-black">
                    <FormattedInlineText text={branch.content} />
                  </p>
                ) : (
                  <ul className="space-y-1.5 text-sm leading-relaxed text-slate-700 dark:text-slate-300 print:text-black">
                    {branch.leaves.map((leaf) => (
                      <li
                        key={`exp-${leaf.id}`}
                        className={`flex items-start gap-2 rounded px-1.5 py-0.5 ${
                          selectedId === leaf.id
                            ? 'bg-sky-100/70 dark:bg-sky-900/40 print:bg-transparent'
                            : ''
                        }`}
                      >
                        <span
                          aria-hidden="true"
                          className={
                            leaf.tone === 'trap'
                              ? 'text-amber-500 print:text-black mt-0.5'
                              : 'text-slate-400 print:text-black mt-0.5'
                          }
                        >
                          •
                        </span>
                        <span>
                          {leaf.tone === 'glossary' && (
                            <strong className="font-semibold text-slate-900 dark:text-slate-100 print:text-black">
                              {leaf.label}:{' '}
                            </strong>
                          )}
                          <FormattedInlineText text={leaf.content} />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
