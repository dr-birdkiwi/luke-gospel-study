import type { StudyCitation } from './chapterNotes';

export function bibleGatewayUrl(reference: string) {
  return `https://www.biblegateway.com/passage/?search=${encodeURIComponent(reference)}&version=CUVS`;
}

export function chapterOnePassageUrl(range: string) {
  return bibleGatewayUrl(`Luke ${range.replace('–', '-')}`);
}

const lanierUrl = 'https://www.bhpublishinggroup.com/series/the-christian-standard-commentary/';
const sterlingUrl = 'https://www.eerdmans.com/9780802848734/shaping-the-past-to-define-the-present/';
const johnsonUrl = 'https://litpress.org/Products/E8331/Sacra-Pagina-The-Gospel-of-Luke';
const birdUrl = 'https://www.ivpress.com/Media/Default/Downloads/Excerpts-and-Samples/A0809-excerpt.pdf';
const edwardsUrl = 'https://www.eerdmans.com/9780802837356/the-gospel-according-to-luke/';
const praiseInLukeNtsUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/miracle-stories-and-praise-two-neglected-topics-in-luke/5F318F14D300B2E0C4047735003CB967';
const benedictusNtsUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/abraham-geschworen-uns-gegeben-syntax-und-sinn-im-benediktus-lukas-16879/0709FE5108EF5C1257FC4F3896E85F8D';
const armitageCensusUrl = 'https://www.tyndalebulletin.org/article/27652-detaching-the-census-an-alternative-reading-of-luke-2-1-7';
const carlsonAccommodationUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/accommodations-of-joseph-and-mary-in-bethlehem-in-luke-27/E60EB9AEE5215FC0C989DE635DC80A7B';
const kozitzaLegalExegesisUrl = 'https://doi.org/10.1093/jts/flaa097';
const davisAmbiguityUrl = 'https://www.cambridge.org/core/journals/scottish-journal-of-theology/article/how-to-read-ambiguity-well-reading-ambiguity-in-luke-and-acts/DC603DBA2EB820237FB7E5C5CCD34A0F';
const netLukeThreeUrl = 'https://www.bible.com/bible/107/LUK.3.NET';
const levineWitheringtonLukeUrl = 'https://assets.cambridge.org/97805218/59509/frontmatter/9780521859509_frontmatter.pdf';
const marcusBaptismUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/jesus-baptismal-vision/38CA5D68C522A1D73AAD5BFCD66422EC';
const spiritAndBaptismUrl = 'https://www.mdpi.com/2077-1444/16/6/763';
const kochenashAdamUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/adam-son-of-god-luke-338-another-jesusaugustus-parallel-in-lukes-gospel/52CB545BB1D17611C50C3D63BFCDEC7D';
const pattonGenealogyUrl = 'https://academic.oup.com/jts/article-abstract/77/1/60/8540415';
const netLukeFourUrl = 'https://www.bible.com/bible/107/LUK.4.NET';
const netLukeFiveUrl = 'https://www.bible.com/bible/107/LUK.5.NET';
const netLukeSixUrl = 'https://www.bible.com/bible/107/LUK.6.NET';
const netLukeSevenUrl = 'https://www.bible.com/bible/107/LUK.7.NET';
const netLukeEightUrl = 'https://www.bible.com/bible/107/LUK.8.NET';
const netLukeNineUrl = 'https://www.bible.com/bible/107/LUK.9.NET';
const netLukeTenUrl = 'https://www.bible.com/bible/107/LUK.10.NET';
const netLukeElevenUrl = 'https://www.bible.com/bible/107/LUK.11.NET';
const netLukeTwelveUrl = 'https://www.bible.com/bible/107/LUK.12.NET';
const netLukeThirteenUrl = 'https://www.bible.com/bible/107/LUK.13.NET';
const netLukeFourteenUrl = 'https://www.bible.com/bible/107/LUK.14.NET';
const seccombeLukeIsaiahUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/luke-and-isaiah/90A53C7EEB1013CF553160237B679B24';
const rudmanLukeFourAuthorityUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/authority-and-right-of-disposal-in-luke-46/ECB998BC87B911C06416A9EF77DDD6FB';
const meadOldNewWineUrl = 'https://journals.sagepub.com/doi/abs/10.1177/001452468809900804';
const fowlLukeSixUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/jesus-is-driving-them-crazy-language-and-context-for-luke-6611/76BAAC6D3C701E18B5FD5D2871B0602D';
const allisonSermonPlainUrl = 'https://www.cambridge.org/core/books/abs/gospel-reading-and-reception-in-early-christian-literature/luke-rewriting-matthew/FFDAF8B4EAF6EAAECB5CCE3D489D6E7B';
const vanDerWattLoveUrl = 'https://scielo.org.za/scielo.php?pid=S2305-08532021000100024&script=sci_abstract';
const ndekhaPoorRichUrl = 'https://hts.org.za/index.php/hts/article/view/6065/16219';
const ravensLukeSevenSettingUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/setting-of-lukes-account-of-the-anointing-luke-7283/20522225734E6D611E6733D0C518C9A4';
const millerWomenPatronsUrl = 'https://journals.sagepub.com/doi/10.1177/0034637317705104';
const klutzLukeEightExorcismUrl = 'https://www.cambridge.org/core/books/abs/exorcism-stories-in-lukeacts/purity-and-the-exorcism-in-luke-82639/342351A2FAB1F27B842AD0413144D20B';
const ravensLukeNinePropheticUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/luke-9762-and-the-prophetic-role-of-jesus/43DEF1B7AA513D9F52F1D1FC9BD6F19F';
const dochhornSamaritanVillageUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/die-verschonung-des-samaritanischen-dorfes-lk-95455-eine-kritische-reflexion-von-eliauberlieferung-im-lukasevangelium-und-eine-fruhjudische-parallele-im-testament-abrahams/3527909A8D85378BCF62AA7FDFF72D7C';
const coleSeventyTwoUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/p45-and-the-problem-of-the-seventytwo-a-case-for-the-longer-reading-in-luke-101-and-17/5CD287736140F1A33AF3F30D0781D778';
const dowlingSamaritansUrl = 'https://www.cambridge.org/core/books/abs/tolerance-intolerance-and-recognition-in-early-christianity-and-early-judaism/learning-from-others-reading-two-samaritan-stories-in-the-gospel-of-luke-from-an-ecological-perspective/5146E0BE6C544BD5C99D7B4408A2074A';
const henningMarthaUrl = 'https://www.cambridge.org/core/journals/harvard-theological-review/article/abs/manufacturing-marthas-madness-enslavement-anxiety-and-distraction-in-luke-103842/E23B2C0723DF681A6DE72A6A8DDEFAC2';
const gibsonLordsPrayerUrl = 'https://journals.sagepub.com/doi/10.1177/014610790103100304';
const jonesLiliesUrl = 'https://www.cambridge.org/core/journals/harvard-theological-review/article/abs/think-of-the-lilies-and-prov-6611/6414DC5E403F063F2DCB18E4A99D0416';
const geminnAnxietyUrl = 'https://www.mdpi.com/2077-1444/17/1/36';
const skinnerDisasterUrl = 'https://www.workingpreacher.org/commentaries/revised-common-lectionary/third-sunday-in-lent-3/commentary-on-luke-131-9';
const hammBentWomanUrl = 'https://journals.sagepub.com/doi/10.1177/0142064X8701003102';
const solevagIdealMealUrl = 'https://journals.sagepub.com/doi/10.1177/01461079231210850';
const llewelynHyperboleUrl = 'https://www.cambridge.org/core/journals/harvard-theological-review/article/hyperbole-and-the-cost-of-discipleship-a-case-study-of-luke-1426/2EE5C01E16DAF1A395D1F0D9E471EFCA';
const zamfirTwoKingsUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/suing-for-peace-at-any-cost-reading-the-parable-of-the-two-kings-luke-14312-in-times-of-war/2BFA870724748BCE4778032B620B8B82';
const zacchaeusWorkingPreacherUrl = 'https://www.workingpreacher.org/commentaries/revised-common-lectionary/ordinary-31-3/commentary-on-luke-191-10';
const minasGathercoleUrl = 'https://doi.org/10.1515/znw-2024-0002';
const macnamaraZacchaeusUrl = 'https://repozytorium.kul.pl/bitstreams/cf52cf8e-75d4-4724-97e6-4defe00000d5/download';
const travelNarrativeJblUrl = 'https://doi.org/10.15699/jbl.1441.2025.8';
const templeHtrUrl = 'https://www.cambridge.org/core/journals/harvard-theological-review/article/weeping-over-jerusalem-lukes-response-to-the-destruction-of-the-temple/D0E1B13425A79861FE941F673AD8F258';
const entryKinmanUrl = 'https://www.tyndalebulletin.org/article/30428-the-a-triumphal-entry-luke-19-28-48-historical-backgrounds-theological-motifs-and-the-purpose-of-luke';
const minasIvpUrl = 'https://www.biblegateway.com/resources/ivp-nt/Parable-Stewardship-Minas';
const netLukeTwentyUrl = 'https://www.bible.com/bible/107/LUK.20.NET';
const netLukeTwentyOneUrl = 'https://www.bible.com/bible/107/LUK.21.NET';
const netLukeTwentyTwoUrl = 'https://www.bible.com/bible/107/LUK.22.NET';
const netLukeTwentyThreeUrl = 'https://www.bible.com/bible/107/LUK.23.NET';
const netLukeTwentyFourUrl = 'https://www.bible.com/bible/107/LUK.24.NET';
const bryanResurrectionJtsUrl = 'https://academic.oup.com/jts/advance-article/doi/10.1093/jts/flag032/8751201';
const bovonLukeTwentyVineyardUrl = 'https://www.jstor.org/stable/j.ctvb6v8bq.9';
const bovonLukeTwentyTaxesUrl = 'https://www.jstor.org/stable/j.ctvb6v8bq.10';
const bovonLukeTwentyResurrectionUrl = 'https://www.jstor.org/stable/j.ctvb6v8bq.11';
const bovonLukeTwentyMessiahUrl = 'https://www.jstor.org/stable/j.ctvb6v8bq.12';
const nevilleLukeTwentyOneUrl = 'https://journals.sagepub.com/doi/10.1177/1476993X241229158';
const jamesLukeTwentyTwoUrl = 'https://openurl.ebsco.com/contentitem/gcd%3A180950284';
const swordLukeTwentyTwoUrl = 'https://brill.com/view/journals/evqu/92/4/article-p351_4.xml';
const clostermanLukeTwentyThreeUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/reading-the-gospel-of-lukes-walk-to-calvary-as-a-funeral-procession-a-study-of-luke-23278/1C72C42AE96F64344D934FB044D92DD4';
const byuLukeTwentyThreeUrl = 'https://byustudies.byu.edu/online-book/the-testimony-of-luke/luke-chapter-23-104';
const paradiseLukeTwentyThreeUrl = 'https://doi.org/10.31982/KNTS.2023.3.30.1.111';
const thompsonLukeTwentyFourUrl = 'https://www.degruyterbrill.com/document/doi/10.1515/9783110773743/html';
const clarkHowardLukeTwentyFourUrl = 'https://www.tandfonline.com/doi/full/10.1080/23312521.2025.2495004';
const princeLukeTwentyFourUrl = 'https://journals.sagepub.com/doi/10.1177/0142064X07076309';
const deJongeAscensionUrl = 'https://www.cambridge.org/core/journals/new-testament-studies/article/abs/chronology-of-the-ascension-stories-in-luke-and-acts/B42A5255A306DBBF260E02C2C402C688';
const entryWorkingPreacherUrl = 'https://www.workingpreacher.org/commentaries/revised-common-lectionary/sunday-of-the-passion-palm-sunday-3/commentary-on-luke-1928-40-2';
const yaleJerusalemUrl = 'https://yalebiblestudy.org/courses/the-gospel-of-luke/lessons/in-jerusalem-study-guide/';
const netLukeNineteenUrl = 'https://www.bible.com/bible/107/LUK.19.NET';
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
const edwards = (scope: StudyCitation['scope'] = '解读') => source('Edwards 2015', 'Edwards 2015 · 路加福音', edwardsUrl, scope);
const praiseInLuke = (scope: StudyCitation['scope'] = '解读') => source('Wasiak 2024', 'Wasiak 2024 · 路加叙事中的赞美', praiseInLukeNtsUrl, scope);
const benedictusStudy = (scope: StudyCitation['scope'] = '解读') => source('Lang 2010', 'Lang 2010 · 撒迦利亚颂歌', benedictusNtsUrl, scope);

