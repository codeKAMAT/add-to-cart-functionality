 import React, {createContext, useReducer} from 'react'
 import {products} from './products'
 import ContextCart from './ContextCart';
 import "./cart.css"
 import {reducer} from './reducer'

 export const CartContext = createContext();

 const initialState = {
     item: products,
     totalAmount: 0,
     totalItem: 0,
 }

 const Cart = () => {
     const [state, dispatch] = useReducer(reducer, initialState)

    //  to delete the indivitual elements from an Item Cart
    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        })
    }

    // clear the cart 
    const clearCart = () => {
        return dispatch({ type: "CLEAR_CART" });
    }

    // increment the item 
    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
        })
    }
     return (
         <CartContext.Provider value={{...state, removeItem, clearCart, increment }}>
           <ContextCart/>
         </CartContext.Provider>
            
     )
 }
 
 export default Cart
      