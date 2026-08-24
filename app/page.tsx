'use client';

import { useMemo, useState } from 'react';
import { applyDeepStudyEnhancement, applyResearchReview, chapterNotesByChapter, type CitationScope, type StudyCitation, type StudyNote } from './chapterNotes';
import { academicSourceCitation, bibleGatewayUrl, chapterNineteenCitationsByRange, chapterNineteenReferences, chapterOneCitationsByRange, chapterOnePassageUrl, chapterOneReferences, chapterTwentyToTwentyFourCitationsByRange, chapterTwentyToTwentyFourReferences, type ChapterReference } from './academicCitations';
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
  ['序言与应许的开端', '确据从哪里来？'],
  ['降生与天国的记号', '神如何住在人的日常？'],
  ['旷野中的预备', '悔改怎样成为新生活？'],
  ['受试探与开始服事', '在压力中，什么定义我们的身份？'],
  ['呼召、赦罪与新酒', '被主呼召的人怎样离开旧路？'],
  ['安息日与十二使徒', '谁是有福的人？'],
  ['怜悯、疑问与赦免', '被赦免的人如何去爱？'],
  ['撒种、风浪与生命恢复', '我怎样听道，也怎样在风浪中信靠主？'],
  ['十字架道路上的弥赛亚', '我所跟随的是怎样的基督？'],
  ['差遣、邻舍与聆听', '爱神与爱人怎样成为一条路？'],
  ['祷告、圣灵与里面的光', '我的祷告和敬虔是否从里面真实？'],
  ['警醒与财富', '在忧虑、拥有与等待中，谁掌管我的心？'],
  ['悔改与神国的窄门', '我如何回应神的忍耐与邀请？'],
  ['宴席与门徒代价', '恩典如何重排我的座位和优先次序？'],
  ['父的喜乐与失而复得', '我是在回家，还是站在门外？'],
  ['金钱与永恒的眼光', '我如何使用受托的资源？'],
  ['感恩与神国的临在', '我是否在恩典中回到主面前？'],
  ['祷告、谦卑与跟随', '我用什么姿态来到主前？'],
  ['救恩进入耶路撒冷', '救恩如何落在一个家庭和一座城？'],
  ['圣殿中的权柄', '在对立中怎样持守真理与公义？'],
  ['末世警醒', '盼望怎样塑造今天的清醒？'],
  ['最后晚餐与橄榄山', '在被爱与被筛之间如何忠心？'],
  ['十字架上的王', '受苦、赦免与死亡如何相连？'],
  ['复活显现与差遣', '见证从哪里开始？'],
];