export const chapterOneCitationsByRange: Record<string, StudyCitation[]> = {
  '1:1–4': [
    text('1:1–4', '解读'), lanier(), johnson(), sterling(), edwards(),
    newTestament('徒 1:1–3', 'Acts 1:1-3'), newTestament('约 20:30–31', 'John 20:30-31'),
  ],
  '1:5–25': [
    text('1:5–25', '解读'), lanier(), johnson('背景'), edwards(),
    oldTestament('玛 3:1；4:5–6', 'Malachi 3:1; Malachi 4:5-6'), oldTestament('赛 40:3', 'Isaiah 40:3'),
    oldTestament('撒上 1', '1 Samuel 1'),
  ],
  '1:26–38': [
    text('1:26–38', '解读'), lanier(), johnson('背景'), edwards(),
    oldTestament('撒下 7:12–16', '2 Samuel 7:12-16'), oldTestament('诗 2:7', 'Psalm 2:7'),
    oldTestament('赛 9:6–7', 'Isaiah 9:6-7'), newTestament('太 1:18–25', 'Matthew 1:18-25'),
  ],
  '1:39–45': [
    text('1:39–45', '解读'), johnson('背景'), bird(), edwards(),
    oldTestament('创 18:1–15', 'Genesis 18:1-15'), oldTestament('创 21:1–7', 'Genesis 21:1-7'),
    oldTestament('撒下 6:2–15', '2 Samuel 6:2-15'), text('1:15', '串联'), text('1:41', '串联'),
  ],
  '1:46–56': [
    text('1:46–56', '解读'), lanier(), johnson('背景'), praiseInLuke(),
    oldTestament('撒上 2:1–10', '1 Samuel 2:1-10'), oldTestament('诗 113:5–9', 'Psalm 113:5-9'),
    oldTestament('诗 146:5–9', 'Psalm 146:5-9'), newTestament('路 4:18–19', 'Luke 4:18-19'),
  ],
  '1:57–66': [
    text('1:57–66', '解读'), lanier('背景'), johnson('背景'), praiseInLuke(),
    text('1:13', '串联'), text('1:20', '串联'), oldTestament('士 13:2–14', 'Judges 13:2-14'),
  ],
  '1:67–79': [
    text('1:67–79', '解读'), lanier(), johnson('背景'), sterling('背景'), praiseInLuke(), benedictusStudy(),
    oldTestament('撒下 7:8–16', '2 Samuel 7:8-16'), oldTestament('创 22:16–18', 'Genesis 22:16-18'), oldTestament('诗 132:17', 'Psalm 132:17'),
    oldTestament('赛 9:2', 'Isaiah 9:2'), oldTestament('玛 3:1；4:5–6', 'Malachi 3:1; Malachi 4:5-6'),
    newTestament('路 24:27', 'Luke 24:27'),
  ],
  '1:80': [
    text('1:80', '解读'), johnson('背景'), lanier('背景'), edwards(),
    oldTestament('玛 4:5–6', 'Malachi 4:5-6'), oldTestament('赛 40:3–5', 'Isaiah 40:3-5'),
    newTestament('路 3:1–6', 'Luke 3:1-6'),
  ],
};

