import axios, { AxiosResponse } from "axios";
import { CreateOrderInfo, Order, OrderHistory, OrderProduct } from "../models/order";
import { Product } from "../models/product";


axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = <T>(response: AxiosResponse) => response.data;

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody)
}

const ProductRequests = {
    list: () => requests.get<Product[]>('/product'),
}

const CartRequests = {
    pay: (info: CreateOrderInfo) => requests.post<Order>('/order/pay', info),
}

const OrderRequests = {
    list: () => requests.get<Order[]>('/order'),
    current: () => requests.get<Order>('/order/current'),
    get: (orderId: string) => requests.get<Order>(`/order/${orderId}`),
    getProducts: (orderId: string) => requests.get<OrderProduct[]>(`/order/${orderId}/products`),
    getHistory: (orderId: string) => requests.get<OrderHistory[]>(`/order/${orderId}/history`),
    complete: (orderId: string) => requests.post<Order>(`/order/${orderId}/complete`, {}),
    create: () => requests.post('/order', {}),
}

const agent = {
    ProductRequests,
    CartRequests,
    OrderRequests,
}

export default agent;
