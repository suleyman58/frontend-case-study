import React from 'react';
import { useGetProductsQuery } from '../../../container/dataFetch/productApi';
import { Button, Card, ConfigProvider, Input, Rate, Typography } from 'antd';
import styles from '../../../styles/product.module.css';
import { Provider } from 'react-redux';
import { store } from '@/container/redux/store';


const ProductDetailPage = (props: any) => {
  const { addToBasket,productId } = props;

  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading product details</p>;

  // İlgili ürünü bul
  const product = products?.find((p: any) => p.id === Number(productId));

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', color: '#dedede' }}>
      <div style={{ flex: '1', padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
          <Rate allowHalf disabled defaultValue={product.rating.rate} />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Typography.Title level={3} style={{ color: '#dedede' }}>{product.title}</Typography.Title>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Typography.Title level={4} style={{ color: '#dedede' }}>&#x20BA; {product.price}</Typography.Title>
        </div>
        <div style={{ marginBottom: '20px' }}>
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
                },
              },
            }}
          >
            <Typography.Title level={5} style={{ color: '#dedede ' }}>Quantity</Typography.Title>
            <Input maxLength={3} style={{ width: '30%' }} />
          </ConfigProvider>
        </div>
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" className={styles.productDetailBuyButton}>Buy it now</Button>
          <Button type="text" className={styles.productDetailBuyButton}    onClick={() => addToBasket(product)}>Add to card</Button>
        </div>
        <div style={{ marginBottom: '5px' }}>
          <Typography.Title level={3} style={{ color: '#dedede' }}>Description</Typography.Title>
        </div>
        <Typography.Paragraph style={{ color: '#dedede' }}>{product.description}</Typography.Paragraph>
        <div style={{ display: 'flex', justifyContent: 'start', marginTop: '10px' }}>
          <h5 style={{ marginRight: '10px' }}>category:</h5>
          <a href={`/collections/collectiondetails?category=${product.category}`} className={styles.categoryATag}>{product.category}</a>
        </div>
      </div>
      <div style={{ flex: '1', padding: '20px' }}>
        <Card
          cover={
            <img
              alt={product.title}
              src={product.image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                scale: '0.8',
              }}
            />
          }
        />
      </div>
    </div>
  );
};

const ProductDetail = (props: any) => (
  <Provider store={store}>
    <ProductDetailPage {...props} />
  </Provider>
);

export default ProductDetail;