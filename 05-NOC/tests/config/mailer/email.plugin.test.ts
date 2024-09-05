import { EmailPlugin } from '@/config/mailer/mailer.plugin';

jest.mock('@/config/mailer/mailer.plugin');

const settings = {
  service: 'string',
  auth: {
    user: 'string',
    pass: 'string',
  },
};

const mails = ['someEmail@email.es'];

const emailPlugin = new EmailPlugin(settings);

describe('email plugin', () => {
  test('should return true if mail is sent succesfully', async () => {
    emailPlugin.sendEmailWithFileSystemLogs = jest
      .fn()
      .mockImplementation(() => true);

    const wasMailSent = await emailPlugin.sendEmailWithFileSystemLogs(mails);

    expect(wasMailSent).toBeTruthy();
  });
});
