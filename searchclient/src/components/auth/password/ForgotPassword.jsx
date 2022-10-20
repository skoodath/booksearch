import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

const ForgotPassword = () => {
  return (
    <Container
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      maxW="100vw"
      p="0"
      backgroundColor="#efefef"
    >
      <form>
        <FormControl backgroundColor="#ffffff" padding="1rem">
          <FormLabel>
            Email
            <Input type="email" />
          </FormLabel>
          <Button>Send reset email</Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default ForgotPassword;
