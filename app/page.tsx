'use client';

import { useMemo, useState } from 'react';
import { chapterNotesByChapter, type StudyNote } from './chapterNotes';

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
  ['序言与应许的开端', '确据从哪里来？'], ['降生与天国的记号', '神如何住在人的日常？'], ['旷野中的预备', '悔改怎样成为新生活？'], ['受试探与开始服事', '在压力中，什么定义我们的身份？'], ['呼召与安息的主', '跟随如何改变生活节奏？'], ['安息日与十二使徒', '谁是有福的人？'], ['赦免与更大的爱', '被赦免的人如何去爱？'], ['差遣与真正的邻舍', '邻舍不是概念，而是谁？'], ['祷告与内在的眼睛', '怎样分辨光与暗？'], ['差遣七十人', '被差遣时怎样不失去喜乐？'], ['警醒与天国的门', '信仰如何进入家与财物？'], ['警醒与财富', '在忧虑、拥有与等待中，谁掌管我的心？'], ['悔改与神国的窄门', '我如何回应神的忍耐与邀请？'], ['宴席与门徒代价', '恩典如何重排我的座位和优先次序？'], ['父的喜乐与失而复得', '我是在回家，还是站在门外？'], ['金钱与永恒的眼光', '我如何使用受托的资源？'], ['感恩与神国的临在', '我是否在恩典中回到主面前？'], ['祷告、谦卑与跟随', '我用什么姿态来到主前？'], ['救恩进入耶路撒冷', '救恩如何落在一个家庭和一座城？'], ['圣殿中的权柄', '在对立中怎样持守真理与公义？'], ['末世警醒', '盼望怎样塑造今天的清醒？'], ['最后晚餐与客西马尼', '在被爱与被筛之间如何忠心？'], ['十字架上的王', '受苦、赦免与死亡如何相连？'], ['复活显现与差遣', '见证从哪里开始？'],
];

const chapterGuides = [
  ['路加的写作目的、撒迦利亚与以利沙伯、天使报信', '马利亚的回应、探访与尊主颂、施洗约翰出生', '从“确实的事”到“预备主的道路”'], ['约瑟与马利亚、牧羊人、献上婴孩耶稣', '西面与亚拿的等候、少年耶稣在圣殿', '神的儿子也在家庭、成长与等候中显明'], ['约翰的悔改信息、耶稣受洗、家谱', '悔改的果子与圣灵的见证', '从身份被确认到进入旷野预备'], ['旷野试探、拿撒勒宣讲、迦百农的权柄', '呼召与医治、洁净麻风病人', '耶稣的权柄始终指向被压碎的人'], ['首批门徒、得鱼的神迹、利未蒙召', '安息日的争议与新酒新皮袋', '门徒不是旁观者，而是被主邀请的人'], ['安息日、十二使徒、平原宝训', '爱仇敌、不要论断、好树与好果子', '天国伦理从心里流出，成为群体生活'], ['百夫长与寡妇的儿子、约翰的疑问', '有罪的女人、撒种的比喻', '在不同回应中辨认耶稣是谁'], ['差遣十二人、五饼二鱼、彼得认信', '登山变像、谁为大、撒玛利亚村庄', '十字架道路上的门徒身份'], ['差遣七十人、好撒玛利亚人、马大与马利亚', '从忙乱到在主脚前听道', '爱神与爱人不是两条路'], ['主祷文、半夜求饼、赶鬼与内在光', '无知财主、警醒等候、分辨时代', '祷告不是技巧，而是儿女与父的关系'], ['悔改的呼召、安息日医治、芥菜种与面酵', '窄门、耶路撒冷的哀哭', '在恩典里回应，不把宽容误作拖延'], ['失羊、失钱、两个儿子、聪明管家', '小事忠心与钱财的试验', '父的喜乐挑战我们的自义'], ['管家与钱财、拉撒路与财主', '信心、饶恕与仆人的本分', '忠心不是功劳，而是受托后的回应'], ['十个麻风病人、神的国、寡妇与不义的官', '法利赛人与税吏的祷告', '感恩、坚持与谦卑共同塑造信心'], ['婚姻、孩子、少年官、葡萄园工人', '受难预告、瞎子得看见', '跟随的代价与恩典同时存在'], ['撒该、十锭银子、荣耀进城', '耶稣为耶路撒冷哀哭、洁净圣殿', '救恩进入家中，也进入公共空间'], ['权柄的质问、纳税给该撒、复活的争论', '文士的假冒与寡妇的两个小钱', '在复杂世界中把属于神的归给神'], ['橄榄山讲论、逾越节、设立圣餐', '彼得不认主、客西马尼园的祷告', '警醒不是恐惧，而是与主一同站立'], ['大祭司的院子、彼拉多与希律、各各他的刑场', '十字架上的赦免与同钉的强盗', '受苦的王以赦免显明王权'], ['妇女发现空坟墓、以马忤斯的道路', '圣经开启、擘饼与回转耶路撒冷', '复活主在解释经文，也在同行'], ['向门徒显现、吃鱼、开启心窍', '从耶路撒冷开始作见证', '复活不是结尾，而是见证的起点'], ['全书结构回望、主的应许', '在圣殿中欢喜赞美', '从应许、道路到见证，学习继续等候'],
];

