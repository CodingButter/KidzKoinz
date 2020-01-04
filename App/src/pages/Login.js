import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import FittedBackgroundComponent from "../components/presentationals/FittedBackgroundComponent";
import { LOGIN_USER_MUTATION } from "../apollo/mutation";

import backgroundImage from "../img/login_background.jpg";

import { setAuth } from "../auth";

const LoginPage = props => {
  const [executeLogin, { data, error, loading, called }] = useMutation(
    LOGIN_USER_MUTATION,
    {
      onCompleted(response) {
        console.log({ response });

        if (response?.login) {
          const { authToken, refreshToken, id } = response.login;
          setAuth({ authToken, refreshToken, id });
        }

        // store the auth token in the local storage

        // put the auth token in the headers check docs

        // create a global state with useContext and store the response.login.user object in the state
      },
      onError(error) {
        if (error?.graphQLErrors) {
          error.graphQLErrors.map(err => setFormError(err?.message));
        } else {
          setFormError("Something went wrong. Please try again later.");
        }
      }
    }
  );

  console.log({ data, error, loading, called });

  // const onClick = () => {
  //   executeLogin({
  //     variables: {
  //       username: "test_user",
  //       password: "test_password",
  //       clientMutationId: "uniqueId"
  //     }
  //   });
  // };

  const [values, setValues] = useState({ username: "", password: "" });
  const [formError, setFormError] = useState(null);

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();

    const { username, password } = values;
    if (!username || !password) {
      setFormError("Enter a username and password");
      return;
    }

    executeLogin({ variables: { ...values, clientMutationId: "uniqueId" } });
  };

  return (
    <div>
      <FittedBackgroundComponent image={backgroundImage} />
      {formError && <div>{formError}</div>}
      <form id="loginForm" onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="Email"
          onChange={handleChange}
          value={values.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={values.password}
        />
      </form>

      <button form="loginForm" type="submit">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
