import { httpClientPlugin } from "@/plugins/http-client.plugin";

describe("http-client", () => {
  test("should return a string", async () => {
    const data = await httpClientPlugin.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    expect(data).toMatchObject({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });
  test("should have POST, PUT and DELETE methods", () => {
    expect(typeof httpClientPlugin.delete).toBe('function');
    expect(typeof httpClientPlugin.post).toBe('function');
    expect(typeof httpClientPlugin.put).toBe('function');
  });
});
