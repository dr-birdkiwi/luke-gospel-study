'use client';

import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { applyDeepStudyEnhancement, applyResearchReview, chapterNotesByChapter, type CitationScope, type StudyCitation, type StudyNote } from './chapterNotes';
import { bibleGatewayUrl, chapterEightCitationsByRange, chapterEightReferences, chapterEighteenCitationsByRange, chapterEighteenReferences, chapterElevenCitationsByRange, chapterElevenReferences, chapterFifteenCitationsByRange, chapterFifteenReferences, chapterFiveCitationsByRange, chapterFiveReferences, chapterFourCitationsByRange, chapterFourReferences, chapterFourteenCitationsByRange, chapterFourteenReferences, chapterNineCitationsByRange, chapterNineReferences, chapterNineteenCitationsByRange, chapterNineteenReferences, chapterOneCitationsByRange, chapterOnePassageUrl, chapterOneReferences, chapterSevenCitationsByRange, chapterSevenReferences, chapterSeventeenCitationsByRange, chapterSeventeenReferences, chapterSixCitationsByRange, chapterSixReferences, chapterSixteenCitationsByRange, chapterSixteenReferences, chapterTenCitationsByRange, chapterTenReferences, chapterThirteenCitationsByRange, chapterThirteenReferences, chapterThreeCitationsByRange, chapterThreeReferences, chapterTwelveCitationsByRange, chapterTwelveReferences, chapterTwoCitationsByRange, chapterTwoReferences, chapterTwentyFourReferences, chapterTwentyOneReferences, chapterTwentyReferences, chapterTwentyThreeReferences, chapterTwentyToTwentyFourCitationsByRange, chapterTwentyToTwentyFourReferences, chapterTwentyTwoReferences, type ChapterReference } from './academicCitations';
import { chapterFrames, getBookMovement, lukeBookMovements, readingLayers, type ChapterFrame } from './chapterFramework';
import { pastoralGuides, pastoralMethodReferences, type PastoralGuide } from './pastoralGuides';
import { getLukePassage, getRelatedPassages, SCRIPTURE_SOURCE, SCRIPTURE_VERSION, type Passage } from './scripture';

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
  ['应许中的救主：神亲自开启救恩', '在等待中，怎样听见、相信并见证神的话？'],
  ['救主进入人的日常', '神如何住进家庭、成长与等候？'],
  ['为主预备道路', '真实悔改怎样进入生活？'],
  ['圣子在圣灵里展开使命', '在压力中，谁定义我们的身份？'],
  ['赦罪并呼召人的主', '蒙赦免的人怎样离开旧路？'],
  ['怜悯人的安息日之主', '蒙天父怜悯的人怎样生活？'],
  ['回应哀伤、疑问与罪人的主', '我是否在真实处境中认出耶稣？'],
  ['主的话、权柄与恢复', '我怎样听道，也怎样在风浪中信靠主？'],
  ['受苦与荣耀的基督', '我所跟随的是怎样的弥赛亚？'],
  ['被差遣者与真正的邻舍', '爱神与爱人怎样成为一条路？'],
  ['祷告的儿女与更强的主', '我的祷告和敬虔是否从里面真实？'],
  ['天父看顾警醒的门徒', '在忧虑、拥有与等待中，谁掌管我的心？'],
  ['悔改、释放与生长的神国', '我如何回应神的忍耐与邀请？'],
  ['恩典筵席与门徒代价', '恩典如何重排座位和优先次序？'],
  ['寻找失丧者并一同欢喜', '我是在回家，还是站在门外？'],
  ['在钱财上忠于神国', '我如何使用主人所托付的资源？'],
  ['已经临到、仍要完成的神国', '我是否在恩典中回到主面前？'],
  ['呼求公义，空手领受并跟随', '我用什么姿态来到主前？'],
  ['寻找失丧者的王进入圣城', '救恩如何进入家庭、金钱与城市？'],
  ['圣殿中真正的主', '谁真正拥有神的殿、人的生命与未来？'],
  ['震动中仍掌权的人子', '末世盼望怎样塑造今天的清醒？'],
  ['为门徒舍己的新约之主', '被爱、被筛与被恢复的人怎样忠心？'],
  ['为罪人受死的无罪君王', '十字架怎样成就赦免与救恩？'],
  ['身体复活并差遣人的主', '失望者如何成为见证人？'],
];

const chapterGuidesByChapter: Record<number, string[]> = {
  1: ['可靠的序言、撒迦利亚的迟疑与约翰的应许', '马利亚的回应、两位母亲相遇与尊主颂', '约翰出生、撒迦利亚颂歌与预备主的道路'],
  2: ['约瑟与马利亚、牧羊人、献上婴孩耶稣', '西面与亚拿的等候、少年耶稣在圣殿', '神的儿子也在家庭、成长与等候中显明'],
  3: ['约翰的悔改信息、耶稣受洗、家谱', '悔改的果子与圣灵的见证', '从身份被确认到进入旷野预备'],
  4: ['旷野试探：忠信的爱子拒绝捷径', '拿撒勒的恩年宣告与不受占有的恩典', '迦百农的权柄、受差遣与继续传扬神国'],
  5: ['空网、满网与渔夫的新呼召', '洁净、赦罪与利未的筵席', '新郎、新酒与敬虔生活的新时机'],
  6: ['安息日之主与十二使徒', '平原上的福与祸、爱仇敌', '省察、果子与听道实行的根基'],
  7: ['百夫长的信心与拿因寡妇的哀伤', '约翰在疑问中重新辨认弥赛亚', '被赦免的女人与自义的饭桌'],
  8: ['妇女同行、撒种比喻与听道', '风浪与湖东释放：耶稣是谁', '血漏妇人与睚鲁女儿：两种等候'],
  9: ['十二门徒被差、群众得饱与彼得认信', '受苦的基督、登山变像与山下需要', '接待微小者，定意走向耶路撒冷'],
  10: ['七十／七十二人带着平安被差遣', '撒玛利亚人的怜悯：成为受伤者的邻舍', '马大与马利亚：服事从聆听主开始'],
  11: ['主祷文、恒切祈求与父赐圣灵', '神国胜过黑暗，听道并遵守才有福', '约拿的记号、里面的光与宗教重担'],
  12: ['假冒与恐惧、无知财主', '不要忧虑、警醒等候、分辨时代', '从财物与日常忧虑进入天国的忠心'],
  13: ['悔改与无花果树、安息日医治', '芥菜种、面酵、窄门', '耶稣为耶路撒冷哀哭'],
  14: ['安息日宴席、谦卑与怜悯', '大筵席的邀请、计算跟随代价', '从座位、餐桌到十字架的门徒生活'],
  15: ['失羊与失钱的比喻', '小儿子回家与父亲的拥抱', '大儿子站在门外：恩典如何成为共同喜乐'],
  16: ['不义管家与钱财的忠心', '法利赛人爱钱、律法与神国', '财主与拉撒路：看见门口的贫穷'],
  17: ['绊倒、饶恕与信心', '十人得洁净，撒玛利亚人回来感谢', '神的国已经临在，也将完全显明'],
  18: ['寡妇与不义的官：恒切祷告并求公义', '法利赛人与税吏、小孩子', '富足的官、受难预告、瞎子得看见'],
  19: ['王先进入人的家：撒该与“今天”的救恩（19:1–10）', '神的国不会按人的时间表立刻完成：十锭银子与等候中的忠心（19:11–27）', '王走近圣城：和平的欢呼、为城的眼泪与圣殿的审判（19:28–48）'],
  20: ['权柄不是头衔：约翰的洗礼与凶恶园户', '该撒的银币与神所要的人', '复活的生命、大卫的主与受托者'],
  21: ['寡妇的两个小钱与圣殿', '圣殿与耶路撒冷的震动：从预告毁坏到门徒见证', '人子来临、无花果树与警醒祷告'],
  22: ['阴谋、逾越节与圣餐', '谁为大、彼得被筛与不认主', '橄榄山的祷告、被捕与受审'],
  23: ['彼拉多与希律、被判钉十字架', '古利奈人西门与各各他', '十字架赦免、死亡与安葬'],
  24: ['空坟墓与妇女见证', '以马忤斯的同行、擘饼与经文', '显现、开启心窍、祝福与差遣'],
};

