import { Flashcard } from '../../types/edital';
import { ALL_STUDY_GUIDES, INITIAL_FLASHCARDS } from '../studyGuides';

export function generateGuideFlashcards(itemId: string): Flashcard[] {
  const guide = ALL_STUDY_GUIDES[itemId];
  if (!guide) return [];

  const cards: Flashcard[] = [];
  guide.keyTerms.forEach((entry, index) => {
    const colonIdx = entry.indexOf(':');
    if (colonIdx <= 0) return;

    const term = entry.slice(0, colonIdx).trim();
    const back = entry.slice(colonIdx + 1).trim();
    if (!term) return;

    const isComparison = term.includes(' vs ') || term.includes(' × ');
    const front = isComparison ? `Diferencie: ${term}` : `O que é ${term}?`;

    cards.push({
      id: `kt-${itemId}-${index}`,
      itemId,
      front,
      back,
    });
  });

  return cards;
}

const PILOT_ATOMIC_ITEM_ID = '3.2.4';

function buildAppFlashcards(): readonly Flashcard[] {
  const generated = generateGuideFlashcards(PILOT_ATOMIC_ITEM_ID);
  const deck: Flashcard[] = [];
  let inserted = false;

  for (const card of INITIAL_FLASHCARDS) {
    if (card.itemId === PILOT_ATOMIC_ITEM_ID) {
      if (!inserted) {
        deck.push(...generated);
        inserted = true;
      }
      continue;
    }
    deck.push(card);
  }

  if (!inserted) {
    deck.push(...generated);
  }

  return Object.freeze(deck);
}

export const APP_FLASHCARDS: readonly Flashcard[] = buildAppFlashcards();
