import { SignUpForm } from "./SignUpForm";
import { signUpValidations } from "./SignUpFormValidation";
import { SignUpFormValues } from "./SignUpFormValues";
import Title from "antd/es/typography/Title";
import { createUserByEmailAndPassword } from "../../services/userService";
import { useNavigate } from "react-router-dom";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const onSubmit = async (values: SignUpFormValues) => {
    console.log("Submitted values", values);
    const validationResult = signUpValidations(values);

    if (validationResult !== null) {
      console.log("Handling sign up");
      try {
        await createUserByEmailAndPassword(values.email, values.password);
        console.log("User created!");
        navigate("/login");
      } catch (err) {
        console.error("Error creating user: " + err);
      }
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