const chapterSummaries = [
  '路加从可靠见证写起；神的话临到两个家庭，圣灵使人相信、赞美，并预备迎接救主。',
  '耶稣在伯利恒、圣殿与拿撒勒之间进入人的家庭，也进入以色列的敬拜与盼望。',
  '约翰在帝国权力的年代呼召悔改；耶稣受洗、被确认，并以家谱进入全人类的历史。',
  '父所喜爱的儿子拒绝三条使命捷径，在拿撒勒说明自己为何受膏，又在迦百农以教导、释放、医治和传讲神国展开使命。',
  '耶稣在人的劳作、疾病、罪疚与社会标签中施行洁净和赦免，呼召渔夫与税吏起来跟随，并借筵席、禁食和新酒说明祂所带来的更新。',
  '安息日的主选择行善与恢复；祂在整夜祷告后召聚十二人，又以福与祸、爱仇敌、自省和遵行塑造门徒群体。',
  '百夫长、寡妇、施洗约翰和席间被称为罪人的女人，都在耶稣的权柄、怜悯与赦免中面对“祂究竟是谁”。',
  '神的话呼召人持守；耶稣又在湖上、湖东和人群中胜过风浪、辖制、长期疾病与死亡，使人恢复关系和见证。',
  '门徒被差遣、群众得饱、彼得认信；耶稣以十字架解释弥赛亚的荣耀，并定意走向耶路撒冷。',
  '七十／七十二人被差遣，撒玛利亚人的怜悯打破责任边界，马利亚在主脚前的聆听则校正忙乱的服事。',
  '耶稣教导祷告、应许圣灵、显明神国胜过黑暗，并揭露里面没有光的宗教假冒。',
  '在忧虑、财富、等候与家庭分裂中，耶稣要求门徒把忠心落实在日常选择。',
  '灾难不是优越感的证据；耶稣以悔改、怜悯、神国成长和窄门回应耶路撒冷的危机。',
  '宴席中的座位、邀请与计算代价，重新安排门徒如何看待尊荣、资源和跟随。',
  '失羊、失钱和失子共同揭开父的喜乐，也把站在门外的自义带到光中。',
  '管家、律法、财主与拉撒路把钱财问题推进到永恒：我们如何使用受托的一切？',
  '从绊倒、饶恕、十人得洁净到神国已经临到而仍要显明，信心在关系、感恩和等待中被检验。',
  '寡妇为公义恒切呼求，税吏与孩子空手领受，富足的官却陷入忧愁；耶稣继续走向受难，也使路旁呼求的人得以看见并跟随。',
  '耶稣先把“今天”的救恩带进撒该的家，又纠正人以为神的国会立刻公开完成的期待；从这里开始，王将以和平进入圣城、在十字架上作王，并在复活后把见证带向万邦。',
  '在耶路撒冷圣殿，耶稣逐一揭露谁在拒绝神、谁只是受托管理，以及真正的王权如何面对税收、死亡与弱者。',
  '在圣殿的宏伟、城市的震动和末世的未知之间，耶稣教门徒不靠恐惧或日期，而靠清醒、忍耐、祷告和见证等候神国。',
  '逾越节的桌边、门徒的争大、彼得的失败和橄榄山的祷告，把“主为你们舍己”带进受难前夜的忠心与软弱。',
  '耶稣在政治与宗教权力之间被交付；祂在十字架上赦免、受死，并被安放在坟墓，显明一种不靠暴力自证的王权。',
  '空坟墓、以马忤斯、经文开启、身体复活与升天，把失望、疑惑的门徒转成回到耶路撒冷的见证人；神国已经在耶稣里临到，却要经过复活、圣灵与见证走向万邦，等待最终完全显明。',
];

const chapterSettings = [
  '希律作犹太王；圣殿、拿撒勒与犹大山地成为应许展开的三个场景。',
  '伯利恒的出生地、耶路撒冷圣殿与加利利的拿撒勒，交织出家庭、礼仪与成长的空间。',
  '提庇留在位第十五年，约旦河与旷野成为帝国地图之外、却承载神话语的地方。',
  '旷野、拿撒勒会堂与迦百农的会堂、家庭和城门，构成耶稣公开事奉的起点。',
  '革尼撒勒湖、加利利城镇、住宅屋顶与税关，把劳作、疾病、罪疚和社会边界带到耶稣面前。',
  '麦地、会堂、山上祷告和平地人群连成一条路：从安息日争议，到十二使徒被召，再到门徒共同生活的教导。',
  '迦百农、拿因和加利利的筵席，让军事权柄、死亡、债务与赦免彼此相遇；百夫长所属军队的具体性质仍有讨论。',
  '加利利各城、湖上航行、湖东地区与会堂家庭，成为神的话被听见、人在危机中被恢复的现场。',
  '本章从加利利事工转向耶路撒冷旅程；山上、山下与撒玛利亚村庄都在这条路上。',
  '耶稣从加利利南行，经过乡镇道路、撒玛利亚边界和普通家庭，教导门徒怎样成为邻舍。',
  '旅程中的住宅、饭桌与公共空间，让祷告、神国冲突、内在的光和宗教权力彼此碰撞。',
  '耶稣继续走向耶路撒冷；家庭、田地、仓房和法庭成为警醒与分辨的日常场景。',
  '旅程中的村镇、安息日会堂和通往耶路撒冷的路，把灾难、悔改和末世筵席放在一起。',
  '法利赛人家中的安息日宴席成为观察座位、邀请和门徒代价的公共课堂。',
  '旅程路上的失落与回家，以家庭、田野、邻舍和宴席呈现神寻找人的心。',
  '旅程中的财物、债务、门口与餐桌，揭露财富如何塑造人看见谁、忽略谁。',
  '撒玛利亚与加利利边界、旅程道路和末世盼望交汇，感恩者从边缘回来敬拜。',
  '旅程接近耶路撒冷；祷告场景、孩子、税吏、富足者与瞎子共同显示谁能看见神国。',
  '从耶利哥到耶路撒冷的路上，撒该的家、王权比喻、橄榄山、圣城和圣殿连成一条叙事线。',
  '耶路撒冷圣殿成为权柄争议的中心；在同一片公共空间里，宗教领袖、罗马税制、复活盼望和弱者的处境彼此交锋。',
  '圣殿与橄榄山之间，奉献、毁坏、战争、逼迫和人子盼望共同塑造门徒的警醒；这里既连着公元 70 年的历史创伤，也保留最终盼望的张力。',
  '耶路撒冷逾越节夜晚、门徒聚集的房间、橄榄山与大祭司的家组成受难前夜；节期的救赎记忆与黑暗中的背叛彼此交锋。',
  '耶路撒冷的审判场、各各他与新坟墓，把罗马刑罚、宗教指控、受害者的哀恸和赦免的王权并置。',
  '耶路撒冷、以马忤斯道路与伯大尼附近，把空坟墓、经文解释、身体显现和升天连成从失望到见证的道路。',
];

