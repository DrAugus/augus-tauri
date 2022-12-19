export enum Element {
  anemo,
  pyro,
  cryo,
  electro,
  hydro,
  geo,
  dendro,
}

export const ElementString = {
  0: 'anemo',
  1: 'pyro',
  2: 'cryo',
  3: 'electro',
  4: 'hydro',
  5: 'geo',
  6: 'dendro',
}

export const ElementColor = {
  0: '#57dcb0',
  1: '#fa5d3e',
  2: '#84c2e6',
  3: '#d296fc',
  4: '#03ddfe',
  5: '#e2b032',
  6: '#98e628',
}

export enum City {
  Mondstadt,
  Liyue,
  Inazuma,
  Sumeru,
  Fontaine,
  Natlan,
  Snezhnaya,
}

export const CityZH = ["蒙德", "璃月", "稻妻", "须弥", "枫丹", "纳塔", "至冬"]

export const ElementZH = ["风", "火", "冰", "雷", "水", "岩", "草"]

export enum Weapon {
  sword, claymore, catalyst, bow, polearm
}

export const WeaponZH = ["单手剑", "双手剑", "法器", "弓", "长柄武器"]

export enum Artifacts {
  flower, plume, sands, goblet, circlet
}

//替换空格 转小写
export const replaceAndLow = (str: string) => str.replace(/ /g, "_").toLowerCase();

//格式化日期
export const formatDate = (dayjsObj: any) => dayjsObj.format("YYYY/MM/DD HH:mm:ss");
