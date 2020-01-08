import { MockedProvider } from "@apollo/client/testing";
import { LOGIN_USER_MUTATION } from "../apollo/mutation/LOGIN_USER_MUTATION";
import Login from "./Login";

const mocks = [
  {
    request: {
      query: LOGIN_USER_MUTATION,
      variables: {
        username: "test_user",
        password: "test_password",
        clientMutationId: "uniqueId"
      }
    },
    result: {
      data: {
        key: "2"
      }
    }
  }
];
it("renders without error", () => {
  //mount the login component using the mock provider toreturn expected response from our "SERVER"
  const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Login />
    </MockedProvider>
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
