import dynamic from 'next/dynamic';
import React from 'react'
const RemoteAccessories = dynamic(() => import('productsRemote/accessories'), { ssr: false });

const page = () => {
  return (
    <div>
      <RemoteAccessories/>
    </div>
  )
}

export default page
