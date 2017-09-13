import { graphql } from 'react-relay';

export default graphql`
  query withAuthenticatedUserQuery ($token: String!) {
    authenticatedUser (token: $token) {
      id
    }
  }
`;
