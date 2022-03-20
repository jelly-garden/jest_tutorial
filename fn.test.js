const fn = require('./fn');

/**
 * toBe
 **/
// test('1 = 1',  () => {
//     expect(1).toBe(1);
// });


/**
 * toBe
 * toEqual
 **/
// test('2 + 3 = 5', () => {
//     expect(fn.add(2, 3)).toBe(5);
// });
// test('2 + 3 = 5', () => {
//     expect(fn.add(2, 3)).toEqual(5);
// });
// test('3 + 3 != 5', () => {
//     expect(fn.add(3, 3)).not.toBe(5);
// });


/**
 * toEqual
 * toStrictEqual
 **/
// test('객체 반환', () => {
//     expect(fn.makeUser('Mike', 30)).toBe({
//         name: 'Mike',
//         age: 30
//     });
// });
// test('객체 반환', () => {
//     expect(fn.makeUser('Mike', 30)).toEqual({
//         name: 'Mike',
//         age: 30
//     });
// });
// test('객체 반환', () => {
//     expect(fn.makeUser('Mike', 30)).toStrictEqual({
//         name: 'Mike',
//         age: 30
//     });
// });


/**
 * toBeNull
 * toBeUndefined
 * toBeDefined
 **/
// test('null = null',  () => {
//     expect(null).toBeNull();
// });


/**
 * toBeTruthy
 * toBeFalsy
 **/
// test('true = true',  () => {
//     expect(fn.add(1, -1)).toBeTruthy();
// });


/**
 * toBeGreaterThan
 * toBeGreaterThanOrEqual
 * toBeLessThan
 * toBeLessThanOrEqual
 **/
// test('ID는 10자 이하여야합니다.',  () => {
//     const id = 'THE_BLACK_ORDER'
//     expect(id.length).toBeLessThanOrEqual(10);
// });
// test('비밀번호 4자리',  () => {
//     const pwd = '1234'
//     expect(pwd.length).toBe(4);
// });


/**
 * toBeCloseTo
 **/
// test('0.1 + 0.2 = 0.3',  () => {
//     expect(fn.add(0.1, 0.2)).toBe(0.3);
// });
// test('0.1 + 0.2 = 0.3',  () => {
//     expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
// });


/**
 * toMatch
 **/
// test('Hello world 에 h 라는 글자가 있는가', () => {
//     expect('Hello world').toMatch(/h/i);
// });


/**
 * toContain
 **/
// test('유저리스트 에 Mike 라는 글자가 있는가', () => {
//     const user = 'Mike';
//     const userList = ['Mike', 'Tom'];
//     expect(userList).toContain(user);
// });



/**
 * toThrow
 **/
test('Error 발생', () => {
    expect(() => fn.throwErr()).toThrow();
});
test('Error 발생', () => {
    expect(() => fn.throwErr()).toThrow('xx');
});