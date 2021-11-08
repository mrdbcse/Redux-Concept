import "./App.css";
import AccountStatus from "./Components/AccountStatus";
import Auth from "./Components/Auth";
import Balance from "./Components/Balance";
import Banking from "./Components/Banking";
const App = () => {
  return (
    <>
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </>
  );
};

export default App;
