export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "CHANGE_CART_QTY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cart: action.payload, 
      };
    default:
      return state;
  }
};

export const whillistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WHILLIST":
      return { ...state, whillist: [...state.whillist, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_WHILLIST":
      return {
        ...state,
        whillist: state.whillist.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
export const compareReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_COMPARELIST":
      return { ...state, compare: [...state.compare, { ...action.payload }] };
    case "REMOVE_FROM_COMPARE":
      return {
        ...state,
        compare: state.compare.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};

