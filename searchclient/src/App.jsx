import { useState, useEffect } from "react";
import HeaderComponent from "./components/header/HeaderComponent";
import BodyComponent from "./components/body/BodyComponent";
import GlobalStyle from "./styles/global.style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthComponent from "./components/auth/AuthComponent";
import ProfileComponent from "./components/profile/ProfileComponent";
import { AuthContext } from "./context/AppContext";
import ForgotPassword from "./components/auth/password/ForgotPassword";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    let storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
    else console.log("no token");
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <GlobalStyle />
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<BodyComponent />} />
          <Route path="login" element={<AuthComponent />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="profile" element={<ProfileComponent />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page doesn't exist!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
