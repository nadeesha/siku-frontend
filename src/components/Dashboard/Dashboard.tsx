import * as React from 'react';
import { Header, Segment, Divider } from 'semantic-ui-react';
import withAuthentication from './../../services/auth/withAuthentication';

const Dashboard = (props: any): JSX.Element => (
  <Segment>
    <Header size="large">Dashboard</Header>
    <Divider />
  </Segment>
);

const enhance = withAuthentication();

const enhancedDashboard = enhance(Dashboard);

export default enhancedDashboard;
