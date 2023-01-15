const { CheckSameDigit, CheckSameDigitArrow } = require("./AllDigitSame");

test("given number of same digit then return true", () => {
    expect(CheckSameDigit(44)).toBe(true);
});

test("given number of same digit then return true", () => {
    expect(CheckSameDigitArrow(344)).toBe(false);
});