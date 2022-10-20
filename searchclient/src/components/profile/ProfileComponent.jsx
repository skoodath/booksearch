import { useEffect, useContext, useRef } from "react";
import {
  ButtonGroup,
  Button,
  Container,
  Flex,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AppContext";
import axios from "axios";
import jwt_decode from "jwt-decode";

const ProfileComponent = () => {
  const { token } = useContext(AuthContext);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const hobbiesRef = useRef(null);
  const cityRef = useRef(null);
  const countryRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/profile", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, []);

  const handleProfileUpdate = async () => {
    const decodedToken = jwt_decode(token);

    const updateInfo = {
      username: decodedToken.username,
      firstname: firstNameRef.current.value,
      lastname: lastNameRef.current.value,
      hobbies: hobbiesRef.current.value,
      city: cityRef.current.value,
      country: countryRef.current.value,
    };

    const id = decodedToken.id;

    try {
      const response = await axios.put(`users/:${id}`, updateInfo, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container mt={10}>
      <Heading mb={10}>Update your profile</Heading>
      <Flex flexDirection="column">
        <FormLabel mr={0}>
          First Name
          <Input type="text" ref={firstNameRef} />
        </FormLabel>
        <FormLabel mr={0}>
          Last Name
          <Input type="text" ref={lastNameRef} />
        </FormLabel>
        <FormLabel mr={0}>
          Hobbies
          <Input type="text" ref={hobbiesRef} />
        </FormLabel>
        <FormLabel mr={0}>
          City
          <Input type="text" ref={cityRef} />
        </FormLabel>
        <FormLabel mr={0}>
          Country
          <Input type="text" ref={countryRef} />
        </FormLabel>
        <ButtonGroup gap={5}>
          <Button flexGrow="1" colorScheme="blue" onClick={handleProfileUpdate}>
            Update
          </Button>
          <Button flexGrow="1">Cancel</Button>
        </ButtonGroup>
      </Flex>
    </Container>
  );
};

export default ProfileComponent;
