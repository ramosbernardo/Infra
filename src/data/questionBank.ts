import { Question } from '../types/edital';
import { QUESTIONS_AXIS_1_TO_4 } from './questions/axis1to4';
import { QUESTIONS_AXIS_5_TO_8 } from './questions/axis5to8';
import { QUESTIONS_AXIS_9_TO_12 } from './questions/axis9to12';
import { QUESTIONS_AXIS_13_TO_16 } from './questions/axis13to16';

// Banco de questões no formato do edital (4 alternativas, 1 correta):
// - 4 alternativas (A-D), apenas 1 correta
// - Distribuição proporcional ao peso de cada eixo do edital (100% dos 210 itens cobertos, 25–30 no Eixo 16)
// - Enunciados objetivos e técnicos de operação/suporte/arquitetura
// - Gabarito comentado com item literal do edital + justificativa da correta + erro em 1 linha das 3 incorretas
export const INITIAL_QUESTIONS: readonly Question[] = Object.freeze([
  ...QUESTIONS_AXIS_1_TO_4,
  ...QUESTIONS_AXIS_5_TO_8,
  ...QUESTIONS_AXIS_9_TO_12,
  ...QUESTIONS_AXIS_13_TO_16,
]);
