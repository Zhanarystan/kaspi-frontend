import React from 'react';
import { Order, OrderHistory, OrderStatus } from '../../app/models/order';

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

const history : OrderHistory[] = [
    {
        id: "1",
        createdAt: "15-08-2022",
        status: orderStatuses[2],
    },
    {
        id: "2",
        createdAt: "15-08-2022",
        status: orderStatuses[1],
    },
    {
        id: "3",
        createdAt: "15-08-2022",
        status: orderStatuses[0],
    }
]

const HistoryTable = () => {
    return (
        <table className='table'>
            <thead>
                <th>ID</th>
                <th>Время изменений</th>
                <th>Статус</th>
            </thead>
            <tbody>
                {history.map(el => (
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.createdAt}</td>
                        <td>{el.status.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default HistoryTable;