const chapterCrossRefs: Record<number, string[]> = {
  1: ['撒上 2:1–10 · 哈拿祷告与卑微者被抬举', '玛 3:1；4:5–6 · 预备主道路', '徒 1:1–3 · 两卷本见证的开端'],
  2: ['弥 5:2 · 伯利恒与大卫应许', '利 12:1–8 · 产后洁净与穷人祭物', '赛 42:6；49:6 · 外邦人的光'],
  3: ['赛 40:3–5 · 旷野与预备道路', '撒下 7:12–16 · 大卫之约', '罗 5:12–19 · 亚当与基督'],
  4: ['申 6–8 · 旷野试验与忠心', '赛 61:1–2；58:6–7 · 受膏者与释放', '王上 17:8–16；王下 5:1–19 · 恩典临到外邦人'],
  5: ['诗 103:2–3 · 赦罪与医治', '利 13–14 · 洁净与重返群体', '可 2:1–22 · 赦罪、同席与新酒'],
  6: ['出 20:8–11；申 5:12–15 · 安息日', '利 19:18 · 爱邻舍', '太 5–7 · 平原宝训的平行与差异'],
  7: ['王上 17:8–24；王下 4:18–37 · 先知与生命', '赛 61:1–2 · 受膏者行动', '太 11:2–6 · 约翰的疑问与回应'],
  8: ['赛 55:10–11 · 撒种与神的话', '诗 107:10–16 · 从捆绑中被领出', '可 4:1–41 · 撒种、平静风浪与释放'],
  9: ['出 24:15–18；王上 19:8–18 · 山上的启示', '王下 1:9–16 · 火降与拒绝报复', '徒 1:6–8 · 从耶路撒冷向万民作见证'],
  10: ['利 19:18 · 邻舍与爱人', '民 11:16–30 · 七十人与圣灵', '约 13:1–17 · 听道与服事'],
  11: ['诗 103:8–13 · 父的怜悯', '创 18:16–33 · 持续代求与应许', '太 6:9–13；12:22–32 · 平行与神国冲突'],
  12: ['箴 23:29–35 · 醉酒与失去清醒', '诗 55:22 · 把忧虑交给神', '太 6:25–34；24:42–51 · 忧虑与警醒'],
  13: ['伯 1–2；约 9:1–3 · 灾难与报应观', '赛 25:6–9 · 末世筵席', '路 19:41–44 · 耶路撒冷的哀哭与审判'],
  14: ['箴 25:6–7 · 宴席中的谦卑', '申 15:7–11 · 对贫穷人的开放', '腓 2:3–8 · 基督式的降卑与服事'],
  15: ['诗 103:8–13 · 父的怜悯', '何 11:1–9 · 以色列与父的心', '弗 2:13–19 · 远近的人在基督里和好'],
  16: ['申 15:7–11 · 财物与穷人', '摩 6:4–7 · 奢华与冷漠', '提前 6:17–19 · 富足者如何行善'],
  17: ['利 13–14 · 洁净与重新进入群体', '王下 5:1–19 · 外族人的医治与感恩', '罗 14:17–19 · 神国与共同体'],
  18: ['申 10:17–18 · 神为弱者伸冤', '诗 51:17 · 谦卑的心', '可 10:13–52 · 门徒、财富与看见'],
  19: ['出 22:1–4 · 赔偿与修复', '亚 9:9–10；诗 118:25–27 · 谦和、和平而来的王', '赛 56:6–7；耶 7:1–11 · 祷告之殿与虚假安全'],
  20: ['赛 5:1–7 · 葡萄园与受托者', '出 3:6；申 25:5–10 · 复活与婚姻律例', '创 1:26–27；诗 110:1 · 神的形象与大卫的主'],
  21: ['耶 7:1–15 · 圣殿与虚假的安全', '但 7:13–14 · 人子与末世掌权', '帖前 5:1–8 · 清醒、盼望与见证'],
  22: ['出 12 · 逾越节与出埃及', '耶 31:31–34 · 新约应许', '林前 11:23–26 · 圣餐传统与记念'],
  23: ['赛 53:7–12 · 受苦仆人', '诗 31:5；22:7–18 · 交托与被羞辱', '徒 4:25–28 · 权力合谋与神的计划'],
  24: ['诗 16:9–10 · 不被撇在阴间', '赛 53 · 受苦与荣耀', '徒 1:1–11；15:13–18 · 升天、见证与以色列应许'],
};

