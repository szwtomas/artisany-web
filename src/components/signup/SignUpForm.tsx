import { Button, Form, Input } from "antd";
import { SignUpFormValues } from "./SignUpFormValues";
import "./signup.css";

export interface SignUpFormProps {
  onSubmit: (values: SignUpFormValues) => void;
}

export const SignUpForm = (props: SignUpFormProps) => {
  return (
    <div className="signup-form-container">
      <Form
        className="signup-form"
        name="signup"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={props.onSubmit}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Please input your desired username!" },
          ]}
        >
          <Input
            placeholder="Enter you desired username..."
            className="signup-form-input"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input
            placeholder="Enter your password..."
            type="password"
            className="signup-form-input"
          />
        </Form.Item>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            { required: true, message: "Please input your desired name!" },
          ]}
        >
          <Input
            placeholder="Enter your first name..."
            className="signup-form-input"
          />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            { required: true, message: "Please input your desired last name!" },
          ]}
        >
          <Input
            placeholder="Enter your last name..."
            className="signup-form-input"
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your register email!" },
          ]}
        >
          <Input
            placeholder="Enter youy email..."
            className="signup-form-input"
          />
        </Form.Item>
        <Form.Item>
          <Button className="sign-up-btn" type="primary" htmlType="submit">
            Sign up now!
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
