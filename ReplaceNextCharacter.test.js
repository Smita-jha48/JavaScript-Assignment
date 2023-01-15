const {replaceNextCharacter, replaceNextCharacter_Arrow } = require('./ReplaceNextCharacter')

test("test cases to replace next to character", () => {
    expect(replaceNextCharacter("codeacademy")).toBe("dpefbdbefnz");
});

test("test cases to replace next to character", () => {
    expect(replaceNextCharacter_Arrow("codeacademy")).toBe("dpefbdbefnz");
});