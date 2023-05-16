import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/login/Login";

export const AppRouter: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
