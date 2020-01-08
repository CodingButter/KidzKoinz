import { gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { MockedProvider } from "@apollo/client/testing";
import { apolloClient } from "../apollo";
import { LOGIN_USER_MUTATION } from "../apollo/mutation/LOGIN_USER_MUTATION";
import Login from "./Login";

const CUSTOM_QUERY = gql`
  mutation someQuery($x: String!) {
    doStuff(x: $x) {
      key
    }
  }
`;

const mocks = [
  {
    request: {
      query: CUSTOM_QUERY,
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
it("renders without error", () => {
  //mount the login component using the mock provider toreturn expected response from our "SERVER"
  const wrapper = mount(
    <ApolloProvider client={apolloClient}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Login />
      </MockedProvider>
    </ApolloProvider>
  );
  //find the username and password inputs and set the value for our simulation test
  // const usernameInput = wrapper.find("usernameInput");
  // usernameInput.value = "test_user";
  // usernameInput.debug();
  // const passwordInput = wrapper.find("passwordInput");
  // passwordInput.value = "test_password";
  // const loginForm = wrapper.find("loginForm");
  //loginForm.simulate("submit");
});
