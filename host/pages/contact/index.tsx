import dynamic from 'next/dynamic';
import React from 'react'
const RemoteContact = dynamic(() => import('productsRemote/contact'), { ssr: false });

const page = () => {
  return (
    <div>
      <RemoteContact/>
    </div>
  )
}

export default page
