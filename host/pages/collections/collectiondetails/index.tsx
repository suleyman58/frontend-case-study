import { addProduct } from '@/store/slice/basketSlice';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const RemoteCollectionsDetails = dynamic(() => import('productsRemote/collectionsdetails'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const page = () => {
  // Test amaçlı olarak productId'yi sabit bir değer olarak gönderiyoruz
  const dispatch = useDispatch();

  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const addToBasket = (product: any) => {
    console.log("Adding product to basket:", product); // Ürünü kontrol et
    dispatch(addProduct(product)); // Redux state'e ürünü ekle

  };
  return (
    <div>
      <RemoteCollectionsDetails categoryName={category} addToBasket={addToBasket} />
    </div>
  );
};

export default page;