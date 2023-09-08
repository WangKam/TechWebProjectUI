import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Loading from "./components/modal/Loading";
import { setAuthData } from "./container/Auth/actions";
import { useAppSelector } from "./container/store";
import HomePage from "./page/homepage";
import LaptopsManagement from "./page/laptopsManagement";
import Login from "./page/login";

function App() {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  const isLoading = useAppSelector((state) => state.loadingReducer.isLoading);

  const dispatch = useDispatch()

  useEffect(() => {
    const token = Cookies.get("token");
    const username = Cookies.get("username");
    if (token && username) {
      dispatch(setAuthData({ username, token }))
    }
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/sign-in" component={Login} />
          <PrivateRoute
            path="/laptopsManagement"
            component={LaptopsManagement}
            isAuthenticated={isAuth}
          />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </Layout>
      {isLoading && <Loading />}
    </BrowserRouter>
  );
}

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/sign-in", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default App;
