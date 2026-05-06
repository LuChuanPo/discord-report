// Shared mock data for AIWATCH / KNOWLEDGE_OS

window.AIWATCH_DATA = (() => {
  const customers = [
    { id: 'qveris', name: '曲东奇 / QVeris', short: 'Q', logo: 'Q', track: '出海 2B', owner: '李逸航', week: 6, status: 'normal', blockers: 0, nextMeeting: '2026-05-09', urgentTask: '撰写 Series A pitch deck V3', summary: '出海 2B SaaS,做企业知识图谱,正在筹备 Series A,主战场北美。', wechat: 'qveris_official', funding: 'Pre-A · 2400 万', revenue: 'ARR ¥380w', team: '14 人 · 北京 + 旧金山' },
    { id: 'tianji', name: '张倩 / 天际资本', short: '天', logo: '天', track: '投资', owner: '陈默', week: 9, status: 'warn', blockers: 1, nextMeeting: '2026-05-08', urgentTask: '完成 LP 月报数据可视化', summary: '早期 VC,主投硬科技与企服,需要内容资产沉淀与 LP 关系深运营。', wechat: 'tianji_capital', funding: 'GP · 二期基金 8 亿', revenue: '管理费 ¥1.6kw', team: '8 人 · 北京' },
    { id: 'iosg', name: 'Jocy / IOSG', short: 'I', logo: 'I', track: '加密投资', owner: '林笙', week: 11, status: 'normal', blockers: 0, nextMeeting: '2026-05-12', urgentTask: '安排 Token2049 之后的市场总结', summary: '亚太头部 Crypto VC,内容矩阵已稳定,进入成果交付阶段。', wechat: 'iosg_vc', funding: 'GP · 三期基金 1.2 亿美金', revenue: '不公开', team: '22 人 · 新加坡 + 香港' },
    { id: 'infi', name: '蒋涛 / InfiniSynapse', short: 'In', logo: 'In', track: '出海 2B', owner: '李逸航', week: 4, status: 'block', blockers: 3, nextMeeting: '2026-05-07', urgentTask: '解决 PMF 验证路径分歧', summary: 'AI Agent 工作流平台,创始团队来自 CSDN,目前还在打磨 GTM 路径。', wechat: 'infisynapse', funding: '种子 · 800 万', revenue: 'ARR ¥45w', team: '6 人 · 杭州' },
    { id: 'skill', name: '曲晓音 / SkillBoss', short: 'S', logo: 'S', track: '教育出海', owner: '苏彦', week: 7, status: 'warn', blockers: 1, nextMeeting: '2026-05-10', urgentTask: '完成北美种子用户访谈复盘', summary: '面向北美 Z 世代的 AI 技能学习平台,已有 ~3000 月活,正在做留存优化。', wechat: 'skillboss_inc', funding: 'Pre-seed · 200 万美金', revenue: 'MRR $4.2k', team: '5 人 · 远程' },
    { id: 'helio', name: '吴文翰 / Helio Labs', short: 'H', logo: 'H', track: '出海 2B', owner: '陈默', week: 8, status: 'normal', blockers: 0, nextMeeting: '2026-05-11', urgentTask: '准备 7 月 ProductHunt 发布物料', summary: '面向 SDR 团队的 AI 客户洞察工具,主市场欧洲。', wechat: 'heliolabs', funding: '种子 · 600 万', revenue: 'ARR ¥120w', team: '9 人 · 伦敦' },
    { id: 'narsil', name: '冯晗 / Narsil', short: 'N', logo: 'N', track: '加密基础设施', owner: '林笙', week: 3, status: 'normal', blockers: 0, nextMeeting: '2026-05-13', urgentTask: '完成品牌第一阶段定调访谈', summary: '面向机构的链上数据中间件,刚完成 Pre-A,需要建立内容主轴。', wechat: 'narsil_io', funding: 'Pre-A · 1500 万美金', revenue: '尚未商业化', team: '11 人 · 新加坡' },
    { id: 'kona', name: '何泠 / KonaWorks', short: 'K', logo: 'K', track: '消费品牌', owner: '苏彦', week: 12, status: 'normal', blockers: 0, nextMeeting: '2026-05-14', urgentTask: '完成 12 周复盘 + 续约方案', summary: '生活方式品牌,SOP 即将收官,正在评估续约。', wechat: 'konaworks', funding: 'A · 5000 万', revenue: 'ARR ¥1.8kw', team: '34 人 · 上海' },
    { id: 'arclet', name: '邵帆 / Arclet AI', short: 'A', logo: 'A', track: '出海 2B', owner: '李逸航', week: 5, status: 'warn', blockers: 2, nextMeeting: '2026-05-09', urgentTask: '调整冷邮件节奏,回复率持续偏低', summary: '面向中型电商的 AI 客服平台,正在打磨 GTM。', wechat: 'arclet_ai', funding: '种子 · 400 万美金', revenue: 'MRR $1.8k', team: '7 人 · 深圳 + 多伦多' },
    { id: 'lumen', name: '叶疏 / Lumen Health', short: 'L', logo: 'L', track: '医疗科技', owner: '陈默', week: 2, status: 'normal', blockers: 0, nextMeeting: '2026-05-08', urgentTask: '完成第一份品牌叙事框架', summary: 'AI 辅助慢病管理,刚完成 Pre-seed,处于早期摸索期。', wechat: 'lumen_health', funding: 'Pre-seed · 150 万美金', revenue: '尚未商业化', team: '4 人 · 上海' },
  ];

  const employees = [
    { name: '李逸航', email: 'liyihang@aiwatch.io', avatar: 'LY', customers: 3, p0: 4, p1: 7, p2: 5, joined: '2025-08-12' },
    { name: '陈默', email: 'chenmo@aiwatch.io', avatar: 'CM', customers: 3, p0: 2, p1: 5, p2: 8, joined: '2025-09-01' },
    { name: '林笙', email: 'linsheng@aiwatch.io', avatar: 'LS', customers: 2, p0: 1, p1: 4, p2: 6, joined: '2025-10-22' },
    { name: '苏彦', email: 'suyan@aiwatch.io', avatar: 'SY', customers: 2, p0: 3, p1: 3, p2: 4, joined: '2026-01-15' },
    { name: '韦景宁', email: 'weijn@aiwatch.io', avatar: 'WJ', customers: 0, p0: 0, p1: 2, p2: 9, joined: '2026-03-04' },
  ];

  // For B3 customer detail (default to QVeris)
  const meetings = [
    { no: 'M·12', title: '北美渠道复盘 + 5 月节奏调整', date: '2026-05-02', summary: '决定将 LinkedIn 内容节奏从 3 篇/周降至 2 篇/周,把节省下来的产能投入到 Webinar 选题',  duration: 62, attendees: ['曲东奇','Lily Chen','李逸航','陈默'], tags: ['市场','节奏'], decisions: ['Webinar 选题改为客户案例驱动','LinkedIn 减频但加深度'], external: '我方将 5 月起每周交付 2 篇 LinkedIn 内容 + 1 个 Webinar 选题草案。' },
    { no: 'M·11', title: 'Pitch Deck V2 评审', date: '2026-04-28', summary: 'TAM/SAM 数据来源需要重做,Funnel 部分调整为客户视角', duration: 75, attendees: ['曲东奇','李逸航'], tags: ['融资'], decisions: ['Pitch Deck V3 在 5/9 前完成'], external: '我方已收到融资材料反馈,5/9 前提交 V3 版本。' },
    { no: 'M·10', title: '冷邮件 A/B 测试结果同步', date: '2026-04-22', summary: '版本 B 回复率 4.8%,版本 A 2.1%,采纳 B 作为后续主版本', duration: 40, attendees: ['曲东奇','陈默','李逸航'], tags: ['冷邮件'], decisions: ['采用版本 B,后续每两周做一次主题轮换'], external: '冷邮件版本 B 已采纳,回复率较前一版本提升 2.3 倍。' },
    { no: 'M·09', title: 'ICP 二次访谈复盘', date: '2026-04-15', summary: '完成 6 场客户访谈,验证了 mid-market 路径,enterprise 路径搁置', duration: 90, attendees: ['曲东奇','李逸航','陈默'], tags: ['ICP','客户研究'], decisions: ['聚焦 mid-market,enterprise 暂搁'], external: '我方完成 6 场目标客户访谈,确认聚焦中型客户路径。' },
    { no: 'M·08', title: '内容主轴定调', date: '2026-04-08', summary: '内容主轴定为「企业知识资产化」,围绕 3 个支柱展开', duration: 55, attendees: ['曲东奇','李逸航'], tags: ['内容'], decisions: ['内容主轴:企业知识资产化'], external: '我方已锁定内容主轴「企业知识资产化」,后续围绕此展开。' },
    { no: 'M·07', title: '产品市场匹配度初评', date: '2026-04-01', summary: '现有 12 家试用客户中 8 家持续使用,留存率 67%', duration: 50, attendees: ['曲东奇','陈默'], tags: ['PMF'], decisions: [], external: '我方协助梳理留存数据,8/12 客户持续使用。' },
  ];

  const todos = [
    { pri: 'P0', task: '撰写 Series A pitch deck V3', owner: '李逸航', due: '2026-05-09' },
    { pri: 'P0', task: '完成北美 Webinar 5 月选题方案', owner: '陈默', due: '2026-05-08' },
    { pri: 'P1', task: '调整 LinkedIn 内容节奏(2 篇/周)', owner: '李逸航', due: '2026-05-12' },
    { pri: 'P1', task: '冷邮件版本 B 主题轮换设计', owner: '陈默', due: '2026-05-15' },
    { pri: 'P2', task: '整理 4 月所有客户原话引用', owner: '李逸航', due: '2026-05-20' },
  ];

  const valueDeliveries = [
    { date: '2026-05-04', type: '内容', title: 'LinkedIn 长文:企业知识资产化的三个支柱', metric: '阅读 1.2k · 互动 86', linked: '内容主轴', images: 1, customer: 'qveris' },
    { date: '2026-05-03', type: '对接', title: '为 QVeris 引荐 2 位北美 SaaS Founder', metric: '已建立联系 · 1 已约会', linked: '北美渠道', images: 0, customer: 'qveris' },
    { date: '2026-05-02', type: '内容', title: 'Twitter Thread:8 个失败的 ICP 故事', metric: '阅读 4.8k · 转发 31', linked: 'ICP 验证', images: 1, customer: 'qveris' },
    { date: '2026-04-29', type: '活动', title: '内部 Webinar 试讲 + 反馈整理', metric: '试讲 1 场 · 反馈 12 条', linked: 'Webinar 筹备', images: 2, customer: 'qveris' },
    { date: '2026-04-26', type: '咨询', title: '完成 Series A pitch deck V2 评审 + 修订建议', metric: '修订建议 18 条', linked: '融资', images: 1, customer: 'qveris' },
    { date: '2026-04-22', type: '内容', title: '冷邮件版本 B 文案 + 节奏方案', metric: '回复率 4.8%', linked: '冷邮件', images: 0, customer: 'qveris' },
    { date: '2026-04-19', type: '内容', title: '产品落地页第一稿(英文版)', metric: '转化漏斗设计完成', linked: '官网', images: 3, customer: 'qveris' },
    { date: '2026-04-15', type: '咨询', title: '6 场 ICP 访谈逐字稿 + 洞察提炼', metric: '生成 24 条洞察', linked: 'ICP', images: 0, customer: 'qveris' },
  ];

  const customerNeeds = [
    { time: '本周', title: '完成 Series A pitch deck V3', detail: '基于 V2 评审意见,重做 TAM/SAM 数据,调整 Funnel 视角', source: 'M·12' },
    { time: '本月', title: '建立北美 Webinar 节奏', detail: '客户案例驱动的选题,每月 1 场,先做 3 场试点', source: 'M·12' },
    { time: '持续', title: '维持冷邮件 4%+ 回复率', detail: '版本 B 采纳为主线,每两周做一次主题轮换', source: 'M·10' },
    { time: '本月', title: '深化 ICP mid-market 路径', detail: '基于 6 场访谈结果,设计第二轮验证实验', source: 'M·09' },
    { time: '持续', title: '内容主轴「企业知识资产化」三支柱产能', detail: '每月稳定输出 8 篇,长文 + Thread 各占一半', source: 'M·08' },
  ];

  // Customer-facing timeline (D1)
  const customerTimeline = [
    { date: '2026-05-04', kind: 'content', title: 'LinkedIn 长文已发布', detail: '《企业知识资产化的三个支柱》上线 LinkedIn,首日阅读 1.2k,互动 86 次', metric: { '阅读量': '1.2k', '互动': '86' }, image: true, link: '查看原文' },
    { date: '2026-05-03', kind: 'connect', title: '完成 2 位北美 SaaS Founder 引荐', detail: '已建立邮件联系,其中 1 位已确认本周与 QVeris 团队 30min 通话', metric: { '已建联': '2', '已约会': '1' }, link: null },
    { date: '2026-05-02', kind: 'content', title: 'Twitter Thread 上线', detail: '《8 个失败的 ICP 故事》在 X 平台发布,阅读 4.8k,转发 31 次', metric: { '阅读': '4.8k', '转发': '31' }, image: true, link: '查看 Thread' },
    { date: '2026-04-29', kind: 'event', title: '内部 Webinar 试讲完成', detail: '为 5 月对外 Webinar 进行了 1 场内部试讲,收集 12 条改进反馈,正在整合', metric: { '试讲场次': '1', '反馈': '12 条' }, image: true, link: null },
    { date: '2026-04-26', kind: 'consulting', title: 'Pitch Deck V2 评审已交付', detail: '完成 V2 版本完整评审,共提出 18 条修订建议,V3 版本预计 5/9 前交付', metric: { '修订建议': '18' }, image: true, link: '查看评审' },
    { date: '2026-04-22', kind: 'content', title: '冷邮件方案 V2 上线', detail: '版本 B 文案 + 触达节奏方案已采纳,本周回复率达到 4.8%,较前一版本提升 2.3 倍', metric: { '回复率': '4.8%' }, link: null },
    { date: '2026-04-19', kind: 'content', title: '官网英文版第一稿已交付', detail: '产品落地页英文版完成,包含完整的转化漏斗设计', metric: { '页面': '1', '迭代': '3 轮' }, image: true, link: '查看预览' },
    { date: '2026-04-15', kind: 'consulting', title: '6 场 ICP 客户访谈已完成', detail: '逐字稿与洞察整理完毕,共生成 24 条可执行洞察,mid-market 路径得到初步验证', metric: { '访谈场次': '6', '洞察': '24' }, link: '查看洞察集' },
  ];

  return { customers, employees, meetings, todos, valueDeliveries, customerNeeds, customerTimeline };
})();
