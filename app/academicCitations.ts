import type { StudyCitation } from './chapterNotes';

export function bibleGatewayUrl(reference: string) {
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(reference)}&version=CUVS`;
}

export function chapterOnePassageUrl(range: string) {
  return bibleGatewayUrl(`Luke ${range.replace('–', '-')}`);
}

const lanierUrl = 'https://www.bhpublishinggroup.com/product/luke-the-christian-standard-commentary-2/';
const sterlingUrl = 'https://www.eerdmans.com/9780802848734/shaping-the-past-to-define-the-present/';
const johnsonUrl = 'https://litpress.org/Products/E8331/Sacra-Pagina-The-Gospel-of-Luke';
const birdUrl = 'https://www.ivpress.com/Media/Default/Downloads/Excerpts-and-Samples/A0809-excerpt.pdf';

const academicSources = {
  'Lanier 2025': { label: 'Lanier 2025', url: lanierUrl },
  'Sterling 2023': { label: 'Sterling 2023', url: sterlingUrl },
  'Johnson 2018': { label: 'Johnson 2018', url: johnsonUrl },
  Bird: { label: 'Bird · Luke-Acts', url: birdUrl },
} as const;

export function academicSourceCitation(
  id: keyof typeof academicSources,
  scope: StudyCitation['scope'] = '解读',
): StudyCitation {
  const item = academicSources[id];
  return source(id, item.label, item.url, scope);
}

function source(id: string, label: string, url: string, scope: StudyCitation['scope']): StudyCitation {
  return { id, label, url, scope };
}

const text = (range: string, scope: StudyCitation['scope'] = '经文') => source(`经文 ${range}`, `路 ${range} 原文`, chapterOnePassageUrl(range), scope);
const oldTestament = (label: string, reference: string) => source(reference, `${label} 经文`, bibleGatewayUrl(reference), '串联');
const newTestament = (label: string, reference: string) => source(reference, `${label} 经文`, bibleGatewayUrl(reference), '串联');
const lanier = (scope: StudyCitation['scope'] = '解读') => source('Lanier 2025', 'Lanier 2025', lanierUrl, scope);
const sterling = (scope: StudyCitation['scope'] = '背景') => source('Sterling 2023', 'Sterling 2023', sterlingUrl, scope);
const johnson = (scope: StudyCitation['scope'] = '解读') => source('Johnson 2018', 'Johnson 2018', johnsonUrl, scope);
const bird = (scope: StudyCitation['scope'] = '背景') => source('Bird', 'Bird · Luke-Acts', birdUrl, scope);

export const chapterOneCitationsByRange: Record<string, StudyCitation[]> = {
  '1:1–4': [
    text('1:1–4', '解读'), lanier(), johnson(), sterling(),
    newTestament('徒 1:1–3', 'Acts 1:1-3'), oldTestament('申 19:15', 'Deuteronomy 19:15'),
  ],
  '1:5–25': [
    text('1:5–25', '解读'), lanier(), johnson('背景'),
    oldTestament('玛 3:1；4:5–6', 'Malachi 3:1; Malachi 4:5-6'), oldTestament('赛 40:3', 'Isaiah 40:3'),
    newTestament('启 8:3–4', 'Revelation 8:3-4'),
  ],
  '1:26–38': [
    text('1:26–38', '解读'), lanier(), johnson('背景'),
    oldTestament('撒下 7:12–16', '2 Samuel 7:12-16'), oldTestament('诗 2:7', 'Psalm 2:7'),
    oldTestament('赛 9:6–7', 'Isaiah 9:6-7'), newTestament('太 1:18–25', 'Matthew 1:18-25'),
  ],
  '1:39–45': [
    text('1:39–45', '解读'), johnson('背景'), bird(),
    oldTestament('创 18:1–15', 'Genesis 18:1-15'), oldTestament('创 21:1–7', 'Genesis 21:1-7'),
    oldTestament('撒上 1–2', '1 Samuel 1-2'), text('1:15', '串联'), text('1:41', '串联'),
  ],
  '1:46–56': [
    text('1:46–56', '解读'), lanier(), johnson('背景'),
    oldTestament('撒上 2:1–10', '1 Samuel 2:1-10'), oldTestament('诗 113:5–9', 'Psalm 113:5-9'),
    oldTestament('诗 146:5–9', 'Psalm 146:5-9'), newTestament('路 4:18–19', 'Luke 4:18-19'),
  ],
  '1:57–66': [
    text('1:57–66', '解读'), lanier('背景'), johnson('背景'),
    text('1:13', '串联'), text('1:20', '串联'), oldTestament('士 13:2–14', 'Judges 13:2-14'),
  ],
  '1:67–79': [
    text('1:67–79', '解读'), lanier(), johnson('背景'), sterling('背景'),
    oldTestament('撒下 7:8–16', '2 Samuel 7:8-16'), oldTestament('诗 132:17', 'Psalm 132:17'),
    oldTestament('赛 9:2', 'Isaiah 9:2'), oldTestament('玛 3:1；4:5–6', 'Malachi 3:1; Malachi 4:5-6'),
    newTestament('路 24:27', 'Luke 24:27'),
  ],
  '1:80': [
    text('1:80', '解读'), johnson('背景'), lanier('背景'),
    oldTestament('玛 4:5–6', 'Malachi 4:5-6'), oldTestament('赛 40:3–5', 'Isaiah 40:3-5'),
    newTestament('路 3:1–6', 'Luke 3:1-6'), newTestament('加 1:15–18', 'Galatians 1:15-18'),
  ],
};

export type ChapterReference = {
  id: string;
  text: string;
  url: string;
  note: string;
};

export const chapterOneReferences: ChapterReference[] = [
  {
    id: '经文',
    text: '《路加福音》第一章（和合本·简体）',
    url: bibleGatewayUrl('Luke 1'),
    note: '本章主要经文；页面内同时保留逐段经文原文。',
  },
  {
    id: 'Lanier 2025',
    text: 'Lanier, Gregory R. Luke: The Christian Standard Commentary. B&H Academic, 2025.',
    url: lanierUrl,
    note: '用于路加福音的历史、文学与神学解读；链接为出版方书目页。',
  },
  {
    id: 'Sterling 2023',
    text: 'Sterling, Gregory E. Shaping the Past to Define the Present: Luke-Acts and Apologetic Historiography. Eerdmans, 2023.',
    url: sterlingUrl,
    note: '用于理解路加—使徒行传的两卷结构、历史叙事与读者身份。',
  },
  {
    id: 'Johnson 2018',
    text: 'Johnson, Luke Timothy. The Gospel of Luke. Sacra Pagina. Liturgical Press, 2018.',
    url: johnsonUrl,
    note: '用于路加最终文本形态的文学与神学阅读。',
  },
  {
    id: 'Bird',
    text: 'Bird, Michael F. A Bird’s-Eye View of Luke and Acts: Context, Story, and Themes. IVP Academic, 2023.',
    url: birdUrl,
    note: '用于路加—使徒行传整体叙事与救赎历史脉络的辅助阅读；链接为出版方试读 PDF。',
  },
  {
    id: '互文',
    text: '本章旧约／新约互文索引：撒上 2；撒下 7；诗 2、113、132、146；赛 9、40；玛 3–4；太 1；徒 1；路 3、4、24。',
    url: bibleGatewayUrl('1 Samuel 2; 2 Samuel 7; Psalm 2; Psalm 113; Psalm 132; Psalm 146; Isaiah 9; Isaiah 40; Malachi 3; Malachi 4; Matthew 1; Acts 1; Luke 3; Luke 4; Luke 24'),
    note: '每个段落旁已按具体引用提供独立链接。',
  },
];
