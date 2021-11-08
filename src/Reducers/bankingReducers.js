const initialState = {
  balance: 0,
  isSavingsAccount: false,
};
export const bankingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + action.amount };
    //   break;
    case "WITHDRAW":
      return { ...state, balance: state.balance - action.amount };
    //   break;
    case "COLLECT_INTEREST":
      return { ...state, balance: state.balance * 1.03 };
    //   break;
    case "DELETE_AMOUNT":
      return { ...state, balance: 0 };
    //   break;
    case "TOGGLE_ACCOUNT":
      return { ...state, isSavingsAccount: !state.isSavingsAccount };

    default:
      return state; // Returns old state
    //   break;
  }
};
