import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../app/stores/store';

const Cart = () => {

    const {cartStore} = useStore();

    return (
        <>
            <h3>Корзина</h3>
            <table className='table'>
                <tbody>
                    {cartStore.cartProducts.map(p => (
                        <tr>
                            <td>{p.product.name}</td>
                            <td>{p.amount}</td>
                            <td>{p.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex mt-1 mb-1">
                <p><b>Итого:</b></p>
                <p>{cartStore.totalCost}</p>
            </div>
            <button className='btn-full-width' onClick={() => cartStore.checkout()}>Оплатить</button>
        </>
    );
}

export default observer(Cart);