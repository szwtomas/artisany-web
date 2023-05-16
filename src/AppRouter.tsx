import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/login/Login";
import { SignUp } from "./components/signup/SignUp";
import { Navbar } from "./components/navbar/Navbar";

export const AppRouter: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
