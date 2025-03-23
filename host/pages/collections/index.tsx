import dynamic from 'next/dynamic';
import React from 'react'
const RemoteCollections = dynamic(() => import('productsRemote/collections'), { ssr: false });

const page = () => {
  return (
    <div>
      <RemoteCollections/>
    </div>
  )
}

export default page
