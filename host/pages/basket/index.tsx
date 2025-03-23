import dynamic from 'next/dynamic';
import React from 'react'
const RemoteBasket = dynamic(() => import('productsRemote/basket'), { ssr: false });

const page = () => {
  return (
    <div>
      <RemoteBasket/>
    </div>
  )
}

export default page
