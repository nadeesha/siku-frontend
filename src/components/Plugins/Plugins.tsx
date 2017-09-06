import * as React from 'react';
import { Header, Segment, Divider } from 'semantic-ui-react';
import withAuthentication from './../../services/auth/withAuthentication';

const Plugins = (): JSX.Element => (
  <Segment>
    <Header size="large">My Plugins</Header>
    <Divider />
  </Segment>
);

const enhance = withAuthentication();

const enhancedPlugins = enhance(Plugins);

export default enhancedPlugins;
