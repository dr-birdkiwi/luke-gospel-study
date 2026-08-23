'use client';

import { useMemo, useState } from 'react';

type StudyNote = {
  range: string;
  title: string;
  scripture: string;
  literal: string;
  context: string;
  connection?: string;
  life?: string;
};

type Chapter = {
  no: number;
  title: string;
  summary: string;
  focus: string;
  setting: string;
  sections: string[];
  crossRefs: string[];
  questions: string[];
  practice: string;
  prayer: string;
  notes?: StudyNote[];
};

const chapterThemes = [
  ['序言与应许的开端', '确据从哪里来？'], ['降生与天国的记号', '神如何住在人的日常？'], ['旷野中的预备', '悔改怎样成为新生活？'], ['受试探与开始服事', '在压力中，什么定义我们的身份？'], ['呼召与安息的主', '跟随如何改变生活节奏？'], ['安息日与十二使徒', '谁是有福的人？'], ['赦免与更大的爱', '被赦免的人如何去爱？'], ['差遣与真正的邻舍', '邻舍不是概念，而是谁？'], ['祷告与内在的眼睛', '怎样分辨光与暗？'], ['差遣七十人', '被差遣时怎样不失去喜乐？'], ['警醒与天国的门', '信仰如何进入家与财物？'], ['悔改与失而复得', '父的心如何接住两个儿子？'], ['管家与不可兼事', '忠心怎样体现在金钱上？'], ['浪子回头的喜乐', '福音怎样重建尊严？'], ['失羊与失钱的比喻', '谁在寻找谁？'], ['财主与拉撒路', '看见贫穷是门徒的一部分吗？'], ['信心、感恩与神的国', '神的国怎样来到我们中间？'], ['祷告、谦卑与小孩', '我们用什么姿态来到主前？'], ['撒该与耶路撒冷的路', '救恩如何落在一个家庭？'], ['圣殿中的权柄', '在对立中仍然持守真理？'], ['末世警醒与最后晚餐', '盼望如何塑造今天？'], ['十字架与复活的早晨', '受苦、赦免与复活如何相连？'], ['以马忤斯的同行', '心里火热的信仰怎样被唤醒？'], ['复活显现与差遣', '见证从哪里开始？'],
];

