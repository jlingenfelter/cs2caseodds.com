// CS2 Case Simulator Skin Data
// Each case has skins organized by rarity

export interface Skin {
  name: string;
  weapon: string;
  rarity: 'milspec' | 'restricted' | 'classified' | 'covert' | 'gold';
}

export interface SimCase {
  slug: string;
  name: string;
  skins: Skin[];
}

export const SIM_CASES: SimCase[] = [
  {
    slug: 'kilowatt-case', name: 'Kilowatt Case',
    skins: [
      { name: 'Electrostatic', weapon: 'Zeus x27', rarity: 'milspec' },
      { name: 'Turbine', weapon: 'XM1014', rarity: 'milspec' },
      { name: 'Cyber Slash', weapon: 'Tec-9', rarity: 'milspec' },
      { name: "Watt's Up", weapon: 'SSG 08', rarity: 'milspec' },
      { name: 'Lightning Bolt', weapon: 'MAC-10', rarity: 'milspec' },
      { name: 'Neon Flux', weapon: 'MP5-SD', rarity: 'milspec' },
      { name: 'Voltaic', weapon: 'Sawed-Off', rarity: 'milspec' },
      { name: 'Overcharged', weapon: 'Five-SeveN', rarity: 'restricted' },
      { name: 'Circuitry', weapon: 'M4A4', rarity: 'restricted' },
      { name: 'Arc Welder', weapon: 'Galil AR', rarity: 'restricted' },
      { name: 'Current', weapon: 'Glock-18', rarity: 'classified' },
      { name: 'Magnetized', weapon: 'AK-47', rarity: 'classified' },
      { name: 'Shock Hazard', weapon: 'AWP', rarity: 'covert' },
      { name: 'Supercharged', weapon: 'M4A1-S', rarity: 'covert' },
      { name: 'Knife / Gloves', weapon: 'Special', rarity: 'gold' },
    ]
  },
  {
    slug: 'gallery-case', name: 'Gallery Case',
    skins: [
      { name: 'Artisan', weapon: 'P250', rarity: 'milspec' },
      { name: 'Exhibition', weapon: 'FAMAS', rarity: 'milspec' },
      { name: 'Fresco', weapon: 'G3SG1', rarity: 'milspec' },
      { name: 'Palette Knife', weapon: 'Negev', rarity: 'milspec' },
      { name: 'Impasto', weapon: 'MP9', rarity: 'milspec' },
      { name: 'Still Life', weapon: 'MAG-7', rarity: 'milspec' },
      { name: 'Sketch', weapon: 'Nova', rarity: 'milspec' },
      { name: 'Oil Painting', weapon: 'Desert Eagle', rarity: 'restricted' },
      { name: 'Baroque', weapon: 'USP-S', rarity: 'restricted' },
      { name: 'Watercolor', weapon: 'UMP-45', rarity: 'restricted' },
      { name: 'Abstract', weapon: 'AK-47', rarity: 'classified' },
      { name: 'Masterwork', weapon: 'M4A4', rarity: 'classified' },
      { name: 'Surrealism', weapon: 'AWP', rarity: 'covert' },
      { name: 'Impressionist', weapon: 'M4A1-S', rarity: 'covert' },
      { name: 'Knife / Gloves', weapon: 'Special', rarity: 'gold' },
    ]
  },
  {
    slug: 'revolution-case', name: 'Revolution Case',
    skins: [
      { name: 'Mandala', weapon: 'P2000', rarity: 'milspec' },
      { name: 'Runic', weapon: 'SG 553', rarity: 'milspec' },
      { name: 'Flare', weapon: 'MAC-10', rarity: 'milspec' },
      { name: 'Coalition', weapon: 'MP5-SD', rarity: 'milspec' },
      { name: 'Revo', weapon: 'UMP-45', rarity: 'milspec' },
      { name: 'Rebel', weapon: 'FAMAS', rarity: 'milspec' },
      { name: 'Rise', weapon: 'XM1014', rarity: 'milspec' },
      { name: 'Vanguard', weapon: 'Glock-18', rarity: 'restricted' },
      { name: 'Uprising', weapon: 'P250', rarity: 'restricted' },
      { name: 'Insurgent', weapon: 'M4A4', rarity: 'restricted' },
      { name: 'Resistance', weapon: 'AK-47', rarity: 'classified' },
      { name: 'Revolt', weapon: 'AWP', rarity: 'classified' },
      { name: 'Revolutionary', weapon: 'M4A1-S', rarity: 'covert' },
      { name: 'Guerrilla', weapon: 'AK-47', rarity: 'covert' },
      { name: 'Knife / Gloves', weapon: 'Special', rarity: 'gold' },
    ]
  },
  {
    slug: 'recoil-case', name: 'Recoil Case',
    skins: [
      { name: 'Recoil', weapon: 'SG 553', rarity: 'milspec' },
      { name: 'Spray Paint', weapon: 'Dual Berettas', rarity: 'milspec' },
      { name: 'Shattered', weapon: 'P250', rarity: 'milspec' },
      { name: 'Ricochet', weapon: 'P90', rarity: 'milspec' },
      { name: 'Bounce', weapon: 'Sawed-Off', rarity: 'milspec' },
      { name: 'Deflection', weapon: 'Nova', rarity: 'milspec' },
      { name: 'Kickback', weapon: 'MAC-10', rarity: 'milspec' },
      { name: 'Percussion', weapon: 'Glock-18', rarity: 'restricted' },
      { name: 'Impact', weapon: 'USP-S', rarity: 'restricted' },
      { name: 'Discharge', weapon: 'FAMAS', rarity: 'restricted' },
      { name: 'Blowback', weapon: 'AK-47', rarity: 'classified' },
      { name: 'Buckshot', weapon: 'M4A4', rarity: 'classified' },
      { name: 'Controlled Burst', weapon: 'M4A1-S', rarity: 'covert' },
      { name: 'Full Auto', weapon: 'AK-47', rarity: 'covert' },
      { name: 'Knife / Gloves', weapon: 'Special', rarity: 'gold' },
    ]
  },
  {
    slug: 'dreams-nightmares-case', name: 'Dreams & Nightmares Case',
    skins: [
      { name: 'Dreamscape', weapon: 'MP7', rarity: 'milspec' },
      { name: 'Lucid', weapon: 'FAMAS', rarity: 'milspec' },
      { name: 'Sleepwalker', weapon: 'PP-Bizon', rarity: 'milspec' },
      { name: 'Night Terror', weapon: 'MAG-7', rarity: 'milspec' },
      { name: 'Insomnia', weapon: 'G3SG1', rarity: 'milspec' },
      { name: 'Reverie', weapon: 'P2000', rarity: 'milspec' },
      { name: 'Somnambulant', weapon: 'XM1014', rarity: 'milspec' },
      { name: 'Nightmare', weapon: 'USP-S', rarity: 'restricted' },
      { name: 'Dream Eater', weapon: 'Dual Berettas', rarity: 'restricted' },
      { name: 'Hallucination', weapon: 'Five-SeveN', rarity: 'restricted' },
      { name: 'Fever Dream', weapon: 'AK-47', rarity: 'classified' },
      { name: 'Night Wish', weapon: 'M4A4', rarity: 'classified' },
      { name: 'Hypnotic', weapon: 'MP9', rarity: 'covert' },
      { name: 'Sandman', weapon: 'M4A1-S', rarity: 'covert' },
      { name: 'Knife / Gloves', weapon: 'Special', rarity: 'gold' },
    ]
  },
  {
    slug: 'fracture-case', name: 'Fracture Case',
    skins: [
      { name: 'Fracture', weapon: 'P250', rarity: 'milspec' },
      { name: 'Cracked', weapon: 'PP-Bizon', rarity: 'milspec' },
      { name: 'Shattered', weapon: 'SG 553', rarity: 'milspec' },
      { name: 'Split', weapon: 'P90', rarity: 'milspec' },
      { name: 'Broken', weapon: 'Tec-9', rarity: 'milspec' },
      { name: 'Splinter', weapon: 'Negev', rarity: 'milspec' },
      { name: 'Fissure', weapon: 'MAG-7', rarity: 'milspec' },
      { name: 'Fault Line', weapon: 'Glock-18', rarity: 'restricted' },
      { name: 'Seismic', weapon: 'Desert Eagle', rarity: 'restricted' },
      { name: 'Tremor', weapon: 'MAC-10', rarity: 'restricted' },
      { name: 'Tectonic', weapon: 'AK-47', rarity: 'classified' },
      { name: 'Eruption', weapon: 'M4A4', rarity: 'classified' },
      { name: 'Aftershock', weapon: 'AWP', rarity: 'covert' },
      { name: 'Epicenter', weapon: 'M4A1-S', rarity: 'covert' },
      { name: 'Knife / Gloves', weapon: 'Special', rarity: 'gold' },
    ]
  },
  {
    slug: 'snakebite-case', name: 'Snakebite Case',
    skins: [
      { name: 'Venomous', weapon: 'MP9', rarity: 'milspec' },
      { name: 'Serpentine', weapon: 'R8 Revolver', rarity: 'milspec' },
      { name: 'Viper', weapon: 'CZ75-Auto', rarity: 'milspec' },
      { name: 'Copperhead', weapon: 'P250', rarity: 'milspec' },
      { name: 'Asp', weapon: 'XM1014', rarity: 'milspec' },
      { name: 'Cobra', weapon: 'Nova', rarity: 'milspec' },
      { name: 'Mamba', weapon: 'Sawed-Off', rarity: 'milspec' },
      { name: 'Python', weapon: 'Desert Eagle', rarity: 'restricted' },
      { name: 'Sidewinder', weapon: 'USP-S', rarity: 'restricted' },
      { name: 'Rattler', weapon: 'FAMAS', rarity: 'restricted' },
      { name: 'King Cobra', weapon: 'AK-47', rarity: 'classified' },
      { name: 'Anaconda', weapon: 'M4A4', rarity: 'classified' },
      { name: 'Black Mamba', weapon: 'AWP', rarity: 'covert' },
      { name: 'Taipan', weapon: 'M4A1-S', rarity: 'covert' },
      { name: 'Knife / Gloves', weapon: 'Special', rarity: 'gold' },
    ]
  },
  {
    slug: 'clutch-case', name: 'Clutch Case',
    skins: [
      { name: 'Clutch', weapon: 'R8 Revolver', rarity: 'milspec' },
      { name: 'Takedown', weapon: 'UMP-45', rarity: 'milspec' },
      { name: 'Anchor', weapon: 'Nova', rarity: 'milspec' },
      { name: 'Lockdown', weapon: 'Negev', rarity: 'milspec' },
      { name: 'Holdout', weapon: 'SG 553', rarity: 'milspec' },
      { name: 'Stand', weapon: 'MAG-7', rarity: 'milspec' },
      { name: 'Defiance', weapon: 'P2000', rarity: 'milspec' },
      { name: 'Comeback', weapon: 'Glock-18', rarity: 'restricted' },
      { name: 'Hero', weapon: 'MP7', rarity: 'restricted' },
      { name: 'Ace', weapon: 'Five-SeveN', rarity: 'restricted' },
      { name: 'Overtime', weapon: 'AK-47', rarity: 'classified' },
      { name: 'Retake', weapon: 'M4A4', rarity: 'classified' },
      { name: 'Clutch King', weapon: 'AWP', rarity: 'covert' },
      { name: 'Last Alive', weapon: 'USP-S', rarity: 'covert' },
      { name: 'Knife / Gloves', weapon: 'Special', rarity: 'gold' },
    ]
  },
  {
    slug: 'prisma-case', name: 'Prisma Case',
    skins: [
      { name: 'Prism', weapon: 'FAMAS', rarity: 'milspec' },
      { name: 'Refraction', weapon: 'AUG', rarity: 'milspec' },
      { name: 'Spectrum', weapon: 'MP5-SD', rarity: 'milspec' },
      { name: 'Crystal', weapon: 'R8 Revolver', rarity: 'milspec' },
      { name: 'Chromatic', weapon: 'XM1014', rarity: 'milspec' },
      { name: 'Iridescent', weapon: 'Tec-9', rarity: 'milspec' },
      { name: 'Rainbow', weapon: 'PP-Bizon', rarity: 'milspec' },
      { name: 'Neon', weapon: 'Five-SeveN', rarity: 'restricted' },
      { name: 'Hologram', weapon: 'Desert Eagle', rarity: 'restricted' },
      { name: 'Dichromatic', weapon: 'MAC-10', rarity: 'restricted' },
      { name: 'Light Show', weapon: 'AK-47', rarity: 'classified' },
      { name: 'Aurora', weapon: 'AWP', rarity: 'classified' },
      { name: 'Solar Flare', weapon: 'M4A1-S', rarity: 'covert' },
      { name: 'Supernova', weapon: 'AK-47', rarity: 'covert' },
      { name: 'Knife / Gloves', weapon: 'Special', rarity: 'gold' },
    ]
  },
  {
    slug: 'prisma-2-case', name: 'Prisma 2 Case',
    skins: [
      { name: 'Prism II', weapon: 'SCAR-20', rarity: 'milspec' },
      { name: 'Split', weapon: 'Sawed-Off', rarity: 'milspec' },
      { name: 'Dash', weapon: 'Nova', rarity: 'milspec' },
      { name: 'Facets', weapon: 'P2000', rarity: 'milspec' },
      { name: 'Glint', weapon: 'CZ75-Auto', rarity: 'milspec' },
      { name: 'Phase', weapon: 'SG 553', rarity: 'milspec' },
      { name: 'Band', weapon: 'Negev', rarity: 'milspec' },
      { name: 'Double Helix', weapon: 'Glock-18', rarity: 'restricted' },
      { name: 'Marble', weapon: 'Desert Eagle', rarity: 'restricted' },
      { name: 'Prism Edge', weapon: 'MP7', rarity: 'restricted' },
      { name: 'Phantom', weapon: 'AWP', rarity: 'classified' },
      { name: 'Kaleidoscope', weapon: 'AK-47', rarity: 'classified' },
      { name: 'Hyper Beast 2', weapon: 'M4A1-S', rarity: 'covert' },
      { name: 'Fade', weapon: 'Desert Eagle', rarity: 'covert' },
      { name: 'Knife / Gloves', weapon: 'Special', rarity: 'gold' },
    ]
  },
];

// Rarity colors and display
export const RARITY_COLORS: Record<string, string> = {
  milspec: '#4b69ff',
  restricted: '#8847ff',
  classified: '#d32ce6',
  covert: '#eb4b4b',
  gold: '#ffd700',
};

export const RARITY_NAMES: Record<string, string> = {
  milspec: 'Mil-Spec (Blue)',
  restricted: 'Restricted (Purple)',
  classified: 'Classified (Pink)',
  covert: 'Covert (Red)',
  gold: 'Knife / Gloves (Gold)',
};
