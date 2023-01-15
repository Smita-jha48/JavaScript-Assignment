const {isLeapYear, isLeapYear_arrow } = require("./LeapYearChecker")

test("test to check leap year", () => {
    expect(isLeapYear(2003)).toBe(false);
});

test("test to check leap year", () => {
    expect(isLeapYear_arrow(2000)).toBe(true);
});