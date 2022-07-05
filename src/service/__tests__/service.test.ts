// import service from 'axios';
import MockAdapter from 'axios-mock-adapter';
// import { Descriptions, notification } from 'antd';
import request from '../service';

const mockReq = {
  url: '/api/mock-url/',
  data: { name: 'mock-name', email: 'mock@email.com' },
  method: 'POST',
};

describe('basic function test', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(request);
  });

  afterEach(() => {
    mock.reset();
  });
  it('requests an endpoint', async () => {
    const mockRes = 'mock res';
    mock.onPost(mockReq.url).reply(200, mockRes);
    await request(mockReq);
    expect(mock.history.post.length).toBe(1);
    expect(mock.history.post[0].data).toBe(JSON.stringify(mockReq.data));
  });
});

describe('axios - response interceptor test', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(request);
  });

  afterEach(() => {
    mock.reset();
  });

  it('response with bad status code [status code >= 400]', async () => {
    const mockRes = 'mock res';
    mock.onPost(mockReq.url).reply(400, mockRes);
    try {
      await request(mockReq);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      expect.assertions(1);
      expect(error.data).toBe(mockRes);
    }
  });

  it('response with good status code [status code < 400]', async () => {
    expect.assertions(1);
    const mockRes = 'failure';
    mock.onPost(mockReq.url).reply(200, mockRes);
    try {
      const res = await request(mockReq);
      expect(res).toBe(mockRes);
      expect.assertions(2);
      // eslint-disable-next-line no-empty
    } catch (error) {}
  });
});
