import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const { user } = useSelector((state) => state.auth);

  return <div>{user ? <HomePage /> : <LoginPage />}</div>;
}

export default App;
