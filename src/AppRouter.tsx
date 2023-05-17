import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Login } from "./components/login/Login";
import { SignUp } from "./components/signup/SignUp";
import { Navbar } from "./components/navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { Feed } from "./components/feed/Feed";

export const AppRouter: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn()) {
    console.log("User not logged in");
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

  console.log("User logged in");
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
