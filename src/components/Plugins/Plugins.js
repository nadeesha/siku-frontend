/* @flow */

import React from 'react';
import { Header, Segment, Divider } from 'semantic-ui-react';
import HealthCheck from './../common/HealthCheck/HealthCheck';
import withAuthentication from './../../services/auth/withAuthentication';

const Plugins = (): React.Element<*> => (
  <Segment>
    <Header size="large">My Plugins</Header>
    <Divider />
    <HealthCheck />
  </Segment>
);

const enhance = withAuthentication();

const enhancedPlugins = enhance(Plugins);

export default enhancedPlugins;