const chapterNotes: StudyNote[] = [
  { range: '1:1–4', title: '为要叫你知道所学之道都是确实的', scene: '想象提阿非罗展开这卷书：他已经受过信仰教导，却仍需要知道所信的是否可靠。路加没有立刻讲述神迹，而是先交代材料从哪里来、自己怎样查考，以及为什么要写。', scripture: '已经有人整理耶稣的事迹；这些材料来自起初的见证人。路加详细考察后，按次序写给提阿非罗，要使他知道所受的教导确实可信。', literal: '这四节把信仰与神在历史中所成就的事、亲眼见证和忠实传承连在一起。“确实”不是禁止提问，而是说明信心并非建立在未经查证的传闻上。', context: '希腊—罗马的历史著作和传记常在序言中说明题材、资料与目的。“按着次序”可以包括时间先后，也可以指清楚的文学和神学编排；不必把它理解成逐日记录。提阿非罗可能是具有身份的个人，但序言不足以确定他的具体职位。', connection: '可对照徒 1:1–3，看到《路加福音》与《使徒行传》构成前后相接的两卷叙事；也可对照约 20:30–31，观察福音书如何把见证与使人相信的写作目的连在一起。', life: '讨论：我们所相信的内容，哪些真正来自经文，哪些只是长期听惯了的说法？操练：选一个信仰疑问，先查清经文及其上下文，再带到小组讨论，不急着用口号结束问题。' },
  { range: '1:5–25', title: '你的祈祷已经被听见了', scene: '耶路撒冷圣殿里，祭司按班次供职，百姓在外面祷告。撒迦利亚抽签得以进入圣所烧香；就在这项日常却庄重的服事中，天使向这位年老、长期无子的祭司宣告：他的祷告已经蒙垂听。', scripture: '撒迦利亚和以利沙伯敬畏神，却一直没有孩子。天使宣告约翰将出生，使许多人归向神，并为主预备道路；撒迦利亚因不信而暂时不能说话。', literal: '这项应许同时回应一个家庭的痛苦，也推进神对以色列的救赎计划。撒迦利亚的迟疑带来管教，却没有使神收回应许；故事的主角始终是信实成就自己话语的神。', context: '故事发生在希律大帝统治时期。祭司分班在圣殿服事，烧香是在圣所内进行，并不是大祭司一年一次进入至圣所。百姓在外祷告，说明个人家庭的等待被放在以色列共同敬拜与盼望之中。', connection: '玛 3:1、4:5–6 和赛 40:3 共同帮助我们理解约翰“预备道路、使人回转”的使命；撒上 1 章也让人看见，一个无子家庭的祷告怎样被纳入神更大的工作。', life: '讨论：长久等候怎样影响了我们对神的认识？操练：把一个尚未蒙应允的祷告写成三行：“我真实的失落／神已经让我知道什么／今天仍可忠心的一步”，并请可信任的组员陪伴祷告。' },
  { range: '1:26–38', title: '我没有出嫁，怎么有这事呢？', scene: '镜头从耶路撒冷圣殿转到加利利的小村拿撒勒。马利亚已经许配给约瑟，正在普通生活中等候成婚；天使带来的消息却会触及她的身体、婚约、名誉和未来。', scripture: '天使宣告马利亚将由圣灵感孕生子；孩子要名叫耶稣，是至高者的儿子，并承受大卫的王位。马利亚先询问这事怎样成就，随后愿意照神的话发生在自己身上。', literal: '童女怀孕的主动者是神，不是马利亚的能力。她的信心既包括诚实发问，也包括在尚未看见全部后果时领受神的话；真正的顺服并不取消理解、辨认和个人回应。', context: '“已经许配”在当时是具有社会和法律约束的婚约状态，不等同于现代约会；但马利亚尚未与男子同房。经文没有说明她的年龄，我们不能把后来的推测当作事实。', connection: '撒下 7:12–16、诗 2:7 和赛 9:6–7 帮助我们理解“大卫的宝座”“至高者的儿子”等称号；太 1:18–25 则从约瑟的角度讲述同一降生应许。', life: '讨论：我们是否只愿意顺服那些结果已经清楚、代价又在掌控之中的事？操练：找出一个需要辨认的决定，分别写下“经文已经说清什么／我仍不知道什么／今天可以忠心做什么”，并请成熟可信的人陪伴。' },
  { range: '1:39–45', title: '我主的母到我这里来，这是从哪里得的呢？', scene: '马利亚听见以利沙伯怀孕的消息，便赶往犹大山地。她进入撒迦利亚的家问安；以利沙伯腹中的孩子跳动，她也被圣灵充满，以祝福回应这位带着应许而来的年轻女子。', scripture: '以利沙伯被圣灵充满，称马利亚和她所怀的孩子有福，又称她为“我主的母”；她特别称那相信主的话必会成就的人有福。', literal: '圣灵借以利沙伯的话解释这次相遇：马利亚所怀的不是普通孩子，而是“主”。神的话也把两位处境不同的妇女带进彼此确认、彼此祝福的关系；相信应许不是孤立承担，而是在群体中得到扶持。', context: '路加没有说明犹大山地的具体城镇，也没有记载旅程细节，因此不宜过度重建。重要的是，两位妇女成为最早辨认耶稣身份的见证人。腹中孩子的跳动在叙事中是喜乐和先知性回应的记号，不应被扩写成经文没有讨论的医学结论。', connection: '可对照路 1:15、41，留意圣灵怎样贯穿约翰的使命；也可谨慎对照撒下 6:2、9、11、15，观察“我主来到”、跳跃、犹大山地和三个月等细节可能形成的约柜回声。', life: '讨论：我们的群体会帮助人辨认神的恩典，还是让正在承担重担的人更害怕被评判？操练：主动聆听一位正在等待或面对压力的人，用具体祝福陪伴他，不急着解释原因或给出答案。' },
  { range: '1:46–56', title: '我心尊主为大', scene: '在以利沙伯的家中，马利亚把个人蒙恩放进以色列长久的盼望里。她所唱的不只是“我将要得一个孩子”，而是神正在记念亚伯拉罕的应许，眷顾卑微者，并审判骄傲和滥用权力的人。', scripture: '马利亚尊主为大，称神为自己的救主；她赞美神顾念卑微者，使饥饿者得饱足，并记念向亚伯拉罕和他后裔所施的怜悯。她随后在以利沙伯那里住了约三个月。', literal: '尊主颂从马利亚个人的喜乐扩展到世世代代和整个以色列。诗歌用完成式语气颂赞神可靠的作为：祂抬举卑微者、使饥饿者得饱足，也使骄傲和有权势者面对审判。赞美不是逃离现实，而是按照神的信实重新认识现实。', context: '尊主颂大量使用《七十士译本》式的诗篇和先知语言，尤其让人想起哈拿的祷告。路加把赞美诗放在降生叙事的关键转折处，使人物不只经历神的作为，也公开解释这些作为对以色列和受压者意味着什么。第56节又把宏大的诗歌带回等待和日常生活。', connection: '可对照撒上 2:1–10、诗 113:5–9 和诗 146:5–9，听见神抬举卑微者的旧约回声；路 4:18–19、6:20–26 将继续展开贫穷、饥饿、富足与神国翻转的主题。', life: '讨论：我们的敬拜是否只诉说自己得到了什么，还是也让我们看见神对卑微者、公义和群体的心意？操练：写一段三节的赞美：记念神已经做过的事，为容易被忽略的人代求，并写出自己愿意承担的一项行动。' },
  { range: '1:57–66', title: '他的名字是约翰', scene: '孩子出生后，亲属邻舍一同欢喜。到了第八天，众人照家族习惯想给孩子起名撒迦利亚；以利沙伯坚持叫他约翰。仍不能说话的撒迦利亚取来写字板，写下“他的名字是约翰”，这时他的口才立刻开了。', scripture: '以利沙伯和撒迦利亚都照天使的吩咐给孩子起名约翰。撒迦利亚随即恢复说话，称颂神；邻舍因这一连串的事敬畏，并思想这孩子将来如何。', literal: '父母共同顺服神已经说过的话，没有让家族期待改写孩子的名字。撒迦利亚恢复说话后的第一个行动是赞美神；神迹没有把注意力停在他身上，而是使众人留意“主的手与这孩子同在”。', context: '按亲属姓名为孩子命名是自然的家族期待，亲属的建议不必被理解为恶意。“约翰”意为“耶和华施恩”；这个名字首先见证神的恩典和祂先前的吩咐，不是孩子日后建立个人名望的口号。', connection: '可串联路 1:13、20，看到名字、沉默和恢复说话怎样一同证明神的话已经成就；士 13:2–14 的出生预告则有助于比较约翰与旧约中分别为圣之人的相似与差异。', life: '讨论：我们是否把家族、教会或社会对人的期待，当成神对他最终的定义？操练：为一位年轻人或正在寻找方向的人写下三项你真实看见的恩典，并用祝福和聆听代替替他规划人生。' },
  { range: '1:67–79', title: '以色列的神是应当称颂的', scene: '沉默多月之后，撒迦利亚没有先解释自己，而是被圣灵充满，称颂神。他从大卫之约唱到亚伯拉罕之约，再转向怀中的孩子：约翰要作先知，预备主的道路，把人的脚引到平安的路上。', scripture: '撒迦利亚赞美神眷顾并救赎百姓，在大卫家兴起拯救的力量；他又预告约翰将使人知道救恩在于罪得赦免，并为将临的主预备道路。', literal: '这首诗先讲神向以色列守约的拯救，再说明得拯救的人可以坦然事奉神，最后指出约翰的使命是预备道路。政治压迫、敬拜自由、罪得赦免和黑暗中的光都在同一幅救恩图景里，不能只保留其中一层。', context: '这首颂歌大量使用旧约诗篇和先知的语言。“拯救的角”象征神所赐的力量和王权；“清晨的日光”描写神的怜悯临到黑暗中的人。整首诗以神对亚伯拉罕所起的誓为重要中心，并从弥赛亚盼望推进到约翰预备道路的使命。', connection: '可对照撒下 7:8–16、创 22:16–18、诗 132:17、赛 9:2 和玛 3:1；路 3:1–6 将具体写出约翰怎样预备主的道路，路 24:25–27 则把以色列的应许带到基督受苦与得荣耀的道路上。', life: '讨论：我们是否只在事情对自己有利时称颂神，还是能从日常恩典中看见祂更大的救赎？操练：一周内每天记下一件神的怜悯，并把它转成一项使人更接近平安、赦免或盼望的行动。' },
  { range: '1:80', title: '那孩子渐渐长大，心灵强健', scene: '赞美和议论暂时安静下来，路加用一句话越过约翰多年的成长：他渐渐长大，心灵强健，住在旷野，直到向以色列公开显明的日子。', scripture: '约翰成长、心灵强健，并在旷野生活，直到开始公开使命。', literal: '神的预备不只发生在公开讲道时，也发生在无人记录的成长年月。经文强调约翰在神所定的日子显明，并没有交代他童年的全部细节，也没有把公开知名度当作属灵成熟的证明。', context: '旷野既是实际地点，也会使以色列读者想起出埃及、先知蒙召和重新听见神话语的传统。路加到第3章才重新讲述约翰的公开工作；中间的空白不应由后来的传说填满。', connection: '可对照赛 40:3–5、玛 4:5–6 和路 3:1–6，观察旷野、预备道路与约翰公开使命之间的关系。', life: '讨论：我们是否把“被看见”误当成“有价值”，把安静成长误当成没有果效？操练：选择一项不公开展示的忠心行动——祷告、学习、陪伴或修复关系——持续两周，并把结果交给神。' },
];

