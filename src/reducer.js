export const initialState = {
  basket: [
    {
      id: "12321341",
      title:
        "The Lean Startup: How Constant innovation Creates Radically Successful Businesses Paperback",
      price: 19.96,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
      rating: 5,
    },
    {
      id: "12321341",
      title:
        "The Lean Startup: How Constant innovation Creates Radically Successful Businesses Paperback",
      price: 19.96,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",
      rating: 5,
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as its none`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
