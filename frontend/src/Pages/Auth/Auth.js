import React, { useState } from "react";
import Input from "./Input";
import { Button } from "@material-ui/core";
import "./Auth.css";

const initialData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [authFormData, setAuthFormData] = useState(initialData);
  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (authFormData.name.length < 3 && !showLogin) {
      setAuthErrorMessage("Name should contain at least 3 characters");
    } else if (authFormData.email.length === 0) {
      setAuthErrorMessage("Email field is empty");
    } else if (authFormData.password.length < 5) {
      setAuthErrorMessage("Password should be at least 5 characters");
    } else if (!authFormData.confirmPassword && !showLogin) {
      setAuthErrorMessage("Confirm password field is empty");
    } else {
      console.log(authFormData);
      setAuthFormData(initialData);
    }
  };
  const switchMode = () => {
    setShowLogin(!showLogin);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeData = (e) => {
    setAuthFormData({ ...authFormData, [e.target.name]: e.target.value });
  };
  return (
    <form className="auth" onSubmit={onSubmitHandler}>
      {authErrorMessage && <p>{authErrorMessage}</p>}
      {!showLogin && (
        <Input
          name="name"
          label="Name"
          type="text"
          value={authFormData.name}
          handleChangeData={handleChangeData}
          autofocus
        />
      )}
      <Input
        name="email"
        label="Email"
        type="email"
        value={authFormData.email}
        handleChangeData={handleChangeData}
      />
      <Input
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        value={authFormData.password}
        handleShowPassword={handleShowPassword}
        handleChangeData={handleChangeData}
      />
      {!showLogin && (
        <Input
          name="confirmPassword"
          label="Confirm Password"
          type="text"
          value={authFormData.confirmPassword}
          handleChangeData={handleChangeData}
        />
      )}
      <Button type="submit">{showLogin ? "Login" : "Register"}</Button>
      <Button onClick={switchMode}>
        {showLogin
          ? "Don't have the account? Click to register!"
          : "Already have the account? Click to login!"}
      </Button>
    </form>
  );
};

export default Auth;
