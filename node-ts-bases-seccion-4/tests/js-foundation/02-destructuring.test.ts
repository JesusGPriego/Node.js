import { characters } from "@/js-foundation/02-destructuring";

describe("02-desctruturing", () => {
  test("shuold include Batmand and Flash", () => {
    expect(characters).toContain("Batman");
    expect(characters).toContain("Flash");
  });
  test("should contain Flash as first character", () => {
    const [Flash] = characters;
    expect(Flash).toBe("Flash");
  });
});
