import { scriptureData, type ScriptureVerse } from './scriptureData';

export const SCRIPTURE_VERSION = '和合本（简体）';
export const SCRIPTURE_SOURCE = '新标点和合本（简体）·公版';

export type Passage = {
  label: string;
  text: string;
};

export type RelatedPassage = {
  reference: string;
  bookName: string;
  verses: Passage[];
  isWholeChapter: boolean;
};

type ParsedReference = {
  book: string;
  code: string;
  bookName: string;
  startChapter: number;
  startVerse: number | null;
  endChapter: number;
  endVerse: number | null;
  reference: string;
};

const books: Record<string, { code: string; name: string }> = {
  创: { code: 'GEN', name: '创世记' }, 出: { code: 'EXO', name: '出埃及记' }, 利: { code: 'LEV', name: '利未记' },
  民: { code: 'NUM', name: '民数记' }, 申: { code: 'DEU', name: '申命记' }, 书: { code: 'JOS', name: '约书亚记' },
  士: { code: 'JDG', name: '士师记' }, 得: { code: 'RUT', name: '路得记' }, 撒上: { code: '1SA', name: '撒母耳记上' },
  撒下: { code: '2SA', name: '撒母耳记下' }, 王上: { code: '1KI', name: '列王纪上' }, 王下: { code: '2KI', name: '列王纪下' },
  代上: { code: '1CH', name: '历代志上' }, 代下: { code: '2CH', name: '历代志下' }, 拉: { code: 'EZR', name: '以斯拉记' },
  尼: { code: 'NEH', name: '尼希米记' }, 斯: { code: 'EST', name: '以斯帖记' }, 伯: { code: 'JOB', name: '约伯记' },
  诗: { code: 'PSA', name: '诗篇' }, 箴: { code: 'PRO', name: '箴言' }, 传: { code: 'ECC', name: '传道书' }, 歌: { code: 'SOL', name: '雅歌' },
  赛: { code: 'ISA', name: '以赛亚书' }, 耶: { code: 'JER', name: '耶利米书' }, 哀: { code: 'LAM', name: '耶利米哀歌' },
  结: { code: 'EZE', name: '以西结书' }, 但: { code: 'DAN', name: '但以理书' }, 何: { code: 'HOS', name: '何西阿书' },
  珥: { code: 'JOE', name: '约珥书' }, 摩: { code: 'AMO', name: '阿摩司书' }, 俄: { code: 'OBA', name: '俄巴底亚书' },
  拿: { code: 'JON', name: '约拿书' }, 弥: { code: 'MIC', name: '弥迦书' }, 鸿: { code: 'NAH', name: '那鸿书' },
  哈: { code: 'HAB', name: '哈巴谷书' }, 番: { code: 'ZEP', name: '西番雅书' }, 该: { code: 'HAG', name: '哈该书' },
  亚: { code: 'ZEC', name: '撒迦利亚书' }, 玛: { code: 'MAL', name: '玛拉基书' }, 太: { code: 'MAT', name: '马太福音' },
  可: { code: 'MAR', name: '马可福音' }, 路: { code: 'LUK', name: '路加福音' }, 约: { code: 'JOH', name: '约翰福音' },
  徒: { code: 'ACT', name: '使徒行传' }, 罗: { code: 'ROM', name: '罗马书' }, 林前: { code: '1CO', name: '哥林多前书' },
  林后: { code: '2CO', name: '哥林多后书' }, 加: { code: 'GAL', name: '加拉太书' }, 弗: { code: 'EPH', name: '以弗所书' },
  腓: { code: 'PHI', name: '腓立比书' }, 西: { code: 'COL', name: '歌罗西书' }, 帖前: { code: '1TH', name: '帖撒罗尼迦前书' },
  帖后: { code: '2TH', name: '帖撒罗尼迦后书' }, 提前: { code: '1TI', name: '提摩太前书' }, 提后: { code: '2TI', name: '提摩太后书' },
  多: { code: 'TIT', name: '提多书' }, 门: { code: 'PHM', name: '腓利门书' }, 来: { code: 'HEB', name: '希伯来书' },
  雅: { code: 'JAM', name: '雅各书' }, 彼前: { code: '1PE', name: '彼得前书' }, 彼后: { code: '2PE', name: '彼得后书' },
  约壹: { code: '1JO', name: '约翰一书' }, 约贰: { code: '2JO', name: '约翰二书' }, 约叁: { code: '3JO', name: '约翰三书' },
  犹: { code: 'JUD', name: '犹大书' }, 启: { code: 'REV', name: '启示录' },
};

