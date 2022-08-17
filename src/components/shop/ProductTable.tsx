import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useStore } from '../../app/stores/store';

const ProductTable = () => {

    const {productStore, cartStore} = useStore();

    useEffect(() => {
        productStore.getProducts();
    }, [productStore]);

    return (
        <table className="table">
            <thead>
                <th>Фото</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Действия</th>
            </thead>
            <tbody>
                {productStore.productList.map(el => (
                    <tr>
                        <td><img src={el.imageUrl} alt="icon" style={{width: '75px', height: '50px'}} /></td>
                        <td>{el.name}</td>
                        <td>{el.price}</td>
                        <td>
                            <button className='btn-green' onClick={() => cartStore.addProductToCart(el.id)}>+</button>
                            <button className='btn-red' onClick={() => cartStore.removeFromCart(el.id)}>-</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default observer(ProductTable);