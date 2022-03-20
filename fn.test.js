const { getName } = require('./fn');
const fn = require('./fn');

/**
 *** callback
 **/
// test('3초 뒤에 받아온 이름은 Mike', (done) => {
//     function callback(name) {
//         expect(name).toBe('Mike');
//         // done();
//     }
//     fn.getName(callback);
// });
// test('3초 뒤에 받아온 이름은 Mike', (done) => {
//     function callback(name) {
//         try {
//             expect(name).toBe('Mike');
//             done();
//         } catch (error) {
//             done();
//         }
//     }
//     fn.getName(callback);
// });


/**
 *** Promise
 * resolves, rejects
 **/
// test('3초 뒤에 받아온 나이는 30', () => {
//     return fn.getAge().then(age => {
//         expect(age).toBe(30);
//     });
// });
// test('3초 뒤에 받아온 나이는 30', () => {
//     return expect(fn.getAge()).resolves.toBe(30);
// });
// test('3초 뒤에 에러 발생', () => {
//     return expect(fn.getAge()).rejects.toMatch('서버 에러..');
// });


/**
 * async, await
 **/
// test('3초 뒤에 받아온 나이는 30', async () => {
//     const age = await fn.getAge();
//     expect(age).toBe(30);
// });
test('3초 뒤에 받아온 나이는 30', async () => {
    await expect(fn.getAge()).resolves.toBe(30);
});