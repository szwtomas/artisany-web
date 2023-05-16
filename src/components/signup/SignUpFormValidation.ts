import { SignUpFormValues } from "./SignUpFormValues";

const isLetter = (char: string) => char.length === 1 && char.match(/[a-z]/i);
const isUppercase = (char: string) => isLetter(char) && char === char.toUpperCase();
const isLowerCase = (char: string) => isLetter(char) && char === char.toLowerCase();
const isNumber = (char: string) => !isNaN(Number(char));

const passwordValidation = (value: string) => {
    const MIN_PASSWORD_LENGTH = 8;
    const MAX_PASSWORD_LENGTH = 20;

    if (!value) {
        return 'Password is required';
    } else if (value.length < MIN_PASSWORD_LENGTH) {
        return `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;
    } else if (value.length > MAX_PASSWORD_LENGTH) {
        return `Password must be at most ${MAX_PASSWORD_LENGTH} characters`;
    }

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    for (const char of value) {
        if (isUppercase(char)) {
            hasUpperCase = true;
        } else if (isLowerCase(char)) {
            hasLowerCase = true;
        } else if (isNumber(char)) {
            hasNumber = true;
        }
    }
    
    if (!(hasLowerCase && hasUpperCase && hasNumber)) {
        return "Password must contain at least one uppercase letter, one lowercase letter and one number";
    }

    return null;
}

const usernameValidation = (value: string) => {
    const MIN_USERNAME_LENGTH = 4;
    const MAX_USERNAME_LENGTH = 15;
    if (!value) {
        return 'Username is required';
    } else if (value.length < MIN_USERNAME_LENGTH) {
        return 'Username must be at least 3 characters';
    } else if (value.length > MAX_USERNAME_LENGTH) {
        return 'Username must be at most 20 characters';
    }

    for (const char of value) {
        if (!(isLetter(char) || isNumber(char))) {
            return "Username can only contain letters and numbers";
        }
    }

    return null;
}

const emailValidation = (value: string) => {
    const validEmailRegex = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
    if (!value) {
        return 'Email is required';
    }

    if (!value.match(validEmailRegex)) {
        return 'Email is not valid';
    }

    return null;
}

export const signUpValidations = (signUpValues: SignUpFormValues): string | null => {
    const { username, password, email } = signUpValues;
    const usernameError = usernameValidation(username);
    const passwordError = passwordValidation(password);
    const emailError = emailValidation(email);
    if (!usernameError && !passwordError && !emailError) {
        return null;
    }

    return `${usernameError ? usernameError : ""}\n${passwordError ? passwordError : ""}\n${emailError ? emailError : ""}`;
}