import { getUUID } from "@/plugins";

describe("get-id", () => {
  test("should return an id of type string", () => {
    const id = getUUID();
    expect(typeof id).toBe("string");
  });
  test("should be of length 36", () => {
    const id = getUUID();
    expect(id.length).toBe(36);
  });
});
