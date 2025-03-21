import dynamic from 'next/dynamic';
import React from 'react';

// const RemoteProducts = dynamic(() => import('productsRemote/products'), { ssr: false });
const RemoteBasket = dynamic(() => import('basketRemote/basket'), { ssr: false });

const Home = () => {
  return (
    <div>
      <h1>Host Application</h1>
      {/* <RemoteProducts /> */}
      <RemoteBasket />
    </div>
  );
};

export default Home;