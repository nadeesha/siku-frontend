import config from '../../config';
import history from '../routing/history';
import Logger from '../logging/Logger';

const logger = new Logger('Auth0');

interface IAuthenticatedProps {
  accessToken: string;
  idToken: string;
  state: string;
  idTokenPayload: { exp: number };
}

const lock = new Auth0Lock(config.AUTH0_CLIENT_ID, config.AUTH0_DOMAIN, {
  auth: {
    redirectUrl: config.WEB_ROOT,
    responseType: 'token',
    params: {
      state: history && history.location && history.location.pathname,
      scope: 'openid profile',
    },
  },
});

export const authenticateWithLockScreen = () => new Promise((resolve, reject) => {
  lock.on('authenticated', (payload: IAuthenticatedProps) => {
    logger.info('Authenticated', { payload });
    history.push(payload.state);
    resolve(payload.accessToken);
  });

  lock.show();
});
