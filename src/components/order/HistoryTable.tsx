import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../app/stores/store';

const HistoryTable = () => {

    const {orderStore, pageStore} = useStore();

    useEffect(() => {
        let id = pageStore.orderId;
        orderStore.getHistory(id!);
    }, [orderStore]);

    return (
        <>
            <h3>История</h3>
            <table className='table'>
                <thead>
                    <th>Статус</th>
                    <th>Время изменений</th>
                </thead>
                <tbody>
                    {orderStore.orderhistory.map(el => (
                        <tr>
                            <td>{el.status.name}</td>
                            <td>{el.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default observer(HistoryTable);