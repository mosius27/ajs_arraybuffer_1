import SuperCharacter from './SuperCharacter';

export default class Magician extends SuperCharacter {
  constructor(name) {
    super(name);
    this.type = 'Magician';
    this.attack = 100;
    this.defense = 40;
  }
}