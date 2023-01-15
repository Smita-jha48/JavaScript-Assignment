const { change_case, change_case_arrow } = require("./ChangeCapitalization");

test("Change Capitalization", () => {
    expect(change_case("MeRRy hAD a LITTle lAMp")).toBe("mErrY Had A littLE LamP");
});

test("Change Capitalization", () => {
    expect(change_case("mErrY Had A littLE LamP")).toBe("MeRRy hAD a LITTle lAMp");
});
