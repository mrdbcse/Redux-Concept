import { useSelector } from "react-redux";

const AccountStatus = () => {
  const accountType = useSelector((state) => state.banking.isSavingsAccount);
  return (
    <div>
      <h1>{accountType ? "Savings Account" : "Fixed-Deposit Account"}</h1>
    </div>
  );
};

export default AccountStatus;
