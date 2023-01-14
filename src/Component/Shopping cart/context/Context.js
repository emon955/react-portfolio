import React,{createContext,useReducer,useContext} from 'react'
import { cartReducer} from "./Reducer";
export const Cart = createContext();
const Context = ({ children }) => {
    const products = [
        {
           id:"1",
           title:"Lorem ipsum fashion female top",
           rating:[1,2,3,4,5],
           price:"$45",
           inStock:([1,2,3,4]),
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg'
        },
        {
           id:"2",
           title:"Lorem ipsum fashion female top",
           rating:[1,2,3,4,5],
           price:"$45",
           instock:([]),
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg'
        },
        {
           id:"3",
           title:"Lorem ipsum fashion female top",
           rating:[1,2,3,4,5],
           price:"$45",
           inStock:([1,2,3,4]),
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg'
        },
        {
           id:"4",
           title:"Lorem ipsum fashion female top",
           rating:[1,2,3,4,5],
           price:"$45",
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg'
        },
        {
           id:"5",
           title:"Lorem ipsum fashion female top",
           rating:[1,2,3,4,5],
           price:"$45",
           inStock:([1,2,3,4]),
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg'
        },
        {
           id:"6",
           title:"Lorem ipsum fashion female top",
           rating:[1,2,3,4,5],
           price:"$45",
           inStock:([1,2,3,4]),
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg'
        },
        {
           id:"7",
           title:"Lorem ipsum fashion female top",
           rating:[1,2,3,4,5],
           price:"$45",
           inStock:([1,2,3,4]),
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg'
        },
        {
           id:"8",
           title:"Lorem ipsum fashion female top",
           rating:[1,2,3,4,5],
           price:"$45",
           inStock:([1,2,3,4]),
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg'
        },
     ];
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
    });
    return (
        <Cart.Provider value={{state,dispatch}}>
            {children}
        </Cart.Provider>
    )
}
export const CartState = () => {
    return useContext(Cart);
};
export default Context