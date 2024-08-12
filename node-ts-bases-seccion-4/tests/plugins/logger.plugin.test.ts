import { buildLogger, logger as winstonLogger } from "@/plugins";

describe("logger.plugin", () => {
  test("should return a function logger - buildLogger", () => {
    const logger = buildLogger("test");
    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });
  test("should be called with a service: string and message: string", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "log");
    const message = "test message";
    const service = "test message";
    const logger = buildLogger(service);

    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalled();
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({
        level: "info",
        message,
        service,
      })
    );
  });
  test("should register an error log", () => {
    const winstonLoggerMock = jest.spyOn(winstonLogger, "error");
    const message = "test error";
    const service = "test service";
    const logger = buildLogger(service);

    logger.error(message);

    expect(winstonLoggerMock).toHaveBeenCalled();
    expect(winstonLoggerMock).toHaveBeenCalledWith(
      "error",
      expect.objectContaining({
        message,
        service,
      })
    );
  });
});