const chapterGuidesByChapter: Record<number, string[]> = {
  1: ['路加的写作目的、撒迦利亚与以利沙伯、天使报信', '马利亚的回应、探访与尊主颂、施洗约翰出生', '从“确实的事”到“预备主的道路”'],
  2: ['约瑟与马利亚、牧羊人、献上婴孩耶稣', '西面与亚拿的等候、少年耶稣在圣殿', '神的儿子也在家庭、成长与等候中显明'],
  3: ['约翰的悔改信息、耶稣受洗、家谱', '悔改的果子与圣灵的见证', '从身份被确认到进入旷野预备'],
  4: ['旷野试探：忠信的儿子拒绝错误道路', '拿撒勒的恩年宣告与被拒绝的恩典', '迦百农的权柄、祷告与继续传扬神国'],
  5: ['在深水处呼召渔夫跟从', '洁净、赦罪与利未的筵席', '新郎、新酒与被更新的群体'],
  6: ['安息日与十二使徒', '平原上的福与祸、爱仇敌', '省察、果子与把房屋建在磐石上'],
  7: ['百夫长的信心与拿因寡妇的哀伤', '约翰在疑问中重新辨认弥赛亚', '被赦免的女人与自义的饭桌'],
  8: ['妇女同行、撒种比喻与听道', '风浪与湖东释放：耶稣是谁', '血漏妇人与睚鲁女儿：两种等候'],
  9: ['十二门徒被差、群众得饱与彼得认信', '受苦的基督、登山变像与山下需要', '接待微小者，定意走向耶路撒冷'],
  10: ['七十（二）人带着平安被差遣', '好撒玛利亚人：成为受伤者的邻舍', '马大与马利亚：服事从聆听主开始'],
  11: ['主祷文、恒切祈求与父赐圣灵', '神国胜过黑暗，听道并遵守才有福', '约拿的记号、里面的光与宗教重担'],
  12: ['假冒与恐惧、无知财主', '不要忧虑、警醒等候、分辨时代', '从财物与日常忧虑进入天国的忠心'],
  13: ['悔改与无花果树、安息日医治', '芥菜种、面酵、窄门', '耶稣为耶路撒冷哀哭'],
  14: ['安息日宴席、谦卑与怜悯', '大筵席的邀请、计算跟随代价', '从座位、餐桌到十字架的门徒生活'],
  15: ['失羊与失钱的比喻', '小儿子回家与父亲的拥抱', '大儿子站在门外：恩典如何成为共同喜乐'],
  16: ['不义管家与钱财的忠心', '法利赛人爱钱、律法与神国', '财主与拉撒路：看见门口的贫穷'],
  17: ['绊倒、饶恕与信心', '十个麻风病人与感恩', '神的国已经临在，也将完全显明'],
  18: ['寡妇与不义的官、恒切祷告', '法利赛人与税吏、小孩子', '富足的官、受难预告、瞎子得看见'],
  19: ['在耶利哥：“今天”救恩进入撒该的家（19:1–10）', '王尚未照人所想立刻显现：等候中的托付与审判（19:11–27）', '和平之王进城、为城哀哭，并以圣殿行动显明权柄（19:28–48）'],
  20: ['权柄质问与凶恶园户', '纳税给该撒、复活的争论', '大卫之子与文士、弱者与权力'],
  21: ['寡妇的两个小钱与圣殿', '圣殿被毁、战争、逼迫与见证', '人子来到、无花果树、警醒祷告'],
  22: ['阴谋、逾越节与圣餐', '谁为大、彼得被筛与不认主', '橄榄山的祷告、被捕与受审'],
  23: ['彼拉多与希律、被判钉十字架', '古利奈人西门与各各他', '十字架赦免、死亡与安葬'],
  24: ['空坟墓与妇女见证', '以马忤斯的同行、擘饼与经文', '显现、开启心窍、祝福与差遣'],
};

const chapterSummaries = [
  '从可靠的见证开始，神在两个普通家庭中开启救赎的序章。',
  '耶稣在伯利恒、圣殿与拿撒勒之间进入人的家庭，也进入以色列的敬拜与盼望。',
  '约翰在帝国权力的年代呼召悔改；耶稣受洗、被确认，并以家谱进入全人类的历史。',
  '耶稣在旷野胜过试探，在拿撒勒宣告释放，又在迦百农以权柄医治和传讲神国。',
  '耶稣呼召渔夫与税吏，在洁净、赦罪、同席和新酒的图像中显明新的群体秩序。',
  '从安息日争议到平原宝训，耶稣把天国伦理落在怜悯、仇敌、金钱与心的根基上。',
  '外邦百夫长、寡妇、施洗约翰和被称为罪人的女人，都在追问耶稣究竟是谁。',
  '神的话在不同土壤中生长；耶稣在湖上、湖东和人群中显明祂对自然、污鬼与疾病的权柄。',
  '门徒被差遣、群众得饱、彼得认信；山上荣耀之后，耶稣定意走向耶路撒冷。',
  '七十（二）个人被差遣，邻舍在路旁被重新定义，忙乱的家也成为聆听主的地方。',
  '耶稣教导祷告、应许圣灵、显明神国胜过黑暗，并揭露里面没有光的宗教假冒。',
  '在忧虑、财富、等候与家庭分裂中，耶稣要求门徒把忠心落实在日常选择。',
  '灾难不是优越感的证据；耶稣以悔改、怜悯、神国成长和窄门回应耶路撒冷的危机。',
  '宴席中的座位、邀请与计算代价，重新安排门徒如何看待尊荣、资源和跟随。',
  '失羊、失钱和失子共同揭开父的喜乐，也把站在门外的自义带到光中。',
  '管家、律法、财主与拉撒路把钱财问题推进到永恒：我们如何使用受托的一切？',
  '从绊倒、饶恕、麻风病人的感恩到神国的临在，信心在关系和等待中被检验。',
  '寡妇的祷告、税吏的谦卑、孩子的领受和富足官的挣扎，都汇入前往耶路撒冷的道路。',
  '“今天”的救恩进入撒该家；王在等候中要求忠心，又以和平、眼泪和圣殿行动进入耶路撒冷，显明人怎样回应神的眷顾。',
  '在耶路撒冷圣殿，权柄、税收、复活与宗教外表被放在神国的审判之下。',
  '圣殿的奉献、将来的毁坏、逼迫与人子降临，使门徒学习在混乱中清醒见证。',
  '逾越节的桌边、门徒的争大、彼得的筛选和橄榄山的祷告，把忠心带到受难前夜。',
  '耶稣在政治与宗教权力之间被交付，在十字架上赦免、受死，并被安放在坟墓。',
  '空坟墓、以马忤斯、经文开启、身体复活与升天，把失望的门徒转成喜乐的见证人。',
];

