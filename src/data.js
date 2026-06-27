// All site content, structured from the CV (June 2026) and media docx.

export const profile = {
  name: 'Yen Teik Lee',
  title: 'Senior Lecturer in Finance',
  org: 'NUS Business School',
  roleLine: 'Deputy Academic Director, NUS Executive MBA (Chinese)',
  tagline:
    'I study how people and firms make financial decisions — and how technology is rewriting the rules of money.',
  email: 'yenteik@nus.edu.sg',
  phone: '+65 6516 6693',
  location: 'Singapore',
  address:
    'Finance Department, BIZ1 07-60 · National University of Singapore · 15 Kent Ridge Drive, Singapore 119245',
  profileUrl: 'https://discovery.nus.edu.sg/18324-yen-teik-lee/publications',
  interests: ['Corporate Finance', 'Digital Finance', 'FinTech', 'Corporate Innovation', 'Governance'],
}

// Bio — first-person, per Yen Teik. Facts unchanged from supplied text.
export const bio = [
  'I am a Senior Lecturer at NUS Business School and Deputy Academic Director of the EMBA-Chinese Programme. I teach and mentor students in corporate and digital finance, from undergraduate to executive level.',
  'My teaching has won the NUS Annual Teaching Excellence Award and the NUS Business School Teaching Excellence Award in 2024, 2025, and 2026, and the Shanghai University of Finance and Economics (SUFE) Teaching Excellence Award in 2015.',
  "I research how people make everyday financial decisions, including what they will pay for liquidity. My work has appeared in the Journal of Corporate Finance, Research Policy, and the Journal of Management Studies, and won the Best Paper in Corporate Finance award at the Society for Financial Studies Finance Cavalcade in 2013. It has been featured by Kellogg Insight, the BBC World Service, The Economist, and Columbia Law School's Blue Sky Blog, and my commentary has appeared in The Straits Times, CNA, and The Business Times.",
  "Before NUS, I was an Assistant Professor of Finance at the Asia School of Business and SUFE, a Senior Lecturer at Curtin Singapore, and a visiting scholar at New York University's Stern School of Business and Cambridge Judge Business School. I hold a PhD in Business (Finance) from Singapore Management University.",
]

export const stats = [
  { value: 8, suffix: '', label: 'Peer-reviewed publications' },
  { value: 3, suffix: '', label: 'FT50 publications' },
  { value: 4, suffix: '', label: 'Working papers in the pipeline' },
  { value: 5, suffix: '', label: 'Universities taught across' },
  { value: 2026, suffix: '–30', label: 'NUS Teaching Excellence Honour Roll', raw: true },
]

// Focus areas used for interactive filtering (FinTech Lending dropped).
export const focusAreas = [
  'Corporate Finance',
  'Digital Finance',
  'Corporate Innovation',
  'Board Diversity',
  'Governance',
  'Political Connections',
  'Household Finance',
]

export const researchPhilosophy = [
  'Good research starts with a real friction — something that shapes how capital moves or how people decide — and a setting clean enough to measure it.',
  'My work follows two threads. One is corporate finance and innovation: how boards, clawbacks, and political ties shape what firms build and how they perform. The other is digital finance: how fintech platforms, cashless payments, and AI reshape the financial lives of firms and households.',
  'I rely on natural experiments, regulatory shifts, and large-scale data to draw causal lines that hold. And I write for the people a result touches — a regulator, a board, a borrower — not only for the referee.',
]

