import { gql } from "@apollo/client";

export const LOGIN_USER_MUTATION = gql`
  mutation loginUser(
    $username: String!
    $password: String!
    $clientMutationId: String!
  ) {
    login(
      input: {
        username: $username
        password: $password
        clientMutationId: $clientMutationId
      }
    ) {
      authToken
      refreshToken
      clientMutationId
      user {
        id
        userId
        avatar {
          url
        }
        email
        firstName
        lastName
        username
        nickname
        nicename
        url
      }
    }
  }
`;
