import { getAge } from "@/plugins";

const birthdate = "1993-10-22";
const age = getAge(birthdate);

describe("get-age", () => {
  test("should return a number", () => {
    const birthdate = "1993-10-22";
    const age = getAge(birthdate);
    expect(typeof age).toBe("number");
  });
  test("should return current age", () => {
    const birthdate = "1993-10-22";
    const age = getAge(birthdate);
    const expectedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();
    expect(age).toEqual(expectedAge);
  });
  test("should call Date.getFullYear()", () => {
    const birthdate = "1993-10-22";
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);
    const age = getAge(birthdate);

    expect(spy).toHaveBeenCalled();
  });
});