// Publications — newest first, as listed on the CV. `focus` drives filtering.
export const publications = [
  {
    title: 'From Pitch to Progress: The Interplay of Team Reputation and Governance in Crowdfunded Innovation',
    authors: 'with Xin Deng, Qi Sun, Yu Yan',
    venue: 'Research Policy',
    detail: 'Forthcoming, 2026',
    year: 2026,
    url: 'https://doi.org/10.2139/ssrn.5701723',
    focus: ['Digital Finance', 'Corporate Innovation', 'Governance'],
  },
  {
    title: 'Interfaces, Social Information Processing, and Diversity Cascades: How Board Diversity Influences Invention Output',
    authors: 'with Daniel Z. Mack, Guoli Chen, Po-Hsuan Hsu, Gerard George',
    venue: 'Research Policy',
    detail: 'Vol 54(1)',
    year: 2025,
    url: 'https://doi.org/10.1016/j.respol.2024.105148',
    focus: ['Board Diversity', 'Corporate Innovation'],
  },
  {
    title: 'How Deep-Level and Surface-Level Board Diversity, Formal and Informal Social Structures Affect Innovation',
    authors: 'with Guoli Chen, Po-Hsuan Hsu, Daniel Z. Mack',
    venue: 'Journal of Management Studies',
    detail: 'Vol 62(1), 65–101',
    year: 2025,
    url: 'https://doi.org/10.1111/joms.13040',
    focus: ['Board Diversity', 'Corporate Innovation'],
  },
  {
    title: "Dodd-Frank's Impact on Community-Bank Investment Models: A Bayesian Structural Time Series Analysis",
    authors: 'with Gary Caton, Ed Gamble, Francis Kerins',
    venue: 'Accounting and Finance',
    detail: 'Vol 63(1), 537–554',
    year: 2023,
    url: 'https://doi.org/10.1111/acfi.13016',
    focus: ['Corporate Finance'],
  },
  {
    title: 'Dancing in Shackles: Clawback and Corporate Innovation',
    authors: 'with Xin Deng, Shengmin Hung, Zheng Qiao',
    venue: 'Journal of Accounting and Public Policy',
    detail: 'Vol 41(4)',
    year: 2021,
    url: 'https://doi.org/10.1016/j.jaccpubpol.2021.106895',
    focus: ['Corporate Innovation', 'Governance', 'Corporate Finance'],
  },
  {
    title: 'Problems with Crisis Intervention: When the Government Wants to Restrain Big Banks but Punishes Small Businesses Instead',
    authors: 'with Gary Caton, Ed Gamble, Kelig Aujogue',
    venue: 'Journal of Business Venturing Insights',
    detail: 'Vol 14',
    year: 2020,
    url: 'https://doi.org/10.1016/j.jbvi.2020.e00185',
    focus: ['Corporate Finance'],
  },
  {
    title: 'Are Bond Ratings Informative? Evidence from Regulatory Regime Changes',
    authors: 'with Louis Ederington, Jeremy Goh, Lisa Yang',
    venue: 'Journal of Fixed Income',
    detail: 'Vol 29(1), 6–19 · lead article',
    year: 2019,
    url: 'https://doi.org/10.3905/jfi.2019.29.1.006',
    focus: ['Corporate Finance'],
  },
  {
    title: 'Governance and Post-Repurchase Performance',
    authors: 'with Jeremy Goh, Gary Caton, Scott Linn',
    venue: 'Journal of Corporate Finance',
    detail: 'Vol 39, 155–173',
    year: 2016,
    url: 'https://doi.org/10.1016/j.jcorpfin.2016.02.005',
    focus: ['Governance', 'Corporate Finance'],
  },
]

// Working papers — financial sustainability paper placed last per request.
export const workingPapers = [
  {
    title: 'Willingness to Pay for Liquidity: Evidence from an Interest-Free, Tip-Based Cash Advance Platform',
    authors: 'with Sumit Agarwal (NUS), Alok Shashwat (ISB), Bhash Mazumder (UC Irvine)',
    status: 'SSRN working paper',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5957496',
    focus: ['Household Finance', 'Digital Finance'],
  },
  {
    title: "Power, Scrutiny, and Congressmen's Favoritism for Friends' Firms",
    authors: 'with Quoc-Anh Do (Monash), Bang D. Nguyen (Cambridge), Kieu-Trang Nguyen (Melbourne)',
    status: 'SSRN working paper',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4636019',
    focus: ['Political Connections', 'Corporate Finance'],
  },
  {
    title: 'Directors as Connectors: The Impact of the External Networks of Directors on Firms',
    authors: 'with Quoc-Anh Do (Monash), Bang D. Nguyen (Cambridge)',
    status: 'SSRN working paper',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2753836',
    focus: ['Governance', 'Political Connections', 'Corporate Finance'],
  },
  {
    title: 'Financial Sustainability and Cognitive-Mental-Physical Health Outcomes Among Older Adults in Singapore: Evidence from a Population-Based Study',
    authors: 'with Sumit Agarwal (NUS), Roger Ho (NUS), Peiyi Jin (NUS)',
    status: 'Working paper',
    url: null,
    focus: ['Household Finance'],
  },
]

export const teachingPhilosophy = [
  'Finance is a language of decisions, and my job is to make people fluent enough to act — a CFO weighing a buyback, a founder pricing a round, a manager reading a balance sheet for the first time.',
  'I teach across the full arc, undergraduate to EMBA, in English and Mandarin, from options pricing to blockchain, Python, and ethical AI. The method holds throughout: pair a rigorous framework with a live problem, then have students build, present, and defend their own answer.',
]

