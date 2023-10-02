import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <h2>{product.name}</h2>
      <p>Цена: {product.price} руб.</p>
      <p>Количество: {product.count}</p>
    </div>
  );
};

export default ProductItem;


