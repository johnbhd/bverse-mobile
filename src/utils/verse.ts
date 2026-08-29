import verses from '@/data/verses.json';

import type { BibleVerse } from '@/types/bible';

export function getRandomVerse(): BibleVerse {
  const randomIndex = Math.floor(Math.random() * verses.length);

  return verses[randomIndex];
}