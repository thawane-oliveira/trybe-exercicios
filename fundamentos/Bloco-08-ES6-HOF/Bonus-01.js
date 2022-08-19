const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const dragonAtk = (dragon) => {
  const minDmg = 15;
  const maxDmg = Math.floor(Math.random() * dragon.strength);
  const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return dragonDmg;
}

const warriorAtk = (warrior) => {
  const minDmg = 30;
  const maxDmg = Math.floor(Math.random() * (minDmg * warrior.weaponDmg));
  const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
  return warriorDmg;
}

const mageAtk = (mage) => {
  const mana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const stat = {
    spentMana: 0,
    dmgProvoked: 'Não possui mana suficiente!',
  };
  
  if (mana === 15 || mana > 15) {
    const mageDmg = minDmg < maxDmg ? maxDmg : minDmg;
    stat.spentMana = 15;
    stat.dmgProvoked = mageDmg;
    return stat;
  } return stat;
};

const battleMembers = { mage, warrior, dragon };