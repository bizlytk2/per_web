// All site content, structured from the CV (June 2026) and media docx.

export const profile = {
  name: 'Yen Teik Lee',
  title: 'Senior Lecturer in Finance',
  org: 'NUS Business School',
  roleLine: 'Deputy Academic Director, NUS Executive MBA (Chinese)',
  tagline:
    'Corporate finance and digital finance — where capital, governance, technology, and human behaviour collide.',
  intro:
    'I study how firms raise, govern, and deploy capital in a world being rewritten by technology — from board diversity and corporate innovation to fintech lending and the financial lives of ordinary people. Alongside the research, I build classrooms (and AI teaching tools) that turn finance into something people can actually use.',
  email: 'yenteik@nus.edu.sg',
  phone: '+65 6516 6693',
  location: 'Singapore',
  address:
    'Finance Department, BIZ1 07-60 · National University of Singapore · 15 Kent Ridge Drive, Singapore 119245',
  profileUrl: 'https://discovery.nus.edu.sg/18324-yen-teik-lee/publications',
  interests: ['Corporate Finance', 'Digital Finance', 'FinTech', 'Corporate Innovation', 'Governance'],
}

export const stats = [
  { value: 8, suffix: '', label: 'Peer-reviewed publications' },
  { value: 4, suffix: '', label: 'Working papers in the pipeline' },
  { value: 5, suffix: '', label: 'Universities taught across' },
  { value: 2024, suffix: '–30', label: 'NUS Teaching Excellence Honour Roll', raw: true },
]

export const researchPhilosophy = [
  'Good finance research starts with a real friction — something that genuinely shapes how capital moves or how people decide — and then finds a setting clean enough to measure it.',
  'My work runs along two currents. The first is corporate finance and innovation: how governance, board composition, clawbacks, and political connections shape what firms invent and how they perform. The second is digital finance: how fintech platforms, cashless rails, and AI change the financial behaviour of firms and households alike.',
  'I lean on natural experiments, regulatory regime changes, and large-scale data to draw credible causal lines — and I care that the answer matters to a regulator, a board, or a borrower, not just a referee.',
]

// Publications — newest first, as listed on the CV.
export const publications = [
  {
    title: 'From Pitch to Progress: The Interplay of Team Reputation and Governance in Crowdfunded Innovation',
    authors: 'with Xin Deng, Qi Sun, Yu Yan',
    venue: 'Research Policy',
    year: 2026,
    tags: ['Crowdfunding', 'Innovation', 'Governance'],
  },
  {
    title: 'Interfaces, Social Information Processing, and Diversity Cascades: How Board Diversity Influences Invention Output',
    authors: 'with Daniel Z. Mack, Guoli Chen, Po-Hsuan Hsu, Gerard George',
    venue: 'Research Policy',
    detail: 'Vol 54(1)',
    year: 2025,
    tags: ['Board Diversity', 'Innovation'],
  },
  {
    title: 'How Deep-Level and Surface-Level Board Diversity, Formal and Informal Social Structures Affect Innovation',
    authors: 'with Guoli Chen, Po-Hsuan Hsu, Daniel Z. Mack',
    venue: 'Journal of Management Studies',
    detail: 'Vol 62(1), 65–101',
    year: 2025,
    tags: ['Board Diversity', 'Innovation'],
  },
  {
    title: "Dodd-Frank's Impact on Community-Bank Investment Models: A Bayesian Structural Time Series Analysis",
    authors: 'with Gary Caton, Ed Gamble, Francis Kerins',
    venue: 'Accounting and Finance',
    detail: 'Vol 63(1), 537–554',
    year: 2023,
    tags: ['Banking', 'Regulation'],
  },
  {
    title: 'Dancing in Shackles: Clawback and Corporate Innovation',
    authors: 'with Xin Deng, Shengmin Hung, Zheng Qiao',
    venue: 'Journal of Accounting and Public Policy',
    detail: 'Vol 41(4)',
    year: 2021,
    tags: ['Clawback', 'Innovation'],
  },
  {
    title: 'Problems with Crisis Intervention: When the Government Wants to Restrain Big Banks but Punishes Small Businesses Instead',
    authors: 'with Gary Caton, Ed Gamble, Kelig Aujogue',
    venue: 'Journal of Business Venturing Insights',
    detail: 'Vol 14',
    year: 2020,
    tags: ['Banking', 'Small Business'],
  },
  {
    title: 'Are Bond Ratings Informative? Evidence from Regulatory Regime Changes',
    authors: 'with Louis Ederington, Jeremy Goh, Lisa Yang',
    venue: 'Journal of Fixed Income',
    detail: 'Vol 29(1), 6–19 · lead article',
    year: 2019,
    tags: ['Credit Ratings', 'Regulation'],
  },
  {
    title: 'Governance and Post-Repurchase Performance',
    authors: 'with Jeremy Goh, Gary Caton, Scott Linn',
    venue: 'Journal of Corporate Finance',
    detail: 'Vol 39, 155–173',
    year: 2016,
    tags: ['Governance', 'Payout'],
  },
]

