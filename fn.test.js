const mockFn = jest.fn(num => num + 1);

mockFn(10);
mockFn(20);
mockFn(30);

test('함수 호출은 3번 됩니다.', () => {
    expect(mockFn.mock.calls.length).toBe(3);
});
test('리턴된 값은 11, 21, 31 입니다.', () => {
    expect(mockFn.mock.results[0].value).toBe(11);
    expect(mockFn.mock.results[1].value).toBe(21);
    expect(mockFn.mock.results[2].value).toBe(31);
});