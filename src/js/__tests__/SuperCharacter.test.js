import SuperCharacter from '../SuperCharacter';
import Daemon from '../Daemon';
import Magician from '../Magician';

test('новый персонаж SuperCharacter', () => {
  const superCharacter = new SuperCharacter('Reya');
  const result = {
    name: 'Reya', level: 1, health: 100, _stoned: false,
  };
  expect(superCharacter).toEqual(result);
});

test('Magician атакует вторую клетку без дурмана', () => {
  const magician = new Magician('Reya');
  magician.stoned = false;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(90);
});
test('Magician атакует вторую клетку с дурманом', () => {
  const magician = new Magician('Reya');
  magician.stoned = true;
  magician.distance = 2;
  const result = magician.attack;
  expect(result).toBe(85);
});

test('Daemon атакует шестую клетку без дурмана', () => {
  const daemon = new Daemon('Reya');
  daemon.stoned = false;
  daemon.distance = 6;
  const result = daemon.attack;
  expect(result).toBe(0);
});
test('Daemon атакует вторую клетку с дурманом', () => {
  const daemon = new Daemon('Reya');
  daemon.stoned = true;
  daemon.distance = 2;
  const result = daemon.attack;
  expect(result).toBe(4);
});