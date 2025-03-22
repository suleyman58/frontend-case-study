import React from 'react';

const Footer: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '10px 0', background: '#001529', color: '#fff' }}>
      © {new Date().getFullYear()} Products Remote. All Rights Reserved.
    </div>
  );
};

export default Footer;