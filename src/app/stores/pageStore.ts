import { makeAutoObservable, runInAction } from "mobx";

export default class PageStore {
    currentPage: string = "Shop";
    orderId: string | null = null;
    
    constructor() {
        makeAutoObservable(this);
    }

    setCurrentPage = (pageName: string) => {
        runInAction(() => this.currentPage = pageName);
    }

    setOrderId = (orderId: string) => {
        runInAction(() => this.orderId = orderId);
    }
}