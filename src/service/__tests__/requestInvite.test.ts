import { requestInvite } from '../requestInvite';
import * as service from '../service';
import urlPath from '../urlPath';

describe('requestInvite test', () => {
  it('service function is called and params passed correctly', async () => {
    const requestMock = jest
      .spyOn(service, 'default')
      .mockImplementationOnce(jest.fn());
    const requestData = { name: 'test-name', email: 'test@mock.com' };
    await requestInvite(requestData);
    expect(requestMock).toBeCalledTimes(1);
    expect(requestMock).toBeCalledWith({
      data: requestData,
      url: urlPath.requestInvitePath,
      method: 'POST',
    });
  });
});