const chapterSettings = [
  '希律作犹太王；圣殿、拿撒勒与犹大山地成为应许展开的三个场景。',
  '伯利恒的出生地、耶路撒冷圣殿与加利利的拿撒勒，交织出家庭、礼仪与成长的空间。',
  '提庇留在位第十五年，约旦河与旷野成为帝国地图之外、却承载神话语的地方。',
  '旷野、拿撒勒会堂与迦百农的会堂、家庭和城门，构成耶稣公开事奉的起点。',
  '加利利湖、迦百农和税关把渔业、疾病、罪疚与社会边缘带到同一条道路上。',
  '加利利平原与湖边人群聚集；安息日、会堂和十二使徒形成新群体的背景。',
  '迦百农、拿因和加利利的筵席，让罗马秩序、死亡、债务与赦免彼此相遇。',
  '加利利各城、湖上航行、湖东的外邦地区与会堂家庭，成为神的话被听见和拒绝的现场。',
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
  '耶利哥通往耶路撒冷的入口，撒该的家、王权比喻、橄榄山和圣殿连成一条路。',
  '耶路撒冷圣殿成为权柄争议的中心，宗教领导、罗马税制与复活盼望在此交锋。',
  '圣殿与橄榄山之间，奉献、毁坏、战争、逼迫和人子盼望共同塑造门徒的警醒。',
  '耶路撒冷逾越节夜晚、门徒聚集的房间、橄榄山与大祭司院落组成受难前夜。',
  '耶路撒冷的审判场、各各他与新坟墓，把罗马刑罚、宗教指控和赦免的王权并置。',
  '耶路撒冷、以马忤斯道路与伯大尼附近，把空坟墓、经文解释、显现和升天连成见证起点。',
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
  11: ['诗 103:8–13 · 父的怜悯', '创 18:1–15 · 持续代求与应许', '太 6:9–13；12:22–32 · 平行与神国冲突'],
  12: ['箴 23:29–35 · 醉酒与失去清醒', '诗 55:22 · 把忧虑交给神', '太 6:25–34；24:42–51 · 忧虑与警醒'],
  13: ['伯 1–2；约 9:1–3 · 灾难与报应观', '赛 25:6–9 · 末世筵席', '路 19:41–44 · 耶路撒冷的哀哭与审判'],
  14: ['箴 25:6–7 · 宴席中的谦卑', '申 15:7–11 · 对贫穷人的开放', '腓 2:3–8 · 基督式的降卑与服事'],
  15: ['诗 103:8–13 · 父的怜悯', '何 11:1–9 · 以色列与父的心', '弗 2:13–19 · 远近的人在基督里和好'],
  16: ['申 15:7–11 · 财物与穷人', '摩 6:4–7 · 奢华与冷漠', '提前 6:17–19 · 富足者如何行善'],
  17: ['利 13–14 · 洁净与重新进入群体', '王下 5:1–19 · 外族人的医治与感恩', '罗 14:17–19 · 神国与共同体'],
  18: ['申 10:17–18 · 神为弱者伸冤', '诗 51:17 · 谦卑的心', '可 10:13–52 · 门徒、财富与看见'],
  19: ['出 22:1–4 · 赔偿与修复', '亚 9:9–10；诗 118:25–27 · 谦和、和平而来的王', '赛 56:6–7；耶 7:1–11 · 祷告之殿与虚假安全'],
  20: ['赛 5:1–7 · 葡萄园与主人', '创 1:26–27 · 神的形象与公共责任', '诗 110:1 · 大卫的主'],
  21: ['耶 7:1–15 · 圣殿与虚假的安全', '但 7:13–14 · 人子与末世掌权', '帖前 5:1–8 · 清醒、盼望与见证'],
  22: ['出 12 · 逾越节与出埃及', '耶 31:31–34 · 新约应许', '林前 11:23–26 · 圣餐传统与记念'],
  23: ['赛 53:7–12 · 受苦仆人', '诗 31:5；22:7–18 · 交托与被羞辱', '徒 4:25–28 · 权力合谋与神的计划'],
  24: ['诗 16:9–10 · 不被撇在阴间', '赛 53 · 受苦与荣耀', '徒 1:1–11；15:13–18 · 升天、见证与以色列应许'],
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
      academicSourceCitation('Lanier 2025', '解读'),
      academicSourceCitation('Johnson 2018', '背景'),
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

function getChapterReferences(chapter: Chapter): ChapterReference[] {
  const pastoralReferences: ChapterReference[] = pastoralMethodReferences.map((reference) => ({ ...reference }));
  if (chapter.no === 1) return [...chapterOneReferences, ...pastoralReferences];

  const relatedPassages = [...new Map(
    (chapter.notes ?? [])
      .flatMap((note) => getRelatedPassages(note.connection))
      .map((passage) => [passage.reference, passage] as const),
  ).values()].slice(0, 12);

  const academicReferences = chapterOneReferences.filter((reference) =>
    ['Lanier 2025', 'Sterling 2023', 'Johnson 2018', 'Bird'].includes(reference.id),
  );

  return [
    {
      id: '经文',
      text: `《路加福音》第${chapter.no}章（和合本·简体）`,
      url: bibleGatewayUrl(`Luke ${chapter.no}`),
      note: '本章主要经文；页面内同时保留逐段经文原文。',
    },
    ...academicReferences,
    ...(chapter.no === 19 ? chapterNineteenReferences : []),
    ...(chapter.no >= 20 && chapter.no <= 24 ? chapterTwentyToTwentyFourReferences : []),
    ...pastoralReferences,
    ...(relatedPassages.length ? [{
      id: '互文',
      text: `本章旧约／新约互文索引：${relatedPassages.map((passage) => passage.reference).join('；')}。`,
      url: bibleGatewayUrl(relatedPassages.map((passage) => passage.reference).join('; ')),
      note: '每个段落旁已按具体引用提供独立链接。',
    }] : []),
  ];
}

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
    <header className="topbar"><div className="brand-lockup"><div className="brand-mark" aria-hidden="true"><span>✦</span></div><div><p className="brand-kicker">小组查经 · 01</p><p className="brand-name">在福音的路上</p></div></div><div className="topbar-center"><span className="topbar-line" /><span>路加福音</span><span className="topbar-line" /></div><div className="topbar-actions"><span className="cycle-badge"><i />隔周聚会</span></div></header>
    <div className="mobile-chapter-strip" aria-label="选择章节"><span className="mobile-strip-label">章节</span><div className="mobile-chapters">{chapterData.map((item) => <button key={item.no} className={item.no === chapter.no ? 'chapter-pill active' : 'chapter-pill'} onClick={() => selectChapter(item.no)} type="button">{String(item.no).padStart(2, '0')}</button>)}</div></div>
    <div className="page-grid">
      <aside className="sidebar"><div className="sidebar-intro"><p className="section-label">LUKE / 24</p><h2>章节导航</h2><p>每两周走一章，读经、对照、回应。</p></div><label className="search-box"><span aria-hidden="true">⌕</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="寻找章节或主题" aria-label="寻找章节或主题" />{search && <button type="button" onClick={() => setSearch('')} aria-label="清除搜索">×</button>}</label><nav className="chapter-list" aria-label="路加福音章节">{filteredChapters.map((item) => <button key={item.no} type="button" className={item.no === chapter.no ? 'chapter-row selected' : 'chapter-row'} onClick={() => selectChapter(item.no)}><span className="chapter-number">{String(item.no).padStart(2, '0')}</span><span className="chapter-copy"><strong>{item.title}</strong><small>{item.focus}</small></span>{completed.includes(item.no) && <span className="check-dot" aria-label="已查考">✓</span>}</button>)}</nav><div className="sidebar-footer"><span className="progress-ring">{completed.length}<small>/24</small></span><span><strong>查考进度</strong><small>一步一步走</small></span></div></aside>
      <section className="content-column"><div className="chapter-hero"><div className="chapter-hero-top"><span className="chapter-tag">第 {chapter.no} 章</span><span className="hero-meta">LUKE · {String(chapter.no).padStart(2, '0')} <span>／</span> 约 20–35 分钟预读</span></div><h1>{chapter.title}</h1><p className="hero-summary">{chapter.summary}</p></div><div className="tab-panel"><div className="panel-heading"><div><p className="section-label">01 / 逐段阅读</p><h2>先读经文，再让问题打开经文</h2></div><button type="button" className={isCurrent ? 'complete-button done' : 'complete-button'} onClick={toggleCompleted}>{isCurrent ? '✓ 本章已查考' : '标记本章已查考'}</button></div><PastoralGuidePanel guide={pastoralGuides[chapter.no]} /><div className="reading-map"><span className="map-kicker">本章路线</span><div className="map-steps">{chapter.sections.map((section, index) => <div className="map-step" key={section}><span>{String(index + 1).padStart(2, '0')}</span><p>{section}</p></div>)}</div></div><div className="notes-list">{(chapter.notes ?? chapter.sections.map((section, index) => ({ range: `本章 · ${String(index + 1).padStart(2, '0')}`, title: section, scene: `先把自己放进${chapter.setting}，再完整朗读这一段，想象人物怎样说、怎样做，以及叙事何处发生转折。`, scripture: '先完整朗读这一段，留意人物怎样说、怎样做，以及叙事何处发生转折。', literal: '把观察写成一句不带解释的事实：谁在什么处境中回应了谁。', context: chapter.setting, connection: `可与本章的${chapter.crossRefs[index % chapter.crossRefs.length]}互相参照，留意同一主题在不同经文中的展开。`, life: chapter.questions[index % chapter.questions.length] }))).map((note, index) => <StudyNoteCard key={note.range} note={note} index={index} />)}</div><div className="pause-card"><span className="pause-symbol">⌁</span><div><p className="section-label">停一下</p><p>哪一个词、哪一个人物或哪一个动作反复出现在你眼前？先不要急着解释，和组员分享你实际看见了什么。</p></div></div><ChapterReferences chapter={chapter} /></div></section>
      <aside className="right-rail"><div className="rail-card focus-card"><div className="card-icon">✧</div><p className="section-label">本章焦点</p><h3>{chapter.focus}</h3><p>{chapter.summary}</p></div></aside>
    </div><footer className="site-footer"><span>在福音的路上</span><span>每两周一章 · 读进去，也活出来</span><span>路加福音 01—24</span></footer>
  </main>;
}

