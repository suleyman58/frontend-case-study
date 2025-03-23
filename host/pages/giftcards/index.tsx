import dynamic from 'next/dynamic';
import React from 'react'
const RemoteGiftcards = dynamic(() => import('productsRemote/giftcards'), { ssr: false });

const page = () => {
  return (
    <div>
      <RemoteGiftcards/>
    </div>
  )
}

export default page