const chapterGuides = [
  ['路加的写作目的、撒迦利亚与以利沙伯、天使报信', '马利亚的回应、探访与尊主颂、施洗约翰出生', '从“确实的事”到“预备主的道路”'], ['约瑟与马利亚、牧羊人、献上婴孩耶稣', '西面与亚拿的等候、少年耶稣在圣殿', '神的儿子也在家庭、成长与等候中显明'], ['约翰的悔改信息、耶稣受洗、家谱', '悔改的果子与圣灵的见证', '从身份被确认到进入旷野预备'], ['旷野试探、拿撒勒宣讲、迦百农的权柄', '呼召与医治、洁净麻风病人', '耶稣的权柄始终指向被压碎的人'], ['首批门徒、得鱼的神迹、利未蒙召', '安息日的争议与新酒新皮袋', '门徒不是旁观者，而是被主邀请的人'], ['安息日、十二使徒、平原宝训', '爱仇敌、不要论断、好树与好果子', '天国伦理从心里流出，成为群体生活'], ['百夫长与寡妇的儿子、约翰的疑问', '有罪的女人、撒种的比喻', '在不同回应中辨认耶稣是谁'], ['差遣十二人、五饼二鱼、彼得认信', '登山变像、谁为大、撒玛利亚村庄', '十字架道路上的门徒身份'], ['差遣七十人、好撒玛利亚人、马大与马利亚', '从忙乱到在主脚前听道', '爱神与爱人不是两条路'], ['主祷文、半夜求饼、赶鬼与内在光', '无知财主、警醒等候、分辨时代', '祷告不是技巧，而是儿女与父的关系'], ['悔改的呼召、安息日医治、芥菜种与面酵', '窄门、耶路撒冷的哀哭', '在恩典里回应，不把宽容误作拖延'], ['失羊、失钱、两个儿子、聪明管家', '小事忠心与钱财的试验', '父的喜乐挑战我们的自义'], ['管家与钱财、拉撒路与财主', '信心、饶恕与仆人的本分', '忠心不是功劳，而是受托后的回应'], ['十个麻风病人、神的国、寡妇与不义的官', '法利赛人与税吏的祷告', '感恩、坚持与谦卑共同塑造信心'], ['婚姻、孩子、少年官、葡萄园工人', '受难预告、瞎子得看见', '跟随的代价与恩典同时存在'], ['撒该、十锭银子、荣耀进城', '耶稣为耶路撒冷哀哭、洁净圣殿', '救恩进入家中，也进入公共空间'], ['权柄的质问、纳税给该撒、复活的争论', '文士的假冒与寡妇的两个小钱', '在复杂世界中把属于神的归给神'], ['橄榄山讲论、逾越节、设立圣餐', '彼得不认主、客西马尼园的祷告', '警醒不是恐惧，而是与主一同站立'], ['大祭司的院子、彼拉多与希律、各各他的刑场', '十字架上的赦免与同钉的强盗', '受苦的王以赦免显明王权'], ['妇女发现空坟墓、以马忤斯的道路', '圣经开启、擘饼与回转耶路撒冷', '复活主在解释经文，也在同行'], ['向门徒显现、吃鱼、开启心窍', '从耶路撒冷开始作见证', '复活不是结尾，而是见证的起点'], ['全书结构回望、主的应许', '在圣殿中欢喜赞美', '从应许、道路到见证，学习继续等候'],
];

