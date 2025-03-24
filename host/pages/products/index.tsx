import store from '@/store';
import { addProduct } from '@/store/slice/basketSlice';
import dynamic from 'next/dynamic';
import React from 'react'
import { useDispatch } from 'react-redux';
const RemoteProducts = dynamic(() => import('productsRemote/products'), { ssr: false });

const page = () => {
  const dispatch = useDispatch();

  // Sepete ürün eklemek için bir fonksiyon
  const addToBasket = (product: any) => {
    console.log("Adding product to basket:", product); // Ürünü kontrol et
    dispatch(addProduct(product)); // Redux state'e ürünü ekle
    console.log("Current Redux state:", store.getState().basket.products); // Redux state'i kontrol et
  };
  return (
    <div>
      <RemoteProducts addToBasket={addToBasket} />
    </div>
  )
}

export default page
