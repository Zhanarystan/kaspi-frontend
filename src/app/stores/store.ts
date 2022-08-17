import { createContext, useContext } from "react"
import CartStore from "./cartStore";
import { OrderStore } from "./orderStore";
import PageStore from "./pageStore";
import ProductStore from "./productStore"

interface Store {
    productStore: ProductStore;
    cartStore: CartStore;
    orderStore: OrderStore;
    pageStore: PageStore;
}

export const store: Store = {
    productStore: new ProductStore(),
    cartStore: new CartStore(),
    orderStore: new OrderStore(),
    pageStore: new PageStore(),
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}