const chapterNotes: StudyNote[] = [
  { range: '1:1–4', title: '为要叫你知道所学之道都是确实的', scripture: '路加先说明写作不是传闻汇编，而是经过考察、按次序整理的见证。', literal: '作者把读者带到一个可以信靠的叙事中：福音既有信仰意义，也有见证的历史形状。', context: '“提阿非罗”可能是个人，也可能带有“爱神者”的称呼意味；路加采用当时严谨历史序言的写法。', connection: '可对照徒 1:1–3，看见路加如何把福音与使徒见证相连。', life: '小组查经也可以把“我听过什么”与“经文实际说什么”分开，给彼此一个诚实而安全的学习空间。' },
  { range: '1:5–25', title: '你的祈祷已经被听见了', scripture: '撒迦利亚与以利沙伯年老无子；天使宣告约翰将使许多人回转，预备主的道路。', literal: '神的回应不只是解决一个家庭的遗憾，而是把一个孩子放在救赎历史的前奏中。', context: '祭司按班次在圣殿供职；进入香坛前的经历，把家庭盼望放进以色列的敬拜传统。', connection: '可串联玛 3:1 与赛 40:3，留意“预备道路”如何从先知应许进入福音开端。', life: '长期没有答案的祷告会怎样塑造我们？当答案超出原本的期待时，我们愿不愿意让神扩张祷告的边界？' },
  { range: '1:26–38', title: '我没有出嫁，怎么有这事呢？', scripture: '天使向马利亚宣告耶稣的降生，马利亚以“情愿照你的话成就在我身上”回应。', literal: '这不是马利亚掌控计划，而是在不确定、可能受误解的处境中信靠神的应许。', context: '拿撒勒是加利利的小城；“至高者的儿子”与“大卫的宝座”把婴孩与旧约应许连在一起。', connection: '可对照太 1:18–25，比较马太与路加如何呈现同一降生应许。', life: '顺服不等于没有问题。我们能否带着问题向神说“我愿意”，也允许小组陪伴我们承担后果？' },
  { range: '1:39–45', title: '我主的母到我这里来，这是从哪里得的呢？', scripture: '马利亚探访以利沙伯；两个未出生的孩子都在神的工作中彼此回应。', literal: '神的应许没有把人孤立，反而把两个家庭带入彼此确认、彼此祝福的关系。', context: '古代旅途不易；马利亚“急忙”前往，显示她需要同伴，也愿意把喜讯带给另一位蒙召者。', connection: '可连到撒上 1–2 章，比较蒙恩女子如何在神面前用赞美回应。', life: '信仰群体能否成为让人确认神恩典的地方，而不是只要求人独自刚强？' },
  { range: '1:46–55', title: '我心尊主为大', scripture: '马利亚的诗歌颂赞神顾念卑微者，使饥饿的得饱足，并记念对亚伯拉罕的应许。', literal: '赞美不是逃避现实；它重新命名现实，让人看见神正在翻转骄傲、权势与匮乏的秩序。', context: '诗歌充满旧约回声，尤其接近哈拿的祷告；“现在”与“世世代代”同时出现。', connection: '可对照撒上 2:1–10，听见“卑微者被神看顾”的诗歌回声。', life: '我们的敬拜是否只说个人顺利，还是也能看见神对弱小者、公义与群体的心意？' },
  { range: '1:57–66', title: '他的名字是约翰', scripture: '约翰出生后，父母没有按家族习惯取名，而是顺服天使的吩咐。', literal: '名字表明这孩子属于神的计划，不被家族传统或人的意见重新定义。', context: '取名通常延续家族；撒迦利亚恢复说话，众人因此敬畏并追问孩子将来如何。', connection: '可串联路 1:13 与路 1:20，留意名字与说话的恢复都指向神的应许。', life: '我们怎样在家庭、教会和职场中，把人的期待与神的呼召分辨开来？' },
  { range: '1:67–79', title: '以色列的神是应当称颂的', scripture: '撒迦利亚被圣灵充满，先颂赞救赎，再说明约翰将预备主的道路。', literal: '神的拯救被描述为从仇敌和黑暗中释放，使人可以一生在祂面前坦然无惧地事奉。', context: '“角”象征力量；“从高天临到”把个人出生与以色列长久盼望连在一起。', connection: '可对照玛 3:1 与赛 9:2，留意先知与“清晨日光”共同指向弥赛亚。', life: '成熟的属灵眼光，能否在孩子、工作和日常小事中认出更大的救赎故事？' },
  { range: '1:80', title: '那孩子渐渐长大，心灵强健', scripture: '约翰在旷野生活，直到显明在以色列人面前的日子。', literal: '神的预备常发生在公开服事以前；隐藏期不是空白，而是塑造。', context: '旷野既是孤独之地，也是先知传统中与神相遇、重新听见呼召的地方。', connection: '可连到路 3:1–6，看见旷野中的隐藏如何进入公开的预备。', life: '小组如何尊重“尚未被看见”的成长？我们正在被神预备什么？' },
];

const chapterData: Chapter[] = chapterThemes.map(([title, focus], index) => ({
  no: index + 1, title, focus,
  summary: index === 0 ? '从可靠的见证开始，神在两个普通家庭中开启救赎的序章。' : `沿着耶稣从加利利走向耶路撒冷的道路，${focus}`,
  setting: index === 0 ? '希律作犹太王；圣殿、拿撒勒与犹大山地成为应许展开的三个场景。' : `本章位于路加福音的${index < 19 ? '加利利与旅程段落' : '耶路撒冷段落'}，适合先读完整章，再回到关键段落。`,
  sections: chapterGuides[index],
  crossRefs: index === 0 ? ['创 12:1–3 · 亚伯拉罕之约', '撒上 2:1–10 · 哈拿的祷告', '玛 4:5–6 · 以利亚的应许'] : [`太 ${index + 1} · 平行叙事与不同焦点`, `诗 ${Math.max(1, index + 1)} · 旧约祷告的回声`, `徒 ${Math.min(28, index + 1)} · 见证如何延伸`],
  questions: index === 0 ? ['我在本章看见神怎样在等待中工作？', '马利亚、以利沙伯、撒迦利亚的回应有什么不同？', '本周我可以怎样让“神的应许”进入一个具体关系？'] : [`本章最挑战我原有观念的哪一处？`, '耶稣在这里如何看待被忽略的人？', '小组可以怎样把本章的一个动作带进这两周的生活？'],
  practice: index === 0 ? '找一个仍在等待中的祷告，用本章的三种回应（诚实、聆听、顺服）写下祷告，再找一位组员彼此代祷。' : `在未来两周刻意练习“${focus}”：记录一次具体场景，下次小组分享经文如何改变你的回应。`,
  prayer: index === 0 ? '主啊，在等待与不明白中，求你使我们像马利亚一样听见、像以利沙伯一样祝福、像撒迦利亚一样重新学会赞美。' : `主耶稣，求你让我们不只知道“${focus}”，也在今天的关系和选择中活出来。`,
  notes: index === 0 ? chapterNotes : undefined,
}));

