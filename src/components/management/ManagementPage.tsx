import React from 'react';
import { Order, OrderStatus } from '../../app/models/order';
import OrderTable from './OrderTable';

const ManagementPage = () => {
    return (
        <div className='row ml-2 mr-2 mt-1'>
            <OrderTable/>
        </div>
    );
}

export default ManagementPage;