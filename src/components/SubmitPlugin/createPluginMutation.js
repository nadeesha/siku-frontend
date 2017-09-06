import { graphql } from 'react-relay';

const createPluginMutation = graphql`
  mutation createPluginMutation ($plugin: CreatePluginInput!) {
    createPlugin(plugin: $plugin)
  }
`;

export default createPluginMutation;
