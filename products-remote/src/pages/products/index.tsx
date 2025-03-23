import React from 'react';
import { useGetProductsQuery } from '../../container/dataFetch/productApi';
import styles from '../../styles/product.module.css';
import { Card, Row, Col, Button, Rate, Input, Typography, ConfigProvider } from 'antd';

import { Provider } from 'react-redux';
import { store } from '@/container/redux/store';
import Link from 'next/link';

const { Meta } = Card;

const ProductList = (props: any) => {
  const { onProductSelect } = props;
  const { data: products, error, isLoading } = useGetProductsQuery();


  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>
      <Row gutter={[16, 16]}>
        {products?.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8}>
            <Card
              className={styles.productCard}
              cover={
                <Link href={`/products/productdetails?id=${product.id}`}>
                  <div style={{ aspectRatio: '4 / 4' }}>
                    <img alt={product.title} src={product.image} />
                  </div>
                </Link>
              }
            >
              <div>
                <Rate allowHalf disabled defaultValue={product.rating.rate} />
              </div>
              <div>
                <h3>{product.title}</h3>
              </div>
              <div>
                <h3> &#x20BA; {product.price}</h3>
              </div>
              <div>
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
                  <Typography.Title level={5} style={{ color: '#dedede ' }}>
                    Quantity
                  </Typography.Title>
                  <Input maxLength={3} style={{ width: '30%' }} />
                </ConfigProvider>
              </div>
              <Button
                type="text"
                className={styles.addButton}
                onClick={() => onProductSelect(product)}
              >
                Add to card
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

// Redux Provider'ı en üst seviyeye taşıyın
const ProductListPage = (props: any) => (
  <Provider store={store}>
    <ProductList {...props} />
  </Provider>
);

export default ProductListPage;