export interface Order {
    id: string;
    name: string;
    createdAt: string;
    status: OrderStatus;
    info: OrderInfo | undefined;
}

export interface OrderInfo {
    id: string;
    address: string;
    cardNumber: string;
    totalSum: number;
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