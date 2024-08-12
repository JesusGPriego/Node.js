import { emailTemplate } from "@/js-foundation/01-template";

describe("01-template", () => {
  test("should contain a greeting - emailTemplate", () => {
    // Arrange
    const greeting = "Hi";

    // Assert
    expect(emailTemplate).toContain(greeting);
  });
  test("sould contain {{name}} and {{orderId}} - emailTemplate", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
    expect(emailTemplate).toContain("{{name}}");
    expect(emailTemplate).toContain("{{orderId}}");
  });
});
