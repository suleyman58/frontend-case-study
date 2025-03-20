import dynamic from 'next/dynamic';
import React from 'react';

const RemoteProducts = dynamic(() => import('productsRemote/products'), { ssr: false });

const Home = () => {
  return (
    <div>
      <h1>Host Application</h1>
      <RemoteProducts />
    </div>
  );
};

export default Home;