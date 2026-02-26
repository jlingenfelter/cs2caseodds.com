export const SITE = 'https://cs2caseodds.com';

export const ODDS = {
  milspec: 0.7992,
  restricted: 0.1598,
  classified: 0.032,
  covert: 0.0064,
  gold: 0.0026,
};

export interface CaseData {
  slug: string;
  name: string;
  year: number;
}

export const CASES: CaseData[] = [
  { slug: 'revolution-case', name: 'Revolution Case', year: 2023 },
  { slug: 'recoil-case', name: 'Recoil Case', year: 2022 },
  { slug: 'dreams-nightmares-case', name: 'Dreams & Nightmares Case', year: 2022 },
  { slug: 'fracture-case', name: 'Fracture Case', year: 2020 },
  { slug: 'snakebite-case', name: 'Snakebite Case', year: 2021 },
  { slug: 'clutch-case', name: 'Clutch Case', year: 2018 },
  { slug: 'prisma-2-case', name: 'Prisma 2 Case', year: 2020 },
  { slug: 'prisma-case', name: 'Prisma Case', year: 2019 },
  { slug: 'danger-zone-case', name: 'Danger Zone Case', year: 2018 },
  { slug: 'horizon-case', name: 'Horizon Case', year: 2018 },
  { slug: 'spectrum-2-case', name: 'Spectrum 2 Case', year: 2017 },
  { slug: 'spectrum-case', name: 'Spectrum Case', year: 2017 },
  { slug: 'glove-case', name: 'Glove Case', year: 2016 },
  { slug: 'gamma-2-case', name: 'Gamma 2 Case', year: 2016 },
  { slug: 'gamma-case', name: 'Gamma Case', year: 2016 },
  { slug: 'chroma-3-case', name: 'Chroma 3 Case', year: 2016 },
  { slug: 'chroma-2-case', name: 'Chroma 2 Case', year: 2015 },
  { slug: 'chroma-case', name: 'Chroma Case', year: 2015 },
  { slug: 'falchion-case', name: 'Falchion Case', year: 2015 },
  { slug: 'shadow-case', name: 'Shadow Case', year: 2015 },
  { slug: 'revolver-case', name: 'Revolver Case', year: 2015 },
  { slug: 'wildfire-case', name: 'Wildfire Case', year: 2016 },
  { slug: 'operation-hydra-case', name: 'Operation Hydra Case', year: 2017 },
  { slug: 'operation-phoenix-case', name: 'Operation Phoenix Case', year: 2014 },
  { slug: 'operation-breakout-case', name: 'Operation Breakout Case', year: 2014 },
  { slug: 'operation-vanguard-case', name: 'Operation Vanguard Case', year: 2014 },
  { slug: 'operation-bravo-case', name: 'Operation Bravo Case', year: 2013 },
  { slug: 'huntsman-case', name: 'Huntsman Case', year: 2014 },
  { slug: 'winter-offensive-case', name: 'Winter Offensive Case', year: 2013 },
  { slug: 'cs-weapon-case', name: 'CS:GO Weapon Case', year: 2013 },
  { slug: 'cs-weapon-case-2', name: 'CS:GO Weapon Case 2', year: 2013 },
  { slug: 'cs-weapon-case-3', name: 'CS:GO Weapon Case 3', year: 2014 },
  { slug: 'esports-2013-case', name: 'eSports 2013 Case', year: 2013 },
  { slug: 'esports-2013-winter-case', name: 'eSports 2013 Winter Case', year: 2013 },
  { slug: 'esports-2014-summer-case', name: 'eSports 2014 Summer Case', year: 2014 },
  { slug: 'operation-riptide-case', name: 'Operation Riptide Case', year: 2021 },
  { slug: 'shattered-web-case', name: 'Shattered Web Case', year: 2019 },
  { slug: 'broken-fang-case', name: 'Broken Fang Case', year: 2020 },
  { slug: 'cs20-case', name: 'CS20 Case', year: 2019 },
  { slug: 'kilowatt-case', name: 'Kilowatt Case', year: 2024 },
  { slug: 'gallery-case', name: 'Gallery Case', year: 2024 },
];

export const KNIFE_COUNTS = [10, 25, 50, 100, 250, 500, 1000];

export function knifeProb(n: number): number {
  return (1 - Math.pow(1 - ODDS.gold, n)) * 100;
}

export function pct(v: number): string {
  return (v * 100).toFixed(2) + '%';
}

export function expected(n: number, rate: number): string {
  return (n * rate).toFixed(2);
}

export function casesFor50(): number {
  return Math.ceil(Math.log(0.5) / Math.log(1 - ODDS.gold));
}

export function faqSchema(faqs: [string, string][]): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f[0],
      "acceptedAnswer": { "@type": "Answer", "text": f[1] }
    }))
  };
  return JSON.stringify(schema);
}

export function breadcrumbSchema(items: [string, string?][]): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": it[0],
      ...(i < items.length - 1 && it[1] ? { "item": SITE + it[1] } : {})
    }))
  };
  return JSON.stringify(schema);
}

export interface RarityData {
  name: string;
  color: string;
  rate: number;
  odds1in: string;
  title: string;
  slug: string;
}

export const RARITIES: RarityData[] = [
  { name: 'Covert', color: '#eb4b4b', rate: ODDS.covert, odds1in: '156.25', title: 'CS2 Covert Odds — Red Skin Drop Rate Guide', slug: 'covert-odds' },
  { name: 'Classified', color: '#d32ce6', rate: ODDS.classified, odds1in: '31.25', title: 'CS2 Classified Odds — Pink Skin Drop Rate Guide', slug: 'classified-odds' },
  { name: 'Restricted', color: '#8847ff', rate: ODDS.restricted, odds1in: '6.26', title: 'CS2 Restricted Odds — Purple Skin Drop Rate Guide', slug: 'restricted-odds' },
  { name: 'Mil-Spec', color: '#4b69ff', rate: ODDS.milspec, odds1in: '1.25', title: 'CS2 Mil-Spec Odds — Blue Skin Drop Rate Guide', slug: 'milspec-odds' },
];

export const SPECIFIC_CALC_COUNTS = [100, 500, 1000];
