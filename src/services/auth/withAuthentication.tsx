import * as React from 'react';
import withQuery, { graphql } from '../graphql/withQuery';
import LoginView from './LoginView';
import { HOCType } from 'siku-types';
import * as _ from 'lodash';
import { IResultPropsType } from '../graphql/withQuery';
import withAuthenticatedUserQuery from './withAuthenticatedUserQuery.js';
import { authenticateWithLockScreen } from './Auth0';

const accessTokenKey = 'siku-access-token';

const storeAccessToken = (accessToken: string): void =>
  localStorage.setItem(accessTokenKey, accessToken);

const getAccessTokenFromStorage = (): string =>
  localStorage.getItem(accessTokenKey);

const withAuthentication = <OwnProps extends {}>(): HOCType<
  OwnProps,
  OwnProps
> => BaseComponent => (ownProps: OwnProps) => {
  const accessToke = getAccessTokenFromStorage();

  if (!accessToke) {
    authenticateWithLockScreen().then(storeAccessToken);

    return <span />;
  }

  return <BaseComponent {...this.props} />;
};

export default withAuthentication;
