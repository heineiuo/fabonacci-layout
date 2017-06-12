const fb = require('../').fabonacci

test('fabonacci number', () => {
  expect(fb(0)).toEqual(0)
  expect(fb(1)).toEqual(1)
  expect(fb(2)).toEqual(1)
  expect(fb(3)).toEqual(2)
  expect(fb(4)).toEqual(3)
})