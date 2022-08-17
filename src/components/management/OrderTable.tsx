import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../app/stores/store';

const OrderTable = () => {
    const {orderStore, pageStore} = useStore();

    useEffect(() => {
        orderStore.getOrders();
    }, [orderStore]);

    const openOrderPage = (orderId: string) => {
        pageStore.setOrderId(orderId);
        pageStore.setCurrentPage('Order');
    }

    return (
        <table className="table">
            <thead>
                <th>ID</th>
                <th>Название</th>
                <th>Статус</th>
                <th>Действия</th>
            </thead>
            <tbody>
                {orderStore.orders.map(el => (
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        
                        <td>{el.status?.name}</td>
                        <td>
                            <button className='btn-green' onClick={() => openOrderPage(el.id)}>Детали</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default observer(OrderTable);