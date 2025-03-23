import dynamic from 'next/dynamic';
import React from 'react'
const RemoteProducts = dynamic(() => import('productsRemote/products'), { ssr: false });

const page = () => {
  return (
    <div>
      <RemoteProducts/>
    </div>
  )
}

export default page
