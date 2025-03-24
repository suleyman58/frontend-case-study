import React, { useState } from 'react';
import { Space, Input, Button, ConfigProvider, Layout } from 'antd';
import styles from '../../styles/layout.module.css';
import { BugTwoTone, MenuOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';


const { Search } = Input;

const Navbar: React.FC<any> = ({ selectedProducts }) => {
  const [isSearchActive, setIsSearchActive] = useState(false); // State tanımlandı

  const handleSearchClick = () => {
    setIsSearchActive((prevState) => !prevState); // State'i tersine çevir
    console.log('Search icon clicked!'); // Konsola mesaj yazdır
  };

  const totalQuantity = selectedProducts.reduce((acc, product) => acc + product.quantity, 0);
  console.log("navbardaki ürünler", totalQuantity)
  return (
    <Layout
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
            <SearchOutlined style={{ fontSize: '16px', color: 'white', zIndex: '5' }} />
          </Button>

          <div className={`${styles.searchContainer} ${isSearchActive ? styles.show : styles.hide}`}>
            <Space
            >
              <Space.Compact>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        colorPrimary: '#00b96b',
                      },
                      Input: {
                        colorPrimary: '#dedede',
                        colorBgContainer: '#141414',
                        colorText: 'white',
                      }
                    },
                  }}
                >
                  <Search
                    placeholder="search... "
                    allowClear
                  />
                </ConfigProvider>
              </Space.Compact>
            </Space>
          </div>

        </div>

        {/* Orta Menü */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',

          }}>
          <div className={styles.middleMenu} >
            <a href="/products">Products</a>
            <a href="/collections">Collections</a>
          </div>

          <div style={{ marginTop: '-10px' }}>
            <a href="/"><BugTwoTone style={{ fontSize: '25px', paddingTop: '5px' }} /></a>
          </div>

          <div className={styles.middleMenu}>
            <a href="/accessories">Accessories</a>
            <a href="/giftcards">Gift Cards</a>
          </div>

        </div>

        {/* Sağ Menü */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }} >
          <a href="/profile"><UserOutlined style={{ fontSize: '16px' }} /></a>
          <a href="/basket"
            style={{
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <ShoppingCartOutlined style={{ fontSize: '16px',paddingRight:'5px' }} />
            <p style={{marginTop:'-2px'}}>  {totalQuantity}</p>
           
          </a>

        </div>
      </div>

    </Layout>
  );
};

export default Navbar;