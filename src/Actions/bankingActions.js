export const depositAction = (amount) => {
  return {
    type: "DEPOSIT",
    amount: amount,
  };
};
export const withdrawAction = (amount) => {
  return {
    type: "WITHDRAW",
    amount: amount,
  };
};
export const collectInterestAction = () => {
  return {
    type: "COLLECT_INTEREST",
  };
};

export const deleteAccountAction = () => {
  return {
    type: "DELETE_AMOUNT",
  };
};
export const toggleAcountAction = () => {
  return {
    type: "TOGGLE_ACCOUNT",
  };
};
