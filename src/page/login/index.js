import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { styled } from "styled-components";
import { login } from "../../container/Auth/actions";
import { useAppSelector } from "../../container/store";

const Container = styled("div")`
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button {
    background-color: #4681f4;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
  }

  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #4681f4;
  }

  .imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
  }

  img.avatar {
    width: 40%;
    border-radius: 50%;
  }

  .container {
    padding: 16px;
  }

  span.psw {
    float: right;
    padding-top: 16px;
  }

  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
    padding-top: 60px;
  }

  .modal-content {
    background-color: #fefefe;
    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const history = useHistory();

  const [authData, _] = useState({
    username: {
      value: "",
      isError: false,
      errMessage: "Login Name required at least 1 character",
    },
    password: {
      value: "",
      isError: false,
      errMessage: "Password required at least 1 character",
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const username = data.get("username");
    const password = data.get("password");
    if (username !== "" && password !== "") {
      Cookies.set('username', username);
      console.log('login')
      dispatch(
        login({
          username: data.get("username"),
          password: data.get("password"),
        })
      );
    }
  };

  useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth, history]);

  return (
    <Container className="modal">
      <form
        className="modal-content animate"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="container">
          <label htmlFor="username">
            <b>User Name</b>
          </label>
          <input
            type="text"
            placeholder="Input Username"
            name="username"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(authData.username.errMessage)
            }
            onInput={(F) => F.target.setCustomValidity("")}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Input Password"
            name="password"
            required
            onInvalid={(e) =>
              e.target.setCustomValidity(authData.password.errMessage)
            }
            onInput={(F) => F.target.setCustomValidity("")}
          />

          <button type="submit">Login</button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
