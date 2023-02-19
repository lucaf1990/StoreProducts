const initialState = {
  cart: {
    content: [],
    selectedProds: [],
  },
  products: {
    product: [],
    selected: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_BY_ONE":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: state.cart.content.concat(action.payload),
        },
      };
    case "PRODUCTS_WE_SELL":
      return {
        ...state,
        products: {
          ...state.products,
          product: action.payload,
        },
      };
    case "PRODUCT_ID":
      return {
        ...state,
        products: {
          ...state.products,
          selected: action.payload,
        },
      };
    case "IN_THE_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          selectedProds: state.cart.selectedProds.concat(action.payload),
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
