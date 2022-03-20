const fn = require('./fn');

let num = 0;

beforeEach(() => {
    num = 0;    
});

test('0 + 1 = 1', () => {
    num = fn.add(num, 1);
    expect(num).toBe(1);
});

test('0 + 2 = 2', () => {
    num = fn.add(num, 2);
    expect(num).toBe(2);
});

test('0 + 3 = 3', () => {
    num = fn.add(num, 3);
    expect(num).toBe(3);
});

test('0 + 4 = 4', () => {
    num = fn.add(num, 4);
    expect(num).toBe(4);
});