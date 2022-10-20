import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import LoginComponent from './login/LoginComponent'
import SignupComponent from './signup/SignupComponent'

const AuthComponent = () => {
  return (
    <Box
      w={["80%", null, "60%"]}
      maxW="768"
      boxShadow={[null, null, "base"]}
      m="2rem auto"
    >
      <Tabs isFitted>
        <TabList>
          <Tab>Login</Tab>
          <Tab>Sign-up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <LoginComponent />
          </TabPanel>
          <TabPanel>
            <SignupComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default AuthComponent;