function PastoralGuidePanel({ guide }: { guide: PastoralGuide }) {
  const methodReferences = pastoralMethodReferences.filter((reference) =>
    reference.id === 'Seoul 2024' || (guide.safeguarding && reference.id === 'GRACE'),
  );
  return <section className="pastoral-guide" aria-labelledby="pastoral-guide-title">
    <div className="pastoral-guide-head"><span>PASTORAL READING</span><h3 id="pastoral-guide-title">本章牧养导读</h3></div>
    <div className="pastoral-guide-grid">
      <div><span className="pastoral-guide-label">福音核心</span><p>{guide.gospel}</p></div>
      <div><span className="pastoral-guide-label">教会塑造</span><p>{guide.church}</p></div>
      <div className="pastoral-guardrail"><span className="pastoral-guide-label">牧养边界</span><p>{guide.guardrail}</p></div>
    </div>
    <div className="pastoral-guide-sources"><span>牧养依据</span>{guide.references.map((reference) => <a key={reference.label} href={bibleGatewayUrl(reference.query)} target="_blank" rel="noreferrer">[{reference.label}]</a>)}{methodReferences.map((reference) => <a key={reference.id} href={reference.url} target="_blank" rel="noreferrer">[{reference.id}]</a>)}</div>
  </section>;
}