const chapterGuideOverrides: Record<number, string[]> = {
  12: ['假冒与恐惧、无知财主', '不要忧虑、警醒等候、分辨时代', '从财物与日常忧虑进入天国的忠心'],
  13: ['悔改与无花果树、安息日医治', '芥菜种、面酵、窄门', '耶稣为耶路撒冷哀哭'],
  14: ['安息日宴席、谦卑与怜悯', '大筵席的邀请、计算跟随代价', '从座位、餐桌到十字架的门徒生活'],
  15: ['失羊与失钱的比喻', '小儿子回家与父亲的拥抱', '大儿子站在门外：恩典如何成为共同喜乐'],
  16: ['不义管家与钱财的忠心', '法利赛人爱钱、律法与神国', '财主与拉撒路：看见门口的贫穷'],
  17: ['绊倒、饶恕与信心', '十个麻风病人与感恩', '神的国已经临在，也将完全显明'],
  18: ['寡妇与不义的官、恒切祷告', '法利赛人与税吏、小孩子', '富足的官、受难预告、瞎子得看见'],
  19: ['撒该与救恩进家', '十锭银子与受托', '荣耀进城、为耶路撒冷哭泣、洁净圣殿'],
  20: ['权柄质问与凶恶园户', '纳税给该撒、复活的争论', '大卫之子与文士、弱者与权力'],
  21: ['寡妇的两个小钱与圣殿', '圣殿被毁、战争、逼迫与见证', '人子来到、无花果树、警醒祷告'],
  22: ['阴谋、逾越节与圣餐', '谁为大、彼得被筛与不认主', '客西马尼、被捕与受审'],
  23: ['彼拉多与希律、被判钉十字架', '古利奈人西门与各各他', '十字架赦免、死亡与安葬'],
  24: ['空坟墓与妇女见证', '以马忤斯的同行、擘饼与经文', '显现、开启心窍、祝福与差遣'],
};

