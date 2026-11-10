export interface ManifestoPoint {
  num: string;
  statement: string;
  elaboration: string;
}

export const MANIFESTO_POINTS: ManifestoPoint[] = [
  {
    num: '01',
    statement: 'AI is changing the world.',
    elaboration: 'Generative models and autonomous tools have commoditized raw synthesis and mechanical logic. The cost of generating software, copy, and visuals is rapidly heading towards zero.',
  },
  {
    num: '02',
    statement: 'As building becomes easier, distribution becomes increasingly valuable.',
    elaboration: 'When anyone can spin up a software product over a weekend, defensibility migrates entirely to audience attention, authentic human trust, and localized cultural reach.',
  },
  {
    num: '03',
    statement: 'Jobs will change, but work will continue to evolve.',
    elaboration: 'Routine administrative overhead is dissolved by machines. The roles that remain and expand are defined by taste, high agency, emotional resonance, and critical decisions.',
  },
  {
    num: '04',
    statement: 'Human execution remains essential.',
    elaboration: 'Algorithms cannot conduct empathetic user interviews, establish vulnerable creator narratives, or take ultimate personal accountability for shipping complex outcomes.',
  },
  {
    num: '05',
    statement: '8x supplies and orchestrates humans to deliver business outcomes.',
    elaboration: 'We build the operational infrastructure that empowers over 250,000 operators across 50+ countries to execute at machine speed with distinctly human precision.',
  },
];

