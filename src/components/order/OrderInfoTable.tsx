import React from 'react';
import { Order } from '../../app/models/order';


const order : Order = {
    id: "1",
    name: "ЗАКАЗ-2022-0001",
    createdAt: "16-08-2022",
    status: {
        id: 3,
        name: "Выполнен"
    },
    info: {
        id:"1",
        address: "Zharokova 194",
        cardNumber: "1234 5678 9123 4567",
        totalSum: 600000
    }
};
const OrderInfoTable = () => {
    return (
        <table className=''>
            <tr>
                <td><b>Название:</b></td>
                <td>{order.name}</td>
            </tr>
            <tr>
                <td><b>Создан:</b></td>
                <td>{order.createdAt}</td>
            </tr>
            <tr>
                <td><b>Статус:</b></td>
                <td>{order.status.name}</td>
            </tr>
            <tr>
                <td><b>Адрес:</b></td>
                <td>{order.info?.address}</td>
            </tr>
            <tr>
                <td><b>Номер банковской карты:</b></td>
                <td>{order.info?.cardNumber}</td>
            </tr>
            <tr>
                <td><b>Общая сумма заказа:</b></td>
                <td>{order.info?.totalSum}</td>
            </tr>
        </table>
    )
}

export default OrderInfoTable;