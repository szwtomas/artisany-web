import { firebaseApp } from "../firebase/firebaseApp"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

export const createUserByEmailAndPassword = async (email: string, password: string): Promise<void> => {
    const auth = getAuth(firebaseApp);
    await createUserWithEmailAndPassword(auth, email, password);
}