export const chapterTwoCitationsByRange: Record<string, StudyCitation[]> = {
  '2:1–7': [
    edwards(),
    source('Armitage 2018', 'Armitage 2018 · 居里扭登记', armitageCensusUrl, '背景'),
    source('Carlson 2010', 'Carlson 2010 · 伯利恒住宿处', carlsonAccommodationUrl, '背景'),
  ],
  '2:8–20': [
    edwards(),
    praiseInLuke(),
  ],
  '2:21': [
    edwards(),
  ],
  '2:22–24': [
    edwards(),
    source('Kozitza 2020', 'Kozitza 2020 · 洁净与献长子', kozitzaLegalExegesisUrl, '背景'),
  ],
  '2:25–40': [
    edwards(),
    praiseInLuke(),
  ],
  '2:41–52': [
    edwards(),
    source('Davis 2025', 'Davis 2025 · 路 2:49 的歧义', davisAmbiguityUrl, '解读'),
  ],
};

export type ChapterReference = {
  id: string;
  text: string;
  url: string;
  note: string;
};

export const chapterTwoReferences: ChapterReference[] = [
  {
    id: 'Edwards 2015',
    text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.',
    url: edwardsUrl,
    note: '用于第二章的历史处境、文学推进、以色列应许与普世救恩；出版方说明本书专门讨论路加的降生叙事。',
  },
  {
    id: 'Armitage 2018',
    text: 'Armitage, David J. “Detaching the Census: An Alternative Reading of Luke 2:1–7.” Tyndale Bulletin 69/1 (2018): 75–95.',
    url: armitageCensusUrl,
    note: '用于呈现居里扭登记的编年难题与一种替代读法；作者自己也说明该方案只是可行解释之一，因此本页不把它当成定论。',
  },
  {
    id: 'Carlson 2010',
    text: 'Carlson, Stephen C. “The Accommodations of Joseph and Mary in Bethlehem: Κατάλυμα in Luke 2.7.” New Testament Studies 56/3 (2010): 326–342.',
    url: carlsonAccommodationUrl,
    note: '同行评审研究；用于说明 κατάλυμα 不必等同现代商业旅馆，并提醒读者区分经文所说与后来的圣诞场景重建。',
  },
  {
    id: 'Kozitza 2020',
    text: 'Kozitza, Evangeline M. “Legal Exegesis and Historical Narrative in Luke 2:22–4.” Journal of Theological Studies 71/2 (2020): 542–580.',
    url: kozitzaLegalExegesisUrl,
    note: '同行评审研究；用于区分产后洁净与头生子归主，并把路加的律法表述放回第二圣殿时期多样的犹太律法解释中。',
  },
  {
    id: 'Davis 2025',
    text: 'Davis, Kendall A. “How to Read Ambiguity Well: Reading Ambiguity in Luke and Acts.” Scottish Journal of Theology 78/2 (2025): 91–103.',
    url: davisAmbiguityUrl,
    note: '开放获取的同行评审研究；用于路 2:49 “在我父的家里／以我父的事为念”两种读法，以及该歧义在路加叙事中的作用。',
  },
  {
    id: 'Wasiak 2024',
    text: 'Wasiak, Wojciech. “Miracle Stories and Praise: Two Neglected Topics in Luke.” New Testament Studies 70/4 (2024): 452–469.',
    url: praiseInLukeNtsUrl,
    note: '同行评审研究；用于理解路加一至二章中的赞美如何解释神的作为，并把个人经历带进群体见证。',
  },
];

export const chapterThreeCitationsByRange: Record<string, StudyCitation[]> = {
  '3:1–6': [
    edwards(),
    source('Levine & Witherington 2018', 'Levine & Witherington 2018 · 路加福音', levineWitheringtonLukeUrl, '解读'),
    source('NET · 路 3', 'NET · 原文注释', netLukeThreeUrl, '背景'),
  ],
  '3:7–14': [
    edwards(),
    source('Levine & Witherington 2018', 'Levine & Witherington 2018 · 路加福音', levineWitheringtonLukeUrl, '解读'),
    source('NET · 路 3', 'NET · 原文注释', netLukeThreeUrl, '解读'),
  ],
  '3:15–20': [
    edwards(),
    source('Levine & Witherington 2018', 'Levine & Witherington 2018 · 路加福音', levineWitheringtonLukeUrl, '解读'),
    source('Hofmann 2025', 'Hofmann 2025 · 洗礼与领受圣灵', spiritAndBaptismUrl, '解读'),
    source('NET · 路 3', 'NET · 原文注释', netLukeThreeUrl, '解读'),
  ],
  '3:21–22': [
    edwards(),
    source('Marcus 1995', 'Marcus 1995 · 耶稣受洗', marcusBaptismUrl, '解读'),
    source('Hofmann 2025', 'Hofmann 2025 · 洗礼与领受圣灵', spiritAndBaptismUrl, '解读'),
    source('NET · 路 3', 'NET · 原文注释', netLukeThreeUrl, '背景'),
  ],
  '3:23–38': [
    edwards(),
    source('Levine & Witherington 2018', 'Levine & Witherington 2018 · 路加福音', levineWitheringtonLukeUrl, '解读'),
    source('Kochenash 2018', 'Kochenash 2018 · 亚当是神的儿子', kochenashAdamUrl, '解读'),
    source('Patton 2026', 'Patton 2026 · 路加家谱的抄传', pattonGenealogyUrl, '背景'),
  ],
};

export const chapterThreeReferences: ChapterReference[] = [
  {
    id: 'NET · 路 3',
    text: 'NET Bible, Luke 3. Biblical Studies Press. Translation and study notes.',
    url: netLukeThreeUrl,
    note: '用于核对第三章原文、历史名称和翻译选项；技术注释提供可复查的语言资料，但具体神学判断仍与同行评审研究及整卷叙事互相核对。',
  },
  {
    id: 'Edwards 2015',
    text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.',
    url: edwardsUrl,
    note: '用于第三章的历史处境、叙事推进、以色列背景与普世救恩；本页采用其重视路加文学结构与神学信息的解经方向。',
  },
  {
    id: 'Levine & Witherington 2018',
    text: 'Levine, Amy-Jill, and Ben Witherington III. The Gospel of Luke. New Cambridge Bible Commentary. Cambridge University Press, 2018.',
    url: levineWitheringtonLukeUrl,
    note: '用于施洗约翰、悔改伦理、耶稣受洗与家谱；两位作者也提醒读者区分历史重建、文学观察与神学判断。',
  },
  {
    id: 'Marcus 1995',
    text: 'Marcus, Joel. “Jesus’ Baptismal Vision.” New Testament Studies 41/4 (1995): 512–521.',
    url: marcusBaptismUrl,
    note: '同行评审研究；用于说明耶稣接受约翰之洗所产生的历史与神学张力，以及“与以色列认同”是一种解释，而不是路加逐字给出的说明。',
  },
  {
    id: 'Hofmann 2025',
    text: 'Hofmann, Matthias. “The Connection Between Baptism and the Reception of the Spirit in Becoming a Christian in Luke–Acts.” Religions 16/6 (2025): 763.',
    url: spiritAndBaptismUrl,
    note: '开放获取研究；用于比较约翰之洗、耶稣受洗、圣灵与火，以及路加福音和使徒行传中的基督徒洗礼；“火”的具体解释仍须保留分辨空间。',
  },
  {
    id: 'Kochenash 2018',
    text: 'Kochenash, Michael. “Adam, Son of God (Luke 3.38): Another Jesus–Augustus Parallel in Luke’s Gospel.” New Testament Studies 64/3 (2018): 307–325.',
    url: kochenashAdamUrl,
    note: '同行评审研究；用于理解家谱末尾“亚当是神的儿子”在路加叙事和罗马帝国处境中的可能意义；该论文的帝国平行读法属于学术论证，不当作经文唯一解释。',
  },
  {
    id: 'Patton 2026',
    text: 'Patton, Andrew J. “The Transmission of the Genealogy of Jesus in Greek New Testament Manuscripts: Variation in Format and Text.” Journal of Theological Studies 77/1 (2026): 60–73.',
    url: pattonGenealogyUrl,
    note: '最新同行评审研究；用于说明路加家谱在希腊抄本中的分栏格式曾造成较多抄传差异，提醒读者不要把复杂名单当成毫无文本历史的现代户籍表。',
  },
];

