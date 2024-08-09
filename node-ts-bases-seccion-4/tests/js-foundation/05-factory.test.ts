import { buildMakePerson } from "@/js-foundation/05-factory";

describe("factory", () => {
  test("should return a function that creates a person", () => {
    // Arrange
    const getUUID = () => "123";
    const getAge = () => 42;
    const buildMakerPersonOptions = {
      getUUID,
      getAge,
    };
    const personOptions = { name: "John", birthdate: "1985-10-21" };
    const expectedPerson = {
      id: "123",
      name: "John",
      birthdate: "1985-10-21",
      age: 42,
    };
    // Act
    const makerFunction = buildMakePerson(buildMakerPersonOptions);
    const person = makerFunction(personOptions);
    // Assert
    expect(typeof makerFunction).toBe("function");
    expect(person).toMatchObject(expectedPerson);
  });
});
