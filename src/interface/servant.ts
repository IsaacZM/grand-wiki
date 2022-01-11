export interface Servant {
  no: number;
  svtId: number;
  mcLink: string;
  icon: string;
  info: Info;
  noblePhantasm: NoblePhantasm[];
  ascension: string[];
  noblePhantasmEn: NoblePhantasm[];
  activeSkills: ActiveSkill[];
  activeSkillsEn: ActiveSkill[];
  passiveSkills: PassiveSkill[];
  passiveSkillsEn: AppendSkill[];
  appendSkills: AppendSkill[];
  coinSummonNum: number;
  itemCost: ItemCost;
  costumeNos: number[];
  bondPoints: any[];
  profiles: Profile[];
  voices: Voice[];
  bondCraft: number;
  valentineCraft: any[];
  icons: Icon[];
  sprites: Icon[];
  fandomIcons: { [key: string]: string };
  fandomSprites: { [key: string]: string };
  figure: string[];
}

export interface ActiveSkill {
  cnState: number;
  skills: AppendSkill[];
}

export interface AppendSkill {
  state: State;
  name: string;
  nameJp: null | string;
  nameEn: null | string;
  rank: Endurance | null;
  icon: string;
  cd: number;
  effects: Effect[];
}

export interface Effect {
  description: string;
  descriptionJp: null | string;
  descriptionEn: null | string;
  lvData: string[];
}

export enum Endurance {
  A = "A",
  C = "C",
  Empty = "",
}

export enum State {
  Empty = "",
  强化前 = "强化前",
  强化后 = "强化后",
}

export interface Icon {
  key: string;
  valueList: string[];
}

export interface Info {
  gameId: number;
  name: string;
  nameJp: string;
  nameEn: string;
  namesOther: string[];
  namesJpOther: string[];
  namesEnOther: string[];
  nicknames: string[];
  obtain: string;
  obtains: string[];
  rarity: number;
  rarity2: number;
  weight: string;
  height: string;
  gender: string;
  illustrator: string;
  illustratorJp: null;
  illustratorEn: string;
  className: string;
  attribute: string;
  isHumanoid: boolean;
  isWeakToEA: boolean;
  isTDNS: boolean;
  cv: string[];
  cvJp: string[];
  cvEn: string[];
  alignments: string[];
  traits: string[];
  ability: Ability;
  illustrations: { [key: string]: string };
  cards: string[];
  cardHits: CardHits;
  cardHitsDamage: CardHitsDamage;
  npRate: NPRate;
  atkMin: number;
  hpMin: number;
  atkMax: number;
  hpMax: number;
  atk90: number;
  hp90: number;
  atk100: number;
  hp100: number;
  starRate: string;
  deathRate: string;
  criticalRate: string;
}

export interface Ability {
  strength: Endurance;
  endurance: Endurance;
  agility: string;
  mana: string;
  luck: Endurance;
  np: string;
}

export interface CardHits {
  Quick: number;
  Arts: number;
  Buster: number;
  Extra: number;
  NP: number;
}

export interface CardHitsDamage {
  Quick: number[];
  Arts: number[];
  Buster: number[];
  Extra: number[];
  NP: any[];
}

export interface NPRate {
  Quick: string;
  Arts: string;
  Buster: string;
  Extra: string;
  NP: string;
  Defense: string;
}

export interface ItemCost {
  ascension: any[];
  skill: { [key: string]: number }[];
  appendSkill: { [key: string]: number }[];
}

export interface NoblePhantasm {
  state: string;
  name: string;
  nameJp: null | string;
  upperName: string;
  upperNameJp: null | string;
  color: string;
  category: string;
  rank: string;
  typeText: string;
  effects: Effect[];
}

export interface PassiveSkill {
  name: string;
  nameEn: null;
  rank: Endurance;
  icon: string;
  effects: Effect[];
}

export interface Profile {
  title: string;
  description: string;
  descriptionJp: string;
  descriptionEn: string;
  condition: null | string;
  conditionEn: null;
}

export interface Voice {
  section: string;
  table: Table[];
}

export interface Table {
  title: string;
  text: string;
  textJp: string;
  textEn: null | string;
  condition: null | string;
  voiceFile: string;
}
