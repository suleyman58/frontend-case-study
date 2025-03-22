import React, { useState } from 'react';
import { Menu, Space, Input, Button } from 'antd';
import styles from '../../styles/layout.module.css';
import { BugTwoTone, MenuOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';


const { Search } = Input;
const Navbar: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(true); // State tanımlandı

  const handleSearchClick = () => {
    setIsSearchActive((prevState) => !prevState); // State'i tersine çevir
    console.log('Search icon clicked!'); // Konsola mesaj yazdır
  };
  console.log(isSearchActive)
  return (
    <Menu
      className={styles.navbar} >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px'
      }}>
        {/* Sol Menü */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }} >
          <a href="/"><MenuOutlined className={styles.menuIcon} /></a>
          <Button onClick={handleSearchClick} type="text">
            <SearchOutlined style={{ fontSize: '16px', color:'white',zIndex:'5' }} />
          </Button>

          <div className={`${styles.searchContainer} ${isSearchActive ? styles.show : styles.hide}`}>
            <Space>
              <Space.Compact>
                <Search placeholder="search... " allowClear />
              </Space.Compact>
            </Space>
          </div>
        </div>

        {/* Orta Menü */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div className={styles.middleMenu} >
            <a href="/products">Products</a>
            <a href="/">Collections</a>
          </div>

          <div style={{ marginTop: '-10px' }}>
            <a href="/products"><BugTwoTone style={{ fontSize: '25px' }} /></a>
          </div>

          <div className={styles.middleMenu}>
            <a href="/">Accessories</a>
            <a href="/">Gift Cards</a>
          </div>

        </div>

        {/* Sağ Menü */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }} >
          <a href="/"><UserOutlined style={{ fontSize: '16px' }} /></a>
          <a href="/"><ShoppingCartOutlined style={{ fontSize: '16px' }} /> 12</a>

        </div>
      </div>

    </Menu>
  );
};

export default Navbar;