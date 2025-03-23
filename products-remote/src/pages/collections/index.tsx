import React from 'react';
import { useGetProductsQuery } from '../../container/dataFetch/productApi';
import styles from '../../styles/collections.module.css';
import { Typography } from 'antd';
import { store } from '@/container/redux/store';
import { Provider } from 'react-redux';


const CollectionsListPage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  // tekrar eden kategorileri kaldır
  const uniqueCategories = Array.from(new Set(products?.map((product: any) => product.category)));

  // Kategori adlarına göre fotoğraf eşleştirme
  const categoryImages: { [key: string]: string } = {
    "men's clothing": '/images/mensclothes.png',
    jewelery: '/images/jewelery.png',
    electronics: 'images/electronics.png',
    "women's clothing": 'images/womensclothes.png',
  };
  return (
    <div style={{ padding: '20px', color: '#dedede' }}>
      <Typography.Title level={2} style={{ color: '#dedede', padding: '10px 20px' }}>
        Shop by Collection
      </Typography.Title>
      <Typography.Paragraph style={{ color: 'rgb(165 165 165)', padding: '10px 20px' }}>
        Discover a carefully curated selection of unique and stylish products, From trendy fashion pieces to timeless home decor, our collections offer a wide range of items that are handpicked to suit your taste and style              </Typography.Paragraph>
      <ul className={styles.categoryList}>
        {uniqueCategories.map((category, index) => (
         
          <div key={index} className={styles.categoryItem}
             onClick={() => window.location.href = `/collections/collectiondetails?category=${category}`}>
           
             
              {/* Kategori Fotoğrafı */}
              <img
                src={categoryImages[category]} // Fotoğrafı kategoriye göre eşleştir
                alt={category}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '5px',
                  objectFit: 'cover',
                  scale: '1',
                }}
              />
              {/* Kategori Adı */}
              <div style={{ padding: '10px' }}>
                <Typography.Title level={4} style={{ color: 'rgb(201 201 201)' }}>
                  {category}
                </Typography.Title>
                <Typography.Paragraph style={{ color: 'rgb(165 165 165)' }}>
                  This category includes <strong style={{ fontWeight: 'bolder' }}> {category}</strong> products. You can examine our category in detail to buy the best quality
                  products at the cheapest price. Have fun shopping.
                </Typography.Paragraph>
              </div>
          </div>
         
        ))}
      </ul>
    </div>
  );
};


const CollectionsPage = (props: any) => (
  <Provider store={store}>
    <CollectionsListPage {...props} />
  </Provider>
);

export default CollectionsPage;



