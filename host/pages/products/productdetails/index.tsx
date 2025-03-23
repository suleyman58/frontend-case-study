import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const RemoteProductsDetails = dynamic(() => import('productsRemote/productsdetails'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const ProductDetail = () => {
  // Test amaçlı olarak productId'yi sabit bir değer olarak gönderiyoruz


  const searchParams = useSearchParams();
  const productId = searchParams.get('id');
  return (
    <div>
      <RemoteProductsDetails productId={productId} />
    </div>
  );
};

export default ProductDetail;