import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { CreateOrderInfo, OrderProduct } from "../models/order";
import { store } from "./store";

export default class CartStore {
    totalCost: number = 0;
    cartProducts: OrderProduct[] = [];
    mode: number = 1;
    
    constructor() {
        makeAutoObservable(this);
    }

    addProductToCart = async (id: string) => {
        if(this.mode === 2) return;

        let order = store.orderStore.currentOrder;

        if(!order) {
            await store.orderStore.getCurrentOrder();
            if(!store.orderStore.currentOrder) {
                await store.orderStore.createOrder();
            }
        }
        
        let index = this.cartProducts.findIndex(i => i.productId === id);

        const product = store.productStore.getProduct(id);

        if(!product) return;

        if(index === -1) {
            const newCartProduct : OrderProduct = {
                productId: product.id,
                amount: 1,
                price: product.price,
                product: product
            };

            this.cartProducts.push(newCartProduct);
            this.updateTotalCost();
            return;
        }

        this.cartProducts[index].amount += 1;
        this.cartProducts[index].price += product.price;

        this.updateTotalCost();
    }

    removeFromCart = (id: string) => {

        if(this.mode === 2) return;

        let index = this.cartProducts.findIndex(i => i.productId === id);

        const product = store.productStore.getProduct(id);

        if(!product) return;

        if(index === -1) return;

        if(this.cartProducts[index].amount === 1) {
            this.cartProducts.splice(index, 1);
            this.updateTotalCost();
            return;
        }

        this.cartProducts[index].amount -= 1;
        this.cartProducts[index].price -= product.price;
        this.updateTotalCost();
    }

    updateTotalCost = () => {
        let initialValue = 0;
        let productsSum = +this.cartProducts.reduce(function(accumulator, curValue) {
            return accumulator + curValue.price
        }, initialValue);
        this.totalCost = productsSum;
    }

    checkout = async () => {
        let order = store.orderStore.currentOrder;
        if(this.cartProducts.length === 0) {
            alert("Пожалуйста, добавьте товары!");
            return;
        } 
        if(!order) {
            alert("Заказа не существует!");
            return;
        }
        this.mode = 2;
    }

    pay = async (info: CreateOrderInfo) => {
        try {
            info.products = this.cartProducts;
            info.totalCost = this.totalCost;
            console.log(info);
            await agent.CartRequests.pay(info)
                .then(res => {
                    console.log(res);
                    store.orderStore.setCurrentOrderToNull();
                });
            runInAction(() => {
                this.mode = 1;
                this.totalCost = 0;
                this.cartProducts = [];
            });
        } catch (error) {
            console.log(error);
        }
    }
}