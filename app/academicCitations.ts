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
const zacchaeusWorkingPreacherUrl = 'https://www.workingpreacher.org/commentaries/revised-common-lectionary/ordinary-31-3/commentary-on-luke-191-10';
const minasGathercoleUrl = 'https://doi.org/10.1515/znw-2024-0002';
const macnamaraZacchaeusUrl = 'https://repozytorium.kul.pl/bitstreams/cf52cf8e-75d4-4724-97e6-4defe00000d5/download';
const travelNarrativeJblUrl = 'https://doi.org/10.15699/jbl.1441.2025.8';
const templeHtrUrl = 'https://www.cambridge.org/core/journals/harvard-theological-review/article/weeping-over-jerusalem-lukes-response-to-the-destruction-of-the-temple/D0E1B13425A79861FE941F673AD8F258';
const entryKinmanUrl = 'https://doi.org/10.53751/001c.30428190';
const minasIvpUrl = 'https://www.biblegateway.com/resources/ivp-nt/Parable-Stewardship-Minas';
const netLukeTwentyUrl = 'https://classic.net.bible.org/bible.php?book=Luk&chapter=20';
const netLukeTwentyOneUrl = 'https://classic.net.bible.org/bible.php?book=Luk&chapter=21';
const netLukeTwentyTwoUrl = 'https://classic.net.bible.org/bible.php?book=Luk&chapter=22';
const netLukeTwentyThreeUrl = 'https://classic.net.bible.org/bible.php?book=Luk&chapter=23';
const netLukeTwentyFourUrl = 'https://classic.net.bible.org/bible.php?book=Luk&chapter=24';
const bryanResurrectionJtsUrl = 'https://doi.org/10.1093/jts/flag032';
const bovonLukeTwentyVineyardUrl = 'https://doi.org/10.2307/j.ctvb6v8bq.9';
const bovonLukeTwentyTaxesUrl = 'https://doi.org/10.2307/j.ctvb6v8bq.10';
const bovonLukeTwentyResurrectionUrl = 'https://doi.org/10.2307/j.ctvb6v8bq.11';
const bovonLukeTwentyMessiahUrl = 'https://doi.org/10.2307/j.ctvb6v8bq.12';
const nevilleLukeTwentyOneUrl = 'https://journals.sagepub.com/doi/10.1177/1476993X241229158';
const jamesLukeTwentyTwoUrl = 'https://doi.org/10.1093/jts/flae045';
const clostermanLukeTwentyThreeUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/reading-the-gospel-of-lukes-walk-to-calvary-as-a-funeral-procession-a-study-of-luke-23278/1C72C42AE96F64344D934FB044D92DD4';
const thompsonLukeTwentyFourUrl = 'https://doi.org/10.1515/9783110773743';
const clarkHowardLukeTwentyFourUrl = 'https://doi.org/10.1080/23312521.2025.2495004';
const entryWorkingPreacherUrl = 'https://www.workingpreacher.org/commentaries/revised-common-lectionary/sunday-of-the-passion-palm-sunday-3/commentary-on-luke-1928-40-2';
const yaleJerusalemUrl = 'https://yalebiblestudy.org/courses/the-gospel-of-luke/lessons/in-jerusalem-study-guide/';
const netLukeNineteenUrl = 'https://classic.net.bible.org/passage.php?passage=luk+19';
const templeWitnessWorkingPreacherUrl = 'https://www.workingpreacher.org/commentaries/revised-common-lectionary/ordinary-33-3/commentary-on-luke-215-19';
const eschatologyWorkingPreacherUrl = 'https://www.workingpreacher.org/commentaries/revised-common-lectionary/first-sunday-of-advent-3/commentary-on-luke-2125-36-6';
const ivpLukeTwentyOneUrl = 'https://www.biblegateway.com/resources/ivp-nt/Jerusalems-Destruction-End';
const lastSupperWorkingPreacherUrl = 'https://www.workingpreacher.org/commentaries/narrative-lectionary/last-supper/commentary-on-luke-221-27-4';
const passionTrialWorkingPreacherUrl = 'https://www.workingpreacher.org/commentaries/revised-common-lectionary/sunday-of-the-passion-palm-sunday-3/commentary-on-luke-2214-2356-2';
const passionResurrectionYaleUrl = 'https://yalebiblestudy.org/courses/the-gospel-of-luke/lessons/the-passion-and-resurrection-study-guide/';
const emptyTombWorkingPreacherUrl = 'https://www.workingpreacher.org/commentaries/revised-common-lectionary/resurrection-of-our-lord-3/commentary-on-luke-241-12-6';
const emmausWorkingPreacherUrl = 'https://www.workingpreacher.org/commentaries/revised-common-lectionary/third-sunday-of-easter/commentary-on-luke-2413-35-7';
const ascensionWorkingPreacherUrl = 'https://www.workingpreacher.org/commentaries/revised-common-lectionary/ascension-of-our-lord/commentary-on-luke-2444-53-9';

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

