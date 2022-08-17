import React from 'react';
import HistoryTable from './HistoryTable';
import OrderInfoTable from './OrderInfoTable';
import ProductInOrderTable from './ProductInOrderTable';

const OrderPage = () => {
    return (
        <>  
            <div className='row ml-2 mr-2 mt-1'>
                <div className="col-4 mr-2">
                    <div className='card'>
                        <div className="card-body">
                            <OrderInfoTable/>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className='mb-1'>
                        <HistoryTable/>
                    </div>
                    <div>
                        <ProductInOrderTable/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderPage;