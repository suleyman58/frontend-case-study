import { LinkedinFilled, MailFilled, MailOutlined } from '@ant-design/icons'
import React from 'react'

const page = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - 200px)', padding: '20px' }}>
      <div style={{ display:'flex',gap: '10px'}}>
        To contact me;
        <a href="https://www.linkedin.com/in/suleymancakmak58/">
          <LinkedinFilled style={{ fontSize: '24px'}} />
        </a>
        <a href="mailto:suleymancakmak58@gmail.com">
          <MailOutlined style={{ fontSize: '24px'}}/>
        </a>
      </div>

      <div>
        <span>My email address for manual mail: cakmak.5897@gmail.com</span>
      </div>

    </div>
  )
}

export default page
