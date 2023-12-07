import Magician from '../Magician';

test('новый персонаж Magician', () => {
  const magician = new Magician('Reya');
  const result = {
    name: 'Reya', level: 1, health: 100, _attack: 100, defense: 40, type: 'Magician', _stoned: false,
  };
  expect(magician).toEqual(result);
});