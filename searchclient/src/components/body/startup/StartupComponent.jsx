import { Container, Flex, Heading } from '@chakra-ui/react'

const StartupComponent = () => {
  return (
    <Container
      w="100%"
      maxW="100%"
      minH="400px"
      display="flex"
      flexDirection= 'column'
      justifyContent="center" 
      alignItems="center"
      backgroundColor="#fff"
    >
        <Flex 
          flexDirection= 'column' 
          justifyContent="center" 
          alignItems="center" 
          margin= '1rem 0 2rem 0'
        >
          <Heading fontSize="3rem" textAlign="center" fontWeight={600}>Discover classic writings</Heading>
          <Heading fontSize="2rem" textAlign="center" fontWeight={300}>of your favorite</Heading>
          <Heading fontSize="5rem" textAlign="center">Authors</Heading>
        </Flex>
    </Container>
  )
}

export default StartupComponent;