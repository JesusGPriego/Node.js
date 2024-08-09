import { getPokemonById } from "@/js-foundation/06-promises";

describe("06-promises", () => {
  test("should return a pokemon name when id is found", async () => {
    // Arrange
    const pokeId = 1;
    // Act
    const pokemon = await getPokemonById(pokeId);
    // Assert
    expect(pokemon).toBe("bulbasaur");
  });
  test("should throw an error if id is not found", async () => {
    const pokemonId = 1_000_000_000;

    expect.assertions(1);

    await getPokemonById(pokemonId).catch((error) =>
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`)
    );
  });
});
