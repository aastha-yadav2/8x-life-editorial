export interface Role {
  id: string;
  title: string;
  category: 'core' | 'launch';
  department: string;
  location: string;
  type: string;
  description: string;
  applyUrl: string;
  isPartnerRole?: boolean;
}

export const VERIFIED_ROLES: Role[] = [
  {
    id: 'intrapreneur',
    title: 'Intrapreneur',
    category: 'core',
    department: 'Sales & Growth',
    location: 'San Francisco or Remote',
    type: 'Full-time',
    description: 'Lead a project from research to revenue. Build outbound motions, architect client deliverables, and own the profit & loss of new vertical offerings.',
    applyUrl: 'https://www.8x.careers/join/intrapreneur',
    isPartnerRole: false,
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    category: 'core',
    department: 'Design',
    location: 'San Francisco or Remote',
    type: 'Full-time',
    description: 'Design every product we ship. Lead interface craft, design systems, and interaction models across our internal human orchestration platforms and client experiences.',
    applyUrl: 'https://www.8x.careers/join/product-designer',
    isPartnerRole: false,
  },
  {
    id: 'account-manager-reddit',
    title: 'Account Manager — Reddit',
    category: 'core',
    department: 'Operations & Community',
    location: 'Remote',
    type: 'Full-time',
    description: 'Own Reddit campaigns day to day. Write and schedule content, curate branded subreddits, look after our community of vetted Redditors, and deliver authentic conversations.',
    applyUrl: 'https://www.8x.careers/join/account-manager-8x-karma',
    isPartnerRole: false,
  },
  {
    id: 'market-lead-spain',
    title: 'Market Lead Intern — Spain',
    category: 'launch',
    department: 'Marketing & Creative',
    location: 'Remote (Spain)',
    type: 'Internship (2-week trial)',
    description: 'Lead 8x launch in the Spanish market: author the go-to-market playbook, initiate localized outreach, close founding Spanish accounts, and scale long-term partners.',
    applyUrl: 'https://www.8x.careers/join/market-lead-intern-spain',
    isPartnerRole: true,
  },
  {
    id: 'market-lead-uk',
    title: 'Market Lead Intern — United Kingdom',
    category: 'launch',
    department: 'Marketing & Creative',
    location: 'Remote (UK)',
    type: 'Internship (2-week trial)',
    description: 'Lead 8x expansion across the UK. Build outreach playbooks, connect with high-growth consumer and tech brands, and spearhead British creator and research pipelines.',
    applyUrl: 'https://www.8x.careers/join/market-lead-intern-uk',
    isPartnerRole: true,
  },
  {
    id: 'market-lead-germany',
    title: 'Market Lead Intern — Germany',
    category: 'launch',
    department: 'Marketing & Creative',
    location: 'Remote (Germany)',
    type: 'Internship (2-week trial)',
    description: 'Spearhead the DACH region launch. Native German speaker with high autonomy to execute outreach, establish agency alliances, and drive local brand adoptions.',
    applyUrl: 'https://www.8x.careers/join/market-lead-intern-germany',
    isPartnerRole: true,
  },
  {
    id: 'market-lead-poland',
    title: 'Market Lead Intern — Poland',
    category: 'launch',
    department: 'Marketing & Creative',
    location: 'Remote (Poland)',
    type: 'Internship (2-week trial)',
    description: 'Drive growth across Central Europe from Poland. Execute GTM strategy, run cold outreach, and establish commercial footholds across regional tech hubs.',
    applyUrl: 'https://www.8x.careers/join/market-lead-intern-poland',
    isPartnerRole: true,
  },
  {
    id: 'market-lead-japan',
    title: 'Market Lead Intern — Japan',
    category: 'launch',
    department: 'Marketing & Creative',
    location: 'Remote (Japan)',
    type: 'Internship (2-week trial)',
    description: 'Establish 8x presence in Tokyo and Japanese tech ecosystems. Native Japanese fluency, building relationships with domestic consumer brands and creator collectives.',
    applyUrl: 'https://www.8x.careers/join/market-lead-intern-japan',
    isPartnerRole: true,
  },
  {
    id: 'market-lead-portugal-brazil',
    title: 'Market Lead Intern — Portugal & Brazil',
    category: 'launch',
    department: 'Marketing & Creative',
    location: 'Remote (Portugal / Brazil)',
    type: 'Internship (2-week trial)',
    description: 'Drive expansion across Portuguese-speaking markets. Build outreach pipelines, recruit localized creator networks, and secure enterprise pilot campaigns.',
    applyUrl: 'https://www.8x.careers/join/market-lead-intern-portugal-brazil',
    isPartnerRole: true,
  },
  {
    id: 'market-lead-sea',
    title: 'Market Lead Intern — Southeast Asia',
    category: 'launch',
    department: 'Marketing & Creative',
    location: 'Remote (Singapore / Malaysia / Indonesia / Philippines / Thailand)',
    type: 'Internship (2-week trial)',
    description: 'Lead 8x across key Southeast Asian hubs. Build localized market entry playbooks, drive regional creator orchestration, and close multinational client deals.',
    applyUrl: 'https://www.8x.careers/join/market-lead-southeast-asia',
    isPartnerRole: true,
  },
];

