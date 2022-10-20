import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AppContext";

const SignupComponent = () => {
  const { setToken } = useContext(AuthContext);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signup = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
      usertype: "user",
      email: emailRef.current.value,
    };
    try {
      const response = await axios.post("users", signup);
      const { token } = await response.data;
      localStorage.setItem("token", token);
      setToken(token);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error.message);
    } finally {
      usernameRef.current.value = "";
      passwordRef.current.value = "";
      emailRef.current.value = "";
    }
  };
  return (
    <Container my={5}>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" ref={usernameRef} />
          <FormLabel>Password</FormLabel>
          <Input type="password" ref={passwordRef} />
          <FormLabel>Email</FormLabel>
          <Input type="email" ref={emailRef} />
        </FormControl>
        <ButtonGroup my={5}>
          <Button type="submit">Sign Up</Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default SignupComponent;
