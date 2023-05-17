import { AppRouter } from "./AppRouter";
import { AuthProvider } from "./context/authContext";

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
};

export default App;
