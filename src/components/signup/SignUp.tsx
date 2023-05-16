import { SignUpForm } from "./SignUpForm";
import { signUpValidations } from "./SignUpFormValidation";
import { SignUpFormValues } from "./SignUpFormValues";
import Title from "antd/es/typography/Title";

export const SignUp: React.FC = () => {
  const onSubmit = (values: SignUpFormValues) => {
    console.log("Submitted values", values);
    const validationResult = signUpValidations(values);
    if (validationResult !== null) {
      console.log("Handling sign up");
    } else {
      alert(validationResult);
    }
  };

  return (
    <div>
      <Title>Sign Up</Title>
      <SignUpForm onSubmit={onSubmit} />
    </div>
  );
};
