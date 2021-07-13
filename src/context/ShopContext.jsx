import { createContext } from "react";

export const ShopContext = createContext();

export const ShopComponentContext = ({children}) => {

    return <ShopContext.Provider>

{children}

    </ShopContext.Provider>
}

