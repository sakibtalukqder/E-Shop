import { CartProvider } from "@/Context/CartContex";

const GlobalProvider = ({ children }) => {
    return (
        <CartProvider>{children}</CartProvider>
    );
};

export default GlobalProvider;