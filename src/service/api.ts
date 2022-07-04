// import config from './config';
import service from './service';
import urlPath from './urlPath';
interface IRequestInviteData {
  name: string;
  email: string;
}

export const requestInvite = async (data: IRequestInviteData) => {
  await service({
    url: urlPath.requestInvitePath,
    method: 'POST',
    data: data,
  });
};
