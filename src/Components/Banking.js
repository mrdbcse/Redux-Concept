import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  collectInterestAction,
  deleteAccountAction,
  depositAction,
  toggleAcountAction,
  withdrawAction,
} from "../Actions/bankingActions";

const Banking = () => {
  const [amount, setAmount] = useState(parseFloat(0));
  const dispatch = useDispatch();
  const depositHandler = () => {
    dispatch(depositAction(parseFloat(amount)));
    setAmount("");
  };
  const withdrawHandler = () => {
    dispatch(withdrawAction(parseFloat(amount)));
    setAmount("");
  };
  const collectInterestHandler = () => {
    dispatch(collectInterestAction());
    setAmount("");
  };
  const deleteAccountHandler = () => {
    dispatch(deleteAccountAction());
    setAmount("");
  };
  const changeAccountTypeHandler = () => {
    dispatch(toggleAcountAction());
  };
  return (
    <div className='form-group'>
      <input
        type='text'
        className='form-control'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className='btn btn-success' onClick={depositHandler}>
        Deposit
      </button>
      <button className='btn btn-primary' onClick={withdrawHandler}>
        Withdraw
      </button>
      <button className='btn btn-warning' onClick={collectInterestHandler}>
        Collect Interest
      </button>
      <button className='btn btn-danger' onClick={deleteAccountHandler}>
        Delete Account
      </button>
      <button className='btn btn-secondary' onClick={changeAccountTypeHandler}>
        Change Account Type
      </button>
    </div>
  );
};

export default Banking;
