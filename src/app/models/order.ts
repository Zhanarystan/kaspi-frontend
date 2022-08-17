import { Product } from "./product";

export interface Order {
    id: string;
    name: string;
    //createdAt: string;
    status: OrderStatus | undefined;
    info: OrderInfo | undefined;
}

export interface OrderInfo {
    id: string;
    address: string;
    cardNumber: string;
    totalSum: number;
}

export interface OrderProduct {
    productId: string;
    product: Product;
    price: number;
    amount: number;
}

export interface CreateOrderInfo {
    address: string;
    cardNumber: string;
    totalCost: number;
    products: OrderProduct[];
}

export interface OrderStatus {
    id: number;
    name: string;
}

export interface OrderHistory {
    id: string;
    createdAt: string;
    status: OrderStatus;
}