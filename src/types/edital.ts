export type StudyStatus = 'nao_iniciado' | 'em_estudo' | 'revisar' | 'dominado';

export type QuestionFormat = 'multipla_escolha';

export type SarahQuestionPattern =
  | 'cenario'
  | 'afirmativas'
  | 'vf'
  | 'colunas'
  | 'negativa'
  | 'lacunas';

export type QuestionStyle =
  | 'vf'
  | 'negativa'
  | 'direta'
  | 'caso_curto'
  | 'calculo'
  | 'afirmativas'
  | 'colunas'
  | 'lacunas';

export interface EditalItem {
  readonly id: string;
  readonly axisId: string;
  readonly sectionId: string;
  readonly code: string;
  readonly title: string;
  readonly literalText: string;
  readonly keywords: readonly string[];
}

export interface EditalSection {
  readonly id: string;
  readonly axisId: string;
  readonly code: string;
  readonly title: string;
  readonly literalText: string;
  readonly items: readonly EditalItem[];
}

export interface EditalAxis {
  readonly id: string;
  readonly number: number;
  readonly title: string;
  readonly literalTitle: string;
  readonly sections: readonly EditalSection[];
}

export interface EditalDocument {
  readonly heading: string;
  readonly version: string;
  readonly axes: readonly EditalAxis[];
}

export interface StudyGuide {
  readonly itemId: string;
  readonly highYieldSummary: readonly string[];
  readonly technicalReference?: readonly string[];
  readonly examTraps: readonly string[];
  readonly keyTerms: readonly string[];
  readonly cheatSheet?: readonly { readonly topic: string; readonly facts: string }[];
}

export interface Flashcard {
  readonly id: string;
  readonly itemId: string;
  readonly front: string;
  readonly back: string;
}

export interface SRSProgress {
  readonly cardId: string;
  readonly intervalDays: number;
  readonly easeFactor: number;
  readonly repetitions: number;
  readonly nextReviewAt: number;
  readonly lastReviewedAt: number;
}

export interface Question {
  readonly id: string;
  readonly editalItemId: string;
  readonly extraEditalItemIds?: readonly string[];
  readonly format: QuestionFormat;
  readonly questionPattern?: SarahQuestionPattern;
  readonly style?: QuestionStyle;
  readonly difficulty: 'Basica' | 'Intermediaria' | 'Avancada';
  readonly boardStyle: string;
  readonly statement: string;
  readonly options: readonly [string, string, string, string] | readonly string[];
  readonly correctIndex: number;
  readonly explanation: string;
  readonly correctAnalysis?: string;
  readonly optionErrors?: Partial<Readonly<Record<number, string>>>;
  readonly isCustom?: boolean;
}

export interface DiscursiveSubtask {
  readonly letter: 'A' | 'B' | 'C';
  readonly prompt: string;
  readonly expectedAnswer: string;
  readonly keyPoints: readonly string[];
}

export interface DiscursiveCriterion {
  readonly id: string;
  readonly label: string;
  readonly category: 'tecnico' | 'norma_padrao';
  readonly maxPoints: number;
  readonly description: string;
}

export interface DiscursiveCriteriaConfig {
  readonly tecnicoMax: 40;
  readonly normaMax: 10;
  readonly items: readonly DiscursiveCriterion[];
}

export interface DiscursiveCase {
  readonly id: string;
  readonly title: string;
  readonly axisNumber: number;
  readonly editalItemIds: readonly string[];
  readonly scenario: string;
  readonly commandText: string;
  readonly maxLines: 30;
  readonly subtasks: readonly DiscursiveSubtask[];
  readonly criterios: DiscursiveCriteriaConfig;
  readonly estruturaSugerida: readonly string[];
  readonly errosComuns: readonly string[];
}

export interface DiscursiveAttemptRecord {
  readonly id: string;
  readonly caseId: string;
  readonly createdAt: number;
  readonly draft: string;
  readonly lineCount: number;
  readonly criterionScores: Record<string, number>;
  readonly tecnicoScore: number;
  readonly normaScore: number;
  readonly totalScore: number;
}

export interface QuizAnswerRecord {
  readonly questionId: string;
  readonly editalItemId: string;
  readonly selectedIndex: number | null;
  readonly isCorrect: boolean;
}

export interface QuizSessionRecord {
  readonly id: string;
  readonly createdAt: number;
  readonly durationSeconds: number;
  readonly scopeLabel: string;
  readonly modeLabel?: string;
  readonly totalQuestions: number;
  readonly correctCount: number;
  readonly answers: readonly QuizAnswerRecord[];
}

export interface UserStudyStore {
  readonly schemaVersion: number;
  readonly theme: 'dark' | 'light';
  readonly itemStatuses: Record<string, StudyStatus>;
  readonly itemNotes: Record<string, string>;
  readonly srsProgress: Record<string, SRSProgress>;
  readonly quizHistory: readonly QuizSessionRecord[];
  readonly customQuestions: readonly Question[];
  readonly discursiveDrafts: Record<string, string>;
  readonly discursiveAttempts: readonly DiscursiveAttemptRecord[];
}
