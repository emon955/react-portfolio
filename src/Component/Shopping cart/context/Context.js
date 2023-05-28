import React,{createContext,useReducer,useContext} from 'react'
import { cartReducer} from "./Reducer";
import { whillistReducer} from "./Reducer";
export const Cart = createContext();
const Context = ({ children }) => {
    const products = [
        {
           id:"1",
           title:"Lorem ipsum fashion female top",
           rating:[1,2,3,4,5],
           price:'$45',
           size:['x','xl','m'],
           inStock:['1','2','3','4'],
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg'
        },
        {
           id:"2",
           title:"Lorem ipsum fashion jacket",
           rating:[1,2,3,4,5],
           price:"$45",
           size:['x','xl','m'],
           inStock:false,
           imagebatch:'10%',
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg'
        },
        {
           id:"3",
           title:"Lorem ipsum kids eight",
           rating:[1,2,3,4,5],
           price:"$45",
           size:['x','xl','m'],
           inStock:['1','2','3','4'],
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/23.jpg'
        },
        {
           id:"4",
           title:"Lorem ipsum jacket",
           rating:[1,2,3,4,5],
           size:['x','xl','m'],
           price:"$45",
           inStock:['1','2','3','4'],
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg'
        },
        {
           id:"5",
           title:"Lorem ipsum fashion female top",
           rating:[1,2,3,4,5],
           price:"$30",
           size:['x','xl','m'],
           inStock:['1','2','3','4'],
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/29.jpg'
        },
        {
           id:"6",
           title:"Lorem ipsum kids six",
           rating:[1,2,3,4,5],
           price:"$36",
           size:['x','xl','m'],
           inStock:['1','2','3','4'],
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/5.jpg'
        },
        {
           id:"7",
           title:"Lorem ipsum kids seven",
           rating:[1,2,3,4,5],
           price:"$75.78",
           size:['x','xl','m'],
           inStock:['1','2','3','4'],
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/30.jpg'
        },
        {
           id:"8",
           title:"Lorem ipsum jacket",
           rating:[1,2,3,4,5],
           price:"$34",
           size:['x','xl','m'],
           inStock:['1','2','3','4'],
           img:'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg'
        }
     ];
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: [],
        whillist:[],
    });
    const [whilliststate, dispatchWhillist] = useReducer(whillistReducer, {
        whillist:[],
    });
    return (
        <Cart.Provider value={{state,dispatch,whilliststate,dispatchWhillist}}>
            {children}
        </Cart.Provider>
    )
}
export const CartState = () => {
    return useContext(Cart);
};
export default Context