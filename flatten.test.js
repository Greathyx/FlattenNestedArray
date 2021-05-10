const flattenArr = require('./flatten')

test('test 1', () => {
    expect(flattenArr([7,[8,[9],3]])).toStrictEqual([7,8,9,3]);
});

test('test 2', () => {
    expect(flattenArr([[1,2],[3,[4,[5,[6]]]]])).toStrictEqual([1,2,3,4,5,6]);
});