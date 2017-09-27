import { pluginsQuery } from './pluginsQuery.js';
import { graphql, IResultPropsType } from '../../services/graphql/withQuery';
import * as React from 'react';
import { Header, Segment, Divider, Card, Grid, Button } from 'semantic-ui-react';
import withQuery from '../../services/graphql/withQuery';
import { RouteComponentProps, withRouter } from 'react-router';
import { compose } from 'recompose';
import withAuthentication from '../../services/auth/withAuthentication';
import * as _ from 'lodash';

interface IPluginsProps extends IResultPropsType<IPluginsQueryResult, {}>, RouteComponentProps<{}> {}

const PluginAction: React.StatelessComponent<{
  installed: boolean;
  onClick: () => void;
}> = props =>
  <Button
    icon={props.installed ? 'trash' : 'download'}
    content={props.installed ? 'Uninstall' : 'Install'}
    color={props.installed ? 'red' : 'green'}
    onClick={props.onClick}
  />;

const Plugins: React.StatelessComponent<IPluginsProps> = (props): JSX.Element =>
  <Segment basic>
    <Header size="large">My Plugins</Header>
    <Divider />
    <Card.Group>
      {_.map(props.result.plugins, plugin =>
        <Card
          header={plugin.name}
          description={plugin.description}
          extra={<PluginAction installed onClick={() => props.history.push(`/view-plugin?id=${plugin.id}`)} />}
        />,
      )}
    </Card.Group>
  </Segment>;

const withPluginQuery = withQuery<IPluginsQueryResult, {}, RouteComponentProps<{}>>(pluginsQuery, {});

export interface IPluginsQueryResult {
  plugins: Array<{
    id: string;
    name: string;
    status: string;
    httpsGitRemote: string;
    description: string;
    getPluginConfigs: {
      configName: string;
    };
    getPluginVersions: {
      id: string;
      gitTag: string;
    };
  }>;
}

const enhance = compose<IPluginsProps, RouteComponentProps<{}>>(withAuthentication(), withPluginQuery, withRouter);

export default enhance(Plugins);