function addChapterOneCitations(note: StudyNote): StudyNote {
  const citations = chapterOneCitationsByRange[note.range];
  return citations ? { ...note, citations } : note;
}

function addLaterChapterCitations(note: StudyNote): StudyNote {
  const relatedPassages = getRelatedPassages(note.connection).map((passage) => ({
    id: passage.reference,
    label: `${passage.reference} 经文`,
    url: bibleGatewayUrl(passage.reference),
    scope: '串联' as const,
  }));

  return {
    ...note,
    citations: [
      { id: `路 ${note.range}`, label: `路 ${note.range} 原文`, url: chapterOnePassageUrl(note.range), scope: '经文' as const },
      ...(chapterTwoCitationsByRange[note.range] ?? []),
      ...(chapterThreeCitationsByRange[note.range] ?? []),
      ...(chapterFourCitationsByRange[note.range] ?? []),
      ...(chapterFiveCitationsByRange[note.range] ?? []),
      ...(chapterSixCitationsByRange[note.range] ?? []),
      ...(chapterSevenCitationsByRange[note.range] ?? []),
      ...(chapterEightCitationsByRange[note.range] ?? []),
      ...(chapterNineCitationsByRange[note.range] ?? []),
      ...(chapterTenCitationsByRange[note.range] ?? []),
      ...(chapterElevenCitationsByRange[note.range] ?? []),
      ...(chapterTwelveCitationsByRange[note.range] ?? []),
      ...(chapterThirteenCitationsByRange[note.range] ?? []),
      ...(chapterFourteenCitationsByRange[note.range] ?? []),
      ...(chapterFifteenCitationsByRange[note.range] ?? []),
      ...(chapterSixteenCitationsByRange[note.range] ?? []),
      ...(chapterSeventeenCitationsByRange[note.range] ?? []),
      ...(chapterEighteenCitationsByRange[note.range] ?? []),
      ...(chapterNineteenCitationsByRange[note.range] ?? []),
      ...(chapterTwentyToTwentyFourCitationsByRange[note.range] ?? []),
      ...(note.citations ?? []),
      ...relatedPassages,
    ],
  };
}

export const chapterData: Chapter[] = chapterThemes.map(([title, focus], index) => ({
  no: index + 1, title, focus,
  summary: chapterSummaries[index],
  setting: chapterSettings[index],
  sections: chapterGuidesByChapter[index + 1] ?? [],
  crossRefs: chapterCrossRefs[index + 1],
  questions: index === 0 ? ['我在本章看见神怎样在等待中工作？', '马利亚、以利沙伯、撒迦利亚的回应有什么不同？', '本周我可以怎样让“神的应许”进入一个具体关系？'] : [`本章最挑战我原有观念的哪一处？`, '耶稣在这里如何看待被忽略的人？', '小组可以怎样把本章的一个动作带进这两周的生活？'],
  practice: index === 0 ? '找一个仍在等待中的祷告，用本章的三种回应（诚实、聆听、顺服）写下祷告，再找一位组员彼此代祷。' : `在未来两周刻意练习“${focus}”：记录一次具体场景，下次小组分享经文如何改变你的回应。`,
  prayer: index === 0 ? '主啊，在等待与不明白中，求你使我们像马利亚一样听见、像以利沙伯一样祝福、像撒迦利亚一样重新学会赞美。' : `主耶稣，求你让我们不只知道“${focus}”，也在今天的关系和选择中活出来。`,
  notes: (index === 0 ? chapterNotes : chapterNotesByChapter[index + 1]).map(applyResearchReview).map(applyDeepStudyEnhancement).map(index === 0 ? addChapterOneCitations : addLaterChapterCitations),
}));

function CollapsedAnswer({ children, label = '参考回应（可展开）' }: { children: ReactNode; label?: string }) {
  return <details className="suggested-answer">
    <summary><span>{label}</span><span className="suggested-answer-action">先讨论，再查看</span></summary>
    <div className="suggested-answer-body">{children}</div>
  </details>;
}

function getPracticeText(life: string) {
  const practice = life.match(/操练：(.+)$/)?.[1]?.trim();
  return practice ? practice.replace(/[。！？]+$/, '') : '';
}

function getDiscussionText(life: string) {
  return life.replace(/操练：.+$/, '').replace(/^讨论：/, '').trim();
}

