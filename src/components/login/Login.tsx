import { Typography } from "antd";
import { LoginForm } from "./LoginForm";
import { LoginFormValues } from "./LoginFormValues";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./login.css";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export const Login: React.FC = () => {
  const [isIncorrectPassword, setIsIncorrectPassword] = useState(false);

  const { login } = useContext(AuthContext);
  const naviagte = useNavigate();

  const onSubmit = async (values: LoginFormValues): Promise<void> => {
    try {
      await login(values.email, values.password);
      console.log("Logged in!");
      naviagte("/feed");
    } catch (err) {
      console.log("Error logging in: " + err);
      setIsIncorrectPassword(true);
    }
  };

  return (
    <div className="login-container">
      <Title level={1} className="login-page-title">
        Artinsany
      </Title>
      <Title level={2} className="login-form-title">
        Login
      </Title>
      {isIncorrectPassword && (
        <Text color="red">Invalid email/password combination</Text>
      )}
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
