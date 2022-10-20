import { useContext } from "react";
import { Container, Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AppContext";
import { Icon } from "@chakra-ui/react";
import { MdAccountCircle } from "react-icons/md";

const HeaderComponent = () => {
  const { token, setToken } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <Container
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="4"
      width="100%"
      maxWidth="100%"
    >
      <Heading as="header" width="100%" color="darkcyan">
        <Link to="/">Classic Books</Link>
      </Heading>
      <Box as="nav" display="flex" gap="3">
        {token && (
          <>
            <Link to="/">
              <Button colorScheme="gray" variant="solid" onClick={handleLogout}>
                Logout
              </Button>
            </Link>
            <Link to="/profile">
              <Icon as={MdAccountCircle} w={10} h={10} color="blue" />
            </Link>
          </>
        )}
        {!token && (
          <Link to="/login">
            <Button colorScheme="blue" variant="solid">
              Login
            </Button>
          </Link>
        )}
      </Box>
      <Box as="nav"></Box>
    </Container>
  );
};

export default HeaderComponent;