export const teachingImpact = [
  { stat: 'ATEA Honour Roll', detail: 'NUS Annual Teaching Excellence Award Honour Roll, 2026–2030' },
  { stat: 'ATEA 2024–26', detail: 'NUS Annual Teaching Excellence Award, three years running' },
  { stat: 'NUS Biz Award', detail: 'NUS Business School Teaching Excellence Award, 2024–2026' },
  { stat: 'First Prize', detail: 'Junior Faculty Teaching Competition, SUFE (2015)' },
]

export const teachingScholarship = [
  {
    title: 'Sustainability Education Playbook',
    note: 'SGFIN Paper Series · with C. Ong, S.C. Chua, C.P. Lim, S. Shin, D. Loo, E. Ng',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4959597',
  },
]

// `nus: true` marks courses taught (or currently taught) at NUS — highlighted in the UI.
export const teachingBreadth = [
  {
    level: 'EMBA (Chinese)',
    courses: [
      { n: 'Navigating Change: Strategy, Tech & Global Leadership', nus: true },
      { n: 'Corporate Finance', nus: true },
      { n: 'Financial Management & Markets', nus: true },
    ],
  },
  {
    level: 'MBA',
    courses: [
      { n: 'Technological Innovations and Disruptions in Finance', nus: true },
      { n: 'Financial Analytics', nus: false },
      { n: 'Data Science for Managers', nus: false },
      { n: 'ChinaTrek', nus: false },
      { n: 'Managerial Finance', nus: false },
    ],
  },
  {
    level: 'Executive Education',
    courses: [
      { n: 'Stock Fundamental Valuation', nus: true },
      { n: 'Blockchain', nus: true },
      { n: 'Ethical AI', nus: true },
      { n: 'Finance with Python', nus: true },
      { n: 'Financing with FinTech', nus: false },
      { n: 'The Future of Banking', nus: false },
    ],
  },
  {
    level: 'Postgraduate',
    courses: [
      { n: 'Financial Technology & Analytics', nus: true },
      { n: 'Fintech Venture Creation', nus: true },
      { n: 'Statistics & Analytics in Finance', nus: true },
      { n: 'Empirical Corporate Finance', nus: false },
    ],
  },
  {
    level: 'Undergraduate',
    courses: [
      { n: 'Fintech & Financial Data Analytics', nus: true },
      { n: 'Options & Futures', nus: true },
      { n: 'Derivative Securities', nus: false },
      { n: 'International Finance', nus: false },
      { n: 'Corporate Finance', nus: false },
    ],
  },
]

export const teachingInitiatives = [
  'Mentored teams through 40+ experiential industry projects since 2019 — with TNB Aura, PwC, KPMG, Google Singapore, AWS, OCBC and J&J — on deep tech, decarbonization, GenAI, and quantitative strategy.',
  'Co-PI on an NUS grant building a bespoke 24/7 AI teaching assistant for higher education, and on a multidisciplinary sustainability-education grant.',
  'Supervised honours and PhD theses spanning multi-agent LLMs for asset allocation, option trading strategy, monetary policy, and corporate governance.',
  'Built industry pipelines placing students into BNY Mellon, JP Morgan, DBS, HSBC, SGX, MUFG, EY, Deloitte and KPMG.',
]

// Media — organized by topic. Outlet is a label on each item; `theme` drives filtering.
export const mediaThemes = [
  'Payments & the cashless society',
  'Banking resilience & disruptions',
  'Crypto & the new retail investor',
  'Insurance & risk',
]