const bookAliases = Object.keys(books).sort((a, b) => b.length - a.length).join('|');
const referencePattern = new RegExp(`(${bookAliases})\\s*(\\d+)(?::(\\d+)(?:[–—-](\\d+):(\\d+)|[–—-](\\d+))?)?`, 'g');

function normalizeDash(value: string) {
  return value.replace(/[—-]/g, '–');
}

function formatReference(book: string, startChapter: number, startVerse: number | null, endChapter: number, endVerse: number | null) {
  if (startVerse === null) return `${book} ${startChapter}`;
  const start = `${startChapter}:${startVerse}`;
  if (endChapter !== startChapter) return `${book} ${start}–${endChapter}:${endVerse}`;
  if (endVerse !== null && endVerse !== startVerse) return `${book} ${start}–${endVerse}`;
  return `${book} ${start}`;
}

function rowsForReference(parsed: ParsedReference): ScriptureVerse[] {
  const book = scriptureData[parsed.code];
  if (!book) return [];
  const rows: ScriptureVerse[] = [];
  for (let chapter = parsed.startChapter; chapter <= parsed.endChapter; chapter += 1) {
    const chapterRows = book[String(chapter)] ?? [];
    const firstVerse = chapter === parsed.startChapter ? (parsed.startVerse ?? 1) : 1;
    const lastVerse = chapter === parsed.endChapter ? (parsed.endVerse ?? Number.POSITIVE_INFINITY) : Number.POSITIVE_INFINITY;
    chapterRows.forEach((row) => {
      if (row.end >= firstVerse && row.start <= lastVerse) rows.push(row);
    });
  }
  return rows;
}

function parseMatch(match: RegExpExecArray): ParsedReference {
  const book = match[1];
  const info = books[book];
  const startChapter = Number(match[2]);
  const startVerse = match[3] ? Number(match[3]) : null;
  const endChapter = match[4] ? Number(match[4]) : startChapter;
  const endVerse = match[4] ? Number(match[5]) : (match[6] ? Number(match[6]) : startVerse);
  return {
    book,
    code: info.code,
    bookName: info.name,
    startChapter,
    startVerse,
    endChapter,
    endVerse,
    reference: formatReference(book, startChapter, startVerse, endChapter, endVerse),
  };
}

function isFalsePositive(connection: string, index: number, book: string) {
  const previous = connection[index - 1] ?? '';
  return (book === '加' && previous === '路') || (book === '亚' && (previous === '赛' || previous === '利')) || (book === '太' && previous === '马');
}

export function getLukePassage(range: string): Passage[] {
  const match = normalizeDash(range).match(/^(\d+):(\d+)(?:–(\d+))?$/);
  if (!match) return [];
  const parsed: ParsedReference = {
    book: '路', code: 'LUK', bookName: '路加福音', startChapter: Number(match[1]), startVerse: Number(match[2]),
    endChapter: Number(match[1]), endVerse: Number(match[3] ?? match[2]), reference: `路 ${range}`,
  };
  return rowsForReference(parsed).map((row) => ({ label: row.start === row.end ? String(row.start) : `${row.start}–${row.end}`, text: row.text }));
}

export function getRelatedPassages(connection?: string): RelatedPassage[] {
  if (!connection) return [];
  const results: RelatedPassage[] = [];
  const seen = new Set<string>();
  referencePattern.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = referencePattern.exec(connection)) !== null) {
    if (isFalsePositive(connection, match.index, match[1])) continue;
    const parsed = parseMatch(match);
    if (seen.has(parsed.reference)) continue;
    seen.add(parsed.reference);
    results.push({
      reference: parsed.reference,
      bookName: parsed.bookName,
      verses: rowsForReference(parsed).map((row) => ({ label: row.start === row.end ? String(row.start) : `${row.start}–${row.end}`, text: row.text })),
      isWholeChapter: parsed.startVerse === null,
    });
  }
  return results;
}
