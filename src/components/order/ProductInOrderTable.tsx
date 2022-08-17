import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../app/stores/store';

const ProductInOrderTable = () => {
    const {orderStore, pageStore} = useStore();

    useEffect(() => {
        let id = pageStore.orderId;
        orderStore.getProducts(id!);
    }, [orderStore, pageStore]);

    return (
        <>
            <h3>Продукты</h3>
            <table className="table">
                <thead>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Количество</th>
                </thead>
                <tbody>
                    {orderStore.orderProducts.map(el => (
                        <tr>
                            <td>{el.product.name}</td>
                            <td>{el.price}</td>
                            <td>{el.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
        
    );
}

export default observer(ProductInOrderTable);