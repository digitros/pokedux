export const logger = (store) => (next) => (action) => {
  console.log("ACTION: ", action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "digitros" }, ...actionInfo.action.payload];
  const updatedAction = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedAction);
};
