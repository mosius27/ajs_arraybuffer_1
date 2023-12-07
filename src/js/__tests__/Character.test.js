import Character from '../Character';

test('новый персонаж Character', () => {
  const character = new Character('reya');
  const result = {
    name: 'reya', level: 1, health: 100,
  };
  expect(character).toEqual(result);
});