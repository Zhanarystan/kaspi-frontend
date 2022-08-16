import React from 'react';
import { Product } from '../../app/models/product';

const products : Product[] = [
    {
        id: "1",
        name: "IPhone 13",
        price: 600000
    },
    {
        id: "2",
        name: "IPhone 12",
        price: 400000
    }
];

const Checkout = () => {
    return (
        <>
            <h3>Оформление заказа</h3>
            <input type='text' placeholder='Адрес' />
            <input type='text' placeholder='Номер карты' />
            <div className="d-flex mt-1 mb-1">
                <p><b>Итого:</b></p>
                <p>{products[0].price}</p>
            </div>
            <button className='btn-full-width'>Завершить</button>
        </>
    );
}

export default Checkout;