const {longest_string,longest_string_arrow} = require("./LongestString")

test("check longest string", () => {
    expect(longest_string(["we", "love", "code", "academy"])).toBe("academy");
});
test("check longest string", () => {
    expect(longest_string_arrow(["Republic","Day"])).toBe("Republic");
});


