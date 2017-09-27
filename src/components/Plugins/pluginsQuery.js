import { graphql } from '../../services/graphql/withQuery';

export const pluginsQuery = graphql`
  query pluginsQuery {
    plugins {
      id
      name
      status
      httpsGitRemote
      description
      getPluginConfigs {
        configName
        redirectUrl
        otherConfig
      }
      getPluginEvents {
        id
        type
        message
      }
      getPluginVersions {
        id
        gitTag
        getPlugin {
          id
        }
      }
    }
  }
`;
