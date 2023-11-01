import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  Button,
  LinearProgress,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { sessionLoginUser } from "../../services/Api";

import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { setLoginSession } from "../../slices/authSlice";

interface LoginProps {}

function LoginForm(props: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const submitDisabled = () => {
    return (
      username === "" || password === "" || password.length < 4 || isLoading
    );
  };

  const handleClickSignIn = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      // Set loading state
      setIsLoading(true);
      setErrorMessage("");

      // Perform login
      const response = await sessionLoginUser(username, password);

      // get the auth data from the response
      const token = response.data.access_token;
      const refreshToken = response.data.refresh_token;
      const user = response.data.user;

      // reset the form and loading states
      setUsername("");
      setPassword("");
      setIsLoading(false);

      // set the login session in the redux store
      dispatch(setLoginSession({ token, user, refreshToken }));

      // if there was a redirect path, navigate to it otherwise navigate to the home page
      navigate(from, { replace: true });
    } catch (error: any) {
      // reset the loading state
      setIsLoading(false);

      // error handling
      if (error.response.status === 404) {
        setErrorMessage("User not found");
      } else if (error.response.status === 401) {
        setErrorMessage("Invalid password");
      } else {
        setErrorMessage("Login failed");
      }
    }
  };

  return (
    <div className="login-container">
      <h1>Sign In</h1>
      <form>
        <div className="inputs-container">
          <FormControl>
            <TextField
              className="input"
              label="Username or email"
              id="login-username"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUsername(event.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <TextField
              className="input"
              label="Password"
              id="login-password"
              type={showPassword ? "text" : "password"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </div>
        <Button
          className="submit-button"
          disabled={submitDisabled()}
          variant="contained"
          onClick={handleClickSignIn}
        >
          Sign in
        </Button>
        <div style={{ minHeight: 4, marginTop: 10 }}>
          {isLoading && <LinearProgress />}
        </div>
        <div className="error-container">
          {errorMessage && <label>{errorMessage}</label>}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