export const chapterFourCitationsByRange: Record<string, StudyCitation[]> = {
  '4:1–13': [
    edwards(),
    source('Levine & Witherington 2018', 'Levine & Witherington 2018 · 路加福音', levineWitheringtonLukeUrl, '解读'),
    source('Rudman 2004', 'Rudman 2004 · 路 4:6 的权柄', rudmanLukeFourAuthorityUrl, '解读'),
    source('NET · 路 4', 'NET · 原文注释', netLukeFourUrl, '背景'),
  ],
  '4:14–21': [
    edwards(),
    source('Seccombe 1981', 'Seccombe · 路加与以赛亚', seccombeLukeIsaiahUrl, '解读'),
    source('Wasiak 2024', 'Wasiak 2024 · 神迹与赞美', praiseInLukeNtsUrl, '解读'),
    source('NET · 路 4', 'NET · 原文注释', netLukeFourUrl, '背景'),
  ],
  '4:22–30': [
    edwards(),
    source('Seccombe 1981', 'Seccombe · 路加与以赛亚', seccombeLukeIsaiahUrl, '解读'),
    source('NET · 路 4', 'NET · 原文注释', netLukeFourUrl, '解读'),
  ],
  '4:31–44': [
    edwards(),
    source('Wasiak 2024', 'Wasiak 2024 · 神迹与赞美', praiseInLukeNtsUrl, '解读'),
    source('NET · 路 4', 'NET · 原文注释', netLukeFourUrl, '解读'),
  ],
};

export const chapterFiveCitationsByRange: Record<string, StudyCitation[]> = {
  '5:1–11': [edwards(), source('Wasiak 2024', 'Wasiak 2024 · 神迹与赞美', praiseInLukeNtsUrl, '解读'), source('NET · 路 5', 'NET · 原文注释', netLukeFiveUrl, '背景')],
  '5:12–16': [edwards(), source('Levine & Witherington 2018', 'Levine & Witherington 2018 · 路加福音', levineWitheringtonLukeUrl, '背景'), source('NET · 路 5', 'NET · 原文注释', netLukeFiveUrl, '背景')],
  '5:17–26': [edwards(), source('Wasiak 2024', 'Wasiak 2024 · 神迹与赞美', praiseInLukeNtsUrl, '解读'), source('NET · 路 5', 'NET · 原文注释', netLukeFiveUrl, '解读')],
  '5:27–32': [edwards(), source('Levine & Witherington 2018', 'Levine & Witherington 2018 · 路加福音', levineWitheringtonLukeUrl, '解读'), source('NET · 路 5', 'NET · 原文注释', netLukeFiveUrl, '背景')],
  '5:33–39': [edwards(), source('Mead 1988', 'Mead · 陈酒与新酒', meadOldNewWineUrl, '解读'), source('NET · 路 5', 'NET · 原文注释', netLukeFiveUrl, '解读')],
};

export const chapterSixCitationsByRange: Record<string, StudyCitation[]> = {
  '6:1–11': [
    edwards(),
    source('Fowl 2026', 'Fowl 2026 · 路 6:6–11', fowlLukeSixUrl, '解读'),
    source('NET · 路 6', 'NET · 原文注释', netLukeSixUrl, '背景'),
  ],
  '6:12–16': [edwards(), source('Levine & Witherington 2018', 'Levine & Witherington 2018 · 路加福音', levineWitheringtonLukeUrl, '解读'), source('NET · 路 6', 'NET · 原文注释', netLukeSixUrl, '背景')],
  '6:17–26': [
    edwards(),
    source('Allison 2022', 'Allison 2022 · 平原讲论', allisonSermonPlainUrl, '解读'),
    source('Ndekha 2020', 'Ndekha 2020 · 贫穷与富足', ndekhaPoorRichUrl, '解读'),
    source('NET · 路 6', 'NET · 原文注释', netLukeSixUrl, '解读'),
  ],
  '6:27–36': [
    edwards(),
    source('Van der Watt 2021', 'Van der Watt 2021 · 爱邻舍与仇敌', vanDerWattLoveUrl, '解读'),
    source('Allison 2022', 'Allison 2022 · 平原讲论', allisonSermonPlainUrl, '解读'),
    source('NET · 路 6', 'NET · 原文注释', netLukeSixUrl, '解读'),
  ],
  '6:37–49': [
    edwards(),
    source('Allison 2022', 'Allison 2022 · 平原讲论', allisonSermonPlainUrl, '解读'),
    source('Ndekha 2020', 'Ndekha 2020 · 贫穷与富足', ndekhaPoorRichUrl, '解读'),
    source('NET · 路 6', 'NET · 原文注释', netLukeSixUrl, '解读'),
  ],
};

