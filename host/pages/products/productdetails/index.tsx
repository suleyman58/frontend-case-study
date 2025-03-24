import store from '@/store';
import { addProduct } from '@/store/slice/basketSlice';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const RemoteProductsDetails = dynamic(() => import('productsRemote/productsdetails'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ProductDetail = () => {
  // Test amaçlı olarak productId'yi sabit bir değer olarak gönderiyoruz
  const dispatch = useDispatch();

  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  const addToBasket = (product: any) => {
    console.log("Adding product to basket:", product); // Ürünü kontrol et
    dispatch(addProduct(product)); // Redux state'e ürünü ekle

  };

  return (
    <div>
      <RemoteProductsDetails productId={productId} addToBasket={addToBasket} />
    </div>
  );
};

export default ProductDetail;