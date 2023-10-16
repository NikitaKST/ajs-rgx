import Validator from '../validate';

test.each([
  ['Tank', true],
  ['Silver40', false],
  ['-Korona', false],
  ['_Plut', false],
  ['Lol_', false],
  ['Silver-', false],
  ['Kr5555ug', false],
  ['Kr259kr', true],
  ['Mn_-LP', true],
  ['Mn___P', false],
  ['15men', false],
  ['map12Ron', true],
  ['Mn---P', false],
  ['DFg#@gpo', false],
])(('Проверка метода validateUsername'), (obj, exp) => {
  expect(Validator.validateUsername(obj)).toBe(exp);
});
