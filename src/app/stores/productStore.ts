import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Product } from "../models/product";

export default class ProductStore {
    productList: Product[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    getProducts = async () => {
        try {
            const productList = await agent.ProductRequests.list();
            runInAction(() => this.productList = productList);
        } catch (error) {
            console.log(error);
        }
    }

    getProduct = (id: string) => {
        return this.productList.find(p => p.id === id);
    }
}