export const chapterFourReferences: ChapterReference[] = [
  { id: 'NET · 路 4', text: 'NET Bible, Luke 4. Biblical Studies Press. Translation and study notes.', url: netLukeFourUrl, note: '用于核对试探次序、关键词、文本差异和翻译选择；神学结论仍与整卷路加及同行评审研究互相核对。' },
  { id: 'Edwards 2015', text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.', url: edwardsUrl, note: '用于第四章的叙事结构、试探、拿撒勒宣讲与迦百农事工。' },
  { id: 'Levine & Witherington 2018', text: 'Levine, Amy-Jill, and Ben Witherington III. The Gospel of Luke. New Cambridge Bible Commentary. Cambridge University Press, 2018.', url: levineWitheringtonLukeUrl, note: '用于把耶稣的试探与会堂争议放回犹太经文和历史语境，避免反犹太化概括；链接为出版方书目信息与前置页。' },
  { id: 'Rudman 2004', text: 'Rudman, Dominic. “Authority and Right of Disposal in Luke 4.6.” New Testament Studies 50/1 (2004): 77–86.', url: rudmanLukeFourAuthorityUrl, note: '同行评审研究；用于路 4:6 中魔鬼关于万国权柄的宣称。该论文提出特定但非唯一的但以理书背景解释，本页不把试探者的话直接当成完整政治神学。' },
  { id: 'Seccombe 1981', text: 'Seccombe, David. “Luke and Isaiah.” New Testament Studies 27/2 (1981): 252–259.', url: seccombeLukeIsaiahUrl, note: '同行评审研究；用于以赛亚 61 章怎样塑造路加对耶稣使命、传福音与受差遣的叙述。' },
  { id: 'Wasiak 2024', text: 'Wasiak, Wojciech. “Miracle Stories and Praise: Two Neglected Topics in Luke.” New Testament Studies 70/4 (2024): 452–469.', url: praiseInLukeNtsUrl, note: '开放获取同行评审研究；用于连接拿撒勒的纲领性宣讲与随后在路 4–7 章展开的神迹、神国和赞美。' },
];

export const chapterFiveReferences: ChapterReference[] = [
  { id: 'NET · 路 5', text: 'NET Bible, Luke 5. Biblical Studies Press. Translation and study notes.', url: netLukeFiveUrl, note: '用于核对革尼撒勒湖、洁净、赦罪、人子、利未及新酒比喻的语言细节。' },
  { id: 'Edwards 2015', text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.', url: edwardsUrl, note: '用于第五章各呼召与争议段落的文学推进和基督论中心。' },
  { id: 'Levine & Witherington 2018', text: 'Levine, Amy-Jill, and Ben Witherington III. The Gospel of Luke. New Cambridge Bible Commentary. Cambridge University Press, 2018.', url: levineWitheringtonLukeUrl, note: '用于洁净制度、税吏、筵席与禁食的犹太历史背景，避免把耶稣与犹太传统写成粗糙的新旧对立；链接为出版方书目信息与前置页。' },
  { id: 'Wasiak 2024', text: 'Wasiak, Wojciech. “Miracle Stories and Praise: Two Neglected Topics in Luke.” New Testament Studies 70/4 (2024): 452–469.', url: praiseInLukeNtsUrl, note: '用于瘫子医治后众人赞美神，以及神迹怎样逐步引导群众辨认耶稣。' },
  { id: 'Mead 1988', text: 'Mead, A. H. “Old and New Wine: St Luke 5:39.” The Expository Times 99/8 (1988).', url: meadOldNewWineUrl, note: '用于保留路 5:39 “陈的好”所造成的解释张力，避免把新酒比喻写成简单的旧约／犹太教淘汰论。' },
];

export const chapterSixReferences: ChapterReference[] = [
  { id: 'NET · 路 6', text: 'NET Bible, Luke 6. Biblical Studies Press. Translation and study notes.', url: netLukeSixUrl, note: '用于核对安息日争议、十二使徒、福与祸及平原讲论的原文和翻译选项。' },
  { id: 'Edwards 2015', text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.', url: edwardsUrl, note: '用于第六章从安息日、人子权柄、十二使徒到平原讲论的整体推进。' },
  { id: 'Fowl 2026', text: 'Fowl, Stephen. “Jesus is Driving Them Crazy: Language and Context for Luke 6.6–11.” New Testament Studies, 333–336. Published online 2026.', url: fowlLukeSixUrl, note: '最新同行评审短论；用于修正 ἄνοια 被简单译作怒气或狂怒的问题，并保留“失去理智的愚妄”这一词义重点。' },
  { id: 'Allison 2022', text: 'Allison, Dale C. “Luke Rewriting Matthew? The Case of the Sermon on the Plain.” In Gospel Reading and Reception in Early Christian Literature. Cambridge University Press, 2022.', url: allisonSermonPlainUrl, note: '用于平原讲论与马太登山宝训的文学关系；相关共观福音来源问题仍属学术争论，本页不把其中一个模型当成信仰结论。' },
  { id: 'Ndekha 2020', text: 'Ndekha, Louis W. “Praising the Poor and Blaming the Rich: A Panegyric Reading of Luke 6:20–49 in Malawian Context.” HTS Teologiese Studies 76/4 (2020).', url: ndekhaPoorRichUrl, note: '开放获取研究；用于保留福与祸的经济社会力度，并说明神国盼望会塑造富人与穷人共同生活，而不是浪漫化贫穷。' },
  { id: 'Van der Watt 2021', text: 'Van der Watt, Jan G. “You Must Love Your Neighbour as Well as Your Enemy: Love in Luke 6:27–38 and 10:25–37.” In die Skriflig 55/1 (2021).', url: vanDerWattLoveUrl, note: '同行评审开放研究；用于理解路加如何以慈悲、善行、不报复和帮助弱者具体展开“爱”。' },
];

export const chapterSevenCitationsByRange: Record<string, StudyCitation[]> = {
  '7:1–10': [
    edwards(),
    source('NET · 路 7', 'NET · 原文注释', netLukeSevenUrl, '解读'),
  ],
  '7:11–17': [
    edwards(),
    source('Ravens 1988', 'Ravens 1988 · 路 7:2—8:3 的叙事安排', ravensLukeSevenSettingUrl, '解读'),
    source('NET · 路 7', 'NET · 原文注释', netLukeSevenUrl, '解读'),
  ],
  '7:18–35': [
    edwards(),
    source('Ravens 1988', 'Ravens 1988 · 约翰、筵席与妇女段落', ravensLukeSevenSettingUrl, '解读'),
    source('NET · 路 7', 'NET · 原文注释', netLukeSevenUrl, '解读'),
  ],
  '7:36–50': [
    edwards(),
    source('Ravens 1988', 'Ravens 1988 · 抹香叙事的上下文', ravensLukeSevenSettingUrl, '解读'),
    source('Levine & Witherington 2018', 'Levine & Witherington 2018 · 路加福音', levineWitheringtonLukeUrl, '背景'),
    source('NET · 路 7', 'NET · 原文注释', netLukeSevenUrl, '解读'),
  ],
};

export const chapterEightCitationsByRange: Record<string, StudyCitation[]> = {
  '8:1–3': [
    edwards(),
    source('Miller 2017', 'Miller 2017 · 路加—使徒行传中的妇女恩主', millerWomenPatronsUrl, '背景'),
    source('Ravens 1988', 'Ravens 1988 · 路 7:2—8:3 的叙事安排', ravensLukeSevenSettingUrl, '解读'),
    source('NET · 路 8', 'NET · 原文注释', netLukeEightUrl, '解读'),
  ],
  '8:4–15': [edwards(), source('NET · 路 8', 'NET · 原文注释', netLukeEightUrl, '解读')],
  '8:16–25': [edwards(), source('NET · 路 8', 'NET · 原文注释', netLukeEightUrl, '解读')],
  '8:26–39': [
    edwards(),
    source('Klutz 2004', 'Klutz · 路 8:26–39 的洁净与释放', klutzLukeEightExorcismUrl, '背景'),
    source('NET · 路 8', 'NET · 地名与文本注释', netLukeEightUrl, '解读'),
  ],
  '8:40–56': [
    edwards(),
    source('Wasiak 2024', 'Wasiak 2024 · 路加叙事中的神迹与赞美', praiseInLukeNtsUrl, '解读'),
    source('NET · 路 8', 'NET · 原文注释', netLukeEightUrl, '解读'),
  ],
};

export const chapterNineCitationsByRange: Record<string, StudyCitation[]> = {
  '9:1–9': [edwards(), source('NET · 路 9', 'NET · 原文注释', netLukeNineUrl, '解读')],
  '9:10–17': [edwards(), source('NET · 路 9', 'NET · 原文注释', netLukeNineUrl, '解读')],
  '9:18–27': [
    edwards(),
    source('Ravens 1990', 'Ravens 1990 · 路 9:7–62 与耶稣的先知身份', ravensLukeNinePropheticUrl, '解读'),
    source('NET · 路 9', 'NET · 原文注释', netLukeNineUrl, '解读'),
  ],
  '9:28–36': [
    edwards(),
    source('Ravens 1990', 'Ravens 1990 · 变像、出路与耶路撒冷', ravensLukeNinePropheticUrl, '解读'),
    source('NET · 路 9', 'NET · 原文注释', netLukeNineUrl, '解读'),
  ],
  '9:37–50': [
    edwards(),
    source('Ravens 1990', 'Ravens 1990 · 山上与山下的基督论推进', ravensLukeNinePropheticUrl, '解读'),
    source('NET · 路 9', 'NET · 原文注释', netLukeNineUrl, '解读'),
  ],
  '9:51–62': [
    edwards(),
    source('Dochhorn 2007', 'Dochhorn 2007 · 撒玛利亚村庄与拒绝降火', dochhornSamaritanVillageUrl, '解读'),
    source('Dowling 2022', 'Dowling 2022 · 路加的撒玛利亚人叙事', dowlingSamaritansUrl, '背景'),
    source('NET · 路 9', 'NET · 文本异文注释', netLukeNineUrl, '解读'),
  ],
};

export const chapterTenCitationsByRange: Record<string, StudyCitation[]> = {
  '10:1–20': [
    edwards(),
    source('Cole 2017', 'Cole 2017 · 七十／七十二的文本问题', coleSeventyTwoUrl, '解读'),
    source('NET · 路 10', 'NET · 原文注释', netLukeTenUrl, '解读'),
  ],
  '10:21–24': [edwards(), source('NET · 路 10', 'NET · 原文注释', netLukeTenUrl, '解读')],
  '10:25–37': [
    edwards(),
    source('Dowling 2022', 'Dowling 2022 · 撒玛利亚人与“他者”', dowlingSamaritansUrl, '背景'),
    source('NET · 路 10', 'NET · 原文注释', netLukeTenUrl, '解读'),
  ],
  '10:38–42': [
    edwards(),
    source('Henning 2025', 'Henning 2025 · 马大的劳动、焦虑与分心', henningMarthaUrl, '解读'),
    source('NET · 路 10', 'NET · 原文与文本注释', netLukeTenUrl, '解读'),
  ],
};

export const chapterSevenReferences: ChapterReference[] = [
  { id: 'NET · 路 7', text: 'NET Bible, Luke 7. Biblical Studies Press. Translation and study notes.', url: netLukeSevenUrl, note: '用于核对百夫长的奴仆、拿因送葬、约翰提问、路 7:29–30 的旁白问题，以及席间女人的语言细节。' },
  { id: 'Edwards 2015', text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.', url: edwardsUrl, note: '用于第七章从权柄、怜悯与弥赛亚辨认推进到赦罪筵席的整体阅读。' },
  { id: 'Ravens 1988', text: 'Ravens, D. A. S. “The Setting of Luke’s Account of the Anointing: Luke 7.2–8.3.” New Testament Studies 34/2 (1988): 282–292.', url: ravensLukeSevenSettingUrl, note: '同行评审研究；用于把抹香女人放回百夫长、拿因、施洗约翰及随后妇女同行的叙事脉络，并避免用反法利赛人的刻板对照代替细读。' },
  { id: 'Levine & Witherington 2018', text: 'Levine, Amy-Jill, and Ben Witherington III. The Gospel of Luke. New Cambridge Bible Commentary. Cambridge University Press, 2018.', url: levineWitheringtonLukeUrl, note: '用于筵席、待客、罪人标签与犹太历史背景；链接为出版方书目信息与前置页。' },
];

export const chapterEightReferences: ChapterReference[] = [
  { id: 'NET · 路 8', text: 'NET Bible, Luke 8. Biblical Studies Press. Translation and study notes.', url: netLukeEightUrl, note: '用于核对妇女同行、撒种、风浪、湖东地名异文、血漏与睚鲁女儿的原文和文本细节。' },
  { id: 'Edwards 2015', text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.', url: edwardsUrl, note: '用于第八章“听道—危机—恢复—见证”的整体叙事推进。' },
  { id: 'Miller 2017', text: 'Miller, Amanda C. “Cut from the Same Cloth: A Study of Female Patrons in Luke–Acts and the Roman Empire.” Review & Expositor 114/2 (2017): 203–210.', url: millerWomenPatronsUrl, note: '同行评审研究；用于路 8:1–3 的妇女、资源、恩主关系与使命参与，避免把她们缩减为无名后勤人员。' },
  { id: 'Klutz 2004', text: 'Klutz, Todd. The Exorcism Stories in Luke–Acts: A Sociostylistic Reading. Cambridge University Press, 2004, chapter 2, 82–151.', url: klutzLukeEightExorcismUrl, note: '用于路 8:26–39 的洁净、文化边界和恢复；本页同时明确拒绝把现代精神疾病自动等同鬼附。' },
  { id: 'Wasiak 2024', text: 'Wasiak, Wojciech. “Miracle Stories and Praise: Two Neglected Topics in Luke.” New Testament Studies 70/4 (2024): 452–469.', url: praiseInLukeNtsUrl, note: '开放获取同行评审研究；用于理解神迹怎样引导人辨认耶稣并归荣耀给神。' },
];

export const chapterNineReferences: ChapterReference[] = [
  { id: 'NET · 路 9', text: 'NET Bible, Luke 9. Biblical Studies Press. Translation and study notes.', url: netLukeNineUrl, note: '用于核对差遣、喂饱群众、受难预告、变像中的 exodos、撒玛利亚村庄与跟随呼召。' },
  { id: 'Edwards 2015', text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.', url: edwardsUrl, note: '用于第九章从“祂是谁”转向十字架、荣耀和耶路撒冷旅程的整体推进。' },
  { id: 'Ravens 1990', text: 'Ravens, D. A. S. “Luke 9.7–62 and the Prophetic Role of Jesus.” New Testament Studies 36/1 (1990): 119–129.', url: ravensLukeNinePropheticUrl, note: '同行评审研究；用于第九章作为全卷转折、耶稣身份称号、变像和耶路撒冷道路之间的关系。' },
  { id: 'Dochhorn 2007', text: 'Dochhorn, Jan. “Die Verschonung des samaritanischen Dorfes (Lk 9.54–55).” New Testament Studies 53/3 (2007): 359–378.', url: dochhornSamaritanVillageUrl, note: '同行评审研究；用于理解雅各、约翰求降火的以利亚背景，以及耶稣为何拒绝以宗教热心实行报复。' },
  { id: 'Dowling 2022', text: 'Dowling, Elizabeth V. “Learning from ‘Others’: Reading Two Samaritan Stories in the Gospel of Luke.” In Tolerance, Intolerance, and Recognition in Early Christianity and Early Judaism. Cambridge University Press, 2022.', url: dowlingSamaritansUrl, note: '用于路加如何呈现犹太人与撒玛利亚人的张力，并让门徒从被视为“他者”的人身上重新学习。' },
];

export const chapterTenReferences: ChapterReference[] = [
  { id: 'NET · 路 10', text: 'NET Bible, Luke 10. Biblical Studies Press. Translation and study notes.', url: netLukeTenUrl, note: '用于核对七十／七十二异文、差遣、律法师问答、撒玛利亚人比喻与马大马利亚段落。' },
  { id: 'Edwards 2015', text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.', url: edwardsUrl, note: '用于第十章差遣、启示、爱邻舍与聆听主之间的整体连接。' },
  { id: 'Cole 2017', text: 'Cole, Zachary J. “P45 and the Problem of the ‘Seventy(-two)’: A Case for the Longer Reading in Luke 10.1 and 17.” New Testament Studies 63/2 (2017): 203–221.', url: coleSeventyTwoUrl, note: '同行评审文本校勘研究；对“七十二”提出较强理由，同时本页保留中文译本常见的两种读法。' },
  { id: 'Dowling 2022', text: 'Dowling, Elizabeth V. “Learning from ‘Others’: Reading Two Samaritan Stories in the Gospel of Luke.” In Tolerance, Intolerance, and Recognition in Early Christianity and Early Judaism. Cambridge University Press, 2022.', url: dowlingSamaritansUrl, note: '用于撒玛利亚人的历史边界与叙事功能；避免把比喻变成反犹太人的“宗教领袖都冷漠”故事。' },
  { id: 'Henning 2025', text: 'Henning, Meghan R. “Manufacturing Martha’s Madness: Enslavement, Anxiety, and Distraction in Luke 10:38–42.” Harvard Theological Review 118/1 (2025): 19–40.', url: henningMarthaUrl, note: '最新同行评审研究；用于重新看见马大的劳动负担，避免把焦虑、女性或照顾工作本身写成属灵失败。' },
];

export const chapterElevenCitationsByRange: Record<string, StudyCitation[]> = {
  '11:1–4': [
    edwards(),
    source('Gibson 2001', 'Gibson 2001 · 主祷文与门徒忠信', gibsonLordsPrayerUrl, '解读'),
    source('NET · 路 11', 'NET · 原文与文本注释', netLukeElevenUrl, '解读'),
  ],
  '11:5–13': [edwards(), source('NET · 路 11', 'NET · 第 8 节词义与祷告应许', netLukeElevenUrl, '解读')],
  '11:14–28': [edwards(), source('NET · 路 11', 'NET · 原文注释', netLukeElevenUrl, '解读')],
  '11:29–36': [edwards(), source('NET · 路 11', 'NET · 约拿记号与眼睛比喻', netLukeElevenUrl, '解读')],
  '11:37–54': [edwards(), source('NET · 路 11', 'NET · 第 41 节译法与祸语', netLukeElevenUrl, '解读')],
};

export const chapterTwelveCitationsByRange: Record<string, StudyCitation[]> = {
  '12:1–12': [edwards(), source('NET · 路 12', 'NET · 原文注释', netLukeTwelveUrl, '解读')],
  '12:13–21': [edwards(), source('NET · 路 12', 'NET · 无知财主', netLukeTwelveUrl, '解读')],
  '12:22–34': [
    edwards(),
    source('Jones 1995', 'Jones 1995 · 百合花与智慧传统', jonesLiliesUrl, '背景'),
    source('Geminn 2026', 'Geminn 2026 · 焦虑处境中的路 12', geminnAnxietyUrl, '应用'),
    source('NET · 路 12', 'NET · “寿数／身量”与原文注释', netLukeTwelveUrl, '解读'),
  ],
  '12:35–48': [edwards(), source('NET · 路 12', 'NET · 警醒与管家', netLukeTwelveUrl, '解读')],
  '12:49–59': [edwards(), source('NET · 路 12', 'NET · 火、洗礼与分裂', netLukeTwelveUrl, '解读')],
};

export const chapterThirteenCitationsByRange: Record<string, StudyCitation[]> = {
  '13:1–9': [
    edwards(),
    source('Skinner 2010', 'Skinner · 灾难、受害者与悔改', skinnerDisasterUrl, '解读'),
    source('NET · 路 13', 'NET · 原文注释', netLukeThirteenUrl, '解读'),
  ],
  '13:10–17': [
    edwards(),
    source('Hamm 1987', 'Hamm 1987 · 弯腰女人与以色列恢复', hammBentWomanUrl, '解读'),
    source('NET · 路 13', 'NET · 安息日与“亚伯拉罕的女儿”', netLukeThirteenUrl, '解读'),
  ],
  '13:18–21': [edwards(), source('NET · 路 13', 'NET · 芥菜种与面酵', netLukeThirteenUrl, '解读')],
  '13:22–30': [edwards(), source('NET · 路 13', 'NET · 窄门与神国筵席', netLukeThirteenUrl, '解读')],
  '13:31–35': [edwards(), source('NET · 路 13', 'NET · 希律、第三天与耶路撒冷', netLukeThirteenUrl, '解读')],
};

export const chapterFourteenCitationsByRange: Record<string, StudyCitation[]> = {
  '14:1–6': [edwards(), source('NET · 路 14', 'NET · 水臌、安息日与抄本异文', netLukeFourteenUrl, '解读')],
  '14:7–14': [
    edwards(),
    source('Solevåg & Kartzow 2023', 'Solevåg & Kartzow 2023 · 宴席、残障与互惠', solevagIdealMealUrl, '背景'),
    source('NET · 路 14', 'NET · 座位与宾客名单', netLukeFourteenUrl, '解读'),
  ],
  '14:15–24': [edwards(), source('NET · 路 14', 'NET · 大筵席与“勉强”', netLukeFourteenUrl, '解读')],
  '14:25–35': [
    edwards(),
    source('Llewelyn & Robinson 2023', 'Llewelyn & Robinson 2023 · 路 14:26 的夸张语', llewelynHyperboleUrl, '解读'),
    source('Zamfir 2024', 'Zamfir 2024 · 两王比喻与战争', zamfirTwoKingsUrl, '解读'),
    source('NET · 路 14', 'NET · “恨”、十字架与放下一切', netLukeFourteenUrl, '解读'),
  ],
};

export const chapterElevenReferences: ChapterReference[] = [
  { id: 'NET · 路 11', text: 'NET Bible, Luke 11. Biblical Studies Press. Translation and study notes.', url: netLukeElevenUrl, note: '用于核对主祷文的文本差异、第 8 节的关键词、约拿记号、眼睛比喻以及 11:41 的译法。' },
  { id: 'Edwards 2015', text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.', url: edwardsUrl, note: '用于把祷告、圣灵、更强者、听道遵行与饭桌祸语读成一条连续的门徒道路。' },
  { id: 'Gibson 2001', text: 'Gibson, Jeffrey B. “Matthew 6:9–13//Luke 11:2–4: An Eschatological Prayer?” Biblical Theology Bulletin 31/3 (2001): 96–105.', url: gibsonLordsPrayerUrl, note: '同行评审研究；用于主祷文怎样把神国、顺服与求神保守门徒忠信连在一起。本文提出的是一种学术论证，本页不把它当成排除其他解释的定论。' },
];

export const chapterTwelveReferences: ChapterReference[] = [
  { id: 'NET · 路 12', text: 'NET Bible, Luke 12. Biblical Studies Press. Translation and study notes.', url: netLukeTwelveUrl, note: '用于核对假冒、无知财主、“寿数／身量”、警醒管家、火与受苦之洗的原文和译法。' },
  { id: 'Edwards 2015', text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.', url: edwardsUrl, note: '用于全章从天父看顾推进到财富、忧虑、警醒和分辨时候的整体结构。' },
  { id: 'Jones 1995', text: 'Jones, John N. “Think of the Lilies” and Prov 6:6–11. Harvard Theological Review 88/1 (1995): 175–177.', url: jonesLiliesUrl, note: '同行评审短论；用于把“思想百合花”放进智慧传统的比较中，并提醒读者耶稣不是赞美不负责任。' },
  { id: 'Geminn 2026', text: 'Geminn, Scott. “Ancient Wisdom for This Anxious Age: Luke 12:22–34’s Imperatives in Anxious Perspective.” Religions 17/1 (2026): 36.', url: geminnAnxietyUrl, note: '开放获取的跨学科研究；作者同时以焦虑症康复经验阅读本段。用于避免把“不要忧虑”变成责备患者的口号，并强调注意力、群体支持和渐进操练。' },
];

export const chapterThirteenReferences: ChapterReference[] = [
  { id: 'NET · 路 13', text: 'NET Bible, Luke 13. Biblical Studies Press. Translation and study notes.', url: netLukeThirteenUrl, note: '用于核对两起灾难、无花果树、安息日医治、窄门、希律警告与耶路撒冷哀歌。' },
  { id: 'Edwards 2015', text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.', url: edwardsUrl, note: '用于把悔改、释放、神国生长、窄门和为城哀哭连成一条走向耶路撒冷的主线。' },
  { id: 'Skinner 2010', text: 'Skinner, Matt. “Commentary on Luke 13:1–9.” Working Preacher, Luther Seminary, 2010.', url: skinnerDisasterUrl, note: '由新约学者撰写的释经资源；用于确认路加是两起灾难的唯一现存来源，并拒绝把受害者的死亡解释为他们特别有罪。' },
  { id: 'Hamm 1987', text: 'Hamm, M. Dennis. “The Freeing of the Bent Woman and the Restoration of Israel: Luke 13.10–17 as Narrative Theology.” Journal for the Study of the New Testament 10/31 (1987): 23–44.', url: hammBentWomanUrl, note: '同行评审研究；用于重视“亚伯拉罕的女儿”、弯腰与站直、安息日释放及以色列恢复的叙事关系；本页不据此为现代疾病作属灵诊断。' },
];

export const chapterFourteenReferences: ChapterReference[] = [
  { id: 'NET · 路 14', text: 'NET Bible, Luke 14. Biblical Studies Press. Translation and study notes.', url: netLukeFourteenUrl, note: '用于核对水臌、安息日问答、座位、宴席邀请、“勉强”、恨父母、计算代价和放下一切。' },
  { id: 'Edwards 2015', text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.', url: edwardsUrl, note: '用于理解整章怎样从一张安息日餐桌推进到恩典邀请和门徒代价。' },
  { id: 'Solevåg & Kartzow 2023', text: 'Solevåg, Anna Rebecca, and Marianne Bjelland Kartzow. “The Ideal Meal: Masculinity and Disability among Host and Guests in Luke.” Biblical Theology Bulletin 53/4 (2023): 272–282.', url: solevagIdealMealUrl, note: '开放获取的同行评审研究；用于辨认宾客名单中的身体、经济能力和社会网络，避免把不同处境的人压缩成同一种被动对象。' },
  { id: 'Llewelyn & Robinson 2023', text: 'Llewelyn, Stephen Robert, and Will Robinson. “Hyperbole and the Cost of Discipleship: A Case Study of Luke 14:26.” Harvard Theological Review 116/1 (2023): 44–65.', url: llewelynHyperboleUrl, note: '开放获取的同行评审研究；用于说明路 14:26 的“恨”是需要结合上下文理解的夸张语，不可据此合理化仇恨家庭或属灵控制。' },
  { id: 'Zamfir 2024', text: 'Zamfir, Korinna. “Suing for Peace at Any Cost? Reading the Parable of the Two Kings (Luke 14.31–2) in Times of War.” New Testament Studies 70/1 (2024): 1–22.', url: zamfirTwoKingsUrl, note: '开放获取的同行评审研究；用于提醒两王比喻首先服务于计算门徒代价，不能单独承担完整的现代战争与和平伦理。' },
];

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
    source('EvQ 2021', 'Evangelical Quarterly 2021 · 路 22:36 买刀', swordLukeTwentyTwoUrl, '解读'),
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
    source('BYU · 路 23', 'BYU Studies · 路 23 章节注释', byuLukeTwentyThreeUrl, '背景'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '解读'),
  ],
  '23:26–31': [
    source('NET · 路 23', 'NET · 路 23 原文注释', netLukeTwentyThreeUrl, '解读'),
    source('Closterman 2024', 'Closterman 2024 · 走向各各他的葬礼行列', clostermanLukeTwentyThreeUrl, '解读'),
    source('BYU · 路 23', 'BYU Studies · 路 23 章节注释', byuLukeTwentyThreeUrl, '背景'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '背景'),
  ],
  '23:32–43': [
    source('NET · 路 23', 'NET · 路 23 原文注释', netLukeTwentyThreeUrl, '解读'),
    source('Jeong 2023', 'Jeong 2023 · 路 23:39–43 “今日”与“乐园”', paradiseLukeTwentyThreeUrl, '解读'),
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
    source('Prince 2007', 'Prince 2007 · 路 24 与古代死者显现叙事', princeLukeTwentyFourUrl, '背景'),
    source('WP · 升天', 'Working Preacher · 路 24:44–53（后半）', ascensionWorkingPreacherUrl, '解读'),
    source('Yale · 受难与复活', 'Yale Bible Study · 受难与复活', passionResurrectionYaleUrl, '解读'),
  ],
  '24:50–53': [
    source('NET · 路 24', 'NET · 路 24 原文注释', netLukeTwentyFourUrl, '解读'),
    source('Thompson 2023', 'Thompson 2023 · 路 24 的辨认与复活显现', thompsonLukeTwentyFourUrl, '背景'),
    source('de Jonge 2013', 'de Jonge 2013 · 路加与使徒行传的升天叙事时间', deJongeAscensionUrl, '解读'),
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
  {
    id: 'EvQ 2021',
    text: '“Does Jesus Endorse Armed Self-Defense in Luke 22:36?” Evangelical Quarterly 92/4 (2021).',
    url: swordLukeTwentyTwoUrl,
    note: '呈现将“买刀”理解为武装自卫的学术进路；本页面将其与 22:49–51 耶稣制止暴力的叙事并读，不把它扩展为教会武装或报复命令。',
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
    id: 'BYU · 路 23',
    text: 'BYU Studies. “Luke Chapter 23: The Testimony of Luke.”',
    url: byuLukeTwentyThreeUrl,
    note: '章节注释；用于补充政治控告、彼拉多与希律、青绿树与枯干树等历史和叙事观察。',
  },
  {
    id: 'Closterman 2024',
    text: 'Closterman, Wendy E. “Reading the Gospel of Luke’s Walk to Calvary as a Funeral Procession: A Study of Luke 23.27–8.” New Testament Studies 70/1 (2024): 51–60.',
    url: clostermanLukeTwentyThreeUrl,
    note: '同行评审研究；用于补充妇女哀哭、走向各各他与安葬叙事之间的反向葬礼意象，同时保持这是文学解释进路，而非经文唯一含义。',
  },
  {
    id: 'Jeong 2023',
    text: 'Jeong, Chang-Kyo. “Luke 23:39–43: Luke’s Personal Eschatology and Salvation—Focus on ‘Today’ and ‘Paradise’.” Korean New Testament Studies 30/1 (2023): 111–138.',
    url: paradiseLukeTwentyThreeUrl,
    note: '同行评审研究；用于说明“今日”“乐园”、行恶者的称谓与临终回转等解释问题，并保留不同教会传统的讨论空间。',
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
    text: 'Clark-Howard, Andrew. “A Disabled Lord? Continuity and Legibility in the Resurrection.” Journal of Disability & Religion 30/1 (2026): 22–33. First published online 2025.',
    url: clarkHowardLukeTwentyFourUrl,
    note: '开放获取的近期研究；用于提醒我们既承认复活身体与受难身体的连续性，也不把复活简化为可以被人完全掌控的“标准身体”图像。',
  },
  {
    id: 'Prince 2007',
    text: 'Prince, Deborah Thompson. “The ‘Ghost’ of Jesus: Luke 24 in Light of Ancient Narratives of Post-Mortem Apparitions.” Journal for the Study of the New Testament 29/3 (2007): 287–301.',
    url: princeLukeTwentyFourUrl,
    note: '同行评审研究；用于把路 24:36–43 放回古代死者显现叙事的语境，避免把触摸和进食简单写成现代实验式证明。',
  },
  {
    id: 'de Jonge 2013',
    text: 'de Jonge, Henk Jan. “The Chronology of the Ascension Stories in Luke and Acts.” New Testament Studies 59/2 (2013): 151–171.',
    url: deJongeAscensionUrl,
    note: '同行评审研究；用于呈现路加福音 24 章与使徒行传 1 章之间的升天叙事和时间安排问题，避免把两处简单压成一份逐日行程表。',
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
    id: 'Edwards 2015',
    text: 'Edwards, James R. The Gospel according to Luke. Pillar New Testament Commentary. Eerdmans, 2015.',
    url: edwardsUrl,
    note: '用于第一章降生叙事的历史处境、文学推进与基督论解读；出版方说明本书特别讨论路加的降生叙事。',
  },
  {
    id: 'Wasiak 2024',
    text: 'Wasiak, Wojciech. “Miracle Stories and Praise: Two Neglected Topics in Luke.” New Testament Studies 70/4 (2024): 452–469.',
    url: praiseInLukeNtsUrl,
    note: '同行评审研究；用于理解路加一至二章密集出现的赞美，及其如何在叙事关键时刻解释神的作为。',
  },
  {
    id: 'Lang 2010',
    text: 'Lang, Friedrich Gustav. “Abraham geschworen – uns gegeben: Syntax und Sinn im Benediktus (Lukas 1.68–79).” New Testament Studies 56/4 (2010): 491–512.',
    url: benedictusNtsUrl,
    note: '同行评审研究；用于撒迦利亚颂歌的结构、亚伯拉罕之约中心，以及弥赛亚、圣约和罪得赦免三层推进。',
  },
  {
    id: '互文',
    text: '本章旧约／新约互文索引：撒上 2；撒下 7；诗 2、113、132、146；赛 9、40；玛 3–4；太 1；徒 1；路 3、4、24。',
    url: bibleGatewayUrl('1 Samuel 2; 2 Samuel 7; Psalm 2; Psalm 113; Psalm 132; Psalm 146; Isaiah 9; Isaiah 40; Malachi 3; Malachi 4; Matthew 1; Acts 1; Luke 3; Luke 4; Luke 24'),
    note: '每个段落旁已按具体引用提供独立链接。',
  },
];
