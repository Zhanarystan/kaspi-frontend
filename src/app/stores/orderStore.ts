import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Order, OrderHistory, OrderProduct } from "../models/order";

export class OrderStore {
    currentOrder: Order | null = null;
    order: Order | null = null;
    orders: Order[] = [];
    orderProducts: OrderProduct[] = [];
    orderhistory: OrderHistory[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    getCurrentOrder = async () => {
        try {
            const order = await agent.OrderRequests.current();
            runInAction(() => this.currentOrder = order);
        } catch(error) {
            console.log(error);
        }
    }

    createOrder = async () => {
        try {
            const order = await agent.OrderRequests.create();
            runInAction(() => this.currentOrder = order);
        } catch (error) {
            console.log(error);
        }
    } 

    setCurrentOrderToNull = () => {
        runInAction(() => this.currentOrder = null);
    }

    getOrders = async () => {
        try {
            const orders = await agent.OrderRequests.list();
            runInAction(() => this.orders = orders);
        } catch(error) {
            console.log(error);
        }
    }

    getOrder = async (orderId: string) => {
        try {
            const order = await agent.OrderRequests.get(orderId);
            runInAction(() => this.order = order);
        } catch(error) {
            console.log(error);
        }
    }

    getProducts = async (orderId: string) => {
        try {
            const products = await agent.OrderRequests.getProducts(orderId);
            runInAction(() => this.orderProducts = products);
        } catch(error) {
            console.log(error);
        }
    }

    getHistory = async (orderId: string) => {
        try {
            const history = await agent.OrderRequests.getHistory(orderId);
            runInAction(() => this.orderhistory = history);
        } catch(error) {
            console.log(error);
        }
    }

    complete = async (orderId: string) => {
        try { 
            const order = await agent.OrderRequests.complete(orderId);
            runInAction(() => {
                this.order = order;
            });
        } catch (error) {
            console.log(error);
        }
    }
}