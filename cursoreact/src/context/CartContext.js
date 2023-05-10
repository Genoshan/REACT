import {  createContext, useState, useEffect } from 'react'

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([])    

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !==itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const [total, setTotal] = useState(0);
    useEffect(() => {
        let totalPrice = 0;
        cart.forEach((item) => {
          totalPrice += item.price * item.quantity;
        });
        setTotal(totalPrice);
      }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, total}}>
            { children }
        </CartContext.Provider>
    )
}