export default function Home() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [completed, setCompleted] = useState<number[]>([]);
  const [search, setSearch] = useState('');
  const chapter = chapterData[selectedChapter - 1];
  const isCurrent = completed.includes(chapter.no);
  const filteredChapters = useMemo(() => { const query = search.trim().toLowerCase(); if (!query) return chapterData; return chapterData.filter((item) => `${item.no} ${item.title} ${item.focus}`.toLowerCase().includes(query)); }, [search]);
  function selectChapter(no: number) { setSelectedChapter(no); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  function toggleCompleted() { setCompleted((items) => items.includes(chapter.no) ? items.filter((item) => item !== chapter.no) : [...items, chapter.no]); }

  return <main className="site-shell">
    <header className="topbar"><div className="brand-lockup"><div className="brand-mark" aria-hidden="true"><span>✦</span></div><div><p className="brand-kicker">小组查经 · 01</p><p className="brand-name">在福音的路上</p></div></div><div className="topbar-center"><span className="topbar-line" /><span>路加福音</span><span className="topbar-line" /></div><div className="topbar-actions"><span className="cycle-badge"><i />隔周聚会</span><button className="quiet-button" type="button" onClick={() => document.getElementById('discussion')?.scrollIntoView({ behavior: 'smooth' })}>小组讨论</button></div></header>
    <div className="mobile-chapter-strip" aria-label="选择章节"><span className="mobile-strip-label">章节</span><div className="mobile-chapters">{chapterData.map((item) => <button key={item.no} className={item.no === chapter.no ? 'chapter-pill active' : 'chapter-pill'} onClick={() => selectChapter(item.no)} type="button">{String(item.no).padStart(2, '0')}</button>)}</div></div>
    <div className="page-grid">
      <aside className="sidebar"><div className="sidebar-intro"><p className="section-label">LUKE / 24</p><h2>章节导航</h2><p>每两周走一章，读经、对照、回应。</p></div><label className="search-box"><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="寻找章节或主题" aria-label="寻找章节或主题" />{search && <button type="button" onClick={() => setSearch('')} aria-label="清除搜索">×</button>}</label><nav className="chapter-list" aria-label="路加福音章节">{filteredChapters.map((item) => <button key={item.no} type="button" className={item.no === chapter.no ? 'chapter-row selected' : 'chapter-row'} onClick={() => selectChapter(item.no)}><span className="chapter-number">{String(item.no).padStart(2, '0')}</span><span className="chapter-copy"><strong>{item.title}</strong><small>{item.focus}</small></span>{completed.includes(item.no) && <span className="check-dot" aria-label="已查考">✓</span>}</button>)}</nav><div className="sidebar-footer"><span className="progress-ring">{completed.length}<small>/24</small></span><span><strong>查考进度</strong><small>一步一步走</small></span></div></aside>
      <section className="content-column"><div className="chapter-hero"><div className="chapter-hero-top"><span className="chapter-tag">第 {chapter.no} 章</span><span className="hero-meta">LUKE · {String(chapter.no).padStart(2, '0')} <span>／</span> 约 20 分钟阅读</span></div><h1>{chapter.title}</h1><p className="hero-summary">{chapter.summary}</p></div><div className="tab-panel"><div className="panel-heading"><div><p className="section-label">01 / 逐段阅读</p><h2>先读经文，再让问题打开经文</h2></div><button type="button" className={isCurrent ? 'complete-button done' : 'complete-button'} onClick={toggleCompleted}>{isCurrent ? '✓ 本章已查考' : '标记本章已查考'}</button></div><div className="reading-map"><span className="map-kicker">本章路线</span><div className="map-steps">{chapter.sections.map((section, index) => <div className="map-step" key={section}><span>{String(index + 1).padStart(2, '0')}</span><p>{section}</p></div>)}</div></div><div className="notes-list">{(chapter.notes ?? chapter.sections.map((section, index) => ({ range: `本章 · ${String(index + 1).padStart(2, '0')}`, title: section, scripture: '先完整朗读这一段，留意人物怎样说、怎样做，以及叙事何处发生转折。', literal: '把观察写成一句不带解释的事实：谁在什么处境中回应了谁。', context: chapter.setting, connection: `可与本章的${chapter.crossRefs[index % chapter.crossRefs.length]}互相参照，留意同一主题在不同经文中的展开。`, life: chapter.questions[index % chapter.questions.length] }))).map((note, index) => <StudyNoteCard key={note.range} note={note} index={index} />)}</div><div className="pause-card"><span className="pause-symbol">⌁</span><div><p className="section-label">停一下</p><p>哪一个词、哪一个人物或哪一个动作反复出现在你眼前？先不要急着解释，和组员分享你实际看见了什么。</p></div></div></div></section>
      <aside className="right-rail"><div className="rail-card focus-card"><div className="card-icon">✧</div><p className="section-label">本章焦点</p><h3>{chapter.focus}</h3><p>{chapter.summary}</p><button type="button" onClick={() => document.getElementById('discussion')?.scrollIntoView({ behavior: 'smooth' })}>去小组讨论 <span>↗</span></button></div><div className="rail-card group-card" id="discussion"><div className="card-topline"><p className="section-label">小组讨论</p><span>3 / 3</span></div><h3>一起问，慢慢听</h3><p>好的问题不急着得到标准答案，先让每个人诚实地说出经文怎样碰到自己。</p><ol><li>我看见了什么？</li><li>这让我想到什么？</li><li>我可以怎样回应？</li></ol><button type="button" onClick={() => document.getElementById('discussion')?.scrollIntoView({ behavior: 'smooth' })}>打开讨论卡 <span>→</span></button></div><div className="quote-card"><span>“</span><p>读经不是把经文变小，而是让我们的生活重新被它照亮。</p><small>— 小组查经笔记</small></div></aside>
    </div><footer className="site-footer"><span>在福音的路上</span><span>每两周一章 · 读进去，也活出来</span><span>路加福音 01—24</span></footer>
  </main>;
}

function StudyNoteCard({ note, index }: { note: StudyNote; index: number }) { return <article className="study-note"><div className="note-index">{String(index + 1).padStart(2, '0')}</div><div className="note-body"><div className="note-heading"><span className="verse-range">{note.range}</span><h3>{note.title}</h3></div><p className="scripture-line">{note.scripture}</p><div className="note-columns"><div className="note-insight note-observation"><span className="note-label">字面观察</span><p>{note.literal}</p></div><div className="note-insight note-context"><span className="note-label">背景与串联</span><span className="note-sub-label">背景</span><p>{note.context}</p>{note.connection && <><span className="note-sub-label">经文串联</span><p>{note.connection}</p></>}</div>{note.life && <div className="note-insight note-life"><span className="note-label">信仰生活讨论</span><p>{note.life}</p></div>}</div></div></article>; }
