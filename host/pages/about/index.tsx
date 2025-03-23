import dynamic from 'next/dynamic';
import React from 'react'
const RemoteAbout = dynamic(() => import('productsRemote/about'), { ssr: false });

const page = () => {
  return (
    <div>
      <RemoteAbout/>
    </div>
  )
}

export default page
