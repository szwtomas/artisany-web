import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/login/Login";
import { SignUp } from "./components/signup/Signup";

export const AppRouter: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
