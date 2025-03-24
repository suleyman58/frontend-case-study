import store, { RootState } from '@/store';
import { addProduct, removeProduct } from '@/store/slice/basketSlice';
import dynamic from 'next/dynamic';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RemoteBasket = dynamic(() => import('basketRemote/basket'), { ssr: false });

const page = () => {
  const dispatch = useDispatch();

  const selectedProducts = useSelector((state: RootState) => state.basket.products);



  const handleAddProduct = (product: any) => {
    dispatch(addProduct(product));
  };

  const handleRemoveProduct = (productId: string | number) => {
    dispatch(removeProduct(productId));
  };

  return (
    <div>
      <RemoteBasket
        selectedProducts={selectedProducts}
        addProduct={handleAddProduct}
        removeProduct={handleRemoveProduct}
      />
    </div>
  );
};

export default page;