function StudyNoteCard({ note, index }: { note: StudyNote; index: number }) {
  return <article className="study-note">
    <div className="note-index">{String(index + 1).padStart(2, '0')}</div>
    <div className="note-body">
      <div className="note-heading"><span className="verse-range">{note.range}</span><h3>{note.title}</h3></div>
      <ScriptureBlock passage={getLukePassage(note.range)} sourceUrl={note.range.includes(':') ? chapterOnePassageUrl(note.range) : undefined} />
      <div className="note-scene"><span className="note-label">进入现场</span><p>{note.scene}</p></div>
      <div className="note-thesis"><span className="note-label">本段主旨</span><p>{note.scripture}</p><CitationLinks citations={note.citations} scope="经文" /></div>
      <VerseWalkthrough insights={note.verseInsights} citations={note.citations} />
      <div className="note-observation"><span className="note-label">{note.verseInsights?.length ? '整段综合 · 深层意义' : '经文观察 · 初步解读'}</span><p>{note.literal}</p>{!note.verseInsights?.length && <CitationLinks citations={note.citations} scope="解读" />}</div>
      <InterpretationNotes notes={note.interpretationNotes} />
      <div className="note-supporting"><div className="note-context"><span className="note-label">历史窗口</span><p>{note.context}</p><CitationLinks citations={note.citations} scope="背景" /></div>{note.connection && <div className="note-connection"><span className="note-label">旧约／新约回声</span><p>{note.connection}</p><CitationLinks citations={note.citations} scope="串联" /></div>}</div>
      <RelatedScriptures connection={note.connection} />
      {note.life && <div className="note-life"><span className="note-label">信仰生活讨论</span><p>{note.life}</p><CitationLinks citations={note.citations} scope="应用" /></div>}
    </div>
  </article>;
}

