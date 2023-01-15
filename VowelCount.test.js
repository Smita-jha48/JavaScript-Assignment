const {CountVowels, CountVowels_arrow} = require('./VowelCount')

test("count vowels", () => {
    expect(CountVowels("codeacademy")).toBe(5);
});

test("count vowels", () => {
    expect(CountVowels_arrow("academy")).toBe(3);
});