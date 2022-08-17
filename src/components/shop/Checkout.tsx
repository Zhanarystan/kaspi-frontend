import React, { useState } from 'react';
import { CreateOrderInfo } from '../../app/models/order';
import { useStore } from '../../app/stores/store';

const Checkout = () => {

    const {cartStore} = useStore();
    const [address, setAddress] = useState<string>("");
    const [cardNumber, setCardNumber] = useState<string>("");

    const submit = async () => {
        const info : CreateOrderInfo = {
            address,
            cardNumber,
            totalCost: 0,
            products: []
        };
        await cartStore.pay(info);
    }

    return (
        <>
            <h3>Оформление заказа</h3>
            <input type='text' placeholder='Адрес' onChange={(e) => setAddress(e.target.value)} />
            <input type='text' placeholder='Номер карты' onChange={(e) => setCardNumber(e.target.value)} />
            <div className="d-flex mt-1 mb-1">
                <p><b>Итого:</b></p>
                <p>{cartStore.totalCost}</p>
            </div>
            <button className='btn-full-width' onClick={async () => await submit()}>Завершить</button>
        </>
    );
}

export default Checkout;