function VerseWalkthrough({ insights, citations }: { insights?: StudyNote['verseInsights']; citations?: StudyCitation[] }) {
  if (!insights?.length) return null;
  return <section className="verse-walkthrough" aria-label="逐节解读">
    <div className="verse-walkthrough-head"><div><span className="note-label">逐节解读</span><h4>先弄清经文在说什么，再问它为什么重要</h4></div><span className="walkthrough-count">{insights.length} 组</span></div>
    <div className="verse-insight-list">
      {insights.map((insight) => <article className="verse-insight" key={insight.range}>
        <span className="verse-insight-range">{insight.range}</span>
        <div className="verse-insight-copy"><span className="verse-insight-label">经文直接意思</span><p>{insight.direct}</p></div>
        <div className="verse-insight-copy depth"><span className="verse-insight-label">为何重要</span><p>{insight.depth}</p></div>
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

function ChapterReferences({ chapter }: { chapter: Chapter }) { const references = getChapterReferences(chapter); return <section className="chapter-references" aria-labelledby="chapter-references-title"><div className="chapter-references-head"><p className="section-label">学术与牧养出处 · 第{chapter.no}章</p><h3 id="chapter-references-title">参考文献与经文索引</h3></div><p className="chapter-references-intro">本章把出处放在相应解读旁，方便边读边核对；以下列出主要学术与牧养参考。书籍链接指向出版社书目页或试读 PDF，正式论文若使用纸本或电子版，请按实际版本补上页码。</p><ol className="chapter-reference-list">{references.map((reference) => <li key={reference.id}><span className="reference-index">{reference.id}</span><div><a href={reference.url} target="_blank" rel="noreferrer">{reference.text}</a><p>{reference.note}</p></div></li>)}</ol></section>; }
