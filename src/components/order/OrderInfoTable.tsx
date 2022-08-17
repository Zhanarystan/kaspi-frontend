import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Statuses } from '../../app/models/enum';
import { useStore } from '../../app/stores/store';


const OrderInfoTable = () => {

    const {orderStore, pageStore} = useStore();

    useEffect(() => {
        let id = pageStore.orderId;
        orderStore.getOrder(id!);
    }, [orderStore, pageStore]);

    if(orderStore.order === null) return <></>;
    return (
        <>
            <h3>Информация</h3>
            <table className=''>
                <tr>
                    <td><b>Название:</b></td>
                    <td>{orderStore.order!.name}</td>
                </tr>
                <tr>
                    <td><b>Статус:</b></td>
                    <td>{orderStore.order!.status?.name}</td>
                </tr>
                <tr>
                    <td><b>Адрес:</b></td>
                    <td>{orderStore.order!.info?.address || ""}</td>
                </tr>
                <tr>
                    <td><b>Номер банковской карты:</b></td>
                    <td>{orderStore.order!.info?.cardNumber || ""}</td>
                </tr>
                <tr>
                    <td><b>Общая сумма заказа:</b></td>
                    <td>{orderStore.order!.info?.totalSum || ""}</td>
                </tr>
            </table>
            { orderStore.order?.status?.id === Statuses.Paid ? 
                <button className='btn-green mt-2' onClick={() => orderStore.complete(pageStore.orderId!)}>Выполнить</button> : "" }   
        </>
    );
}

export default observer(OrderInfoTable);