const chapterNotes: StudyNote[] = [
  { range: '1:1–4', title: '为要叫你知道所学之道都是确实的', scene: '想象一间点着油灯的房间：手边有口述见证、早期记载和一位正在学习信仰的读者。路加没有从神迹开场，而是先说明他为何写、写给谁，以及怎样把传下来的见证整理成一条可以跟随的路。', scripture: '路加先说明写作不是传闻汇编，而是经过考察、按次序整理的见证。', literal: '作者把读者带到一个可以信靠的叙事中：福音既有信仰意义，也有见证的历史形状。“确实”不是取消思考，而是邀请人把信仰放在可查考的见证上。', context: '第一世纪的希腊—罗马写作常以致意对象、资料来源和写作目的开头；“按着次序”可以指为读者整理出清楚的叙事路径，并不一定只指严格的时间顺序。提阿非罗的身份不能武断确定为某位官员。', connection: '可对照徒 1:1–3，看见路加福音与使徒行传像一部两卷本见证；也可回看申 19:15，留意圣经对见证与确证的重视。', life: '讨论：我们的信仰哪些部分来自经文，哪些只是“教会里听来的说法”？操练：本周选一件信仰疑问，先写下经文根据，再和组员一起查考，而不是急着用一句口号盖过去。' },
  { range: '1:5–25', title: '你的祈祷已经被听见了', scene: '耶路撒冷的早晨，圣殿里有祭司轮值，外院的百姓在等待。香烟从圣所升起，撒迦利亚独自进去服事；就在这套延续已久的敬拜秩序里，一个年老、无子的家庭忽然被神点名。', scripture: '撒迦利亚与以利沙伯年老无子；天使宣告约翰将使许多人回转，预备主的道路。', literal: '神的回应不只是解决一个家庭的遗憾，而是把一个孩子放在救赎历史的前奏中。撒迦利亚的迟疑也被保留下来：圣经没有把信心写成没有挣扎的样子。', context: '希律大帝仍在位；圣殿是犹太人共同敬拜与身份记忆的中心。祭司按班次服事，香坛前的烟与外面百姓的祷告同场出现；路加把私人愿望放回公共敬拜。经文说的是圣所的“殿”，不是一年一次的大祭司进入至圣所。', connection: '可串联玛 3:1、玛 4:5–6 与赛 40:3，留意“预备道路”和“使父亲的心转向儿女”的先知回声；也可对照启 8:3–4，观察香与祷告在新约中的象征联系。', life: '讨论：长期没有答案的祷告会怎样塑造我们？操练：把一个等待中的祷告写成“我期待什么／神可能正在预备什么／今天我仍可忠心做什么”三行，和组员彼此代祷。' },
  { range: '1:26–38', title: '我没有出嫁，怎么有这事呢？', scene: '加利利的拿撒勒不是权力中心，只是一座普通村落。马利亚正在一个有婚约承诺、也有社会眼光的生活阶段；她没有站在圣殿祭坛前，而是在自己的房间里，听见一个会改变名誉、婚姻和未来的消息。', scripture: '天使向马利亚宣告耶稣的降生，马利亚以“情愿照你的话成就在我身上”回应。', literal: '马利亚先提出问题，再作出顺服；她不是掌控计划，而是在不确定、可能受误解的处境中信靠神的应许。“主的使女”是主动把自己交给神，不是被动失去声音。', context: '拿撒勒是加利利的小村落，远离耶路撒冷的宗教权力中心。“已经许配”在当时是有社会与法律重量的婚约阶段，不等同于现代约会；经文没有交代马利亚年龄，不能用后来的猜测代替文本。', connection: '可对照撒下 7:12–16、诗 2:7 与赛 9:6–7，体会“大卫宝座”“至高者的儿子”如何把婴孩放进王权应许；也可回看太 1:18–25，比较马太与路加的叙事焦点。', life: '讨论：我们是否只在答案清楚时才愿意顺服？操练：找出一个你一直想先掌控结果的决定，写下一个既诚实又可执行的顺服行动，并邀请可信任的组员陪你辨别。' },
  { range: '1:39–45', title: '我主的母到我这里来，这是从哪里得的呢？', scene: '马利亚从加利利南下，走进犹大山地一户普通家庭。她还没有任何公开证明，只有一个难以向人解释的应许；以利沙伯一听见她问安，腹中的孩子跳动，家里的空气先于众人承认神正在工作。', scripture: '马利亚探访以利沙伯；两个未出生的孩子都在神的工作中彼此回应。', literal: '神的应许没有把人孤立，反而把两个家庭带入彼此确认、彼此祝福的关系。以利沙伯没有抢走马利亚的故事，她用祝福帮助对方听见自己正在经历的恩典。', context: '从拿撒勒到犹大山地是跨地区旅程；“山地”连接着犹大传统中的圣城、祭司家庭和先知记忆。路加让女性成为最早确认应许的见证者，打破“只有公开权力才算重要见证”的阅读习惯。', connection: '可连到创 18:1–15、创 21:1–7 与撒上 1–2 章，比较不可能怀孕的故事如何成为神信实的记号；也可回看路 1:15、41，留意圣灵在出生叙事中的主动工作。', life: '讨论：我们的信仰群体是让人更确定神恩典，还是让人更害怕被评判？操练：这两周主动向一位正在等待或承担压力的人说一句具体的祝福，不急着给建议。' },
  { range: '1:46–56', title: '我心尊主为大，直到回到家中', scene: '两位妇女在家中相对而立，一个年长，一个年轻；她们都面对身体和未来的巨大改变。马利亚没有把歌唱成私人日记，而是把自己的怀孕放进亚伯拉罕、以色列和世世代代受压者的故事里。歌唱之后，她仍在以利沙伯那里住了约三个月，然后回到自己的家；神的应许既进入宏大的历史，也落在一段真实的等待与归途中。', scripture: '马利亚的诗歌颂赞神顾念卑微者，使饥饿的得饱足，并记念对亚伯拉罕的应许；她在以利沙伯那里住了约三个月，随后回家。', literal: '赞美不是逃避现实；它重新命名现实。马利亚反复使用强有力的动作描写神：看顾、施展大能、叫有权柄的降卑、叫卑微的升高、叫饥饿的得饱足。第 56 节把诗歌带回日常：信心的歌唱之后，仍有一段需要生活、等待并回家的路。', context: '古代敬拜常用诗歌保存群体记忆；路加把这首歌放在个人故事与以色列历史的交界处。它不是温柔的私人抒情，而是对神如何翻转骄傲、权势与匮乏的神学宣告。马利亚住了约三个月后回家，也把尊主颂与下一段约翰出生的叙事连接起来。', connection: '可对照撒上 2:1–10、诗 113:5–9、诗 146:5–9，听见“神抬举卑微者”的旧约回声；再回看路 4:18–19，观察耶稣如何把这条线带入公开事奉。', life: '讨论：我们的敬拜是否只说“我得着了什么”，还是也看见神对弱小者、公义与群体的心意？操练：本周写一段三节的赞美：一节记念神已经做过的事，一节为被忽略的人代求，一节写出你愿意参与的行动。' },
  { range: '1:57–66', title: '他的名字是约翰', scene: '孩子出生，亲属和邻居来到家里庆贺。大家以为名字会沿用家族传统；一个刚恢复说话的父亲却拿起写字板，写下一个不属于家族惯例、却属于神应许的名字。房间里的惊讶，变成整座山地的议论。', scripture: '约翰出生后，父母没有按家族习惯取名，而是顺服天使的吩咐。', literal: '名字表明这孩子属于神的计划，不被家族传统或人的意见重新定义。撒迦利亚恢复说话不是为了证明自己，而是让邻舍重新敬畏神，并追问这孩子将来要成为什么样的人。', context: '亲属按家族命名的期待很自然，但路加刻意写出期待与神话语之间的张力。“约翰”意为神施恩的名字，与整章“神记念、神成就”的主题相连；不要把它读成一个人的自我品牌。', connection: '可串联路 1:13 与路 1:20，留意名字与说话的恢复都指向神的应许；也可回看士 13:2–14，比较参孙出生预告与约翰作为分别为圣、预备道路者的相似与不同。', life: '讨论：我们有没有把家族、教会或职场对人的期待，当成神对人的最终定义？操练：为一位年轻人或正在寻找方向的组员写下三句“神已经赐给他的恩典”，用祝福代替贴标签。' },
  { range: '1:67–79', title: '以色列的神是应当称颂的', scene: '撒迦利亚沉默了许久，第一段公开的话不是为自己辩解，而是一首把新生儿放回救赎历史的诗。他从“大卫的角”唱到“高天的日光”，像从圣殿的阴影一路唱到将要照进黑暗的人间。', scripture: '撒迦利亚被圣灵充满，先颂赞救赎，再说明约翰将预备主的道路。', literal: '神的拯救被描述为从仇敌和黑暗中释放，使人可以一生在祂面前坦然无惧地事奉。约翰不是救主，而是先知性的前行者；真正的拯救焦点仍然是神亲自临到祂的百姓。', context: '这是一首充满旧约语言的圣灵感动之歌；“角”是力量与王权的意象，“从高天临到”则把拯救想象成日出、光照和引导。路加没有把信仰缩成家庭喜事，而是放回被外邦权力和地方王权夹住的以色列盼望。', connection: '可对照撒下 7:8–16、诗 132:17、赛 9:2、玛 3:1 与玛 4:5–6；到路 24:27 再看，复活的耶稣如何把这些应许解释为自己的道路。', life: '讨论：成熟的属灵眼光，能否在孩子、工作和日常小事中认出更大的救赎故事？操练：每天结束时记下一件“神今天如何带我走在平安路上”的证据，连续七天后在小组分享。' },
  { range: '1:80', title: '那孩子渐渐长大，心灵强健', scene: '故事暂时离开聚集的人群。约翰在旷野长大，没有掌声、舞台和即时反馈；在圣殿的烟、山地的祝福之后，路加把镜头停在一个被隐藏的成长阶段，直到神所定的日子来到。', scripture: '约翰在旷野生活，直到显明在以色列人面前的日子。', literal: '神的预备常发生在公开服事以前；隐藏期不是空白，而是塑造。路加用“直到”保留了时间的张力：成长不是终点，公开显明也不是靠人的自我推广。', context: '旷野在以色列记忆中同时指向出埃及、先知的呼召和重新听见神的地方；路加稍后用赛 40:3–5 描写约翰的公开使命。经文没有说明他童年的每个细节，阅读时应分清文本与后来的传说。', connection: '可连到玛 4:5–6、赛 40:3–5、路 3:1–6，也可对照加 1:15–18，思考“隐藏的预备”如何服务于后来清楚的见证。', life: '讨论：我们是否把“被看见”误当成“有价值”？操练：为自己安排一段不公开、不求表现的忠心：祷告、陪伴、学习或修复关系，并把结果交给神。' },
];

