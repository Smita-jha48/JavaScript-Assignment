const {check_Ends_With_Script, check_Ends_With_Script_Arrow} = require("./EndsWithScript")

test("Ends with script", () => {
    expect(check_Ends_With_Script("JavaScript")).toBe(true);
});

test("Ends with script", () => {
    expect(check_Ends_With_Script_Arrow("JavaScripting")).toBe(false);
});