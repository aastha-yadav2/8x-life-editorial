export interface Principle {
  number: string;
  title: string;
  summary: string;
  detail: string;
  actionableQuestion: string;
}

export const OPERATING_PRINCIPLES: Principle[] = [
  {
    number: '01',
    title: 'OWNERSHIP',
    summary: 'Take responsibility for outcomes, not just assigned tasks.',
    detail: 'We reject ticket-punching and passive task completion. When you take on a problem, you own the entire lifecycle: from initial ambiguity to production delivery and client satisfaction.',
    actionableQuestion: '“Would I sign my name to this outcome?”',
  },
  {
    number: '02',
    title: 'EXECUTION',
    summary: 'Turn ideas into shipped work.',
    detail: 'The market rewards what is live, tested, and generating real-world data. We prize fast feedback loops over theoretical consensus meetings and endless slide decks.',
    actionableQuestion: '“Can we put this in front of a real user before end of day?”',
  },
  {
    number: '03',
    title: 'CURIOSITY',
    summary: 'Keep learning, experimenting and questioning assumptions.',
    detail: 'The frontier of AI and human orchestration moves weekly. Continuous experimentation and aggressive self-teaching are baseline requirements, not optional hobbies.',
    actionableQuestion: '“What counter-intuitive hypothesis did we test this week?”',
  },
  {
    number: '04',
    title: 'ACCOUNTABILITY',
    summary: 'Make progress visible. Be honest about results.',
    detail: 'Radical transparency about metrics and failures builds unshakeable trust. If a campaign or product falls short, we diagnose the failure openly, adapt immediately, and iterate.',
    actionableQuestion: '“Are the numbers published where the entire team can see them?”',
  },
];