function SuggestedLifeAnswer({ note, frame }: { note: StudyNote; frame: ChapterFrame }) {
  const practice = note.life ? getPracticeText(note.life) : '';
  return <CollapsedAnswer label="带领者参考回应（不是唯一答案）">
    <p><strong>先回答经文：</strong>{note.scripture} {note.literal}</p>
    <p><strong>再回到福音：</strong>{frame.response.gospel}</p>
    <p><strong>最后进入回应：</strong>{frame.response.trust}{practice ? ` 这一段提出的具体操练是：${practice}。` : ''}</p>
  </CollapsedAnswer>;
}

function getChapterReferences(chapter: Chapter): ChapterReference[] {
  const pastoralReferences: ChapterReference[] = pastoralMethodReferences.map((reference) => ({ ...reference }));
  if (chapter.no === 1) return [...chapterOneReferences, ...pastoralReferences];

  const relatedPassages = [...new Map(
    (chapter.notes ?? [])
      .flatMap((note) => getRelatedPassages(note.connection))
      .map((passage) => [passage.reference, passage] as const),
  ).values()].slice(0, 12);

  const academicReferences = chapterOneReferences
    .filter((reference) => ['Lanier 2025', 'Sterling 2023', 'Johnson 2018', 'Bird'].includes(reference.id))
    .map((reference) => ({
      ...reference,
      note: `整章综合参考，不等于对本页每一句具体判断的逐项背书。${reference.note}`,
    }));

  return [
    {
      id: '经文',
      text: `《路加福音》第${chapter.no}章（和合本·简体）`,
      url: bibleGatewayUrl(`Luke ${chapter.no}`),
      note: '本章主要经文；页面内同时保留逐段经文原文。',
    },
    ...academicReferences,
    ...(chapter.no === 2 ? chapterTwoReferences : []),
    ...(chapter.no === 3 ? chapterThreeReferences : []),
    ...(chapter.no === 4 ? chapterFourReferences : []),
    ...(chapter.no === 5 ? chapterFiveReferences : []),
    ...(chapter.no === 6 ? chapterSixReferences : []),
    ...(chapter.no === 7 ? chapterSevenReferences : []),
    ...(chapter.no === 8 ? chapterEightReferences : []),
    ...(chapter.no === 9 ? chapterNineReferences : []),
    ...(chapter.no === 10 ? chapterTenReferences : []),
    ...(chapter.no === 11 ? chapterElevenReferences : []),
    ...(chapter.no === 12 ? chapterTwelveReferences : []),
    ...(chapter.no === 13 ? chapterThirteenReferences : []),
    ...(chapter.no === 14 ? chapterFourteenReferences : []),
    ...(chapter.no === 15 ? chapterFifteenReferences : []),
    ...(chapter.no === 16 ? chapterSixteenReferences : []),
    ...(chapter.no === 17 ? chapterSeventeenReferences : []),
    ...(chapter.no === 18 ? chapterEighteenReferences : []),
    ...(chapter.no === 19 ? chapterNineteenReferences : []),
    ...(chapter.no === 20 ? [...chapterTwentyReferences, ...chapterTwentyToTwentyFourReferences] : []),
    ...(chapter.no === 21 ? [...chapterTwentyOneReferences, ...chapterTwentyToTwentyFourReferences] : []),
    ...(chapter.no === 22 ? [...chapterTwentyTwoReferences, ...chapterTwentyToTwentyFourReferences] : []),
    ...(chapter.no === 23 ? [...chapterTwentyThreeReferences, ...chapterTwentyToTwentyFourReferences] : []),
    ...(chapter.no === 24 ? [...chapterTwentyFourReferences, ...chapterTwentyToTwentyFourReferences] : []),
    ...pastoralReferences,
    ...(relatedPassages.length ? [{
      id: '互文',
      text: `本章旧约／新约互文索引：${relatedPassages.map((passage) => passage.reference).join('；')}。`,
      url: bibleGatewayUrl(relatedPassages.map((passage) => passage.reference).join('; ')),
      note: '每个段落旁已按具体引用提供独立链接。',
    }] : []),
  ];
}

function chapterFromPath(pathname: string) {
  const match = pathname.match(/\/chapter\/(\d+)(?:\/|$)/);
  const chapterNo = match ? Number(match[1]) : 1;
  return Number.isInteger(chapterNo) && chapterNo >= 1 && chapterNo <= chapterData.length ? chapterNo : 1;
}

function chapterPath(no: number, pathname: string) {
  const basePath = pathname === '/luke-gospel-study' || pathname.startsWith('/luke-gospel-study/') ? '/luke-gospel-study' : '';
  return `${basePath}/chapter/${no}`;
}

