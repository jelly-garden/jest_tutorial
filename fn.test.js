const mockFn = jest.fn();

mockFn
.mockReturnValueOnce(10)
.mockReturnValueOnce(20)
.mockReturnValueOnce(30)
.mockReturnValue(40)

mockFn();
mockFn();
mockFn();
mockFn();

test('함수 호출은 3번 됩니다.', () => {
    console.log(mockFn.mock.results);
    expect(mockFn.mock.calls.length).toBe(4);
});