const chapterData: Chapter[] = chapterThemes.map(([title, focus], index) => ({
  no: index + 1, title, focus,
  summary: index === 0 ? '从可靠的见证开始，神在两个普通家庭中开启救赎的序章。' : `沿着耶稣从加利利走向耶路撒冷的道路，${focus}`,
  setting: index === 0 ? '希律作犹太王；圣殿、拿撒勒与犹大山地成为应许展开的三个场景。' : `本章位于路加福音的${index < 19 ? '加利利与旅程段落' : '耶路撒冷段落'}，适合先读完整章，再回到关键段落。`,
  sections: chapterGuideOverrides[index + 1] ?? chapterGuides[index] ?? [],
  crossRefs: index === 0 ? ['创 12:1–3 · 亚伯拉罕之约', '撒上 2:1–10 · 哈拿的祷告', '玛 4:5–6 · 以利亚的应许'] : [`太 ${index + 1} · 平行叙事与不同焦点`, `诗 ${Math.max(1, index + 1)} · 旧约祷告的回声`, `徒 ${Math.min(28, index + 1)} · 见证如何延伸`],
  questions: index === 0 ? ['我在本章看见神怎样在等待中工作？', '马利亚、以利沙伯、撒迦利亚的回应有什么不同？', '本周我可以怎样让“神的应许”进入一个具体关系？'] : [`本章最挑战我原有观念的哪一处？`, '耶稣在这里如何看待被忽略的人？', '小组可以怎样把本章的一个动作带进这两周的生活？'],
  practice: index === 0 ? '找一个仍在等待中的祷告，用本章的三种回应（诚实、聆听、顺服）写下祷告，再找一位组员彼此代祷。' : `在未来两周刻意练习“${focus}”：记录一次具体场景，下次小组分享经文如何改变你的回应。`,
  prayer: index === 0 ? '主啊，在等待与不明白中，求你使我们像马利亚一样听见、像以利沙伯一样祝福、像撒迦利亚一样重新学会赞美。' : `主耶稣，求你让我们不只知道“${focus}”，也在今天的关系和选择中活出来。`,
  notes: index === 0 ? chapterNotes : chapterNotesByChapter[index + 1],
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
      <section className="content-column"><div className="chapter-hero"><div className="chapter-hero-top"><span className="chapter-tag">第 {chapter.no} 章</span><span className="hero-meta">LUKE · {String(chapter.no).padStart(2, '0')} <span>／</span> 约 20 分钟阅读</span></div><h1>{chapter.title}</h1><p className="hero-summary">{chapter.summary}</p></div><div className="tab-panel"><div className="panel-heading"><div><p className="section-label">01 / 逐段阅读</p><h2>先读经文，再让问题打开经文</h2></div><button type="button" className={isCurrent ? 'complete-button done' : 'complete-button'} onClick={toggleCompleted}>{isCurrent ? '✓ 本章已查考' : '标记本章已查考'}</button></div><div className="reading-map"><span className="map-kicker">本章路线</span><div className="map-steps">{chapter.sections.map((section, index) => <div className="map-step" key={section}><span>{String(index + 1).padStart(2, '0')}</span><p>{section}</p></div>)}</div></div><div className="notes-list">{(chapter.notes ?? chapter.sections.map((section, index) => ({ range: `本章 · ${String(index + 1).padStart(2, '0')}`, title: section, scene: `先把自己放进${chapter.setting}，再完整朗读这一段，想象人物怎样说、怎样做，以及叙事何处发生转折。`, scripture: '先完整朗读这一段，留意人物怎样说、怎样做，以及叙事何处发生转折。', literal: '把观察写成一句不带解释的事实：谁在什么处境中回应了谁。', context: chapter.setting, connection: `可与本章的${chapter.crossRefs[index % chapter.crossRefs.length]}互相参照，留意同一主题在不同经文中的展开。`, life: chapter.questions[index % chapter.questions.length] }))).map((note, index) => <StudyNoteCard key={note.range} note={note} index={index} />)}</div><div className="pause-card"><span className="pause-symbol">⌁</span><div><p className="section-label">停一下</p><p>哪一个词、哪一个人物或哪一个动作反复出现在你眼前？先不要急着解释，和组员分享你实际看见了什么。</p></div></div></div></section>
      <aside className="right-rail"><div className="rail-card focus-card"><div className="card-icon">✧</div><p className="section-label">本章焦点</p><h3>{chapter.focus}</h3><p>{chapter.summary}</p><button type="button" onClick={() => document.getElementById('discussion')?.scrollIntoView({ behavior: 'smooth' })}>去小组讨论 <span>↗</span></button></div><div className="rail-card group-card" id="discussion"><div className="card-topline"><p className="section-label">小组讨论</p><span>3 / 3</span></div><h3>一起问，慢慢听</h3><p>好的问题不急着得到标准答案，先让每个人诚实地说出经文怎样碰到自己。</p><ol><li>我看见了什么？</li><li>这让我想到什么？</li><li>我可以怎样回应？</li></ol><button type="button" onClick={() => document.getElementById('discussion')?.scrollIntoView({ behavior: 'smooth' })}>打开讨论卡 <span>→</span></button></div><div className="quote-card"><span>“</span><p>读经不是把经文变小，而是让我们的生活重新被它照亮。</p><small>— 小组查经笔记</small></div></aside>
    </div><footer className="site-footer"><span>在福音的路上</span><span>每两周一章 · 读进去，也活出来</span><span>路加福音 01—24</span></footer>
  </main>;
}

function StudyNoteCard({ note, index }: { note: StudyNote; index: number }) { return <article className="study-note"><div className="note-index">{String(index + 1).padStart(2, '0')}</div><div className="note-body"><div className="note-heading"><span className="verse-range">{note.range}</span><h3>{note.title}</h3></div><div className="note-scene"><span className="note-label">进入现场</span><p>{note.scene}</p></div><div className="note-thesis"><span className="note-label">本段主旨</span><p>{note.scripture}</p></div><div className="note-observation"><span className="note-label">经文观察</span><p>{note.literal}</p></div><div className="note-supporting"><div className="note-context"><span className="note-label">历史窗口</span><p>{note.context}</p></div>{note.connection && <div className="note-connection"><span className="note-label">旧约／新约回声</span><p>{note.connection}</p></div>}</div>{note.life && <div className="note-life"><span className="note-label">信仰生活讨论</span><p>{note.life}</p></div>}</div></article>; }