export function Home({ initialChapter = 1 }: { initialChapter?: number }) {
  const [selectedChapter, setSelectedChapter] = useState(initialChapter);
  const [search, setSearch] = useState('');
  const chapter = chapterData[selectedChapter - 1] ?? chapterData[0];
  const frame = chapterFrames[chapter.no];
  useEffect(() => {
    const handlePopState = () => setSelectedChapter(chapterFromPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  const filteredChapters = useMemo(() => { const query = search.trim().toLowerCase(); if (!query) return chapterData; return chapterData.filter((item) => `${item.no} ${item.title} ${item.focus}`.toLowerCase().includes(query)); }, [search]);
  function selectChapter(no: number) {
    setSelectedChapter(no);
    const nextPath = chapterPath(no, window.location.pathname);
    if (window.location.pathname !== nextPath) window.history.pushState({ chapter: no }, '', nextPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return <main className="site-shell">
    <header className="topbar">
      <div className="brand-lockup">
        <div className="brand-mark" aria-hidden="true"><span>✦</span></div>
        <div><p className="brand-kicker">小组查经</p><p className="brand-name">在福音的路上</p></div>
      </div>
      <div className="topbar-center"><span className="topbar-line" /><span>路加福音</span><span className="topbar-line" /></div>
      <div className="topbar-actions" aria-hidden="true" />
    </header>
    <div className="mobile-chapter-strip" aria-label="选择章节">
      <span className="mobile-strip-label">章节</span>
      <div className="mobile-chapters">{chapterData.map((item) => <button key={item.no} className={item.no === chapter.no ? 'chapter-pill active' : 'chapter-pill'} onClick={() => selectChapter(item.no)} type="button">{String(item.no).padStart(2, '0')}</button>)}</div>
    </div>
    <div className="page-grid">
      <aside className="sidebar">
        <div className="sidebar-intro"><h2>章节导航</h2></div>
        <label className="search-box"><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="寻找章节或主题" aria-label="寻找章节或主题" />{search && <button type="button" onClick={() => setSearch('')} aria-label="清除搜索">×</button>}</label>
        <nav className="chapter-list" aria-label="路加福音章节">{filteredChapters.map((item) => <button key={item.no} type="button" className={item.no === chapter.no ? 'chapter-row selected' : 'chapter-row'} onClick={() => selectChapter(item.no)}><span className="chapter-number">{String(item.no).padStart(2, '0')}</span><span className="chapter-copy"><strong>{item.title}</strong><small>{item.focus}</small></span></button>)}</nav>
      </aside>
      <section className="content-column">
        <div className="chapter-hero">
          <div className="chapter-hero-top">
            <span className="chapter-tag">第 {chapter.no} 章</span>
            <div className="chapter-nav-controls" aria-label="章节导航">
              <button type="button" className="chapter-nav-button" onClick={() => selectChapter(chapter.no - 1)} disabled={chapter.no === 1} aria-label="上一章">上一章</button>
              <button type="button" className="chapter-nav-button" onClick={() => selectChapter(chapter.no + 1)} disabled={chapter.no === chapterData.length} aria-label="下一章">下一章</button>
            </div>
          </div>
          <h1>{chapter.title}</h1>
          <p className="hero-summary">{chapter.summary}</p>
        </div>
        <div className="tab-panel">
          <WholeBookMap currentChapter={chapter.no} />
          <ChapterFramePanel frame={frame} chapter={chapter} />
          <PastoralGuidePanel guide={pastoralGuides[chapter.no]} />
          <div className="reading-map">
            <span className="map-kicker">本章路线</span>
            <div className="map-steps">{frame.movements.map((movement, index) => <div className="map-step" key={movement.range}><span>{String(index + 1).padStart(2, '0')}</span><p><strong>{movement.range}</strong>{movement.title}</p></div>)}</div>
          </div>
          <ChapterMovementGroups chapter={chapter} frame={frame} />
          <ChapterResponsePanel frame={frame} />
          <ChapterReferences chapter={chapter} />
        </div>
      </section>
    </div>
    <footer className="site-footer"><span>在福音的路上</span><span>路加福音 01—24</span></footer>
  </main>;
}

export default Home;

function WholeBookMap({ currentChapter }: { currentChapter: number }) {
  const activeMovement = getBookMovement(currentChapter);
  return <section className="whole-book-map" aria-labelledby="whole-book-map-title">
    <div className="whole-book-map-head">
      <div><span className="section-label">整卷路线</span><h2 id="whole-book-map-title">沿着耶稣的道路读路加福音</h2></div>
      <p>当前：第 {activeMovement.id} 幕 · {activeMovement.title}</p>
    </div>
    <div className="whole-book-movements">{lukeBookMovements.map((movement) => <article className={movement.id === activeMovement.id ? 'book-movement active' : 'book-movement'} key={movement.id}>
      <span>{String(movement.id).padStart(2, '0')}</span>
      <div><small>{movement.range}</small><h3>{movement.title}</h3><p>{movement.summary}</p></div>
    </article>)}</div>
    <details className="reading-layers">
      <summary><span>阅读约定：什么必须持守，什么可以讨论</span><span>展开</span></summary>
      <div className="reading-layer-grid">{readingLayers.map((layer) => <article key={layer.label}><h3>{layer.label}</h3><p>{layer.text}</p></article>)}</div>
    </details>
  </section>;
}

function ChapterFramePanel({ frame, chapter }: { frame: ChapterFrame; chapter: Chapter }) {
  return <section className="chapter-frame" aria-labelledby="chapter-frame-title">
    <div className="chapter-frame-kicker"><span>本章中心</span><span>第 {frame.actId} 幕中的第 {chapter.no} 章</span></div>
    <h2 id="chapter-frame-title">{frame.center}</h2>
    <p className="chapter-placement"><strong>在整卷中的位置</strong>{frame.placement}</p>
    <div className="motif-list" aria-label="本章贯穿主题">{frame.motifs.map((motif) => <span key={motif}>{motif}</span>)}</div>
  </section>;
}

function ChapterMovementGroups({ chapter, frame }: { chapter: Chapter; frame: ChapterFrame }) {
  const notes = chapter.notes ?? chapter.sections.map((section, index) => ({
    range: `本章 · ${String(index + 1).padStart(2, '0')}`,
    title: section,
    scene: `先把自己放进${chapter.setting}，再完整朗读这一段，留意人物怎样说、怎样做，以及叙事何处发生转折。`,
    scripture: '先完整朗读这一段，留意人物怎样说、怎样做，以及叙事何处发生转折。',
    literal: '把观察写成一句不带解释的事实：谁在什么处境中回应了谁。',
    context: chapter.setting,
    connection: `可与本章的${chapter.crossRefs[index % chapter.crossRefs.length]}互相参照，留意同一主题在不同经文中的展开。`,
    life: chapter.questions[index % chapter.questions.length],
  }));

  return <div className="notes-list">{frame.movements.map((movement, movementIndex) => {
    const nextStart = frame.movements[movementIndex + 1]?.startNoteIndex ?? notes.length;
    const movementNotes = notes.slice(movement.startNoteIndex, nextStart);
    if (!movementNotes.length) return null;
    return <section className="chapter-movement-group" key={movement.range} aria-labelledby={`movement-${chapter.no}-${movementIndex}`}>
      <div className="movement-intro">
        <span>{String(movementIndex + 1).padStart(2, '0')}</span>
        <div><p>{movement.range}</p><h2 id={`movement-${chapter.no}-${movementIndex}`}>{movement.title}</h2><p>{movement.center}</p></div>
      </div>
      {movementNotes.map((note, noteIndex) => <StudyNoteCard key={note.range} note={note} index={movement.startNoteIndex + noteIndex} frame={frame} />)}
    </section>;
  })}</div>;
}

function ChapterResponsePanel({ frame }: { frame: ChapterFrame }) {
  return <section className="chapter-response" aria-labelledby="chapter-response-title">
    <div className="chapter-response-head"><span className="section-label">章末回应</span><h2 id="chapter-response-title">从明白经文走向信靠与敬拜</h2></div>
    <div className="gospel-restatement"><span>福音重述</span><p>{frame.response.gospel}</p></div>
    <div className="response-grid">
      <article><span>承认</span><p>{frame.response.confess}</p></article>
      <article><span>信靠</span><p>{frame.response.trust}</p></article>
      <article><span>祷告</span><p>{frame.response.prayer}</p></article>
      <article><span>两周操练</span><p>{frame.response.practice}</p></article>
    </div>
  </section>;
}

function PastoralGuidePanel({ guide }: { guide: PastoralGuide }) {
  const methodReferences = pastoralMethodReferences.filter((reference) =>
    reference.id === 'Seoul 2024' || (guide.safeguarding && reference.id === 'GRACE'),
  );
  return <section className="pastoral-guide" aria-labelledby="pastoral-guide-title">
    <div className="pastoral-guide-head"><span>PASTORAL READING</span><h3 id="pastoral-guide-title">本章牧养导读</h3></div>
    <div className="pastoral-guide-grid compact">
      <div><span className="pastoral-guide-label">福音核心</span><p>{guide.gospel}</p></div>
      <div><span className="pastoral-guide-label">教会塑造</span><p>{guide.church}</p></div>
    </div>
    {guide.safeguarding && <details className="pastoral-guardrail"><summary><span>牧养提醒</span><span>需要时展开</span></summary><p>{guide.guardrail}</p></details>}
    <div className="pastoral-guide-sources"><span>牧养依据</span>{guide.references.map((reference) => <a key={reference.label} href={bibleGatewayUrl(reference.query)} target="_blank" rel="noreferrer">[{reference.label}]</a>)}{methodReferences.map((reference) => <a key={reference.id} href={reference.url} target="_blank" rel="noreferrer">[{reference.id}]</a>)}</div>
  </section>;
}

function StudyNoteCard({ note, index, frame }: { note: StudyNote; index: number; frame: ChapterFrame }) {
  return <article className="study-note">
    <div className="note-index">{String(index + 1).padStart(2, '0')}</div>
    <div className="note-body">
      <div className="note-heading"><span className="verse-range">{note.range}</span><h3>{note.title}</h3></div>
      <ScriptureBlock passage={getLukePassage(note.range)} sourceUrl={note.range.includes(':') ? chapterOnePassageUrl(note.range) : undefined} />
      <div className="note-scene"><span className="note-label">进入现场</span><p>{note.scene}</p></div>
      <div className="note-thesis"><span className="note-label">经文直意 · 本段发生了什么</span><p>{note.scripture}</p><CitationLinks citations={note.citations} scope="经文" /></div>
      <VerseWalkthrough insights={note.verseInsights} citations={note.citations} />
      <div className="note-observation"><span className="note-label">{note.verseInsights?.length ? '这段显明什么 · 深层意义' : '经文观察 · 初步解读'}</span><p>{note.literal}</p>{!note.verseInsights?.length && <CitationLinks citations={note.citations} scope="解读" />}</div>
      <details className="deep-study">
        <summary><span>深入查考：历史、解释与经文串联</span><span>展开</span></summary>
        <div className="deep-study-body">
          <InterpretationNotes notes={note.interpretationNotes} />
          <div className="note-supporting"><div className="note-context"><span className="note-label">历史窗口</span><p>{note.context}</p><CitationLinks citations={note.citations} scope="背景" /></div>{note.connection && <div className="note-connection"><span className="note-label">旧约／新约回声</span><p>{note.connection}</p><CitationLinks citations={note.citations} scope="串联" /></div>}</div>
          <RelatedScriptures connection={note.connection} />
        </div>
      </details>
      {note.life && <div className="note-life"><span className="note-label">信仰生活讨论</span><p>{getDiscussionText(note.life)}</p><CitationLinks citations={note.citations} scope="应用" /><SuggestedLifeAnswer note={note} frame={frame} /></div>}
    </div>
  </article>;
}

function VerseWalkthrough({ insights, citations }: { insights?: StudyNote['verseInsights']; citations?: StudyCitation[] }) {
  if (!insights?.length) return null;
  return <section className="verse-walkthrough" aria-label="逐节解读">
    <div className="verse-walkthrough-head"><div><span className="note-label">逐节解读</span><h4>先弄清经文在说什么，再问它为什么重要</h4></div><span className="walkthrough-count">{insights.length} 组</span></div>
    <div className="verse-insight-columns"><span aria-hidden="true" /><span>经文直接意思</span><span>为何重要</span></div>
    <div className="verse-insight-list">
      {insights.map((insight) => <article className="verse-insight" key={insight.range}>
        <span className="verse-insight-range">{insight.range}</span>
        <div className="verse-insight-copy"><span className="sr-only">经文直接意思</span><p>{insight.direct}</p></div>
        <div className="verse-insight-copy depth"><span className="sr-only">为何重要</span><p>{insight.depth}</p></div>
      </article>)}
    </div>
    <CitationLinks citations={citations} scope="解读" />
  </section>;
}

function InterpretationNotes({ notes }: { notes?: StudyNote['interpretationNotes'] }) {
  if (!notes?.length) return null;
  return <section className="interpretation-notes" aria-label="解释难点">
    <div className="interpretation-notes-head"><span className="note-label">解释难点</span><p>经文容许不同理解时，不把一种推论伪装成经文本身。</p></div>
    <div className="interpretation-note-grid">{notes.map((note) => <article className="interpretation-note" key={note.title}><h4>{note.title}</h4><p>{note.text}</p></article>)}</div>
  </section>;
}

function ScriptureBlock({ passage, compact = false, sourceUrl }: { passage: Passage[]; compact?: boolean; sourceUrl?: string }) { return <section className={compact ? 'scripture-block compact' : 'scripture-block'} aria-label="经文原文"><div className="scripture-block-head"><span className="note-label">经文原文</span><span className="scripture-version">{SCRIPTURE_VERSION}</span></div>{passage.length ? <div className="scripture-text">{passage.map((verse) => <p key={`${verse.label}-${verse.text}`}><sup>{verse.label}</sup><span>{verse.text}</span></p>)}</div> : <p className="scripture-empty">此段范围暂未载入经文原文，请先按出处阅读。</p>}<p className="scripture-source">文本来源：{sourceUrl ? <a href={sourceUrl} target="_blank" rel="noreferrer">{SCRIPTURE_SOURCE} · 打开出处</a> : SCRIPTURE_SOURCE}</p></section>; }

function RelatedScriptures({ connection }: { connection?: string }) { const passages = getRelatedPassages(connection); if (!passages.length) return null; return <details className="related-scriptures"><summary><span>展开相关经文原文</span><span className="related-count">{passages.length} 处</span></summary><div className="related-scriptures-body"><div className="related-why"><span className="note-label">为什么串联</span><p>{connection}</p></div><div className="related-list">{passages.map((passage) => <article className="related-card" key={passage.reference}><div className="related-card-head"><strong>{passage.reference}</strong><span>{passage.bookName}</span></div>{passage.isWholeChapter ? <details className="related-chapter"><summary>{passage.isChapterRange ? '展开相关章节经文' : '展开本章经文'}</summary><ScriptureBlock passage={passage.verses} sourceUrl={bibleGatewayUrl(passage.reference)} compact /></details> : <ScriptureBlock passage={passage.verses} sourceUrl={bibleGatewayUrl(passage.reference)} compact />}</article>)}</div></div></details>; }

function CitationLinks({ citations, scope }: { citations?: StudyCitation[]; scope: CitationScope }) { const items = (citations ?? []).filter((citation) => citation.scope === scope); if (!items.length) return null; return <div className="citation-links"><span className="citation-label">出处</span>{items.map((citation) => <a key={`${citation.id}-${citation.scope}`} href={citation.url} target="_blank" rel="noreferrer" title={`打开：${citation.label}`}>[{citation.label}]</a>)}</div>; }

function ChapterReferences({ chapter }: { chapter: Chapter }) { const references = getChapterReferences(chapter); return <section className="chapter-references" aria-labelledby="chapter-references-title"><div className="chapter-references-head"><p className="section-label">学术与牧养出处 · 第{chapter.no}章</p><h3 id="chapter-references-title">参考文献与经文索引</h3></div><p className="chapter-references-intro">段落旁只显示已经核对、能够直接支持该处经文或解释的链接；本节另列整章综合参考，不把一本书的总体帮助误当成对每一句判断的逐项背书。书籍链接多指向出版社书目页或试读资料，正式论文若使用纸本或电子版，请按实际版本补上页码。</p><ol className="chapter-reference-list">{references.map((reference) => <li key={reference.id}><span className="reference-index">{reference.id}</span><div><a href={reference.url} target="_blank" rel="noreferrer">{reference.text}</a><p>{reference.note}</p></div></li>)}</ol></section>; }
