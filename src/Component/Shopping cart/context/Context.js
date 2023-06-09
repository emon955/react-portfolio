import React, { createContext, useReducer, useContext } from 'react'
import { cartReducer } from "./Reducer";
import { whillistReducer } from "./Reducer";
export const Cart = createContext();
const Context = ({ children }) => {
   const products = [
      {
         id: "1",
         title: "Lorem ipsum fashion female top",
         desc: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
         rating: [1, 2, 3],
         price: '$45.25',
         size: ['x', 'xl', 'm'],
         inStock: ['1', '2', '3', '4'],
         category:"fashion",
         productslideImage: [
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/8.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg',
         ],
         img: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg',
         description_review_topbar: [
            'Additional Information',
            'Description',
            'Reviews(2)'
         ],
         description_review_item: [
            {
               "item": "Item 1",
               "Weight": " 400 g",
               "Dimensions": "Dimensions:  10 x 10 x 15 cm",
            },
            {
               "item2": "Item 2",
            },
            {
               "item3": "Item 3",
            }
         ],
      },
      {
         id: "2",
         title: "Lorem ipsum fashion jacket",
         rating: [1, 2, 3, 4, 5],
         price: "$34.56",
         size: ['x', 'xl', 'm'],
         inStock: false,
         imagebatch: '10%',
         category:"fashion",
         img: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg',
         productslideImage: [
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/8.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg',
         ],
         description_review_topbar: [
            'Additional Information',
            'Description',
            'Reviews(2)'
         ],
         description_review_item: [
            {
               "item": "Item 1",
               "Weight": " 400 g",
               "Dimensions": "Dimensions:  10 x 10 x 15 cm",
            },
            {
               "item2": "Item 2",
            },
            {
               "item3": "Item 3",
            }
         ],

      },
      {
         id: "3",
         title: "Lorem ipsum kids eight",
         rating: [1, 2, 3, 4, 5],
         price: "$59.00",
         size: ['x', 'xl', 'm'],
         inStock: ['1', '2', '3', '4'],
         category:"men",
         img: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/23.jpg',
         productslideImage: [
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/8.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg',
         ],
         description_review_topbar: [
            'Additional Information',
            'Description',
            'Reviews(2)'
         ],
         description_review_item: [
            {
               "item": "Item 1",
               "Weight": " 400 g",
               "Dimensions": "Dimensions:  10 x 10 x 15 cm",
            },
            {
               "item2": "Item 2",
            },
            {
               "item3": "Item 3",
            }
         ],

      },
      {
         id: "4",
         title: "Lorem ipsum jacket",
         rating: [1, 2, 3, 4, 5],
         size: ['x', 'xl', 'm'],
         price: "$100.12",
         inStock: ['1', '2', '3', '4'],
         category:"fashion",
         img: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg',
         productslideImage: [
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/8.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg',
         ],
         description_review_topbar: [
            'Additional Information',
            'Description',
            'Reviews(2)'
         ],
         description_review_item: [
            {
               "item": "Item 1",
               "Weight": " 400 g",
               "Dimensions": "Dimensions:  10 x 10 x 15 cm",
            },
            {
               "item2": "Item 2",
            },
            {
               "item3": "Item 3",
            }
         ],

      },
      {
         id: "5",
         title: "Lorem ipsum fashion female top",
         rating: [1, 2, 3, 4, 5],
         price: "$13.49",
         size: ['x', 'xl', 'm'],
         inStock: ['1', '2', '3', '4'],
         category:"fashion",
         img: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/29.jpg',
         productslideImage: [
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/8.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg',
         ],
         description_review_topbar: [
            'Additional Information',
            'Description',
            'Reviews(2)'
         ],
         description_review_item: [
            {
               "item": "Item 1",
               "Weight": " 400 g",
               "Dimensions": "Dimensions:  10 x 10 x 15 cm",
            },
            {
               "item2": "Item 2",
            },
            {
               "item3": "Item 3",
            }
         ],

      },
      {
         id: "6",
         title: "Lorem ipsum kids six",
         rating: [1, 2, 3, 4, 5],
         price: "$36.70",
         size: ['x', 'xl', 'm'],
         inStock: ['1', '2', '3', '4'],
         category:"fashion",
         img: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/5.jpg',
         productslideImage: [
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/8.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg',
         ],
         description_review_topbar: [
            'Additional Information',
            'Description',
            'Reviews(2)'
         ],
         description_review_item: [
            {
               "item": "Item 1",
               "Weight": " 400 g",
               "Dimensions": "Dimensions:  10 x 10 x 15 cm",
            },
            {
               "item2": "Item 2",
            },
            {
               "item3": "Item 3",
            }
         ],

      },
      {
         id: "7",
         title: "Lorem ipsum kids seven",
         rating: [1, 2, 3, 4, 5],
         price: "$22.78",
         size: ['x', 'xl', 'm'],
         inStock: ['1', '2', '3', '4'],
         category:"all",
         img: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/30.jpg',
         productslideImage: [
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/8.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg',
         ],
         description_review_topbar: [
            'Additional Information',
            'Description',
            'Reviews(2)'
         ],
         description_review_item: [
            {
               "item": "Item 1",
               "Weight": " 400 g",
               "Dimensions": "Dimensions:  10 x 10 x 15 cm",
            },
            {
               "item2": "Item 2",
            },
            {
               "item3": "Item 3",
            }
         ],

      },
      {
         id: "8",
         title: "Lorem ipsum jacket",
         rating: [1, 2, 3, 4, 5],
         price: "$89.32",
         size: ['x', 'xl', 'm'],
         inStock: ['1', '2', '3', '4'],
         category:"all",
         img: 'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg',
         productslideImage: [
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/8.jpg',
            'https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg',
         ],
         description_review_topbar: [
            'Additional Information',
            'Description',
            'Reviews(2)'
         ],
         description_review_item: [
            {
               "item": "Item 1",
               "Weight": " 300 g",
               "Dimensions": "Dimensions:  10 x 10 x 15 cm",
            },
            {
               "item2": "Item 2",
            },
            {
               "item3": "Item 3",
            }
         ],

      }
   ];
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