import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const RemoteCollectionsDetails = dynamic(() => import('productsRemote/collectionsdetails'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const page = () => {
  // Test amaçlı olarak productId'yi sabit bir değer olarak gönderiyoruz


  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  return (
    <div>
      <RemoteCollectionsDetails categoryName={category} />
    </div>
  );
};

export default page;