export const chapterNineteenCitationsByRange: Record<string, StudyCitation[]> = {
  '19:1–10': [
    source('Lose · 撒该', 'Working Preacher · 撒该', zacchaeusWorkingPreacherUrl, '解读'),
    source('Macnamara 2025', 'Macnamara 2025 · 撒该', macnamaraZacchaeusUrl, '解读'),
    source('NET · 路 19', 'NET · 原文注释', netLukeNineteenUrl, '解读'),
  ],
  '19:11–27': [
    source('Gathercole 2024', 'Gathercole 2024', minasGathercoleUrl, '解读'),
    source('IVP · 十锭银子', 'IVP · 十锭银子', minasIvpUrl, '背景'),
    source('NET · 路 19', 'NET · 原文注释', netLukeNineteenUrl, '解读'),
  ],
  '19:28–35': [
    source('Johnson · 荣耀进城', 'Working Preacher · 荣耀进城', entryWorkingPreacherUrl, '解读'),
    source('Kinman · 进城研究', 'Kinman · 进城研究', entryKinmanUrl, '背景'),
    source('JBL 2025 · 旅程节奏', 'JBL 2025 · 旅程节奏', travelNarrativeJblUrl, '背景'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study', yaleJerusalemUrl, '背景'),
    source('NET · 路 19', 'NET · 原文注释', netLukeNineteenUrl, '解读'),
  ],
  '19:36–40': [
    source('Johnson · 荣耀进城', 'Working Preacher · 荣耀进城', entryWorkingPreacherUrl, '解读'),
    source('Kinman · 进城研究', 'Kinman · 进城研究', entryKinmanUrl, '背景'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study', yaleJerusalemUrl, '背景'),
    source('NET · 路 19', 'NET · 原文注释', netLukeNineteenUrl, '解读'),
  ],
  '19:41–44': [
    source('Johnson · 荣耀进城', 'Working Preacher · 荣耀进城', entryWorkingPreacherUrl, '解读'),
    source('HTR · 哀哭耶路撒冷', 'HTR · 哀哭耶路撒冷', templeHtrUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study', yaleJerusalemUrl, '背景'),
    source('NET · 路 19', 'NET · 原文注释', netLukeNineteenUrl, '解读'),
  ],
  '19:45–48': [
    source('HTR · 哀哭耶路撒冷', 'HTR · 哀哭耶路撒冷', templeHtrUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study', yaleJerusalemUrl, '解读'),
    source('NET · 路 19', 'NET · 原文注释', netLukeNineteenUrl, '解读'),
  ],
};

export const chapterNineteenReferences: ChapterReference[] = [
  {
    id: 'NET · 路 19',
    text: 'NET Bible. Luke 19: text, translation notes, and study notes.',
    url: netLukeNineteenUrl,
    note: '用于核对关键词、语法与翻译选择；中文经文仍以页面所标和合本为主。',
  },
  {
    id: 'Lose · 撒该',
    text: 'Lose, David J. “Commentary on Luke 19:1–10.” Working Preacher.',
    url: zacchaeusWorkingPreacherUrl,
    note: '用于撒该叙事、第 8 节现在时的两种解释，以及“看见／寻找／失丧”的路加主题。',
  },
  {
    id: 'Gathercole 2024',
    text: 'Gathercole, Simon. “Does the Parable of the Minas Address the Delay of the Parousia? Luke 19,11–27 in its Lukan, Rhetorical and Roman Settings.” Zeitschrift für die neutestamentliche Wissenschaft 115 (2024).',
    url: minasGathercoleUrl,
    note: '经同行评审的论文；用于检验把十锭银子单纯归纳为“再来延迟”是否足够，并重新连接撒该、王权和耶路撒冷叙事。',
  },
  {
    id: 'Macnamara 2025',
    text: 'Macnamara, Luke. “Zacchaeus’ Encounter with Jesus (Luke 19:1–10).” The Biblical Annals 15/2 (2025).',
    url: macnamaraZacchaeusUrl,
    note: '用于比较撒该与利未的叙事结构，并检验撒该的动作、身份和回应如何服务于路加的救赎叙事。',
  },
  {
    id: 'Kinman · 进城研究',
    text: 'Kinman, Brent Rogers. “The ‘A-Triumphal’ Entry (Luke 19:28–48): Historical Backgrounds, Theological Motifs, and the Purpose of Luke.” Tyndale Bulletin 45/1 (1994).',
    url: entryKinmanUrl,
    note: '作为特定学术进路使用：帮助观察进城、哭城和圣殿行动的连续性；其中关于所罗门背景的判断不作为唯一结论。',
  },
  {
    id: 'JBL 2025 · 旅程节奏',
    text: '“The Time It Takes: Prolonged Pace in Luke’s Travel Narrative (9:51–19:44).” Journal of Biblical Literature 144/1 (2025).',
    url: travelNarrativeJblUrl,
    note: '用于理解 19:1–44 仍处在漫长上耶路撒冷旅程的收束段落，帮助避免把本章读成彼此割裂的场景集合。',
  },
  {
    id: 'HTR · 哀哭耶路撒冷',
    text: '“Weeping Over Jerusalem: Luke’s Response to the Destruction of the Temple.” Harvard Theological Review.',
    url: templeHtrUrl,
    note: '用于保持路加圣殿描写的双重性：既肯定圣殿的祷告与教导功能，也批判其中被不义扭曲的使用。',
  },
  {
    id: 'IVP · 十锭银子',
    text: 'IVP New Testament Commentary. “The Parable of Stewardship: The Minas (Luke 19:11–27).”',
    url: minasIvpUrl,
    note: '用于比喻的叙事背景、受托与交账主题，以及古代银钱的数量级说明。',
  },
  {
    id: 'Johnson · 荣耀进城',
    text: 'Johnson, Elisabeth. “Commentary on Luke 19:28–40.” Working Preacher.',
    url: entryWorkingPreacherUrl,
    note: '用于耶路撒冷在路加叙事中的位置、诗 118 与亚 9 的回声，以及降生颂歌和进城颂歌之间的“和平／荣耀”联系。',
  },
  {
    id: 'Yale · 在耶路撒冷',
    text: 'Yale Bible Study. “The Gospel of Luke: In Jerusalem.”',
    url: yaleJerusalemUrl,
    note: '用于路加 19 章后半的文学结构、进城宣告、哭城与路加简写的圣殿行动。',
  },
];

export const chapterTwentyToTwentyFourCitationsByRange: Record<string, StudyCitation[]> = {
  '20:1–8': [
    source('NET · 路 20', 'NET · 路 20 原文注释', netLukeTwentyUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '背景'),
  ],
  '20:9–19': [
    source('NET · 路 20', 'NET · 路 20 原文注释', netLukeTwentyUrl, '解读'),
    source('Bovon · 葡萄园', 'Bovon · 路 20:9–19', bovonLukeTwentyVineyardUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '解读'),
  ],
  '20:20–26': [
    source('NET · 路 20', 'NET · 路 20 原文注释', netLukeTwentyUrl, '背景'),
    source('Bovon · 该撒银币', 'Bovon · 路 20:20–26', bovonLukeTwentyTaxesUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '背景'),
  ],
  '20:27–40': [
    source('NET · 路 20', 'NET · 路 20 原文注释', netLukeTwentyUrl, '背景'),
    source('Bryan 2026', 'Bryan 2026 · 复活争论', bryanResurrectionJtsUrl, '解读'),
    source('Bovon · 复活争论', 'Bovon · 路 20:27–40', bovonLukeTwentyResurrectionUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '解读'),
  ],
  '20:41–47': [
    source('NET · 路 20', 'NET · 路 20 原文注释', netLukeTwentyUrl, '解读'),
    source('Bovon · 大卫之主', 'Bovon · 路 20:41–47', bovonLukeTwentyMessiahUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '解读'),
  ],
  '21:1–4': [
    source('NET · 路 21', 'NET · 路 21 原文注释', netLukeTwentyOneUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '背景'),
  ],
  '21:5–6': [
    source('NET · 路 21', 'NET · 路 21 原文注释', netLukeTwentyOneUrl, '解读'),
    source('Wendel 2025', 'Wendel 2025 · 路加与圣殿毁坏', templeHtrUrl, '背景'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '背景'),
  ],
  '21:7–19': [
    source('NET · 路 21', 'NET · 路 21 原文注释', netLukeTwentyOneUrl, '解读'),
    source('WP · 21:5–19', 'Working Preacher · 路 21:5–19（前半）', templeWitnessWorkingPreacherUrl, '解读'),
  ],
  '21:20–24': [
    source('NET · 路 21', 'NET · 路 21 原文注释', netLukeTwentyOneUrl, '解读'),
    source('Neville 2024', 'Neville 2024 · 耶路撒冷毁坏与人子', nevilleLukeTwentyOneUrl, '解读'),
    source('IVP · 路 21', 'IVP · 耶路撒冷的毁坏与终局', ivpLukeTwentyOneUrl, '解读'),
    source('Wendel 2025', 'Wendel 2025 · 路加与圣殿毁坏', templeHtrUrl, '背景'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '背景'),
  ],
  '21:25–28': [
    source('NET · 路 21', 'NET · 路 21 原文注释', netLukeTwentyOneUrl, '解读'),
    source('Neville 2024', 'Neville 2024 · 耶路撒冷毁坏与人子', nevilleLukeTwentyOneUrl, '解读'),
    source('IVP · 路 21', 'IVP · 耶路撒冷的毁坏与终局', ivpLukeTwentyOneUrl, '解读'),
    source('WP · 21:25–36', 'Working Preacher · 路 21:25–36', eschatologyWorkingPreacherUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '背景'),
  ],
  '21:29–36': [
    source('NET · 路 21', 'NET · 路 21 原文注释', netLukeTwentyOneUrl, '解读'),
    source('Neville 2024', 'Neville 2024 · 耶路撒冷毁坏与人子', nevilleLukeTwentyOneUrl, '背景'),
    source('WP · 21:25–36', 'Working Preacher · 路 21:25–36', eschatologyWorkingPreacherUrl, '解读'),
  ],
  '21:37–38': [
    source('NET · 路 21', 'NET · 路 21 原文注释', netLukeTwentyOneUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '背景'),
  ],
  '22:1–6': [
    source('NET · 路 22', 'NET · 路 22 原文注释', netLukeTwentyTwoUrl, '解读'),
    source('WP · 末后晚餐', 'Working Preacher · 路 22:1–27（延伸至 22:53）', lastSupperWorkingPreacherUrl, '背景'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '背景'),
  ],
  '22:7–23': [
    source('NET · 路 22', 'NET · 路 22 原文注释', netLukeTwentyTwoUrl, '解读'),
    source('James 2024', 'James 2024 · 路 22:15–20 文本异文', jamesLukeTwentyTwoUrl, '解读'),
    source('WP · 末后晚餐', 'Working Preacher · 路 22:1–27（延伸至 22:53）', lastSupperWorkingPreacherUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '背景'),
  ],
  '22:24–30': [
    source('NET · 路 22', 'NET · 路 22 原文注释', netLukeTwentyTwoUrl, '解读'),
    source('WP · 末后晚餐', 'Working Preacher · 路 22:1–27（延伸至 22:53）', lastSupperWorkingPreacherUrl, '解读'),
  ],
  '22:31–38': [
    source('NET · 路 22', 'NET · 路 22 原文注释', netLukeTwentyTwoUrl, '解读'),
    source('WP · 末后晚餐', 'Working Preacher · 路 22:1–27（延伸至 22:53）', lastSupperWorkingPreacherUrl, '解读'),
  ],
  '22:39–46': [
    source('NET · 路 22', 'NET · 路 22 原文注释', netLukeTwentyTwoUrl, '解读'),
    source('James 2024', 'James 2024 · 路 22:15–20 文本异文', jamesLukeTwentyTwoUrl, '背景'),
    source('WP · 末后晚餐', 'Working Preacher · 路 22:1–27（延伸至 22:53）', lastSupperWorkingPreacherUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '背景'),
  ],
  '22:47–71': [
    source('NET · 路 22', 'NET · 路 22 原文注释', netLukeTwentyTwoUrl, '解读'),
    source('WP · 受难审判', 'Working Preacher · 路 22:47–71', passionTrialWorkingPreacherUrl, '解读'),
    source('Yale · 在耶路撒冷', 'Yale Bible Study · 在耶路撒冷', yaleJerusalemUrl, '背景'),
  ],
  '23:1–25': [
    source('NET · 路 23', 'NET · 路 23 原文注释', netLukeTwentyThreeUrl, '解读'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '解读'),
  ],
  '23:26–31': [
    source('NET · 路 23', 'NET · 路 23 原文注释', netLukeTwentyThreeUrl, '解读'),
    source('Closterman 2024', 'Closterman 2024 · 走向各各他的葬礼行列', clostermanLukeTwentyThreeUrl, '解读'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '背景'),
  ],
  '23:32–43': [
    source('NET · 路 23', 'NET · 路 23 原文注释', netLukeTwentyThreeUrl, '解读'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '解读'),
  ],
  '23:44–49': [
    source('NET · 路 23', 'NET · 路 23 原文注释', netLukeTwentyThreeUrl, '解读'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '解读'),
  ],
  '23:50–56': [
    source('NET · 路 23', 'NET · 路 23 原文注释', netLukeTwentyThreeUrl, '解读'),
    source('Closterman 2024', 'Closterman 2024 · 走向各各他的葬礼行列', clostermanLukeTwentyThreeUrl, '背景'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '背景'),
  ],
  '24:1–12': [
    source('NET · 路 24', 'NET · 路 24 原文注释', netLukeTwentyFourUrl, '解读'),
    source('WP · 空坟墓', 'Working Preacher · 空坟墓', emptyTombWorkingPreacherUrl, '解读'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '背景'),
  ],
  '24:13–35': [
    source('NET · 路 24', 'NET · 路 24 原文注释', netLukeTwentyFourUrl, '解读'),
    source('Thompson 2023', 'Thompson 2023 · 路 24 的辨认与复活显现', thompsonLukeTwentyFourUrl, '解读'),
    source('WP · 以马忤斯', 'Working Preacher · 以马忤斯', emmausWorkingPreacherUrl, '解读'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '背景'),
  ],
  '24:36–49': [
    source('NET · 路 24', 'NET · 路 24 原文注释', netLukeTwentyFourUrl, '解读'),
    source('Clark-Howard 2025', 'Clark-Howard 2025 · 复活身体的连续与不可简化', clarkHowardLukeTwentyFourUrl, '解读'),
    source('WP · 升天', 'Working Preacher · 路 24:44–53（后半）', ascensionWorkingPreacherUrl, '解读'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '解读'),
  ],
  '24:50–53': [
    source('NET · 路 24', 'NET · 路 24 原文注释', netLukeTwentyFourUrl, '解读'),
    source('Thompson 2023', 'Thompson 2023 · 路 24 的辨认与复活显现', thompsonLukeTwentyFourUrl, '背景'),
    source('WP · 升天', 'Working Preacher · 路 24:44–53', ascensionWorkingPreacherUrl, '解读'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '背景'),
  ],
};

export const chapterTwentyToTwentyFourReferences: ChapterReference[] = [
  {
    id: 'Yale · 在耶路撒冷',
    text: 'Yale Bible Study. “The Gospel of Luke: In Jerusalem.”',
    url: yaleJerusalemUrl,
    note: '用于路加 20–22 章的耶路撒冷场景、圣殿权柄、末世讲论与受难前夜的文学和历史背景。',
  },
  {
    id: 'WP · 21:5–19',
    text: 'Working Preacher. “Commentary on Luke 21:5–19.”',
    url: templeWitnessWorkingPreacherUrl,
    note: '用于 21:5–19 的圣殿毁坏、逼迫与见证解读；21:20–24 的历史背景和解释争议另由 Neville、Wendel 与 Yale 章节综述共同支持。',
  },
  {
    id: 'WP · 21:25–36',
    text: 'Working Preacher. “Commentary on Luke 21:25–36.”',
    url: eschatologyWorkingPreacherUrl,
    note: '用于但以理 7、人子、救赎与警醒祷告的末世图像解读。',
  },
  {
    id: 'WP · 末后晚餐',
    text: 'Working Preacher. “Commentary on Luke 22:1–27.”',
    url: lastSupperWorkingPreacherUrl,
    note: '页面标题为路 22:1–27，正文延伸讨论到 22:38，并联系 22:39–53；用于末餐、服事领导与橄榄山祷告的相关段落。',
  },
  {
    id: 'WP · 受难审判',
    text: 'Skinner, Matt. “Commentary on Luke 22:14–23:56.” Working Preacher.',
    url: passionTrialWorkingPreacherUrl,
    note: '用于路 22:47–71 的被捕、彼得否认与宗教权力审问；同时提醒读者区分神学叙事、人的责任与历史重建。',
  },
  {
    id: 'Yale · 受难与复活',
    text: 'Yale Bible Study. “The Gospel of Luke: The Passion and Resurrection.”',
    url: passionResurrectionYaleUrl,
    note: '用于路加 23–24 章的受难、安葬、空坟墓、以马忤斯与使命结构。',
  },
  {
    id: 'WP · 空坟墓',
    text: 'Working Preacher. “Commentary on Luke 24:1–12.”',
    url: emptyTombWorkingPreacherUrl,
    note: '用于妇女见证、空坟墓与门徒困惑的叙事观察。',
  },
  {
    id: 'WP · 以马忤斯',
    text: 'Working Preacher. “Commentary on Luke 24:13–35.”',
    url: emmausWorkingPreacherUrl,
    note: '用于同行、经文开启、擘饼与回到耶路撒冷见证的叙事观察。',
  },
  {
    id: 'WP · 升天',
    text: 'Working Preacher. “Commentary on Luke 24:44–53.”',
    url: ascensionWorkingPreacherUrl,
    note: '用于复活身体、圣经开启、悔改赦罪、圣灵等候与升天的结尾结构。',
  },
];

export const chapterTwentyReferences: ChapterReference[] = [
  {
    id: 'NET · 路 20',
    text: 'NET Bible. Luke 20: text, translation notes, and study notes.',
    url: netLukeTwentyUrl,
    note: '用于核对权柄、葡萄园、该撒银币、复活和文士警告等段落的关键词、历史说明与文本差异。',
  },
  {
    id: 'Bovon 2012 · 路加 3',
    text: 'Bovon, François. Luke 3: Commentary on 19:28–24:53. Hermeneia. Fortress Press, 2012.',
    url: 'https://doi.org/10.2307/j.ctvb6v8bq',
    note: '用于第20章各场争论在路加耶路撒冷叙事中的连续性，以及葡萄园、纳税、复活和大卫之主等段落的文学与神学背景。',
  },
  {
    id: 'Bryan 2026',
    text: 'Bryan, Steven M. “What Kind of Life Is Raised? Luke’s Account of the Dispute Between Jesus and the Sadducees (Luke 20:27–40).” Journal of Theological Studies, 2026.',
    url: bryanResurrectionJtsUrl,
    note: '近期同行评审研究；用于进一步检验撒都该人的设问、婚姻律例、死亡之后的生命与复活之间的关系。此处采用其解释进路，同时保留不同传统解读的空间。',
  },
];

export const chapterTwentyOneReferences: ChapterReference[] = [
  {
    id: 'NET · 路 21',
    text: 'NET Bible. Luke 21: text, translation notes, and study notes.',
    url: netLukeTwentyOneUrl,
    note: '用于核对寡妇奉献、圣殿毁坏、逼迫、人子来临与警醒祷告等段落的经文与注释。',
  },
  {
    id: 'Neville 2024',
    text: 'Neville, David J. “Jerusalem’s Destruction and the Coming of the Son of Man: Assessing an Alleged Lukan Association.” Currents in Biblical Research, 2024.',
    url: nevilleLukeTwentyOneUrl,
    note: '同行评审研究；用于呈现圣殿毁坏、公元 70 年历史背景与人子来临之间的多种解释，避免把路加 21 章压成单一末日时间表。',
  },
  {
    id: 'IVP · 路 21',
    text: 'IVP New Testament Commentary. “Jerusalem’s Destruction and the End (Luke 21:5–38).”',
    url: ivpLukeTwentyOneUrl,
    note: '主流福音派释经综述；用于交叉核对本章从圣殿毁坏、耶路撒冷危机到人子来临与警醒祷告的整体结构。',
  },
  {
    id: 'Wendel 2025',
    text: 'Wendel, Jason S. “Weeping Over Jerusalem: Luke’s Response to the Destruction of the Temple.” Harvard Theological Review 118/4 (2025): 691–712.',
    url: templeHtrUrl,
    note: '近期研究；用于理解路加一方面继续把圣殿写成敬拜与听道的空间，另一方面又正视圣殿和耶路撒冷所遭遇的毁坏与哀恸。',
  },
];

export const chapterTwentyTwoReferences: ChapterReference[] = [
  {
    id: 'NET · 路 22',
    text: 'NET Bible. Luke 22: text, translation notes, and study notes.',
    url: netLukeTwentyTwoUrl,
    note: '用于核对逾越节、圣餐、彼得被筛、橄榄山祷告、被捕与审问等段落。',
  },
  {
    id: 'James 2024',
    text: 'James, Rob. “Variant Readings of Luke 22:15–20 and the Relationship of Codex Bezae to Curetonian Syriac.” Journal of Theological Studies 75/2 (2024): 336.',
    url: jamesLukeTwentyTwoUrl,
    note: '同行评审的文本校勘研究；用于说明 22:15–20 不宜只简化为“长式／短式”二分，并支持页面对 22:19 下–20 异文的谨慎标注。',
  },
];

export const chapterTwentyThreeReferences: ChapterReference[] = [
  {
    id: 'NET · 路 23',
    text: 'NET Bible. Luke 23: text, translation notes, and study notes.',
    url: netLukeTwentyThreeUrl,
    note: '用于核对彼拉多、希律、古利奈人西门、十字架、百夫长与安葬等段落。',
  },
  {
    id: 'Closterman 2024',
    text: 'Closterman, Wendy E. “Reading the Gospel of Luke’s Walk to Calvary as a Funeral Procession: A Study of Luke 23.27–8.” New Testament Studies 70/1 (2024): 51–60.',
    url: clostermanLukeTwentyThreeUrl,
    note: '同行评审研究；用于补充妇女哀哭、走向各各他与安葬叙事之间的反向葬礼意象，同时保持这是文学解释进路，而非经文唯一含义。',
  },
];

export const chapterTwentyFourReferences: ChapterReference[] = [
  {
    id: 'NET · 路 24',
    text: 'NET Bible. Luke 24: text, translation notes, and study notes.',
    url: netLukeTwentyFourUrl,
    note: '用于核对空坟墓、以马忤斯、身体显现、使命与升天等段落。',
  },
  {
    id: 'Thompson 2023',
    text: 'Thompson, Alexander Phillip. Recognition and the Resurrection Appearances of Luke 24. De Gruyter, 2023.',
    url: thompsonLukeTwentyFourUrl,
    note: '用于理解路加 24 章中“看见却未认出、经文开启、擘饼后认出”的辨认叙事，以及它如何收束整卷福音书。',
  },
  {
    id: 'Clark-Howard 2025',
    text: 'Clark-Howard, Andrew. “A Disabled Lord? Continuity and Legibility in the Resurrection.” Journal of Disability & Religion 30/1 (2025): 22–33.',
    url: clarkHowardLukeTwentyFourUrl,
    note: '开放获取的近期研究；用于提醒我们既承认复活身体与受难身体的连续性，也不把复活简化为可以被人完全掌控的“标准身体”图像。',
  },
];

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
