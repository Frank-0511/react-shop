import Layout from "@containers/Layout";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
import Checkout from "@pages/Checkout";
import CreateAccount from "@pages/CreateAccount";
import Home from "@pages/Home";
import Login from "@pages/Login";
import MyAccount from "@pages/MyAccount";
import NewPassword from "@pages/NewPassword";
import NotFound from "@pages/NotFound";
import Orders from "@pages/Orders";
import PasswordRecovery from "@pages/PasswordRecovery";
import SendEmail from "@pages/SendEmail";
import "@styles/global.scss";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Layout>
        <Router basename="react-shop">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="login" element={<Login />} />
            <Route
              exact
              path="password-recovery"
              element={<PasswordRecovery />}
            />
            <Route exact path="send-email" element={<SendEmail />} />
            <Route exact path="new-password" element={<NewPassword />} />
            <Route exact path="account" element={<MyAccount />} />
            <Route exact path="signup" element={<CreateAccount />} />
            <Route exact path="checkout" element={<Checkout />} />
            <Route exact path="orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Layout>
    </AppContext.Provider>
  );
};

export default App;
