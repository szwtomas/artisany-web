import { Typography } from "antd";
import { LoginForm } from "./LoginForm";
import "./login.css";
import { LoginFormValues } from "./LoginFormValues";

const { Title } = Typography;

export const Login: React.FC = () => {
  const onSubmit = async (values: LoginFormValues): Promise<void> => {
    console.log("Clicked submit!");
    console.log(values);
  };

  return (
    <div className="login-container">
      <Title level={1} className="login-page-title">
        Artinsany
      </Title>
      <Title level={2} className="login-form-title">
        Login
      </Title>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};