export const workingPapers = [
  {
    title: 'Financial Sustainability and Cognitive-Mental-Physical Health Outcomes Among Older Adults in Singapore: Evidence from a Population-Based Study',
    authors: 'with Sumit Agarwal (NUS), Roger Ho (NUS), Peiyi Jin (NUS)',
    status: 'Under review at BMJ Public Health',
  },
  {
    title: 'Willingness to Pay for Liquidity: Evidence from an Interest-Free, Tip-Based Cash Advance Platform',
    authors: 'with Sumit Agarwal (NUS), Alok Shashwat (ISB), Bhash Mazumder (UC Irvine)',
    status: 'Working paper',
  },
  {
    title: "Power, Scrutiny, and Congressmen's Favoritism for Friends' Firms",
    authors: 'with Quoc-Anh Do (Monash), Bang D. Nguyen (Cambridge), Kieu-Trang Nguyen (Melbourne)',
    status: 'Working paper',
  },
  {
    title: 'Directors as Connectors: The Impact of the External Networks of Directors on Firms',
    authors: 'with Quoc-Anh Do (Monash), Bang D. Nguyen (Cambridge)',
    status: 'Previously circulated as “Political Connections and Firm Value: Evidence from Close Gubernatorial Elections”',
  },
]

export const teachingPhilosophy = [
  'Finance is a language of decisions. My job is to make people fluent enough to act — whether they are a CFO weighing a buyback, a founder pricing a round, or a non-finance manager reading a balance sheet for the first time.',
  'I teach across the full arc — undergraduate to EMBA, in English and Mandarin, from options pricing to blockchain, Python, and ethical AI. The thread is the same: pair rigorous frameworks with real, current problems, then let students build, present, and defend their own answers.',
]

export const teachingImpact = [
  { stat: 'ATEA Honour Roll', detail: 'NUS Annual Teaching Excellence Award Honour Roll, 2026–2030' },
  { stat: 'ATEA 2024–26', detail: 'NUS Annual Teaching Excellence Award, three consecutive years' },
  { stat: 'First Prize', detail: 'Junior Faculty Teaching Competition, SUFE (2015)' },
  { stat: 'AI in the classroom', detail: 'Co-PI, grant to build a bespoke 24/7 AI teaching assistant for higher education' },
]

export const teachingBreadth = [
  {
    level: 'EMBA (Chinese)',
    courses: ['Navigating Change: Strategy, Tech & Global Leadership', 'Corporate Finance', 'Financial Management & Markets'],
  },
  {
    level: 'MBA',
    courses: ['Technological Innovations and Disruptions in Finance', 'Financial Analytics', 'Data Science for Managers', 'ChinaTrek', 'Managerial Finance'],
  },
  {
    level: 'Executive Education',
    courses: ['Stock Fundamental Valuation', 'Blockchain', 'Ethical AI', 'Finance with Python', 'Financing with FinTech', 'The Future of Banking'],
  },
  {
    level: 'Postgraduate',
    courses: ['Financial Technology & Analytics', 'Fintech Venture Creation', 'Statistics & Analytics in Finance', 'Empirical Corporate Finance'],
  },
  {
    level: 'Undergraduate',
    courses: ['Fintech & Financial Data Analytics', 'Options & Futures', 'Derivative Securities', 'International Finance', 'Corporate Finance'],
  },
]

