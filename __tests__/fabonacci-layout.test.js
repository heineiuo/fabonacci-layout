const fbLayout = require('../')

test('fabonacci layout', () => {
  const result = fbLayout(7)
  expect(result.width).toEqual(13)
  expect(result.height).toEqual(21)
  expect(result).toMatchObject({
    n: 13,
    width: 13,
    height: 21,
    direction: 'top',
    nodes:
      [ [ 0, 0, 1, 1 ],
        [ 0, 1, 1, 1 ],
        [ 0, -2, 2, 2 ],
        [ -3, -2, 3, 3 ],
        [ -3, 1, 5, 5 ],
        [ 2, -2, 8, 8 ],
        [ -3, -15, 13, 13 ] ] })
})