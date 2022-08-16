import React from 'react';
import { Order, OrderStatus } from '../../app/models/order';

const orderStatuses : OrderStatus[] = [
    {
        id: 1,
        name: "Формируется"
    },
    {
        id: 2,
        name: "Оплачен"
    },
    {
        id: 3,
        name: "Выполнен"
    }
];

const orders : Order[] = [
    {
        id: "1",
        name: "ЗАКАЗ-2022-0001",
        createdAt: "16-08-2022",
        status: orderStatuses[2],
        info: undefined,
    },
    {
        id: "2",
        name: "ЗАКАЗ-2022-0002",
        createdAt: "15-08-2022",
        status: orderStatuses[2],
        info: undefined,
    },
    {
        id: "3",
        name: "ЗАКАЗ-2022-0003",
        createdAt: "16-08-2022",
        status: orderStatuses[1],
        info: undefined,
    },
    {
        id: "4",
        name: "ЗАКАЗ-2022-0004",
        createdAt: "16-08-2022",
        status: orderStatuses[0],
        info: undefined,
    }
]

const OrderTable = () => {
    return (
        <table className="table">
            <thead>
                <th>ID</th>
                <th>Название</th>
                <th>Создан</th>
                <th>Статус</th>
                <th>Действия</th>
            </thead>
            <tbody>
                {orders.map(el => (
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.createdAt}</td>
                        <td>{el.status.name}</td>
                        <td>
                            <button className='btn-green'>Детали</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default OrderTable;