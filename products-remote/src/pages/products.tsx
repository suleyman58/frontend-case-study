import ProductList from '@/container/dataFetch/productList';
import React, { useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState<any[]>([]);
console.log(products)
  return (
    <div>
      <h1>Products</h1>
      {/* ürünleri çeken bileşeni çağır ,orada stateye atama yapılıyor */}
      <ProductList onProductsFetched={setProducts} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
