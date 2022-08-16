import React from 'react';
import { Product } from '../../app/models/product';
import Cart from './Cart';
import Checkout from './Checkout';
import ProductTable from './ProductTable';

const ShopPage = () => {
    return (
        <div className="row ml-1 mr-1 mt-1">
            <div className="col-7 mr-1">
                <ProductTable/>
            </div>
            <div className="col-2">
                <div className='card'>
                    <div className="card-body">
                        <Checkout/>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopPage;