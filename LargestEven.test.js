const {GetLargestEven, GetLargestEvenArrow} = require("./LargestEven")

test("largest even number", () => {
    expect(GetLargestEven([1, 2, 3, 4, 5])).toBe(4);
});

test("largest even number", () => {
    expect(GetLargestEvenArrow([1, 3, 5, 7])).toBe(-1);
});