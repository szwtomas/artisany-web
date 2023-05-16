import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { LoginFormValues } from "./LoginFormValues";
import "./login.css";

export interface LoginFormProps {
  onSubmit: (values: LoginFormValues) => void;
}

export const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
  return (
    <>
      <Form
        name="login-form"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={props.onSubmit}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item className="remember-me-forgot-password-row">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <div className="register-redirect-link">
            Or <a href="/signup">register now!</a>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};
