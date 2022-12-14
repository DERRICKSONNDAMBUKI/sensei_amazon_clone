export const initialState = {
  basket: [],
  user: null,
};

export const reducerAction = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET",
  EMPTY_BASKET: "EMPTY_BASKET",
  SET_USER: "SET_USER",
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export default (state, action) => {
  switch (action.type) {
    case reducerAction.ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.item] };

    case reducerAction.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id: ${action.id} as it's not in the basket)`
        );
      }
      return { ...state, basket: newBasket };

    case reducerAction.EMPTY_BASKET:
      return { ...state, basket: [] };
    case reducerAction.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
