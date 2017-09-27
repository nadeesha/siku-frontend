import * as React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';

interface IViewPluginProps {
  installed: boolean;
  description: string;
  name: string;
}

const ViewPlugin: React.StatelessComponent<IViewPluginProps> = props => {
  return (
    <Segment basic>
      <Header subheader={props.description}>{props.name}</Header>
      <Button.Group>
        {props.installed
          ? <Button color="red" icon="trash">Uninstall</Button>
          : <Button color="green" icon="download">Install</Button>}
      </Button.Group>
    </Segment>
  );
};
