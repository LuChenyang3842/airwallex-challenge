// import config from './config';
import service from './service';
import urlPath from './urlPath';
interface IRequestInviteData {
  name: string;
  email: string;
}

export const requestInvite = (data: IRequestInviteData) =>
  service({
    url: urlPath.requestInvitePath,
    method: 'POST',
    data: data,
  });
