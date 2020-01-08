import { gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { MockedProvider } from "@apollo/client/testing";
import { apolloClient } from "../apollo";
import { LOGIN_USER_MUTATION } from "../apollo/mutation/LOGIN_USER_MUTATION";
import Login from "./Login";

const mocks = [
  {
    request: {
      query: LOGIN_USER_MUTATION,
      variables: {
        x: "test_user"
      }
    },
    result: {
      data: {
        key: "Lol"
      }
    }
  }
];
it("handles the autentication when [insert the goal of your test]", () => {
  //mount the login component using the mock provider toreturn expected response from our "SERVER"
  const wrapper = mount(
    <ApolloProvider client={apolloClient}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Login />
      </MockedProvider>
    </ApolloProvider>
  );

  wrapper.find("UsernameInput").value = "test_user";
  wrapper.find("PasswordInput").value = "test_password";
  wrapper.find("LoginForm").simulate("submit");
});
