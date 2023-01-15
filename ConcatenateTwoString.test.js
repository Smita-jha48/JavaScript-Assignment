const { concatenate, concatenate_arrow } = require("./ConcatenateTwoString");
test("Concatenate two string", () => {
    expect(concatenate(["code", "academy"])).toBe("odecademy");
});

test("Concatenate two string", () => {
    expect(concatenate_arrow(["smita", "jha"])).toBe("mitaha");
});
