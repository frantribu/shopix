import { createContext, useState } from "react";

export const CartContext = createContext({
    product: [],
    total: 0,

});

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState({
        product: [],
        total: 0,
    })

    return (
        //@ts-ignore
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}