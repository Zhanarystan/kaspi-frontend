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

const Cart = () => {
    return (
        <>
            <h3>Корзина</h3>
            <table className='table'>
                <tbody>
                    {products.map(p => (
                        <tr>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex mt-1 mb-1">
                <p><b>Итого:</b></p>
                <p>{products[0].price}</p>
            </div>
            <button className='btn-full-width'>Оплатить</button>
        </>
    );
}

export default Cart;