"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const router = useRouter;

    useEffect(() => {
        setCartToState();
    }, []);

    const setCartToState = () => {
        setCart(
            localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart"))
                : []
        );
    };

    const addItemToCart = async ({ id, name, price, image, stock, sellerId, quantity = 1, }) => {
        const item = { id, name, price, image, stock, sellerId, quantity, };

        const isItemExist = cart?.cartItems?.find(
            (i) => i.id === item.id
        );

        let newCartItems;

        if (isItemExist) {
            newCartItems = cart?.cartItems?.map((i) =>
                i.id === isItemExist.id ? item : i
            );
        } else {
            newCartItems = [...(cart?.cartItems || []), item];
        }

        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
        setCartToState();
    };

    const deleteItemFromCart = (id) => {
        const newCartItems = cart?.cartItems?.filter((i) => i.id !== id);

        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
        setCartToState();
    };

    const clearCart = () => {
        localStorage.removeItem("cart");
        setCartToState();
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItemToCart,
                deleteItemFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
