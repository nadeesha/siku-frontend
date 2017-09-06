import { graphql } from 'react-relay';

export default graphql`
  query authenticatedUserQuery ($token: String!) {
    authenticatedUser (token: $token)
  }
`;
