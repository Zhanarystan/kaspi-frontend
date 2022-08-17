import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../app/stores/store';
import Cart from './Cart';
import Checkout from './Checkout';
import ProductTable from './ProductTable';

const ShopPage = () => {

    const {orderStore, cartStore}  = useStore();

    useEffect(() => {
        orderStore.getCurrentOrder();
    }, [orderStore]);


    return (
        <div className="row ml-1 mr-1 mt-1">
            <div className="col-6 mr-1">
                <ProductTable/>
            </div>
            <div className="col-3">
                <div className='card'>
                    <div className="card-body">
                        {cartStore.mode === 1 ? <Cart/> : <Checkout/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(ShopPage);