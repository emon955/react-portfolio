import React, { createContext, useReducer, useContext } from 'react'
import { cartReducer } from "./Reducer";
import { whillistReducer } from "./Reducer";
import { products } from './ProductsData';
export const Cart = createContext();
const Context = ({ children }) => {
   const [state, dispatch] = useReducer(cartReducer, {
      products: products,
      cart: [],
      whillist: [],
   });
   const [whilliststate, dispatchWhillist] = useReducer(whillistReducer, {
      whillist: [],
   });
   return (
      <Cart.Provider value={{ state, dispatch, whilliststate, dispatchWhillist }}>
         {children}
      </Cart.Provider>
   )
}
export const CartState = () => {
   return useContext(Cart);
};
export default Context