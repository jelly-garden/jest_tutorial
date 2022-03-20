const fn = require('./fn');

let user;

// beforeEach(async () => {
//     user = await fn.connectUserDb();
// });
// afterEach(() => {
//     return fn.disconnectUserDb();
// });
beforeAll(async () => {
    user = await fn.connectUserDb();
});
afterAll(() => {
    return fn.disconnectUserDb();
});

test('이름은 Mike', () => {
    expect(user.name).toBe('Mike');
});
test('나이는 30', () => {
    expect(user.age).toBe(30);
});
test('성별은 male', () => {
    expect(user.gender).toBe('male');
});

describe('Car 관련 작업', () => {
    let car;

    beforeAll(async () => {
        car = await fn.connectCarDb();
    });
    afterAll(() => {
        return fn.disconnectCarDb();
    });
    
    test('이름은 z4', () => {
        expect(car.name).toBe('z4');
    });
    test('브랜드는 bmw', () => {
        expect(car.brand).toBe('bmw');
    });
    test('색상은 red', () => {
        expect(car.color).toBe('red');
    });
});