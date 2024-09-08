import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
export default App;
