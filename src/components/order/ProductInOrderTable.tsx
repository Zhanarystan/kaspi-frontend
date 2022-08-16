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
const ProductInOrderTable = () => {
    return (
        <table className="table">
            <thead>
                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
            </thead>
            <tbody>
                {products.map(el => (
                    <tr>
                        <td>{el.name}</td>
                        <td>{el.price}</td>
                        <td>5</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ProductInOrderTable;