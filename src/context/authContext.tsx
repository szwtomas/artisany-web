import {
  User as FirebaseUser,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { firebaseApp } from "../firebase/firebaseApp";

interface User extends FirebaseUser {
  username?: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoggedIn: () => boolean;
}

const initialAuthContext: AuthContextProps = {
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: async (_email: string, _password: string) => {
    console.log("Login");
  },
  logout: async () => {
    console.log("Logout");
  },

  isLoggedIn: () => {
    return false;
  },
};

export const AuthContext = createContext<AuthContextProps>(initialAuthContext);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = (props) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(
      auth,
      (user: FirebaseUser | null) => {
        setUser(user);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string) => {
    const auth = getAuth(firebaseApp);
    await signInWithEmailAndPassword(auth, email, password);
    setUser(auth.currentUser);
  };

  const logout = async () => {
    try {
      const auth = getAuth(firebaseApp);
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error(`Error logging out: ${err}`);
    }
  };

  const isLoggedIn = (): boolean => {
    return user !== null;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};