export const commentary = [
  // Payments & the cashless society
  { label: 'Why cash is still king for some hawkers', outlet: 'The Straits Times', theme: 'Payments & the cashless society', url: 'https://www.straitstimes.com/singapore/why-cash-is-still-king-for-some-hawkers-in-singapore-despite-digitalisation-push' },
  { label: 'More e-hongbaos given out this Chinese New Year', outlet: 'The Straits Times', theme: 'Payments & the cashless society', url: 'https://www.straitstimes.com/singapore/more-e-hongbaos-given-out-in-singapore-this-chinese-new-year' },
  { label: 'Cashless vs cash-only: PayNow & digital payments', outlet: 'CNA', theme: 'Payments & the cashless society', url: 'https://www.channelnewsasia.com/singapore/cashless-cash-only-paynow-digital-payments-5220521' },
  { label: 'Multi-currency apps & exchange rates', outlet: 'CNA', theme: 'Payments & the cashless society', url: 'https://www.channelnewsasia.com/singapore/revolut-wise-youtrip-multi-currency-app-exchange-rates-good-3928711' },

  // Banking resilience & disruptions
  { label: 'Banking outages & e-payment disruption (Big Read)', outlet: 'CNA', theme: 'Banking resilience & disruptions', url: 'https://www.channelnewsasia.com/singapore/banking-outages-epayment-service-disruption-big-read-3879661' },
  { label: 'Protecting customers after the DBS digital services disruption', outlet: 'TODAY', theme: 'Banking resilience & disruptions', url: 'https://www.todayonline.com/singapore/dbs-digital-banking-service-outage-reliable-experts-2141386' },

  // Crypto & the new retail investor
  { label: 'Memecoins: new frontier or dicey gamble?', outlet: 'The Straits Times', theme: 'Crypto & the new retail investor', url: 'https://www.straitstimes.com/business/memecoins-a-new-frontier-or-a-dicey-gamble-for-young-investors-in-singapore' },
  { label: 'Financial influencers and the knowledge gap', outlet: 'The Straits Times', theme: 'Crypto & the new retail investor', url: 'https://www.straitstimes.com/business/financial-influencers-say-they-fill-a-gap-in-knowledge-about-money-matters' },
  { label: 'Cryptocurrency commentary', outlet: 'Lianhe Zaobao', theme: 'Crypto & the new retail investor', url: 'https://www.zaobao.com.sg/finance/singapore/story20241121-5357513' },
  { label: 'Digital investing tools help newcomers seize opportunities', outlet: 'Lianhe Zaobao', theme: 'Crypto & the new retail investor', url: 'https://www.zaobao.com.sg/finance/singapore/story20220814-1302011' },

  // Insurance & risk
  { label: 'Is pet insurance worth paying for?', outlet: 'The Straits Times', theme: 'Insurance & risk', url: 'https://www.straitstimes.com/singapore/the-truth-about-coverage-is-pet-insurance-worth-paying-for' },
  { label: 'Pet insurance demand still rising, but growth may be losing bite', outlet: 'The Business Times', theme: 'Insurance & risk', url: 'https://www.businesstimes.com.sg/opinion-features/pet-insurance-demand-still-rising-growth-may-be-losing-bite' },
  { label: 'CrowdStrike meltdown may shore up cyber insurance premiums', outlet: 'Insurance Asia', theme: 'Insurance & risk', url: 'https://insuranceasia.com/insurance/exclusive/crowdstrike-meltdown-may-shore-cyber-insurance-premiums' },
]

// Coverage of the research itself — distinct from op-ed commentary.
export const researchPress = [
  { label: 'Do Powerful Politicians Play Favorites with Their Corporate Friends?', outlet: 'Kellogg Insight', year: '2021', url: 'https://insight.kellogg.northwestern.edu/article/powerful-politicians-corporate-friends' },
  { label: 'Who wins when a politician wins?', outlet: 'The Economist', year: '2016', url: 'https://www.economist.com/democracy-in-america/2016/04/15/who-wins-when-a-politician-wins' },
  { label: 'Directors as Connectors', outlet: 'Columbia Law School Blue Sky Blog', year: '2016', url: 'https://clsbluesky.law.columbia.edu/2016/05/09/directors-as-connectors/' },
  { label: 'Featured on BBC World Service', outlet: 'BBC World Service', year: '', url: 'https://www.bbc.co.uk/programmes/p03qzk73' },
]

export const appointments = [
  { role: 'Deputy Academic Director, NUS Executive MBA (Chinese)', period: '2025 – Present' },
  { role: 'Senior Lecturer, NUS Business School', period: '2020 – Present' },
  { role: 'Director, Center for Financial Innovation, ASB (Kuala Lumpur)', period: '2018 – 2020' },
  { role: 'Assistant Professor of Finance, ASB (Kuala Lumpur)', period: '2018 – 2020' },
  { role: 'Senior Lecturer, Curtin Singapore', period: '2016 – 2018' },
  { role: 'Assistant Professor of Finance, SUFE (Shanghai)', period: '2013 – 2016' },
  { role: 'Visiting Research Scholar, NYU Stern', period: '2012' },
  { role: 'Visiting Research Scholar, Cambridge Judge', period: '2011 – 2012' },
]

export const education = [
  { degree: 'Ph.D., Business (Finance)', school: 'Singapore Management University', period: '2009 – 2013' },
  { degree: 'M.Sc., Finance', school: 'Singapore Management University', period: '2006 – 2008' },
  { degree: 'B.Sc., Accountancy (Hons)', school: 'Nanyang Technological University', period: '2001 – 2004' },
]

export const skills = {
  software: ['Python', 'R', 'Stata', 'SAS'],
  languages: ['English (fluent)', 'Chinese (native)', 'Hokkien', 'Cantonese'],
  certification: 'Chartered Alternative Investment Analyst (CAIA), Levels I & II',
}

export const cvFile = 'YTL-CV-June-2026.pdf'
