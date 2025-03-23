import dynamic from 'next/dynamic';
import React from 'react'
const RemoteProfile = dynamic(() => import('productsRemote/profile'), { ssr: false });

const page = () => {
  return (
    <div>
      <RemoteProfile/>
    </div>
  )
}

export default page
