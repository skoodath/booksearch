import {
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useRef, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AppContext";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setToken } = useContext(AuthContext);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    const response = await axios.post("login", credentials);

    const { token } = response.data;
    localStorage.setItem("token", token);
    setToken(token);
    navigate("/", { replace: true });

    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  const showHidePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Container my={5}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" ref={usernameRef} />
          <FormLabel>Password</FormLabel>
          <Input type={showPassword ? "text" : "password"} ref={passwordRef} />
          <Checkbox onChange={showHidePassword}>
            {showPassword ? "Hide" : "Show"} Password
          </Checkbox>
        </FormControl>
        <ButtonGroup my={5}>
          <Button type="submit">Login</Button>
        </ButtonGroup>
      </form>
      <Link to="/forgot-password">Forgot Password</Link>
    </Container>
  );
};

export default LoginComponent;