export const teachingInitiatives = [
  'Mentored teams through 40+ experiential industry projects since 2019 — with TNB Aura, PwC, KPMG, Google Singapore, AWS, OCBC, J&J and others — on everything from deep tech and decarbonization to GenAI and quantitative strategy.',
  'Supervised honours and PhD theses spanning multi-agent LLMs for asset allocation, option trading strategy, monetary policy, and corporate governance.',
  'Built industry pipelines placing students into BNY Mellon, JP Morgan, DBS, HSBC, SGX, MUFG, EY, Deloitte, KPMG and more.',
]

// Media commentary — grouped by outlet, with live links from the docx.
export const media = [
  {
    outlet: 'The Straits Times',
    items: [
      { label: 'Is pet insurance worth paying for?', url: 'https://www.straitstimes.com/singapore/the-truth-about-coverage-is-pet-insurance-worth-paying-for' },
      { label: 'Financial influencers and the knowledge gap', url: 'https://www.straitstimes.com/business/financial-influencers-say-they-fill-a-gap-in-knowledge-about-money-matters' },
      { label: 'Memecoins: new frontier or dicey gamble?', url: 'https://www.straitstimes.com/business/memecoins-a-new-frontier-or-a-dicey-gamble-for-young-investors-in-singapore' },
      { label: 'Why cash is still king for some hawkers', url: 'https://www.straitstimes.com/singapore/why-cash-is-still-king-for-some-hawkers-in-singapore-despite-digitalisation-push' },
      { label: 'More e-hongbaos this Chinese New Year', url: 'https://www.straitstimes.com/singapore/more-e-hongbaos-given-out-in-singapore-this-chinese-new-year' },
    ],
  },
  {
    outlet: 'CNA',
    items: [
      { label: 'Banking outages & e-payment disruption (Big Read)', url: 'https://www.channelnewsasia.com/singapore/banking-outages-epayment-service-disruption-big-read-3879661' },
      { label: 'Multi-currency apps & exchange rates', url: 'https://www.channelnewsasia.com/singapore/revolut-wise-youtrip-multi-currency-app-exchange-rates-good-3928711' },
      { label: 'Cashless vs cash-only: PayNow & digital payments', url: 'https://www.channelnewsasia.com/singapore/cashless-cash-only-paynow-digital-payments-5220521' },
    ],
  },
  {
    outlet: 'Lianhe Zaobao',
    items: [
      { label: 'Cryptocurrency commentary', url: 'https://www.zaobao.com.sg/finance/singapore/story20241121-5357513' },
      { label: 'Digital investing tools help newcomers seize opportunities', url: 'https://www.zaobao.com.sg/finance/singapore/story20220814-1302011' },
    ],
  },
  {
    outlet: 'TODAY',
    items: [
      { label: 'Protecting customers after the DBS digital services disruption', url: 'https://www.todayonline.com/singapore/dbs-digital-banking-service-outage-reliable-experts-2141386' },
    ],
  },
  {
    outlet: 'Insurance Asia',
    items: [
      { label: 'CrowdStrike meltdown may shore up cyber insurance premiums', url: 'https://insuranceasia.com/insurance/exclusive/crowdstrike-meltdown-may-shore-cyber-insurance-premiums' },
    ],
  },
  {
    outlet: 'Kellogg Insight',
    items: [
      { label: 'Do Powerful Politicians Play Favorites with Their Corporate Friends? (Feb 2021)', url: 'https://insight.kellogg.northwestern.edu/article/powerful-politicians-corporate-friends' },
    ],
  },
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
