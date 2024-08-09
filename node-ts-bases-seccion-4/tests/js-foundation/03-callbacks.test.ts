import { getUserById, users } from "@/js-foundation/03-callbacks";
import type { User } from "@/js-foundation/03-callbacks";


function callback(err?: string, user?: User) {
    return user || err;
}

describe("03-callbacks", () => {
  test("should return an user when id is found", () => {
    // Arrange
    const id = 1;
    const [expectedResult] = users
    // Act
    const user1 = getUserById(id, callback);
    // Assert
    expect(user1).toMatchObject(expectedResult);
  });
  test('should return an error when id is not found', () => {
      // Arrange
      const id = users.length + 1;
      const expectedResult = `User not found with id ${id}`;
      // Act
      const error = getUserById(id, callback);
      // Assert
      expect(error).toEqual(expectedResult);
  })
});
