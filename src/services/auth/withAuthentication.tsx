import Logger from '../logging/Logger';
import * as React from 'react';
import withQuery, { graphql } from '../graphql/withQuery';
import { HOCType } from 'siku-types';
import * as _ from 'lodash';
import { IResultPropsType } from '../graphql/withQuery';
import withAuthenticatedUserQuery from './withAuthenticatedUserQuery.js';
import { withState } from 'recompose';
import Auth from './Auth';
import LoginView from './LoginView';

const accessTokenKey = 'siku-access-token';

const logger = new Logger('withAuthentication');

const withAuthentication = <OwnProps extends {}>(): HOCType<OwnProps, OwnProps> => BaseComponent => (
  ownProps: OwnProps,
) => {
  if (!Auth.isAuthenticated()) {
    return <LoginView />;
  }

  return <BaseComponent {...this.props} />;
};

export default withAuthentication;
