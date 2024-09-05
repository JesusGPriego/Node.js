import { CheckService } from '@/domain/use-cases/checks/check-service';

const mockRepository = {
  saveLog: jest.fn(),
  getLogs: jest.fn(),
  getLogsBySeverityLevel: jest.fn(),
};

const successCallback = jest.fn();
const errorCallback = jest.fn();

const checkService = new CheckService(
  successCallback,
  errorCallback,
  mockRepository
);
describe('check service', () => {
  test(' should call successCallback when fetch returns true', async () => {
    const isSuccessCall = await checkService.execute('https://google.com');
    expect(isSuccessCall).toBeTruthy();
    expect(successCallback).toHaveBeenCalled();
  });
  test(' should call errorCallback when fetch returns false', async () => {
    const isSuccessCall = await checkService.execute(
      'htepd://jfksalocalhost1515151.com'
    );
    expect(isSuccessCall).toBeFalsy();
    expect(errorCallback).toHaveBeenCalled();
  });
});
