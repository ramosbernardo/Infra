import { Question } from '../types/edital';
import { QUESTIONS_AXIS_1_TO_4 } from './questions/axis1to4';
import { QUESTIONS_AXIS_5_TO_8 } from './questions/axis5to8';
import { QUESTIONS_AXIS_9_TO_12 } from './questions/axis9to12';
import { QUESTIONS_AXIS_13_TO_16 } from './questions/axis13to16';

// Banco oficial calibrado para a Banca Própria da Rede SARAH:
// - 4 alternativas (A-D), apenas 1 correta
// - Mínimo de 10 questões por eixo/assunto do edital (16 eixos x 10 = 160 questões)
// - Enunciados objetivos e técnicos de operação/suporte/arquitetura
// - Gabarito comentado com item literal do edital + justificativa da correta + erro em 1 linha das 3 incorretas
export const INITIAL_QUESTIONS: readonly Question[] = Object.freeze([
  ...QUESTIONS_AXIS_1_TO_4,
  ...QUESTIONS_AXIS_5_TO_8,
  ...QUESTIONS_AXIS_9_TO_12,
  ...QUESTIONS_AXIS_13_TO_16,
]);
