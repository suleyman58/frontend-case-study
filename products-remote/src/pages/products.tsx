import React from 'react';
import { useGetProductsQuery } from '../container/dataFetch/productApi';
import styles from '../styles/product.module.css';
import { Provider } from 'react-redux';
import { store } from '@/container/redux/store';
import { Card, Row, Col, Button, Rate, Input, Typography } from 'antd';


const { Meta } = Card;

const ProductList = (props: any) => {
  const { onProductSelect } = props;
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;
  console.log(products)
  return (
    <div style={{ padding: '20px' }}>
      <h2>Product List</h2>
      <Row gutter={[16, 16]}>
        {products?.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} >
            <Card
              className={styles.productCard}
              cover={
                <div style={{ aspectRatio: '4 / 4' }}>
                  <img

                    alt={product.title}
                    src={product.image}
                  />
                </div>
              }>
              <div>
                <Rate
                  allowHalf
                  disabled
                  defaultValue={product.rating.rate} // Rating değeri yıldızlarla gösteriliyor
                // Yıldızların boyutu ve rengi
                />
              </div>
              <div>
                <h3>{product.title}</h3>
              </div>
              <div>
                <h3> &#x20BA; {product.price}</h3>
              </div>
              <div>
                <Typography.Title level={5} style={{ color: '#dedede ' }}>Quantity</Typography.Title>
                <Input
                  placeholder="Input a number"
                  maxLength={3}
                  style={{ width: '30%' }}
                />
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
    </div >
  );
};

const ProductListWithProvider = (props: any) => (
  <Provider store={store}>
    <ProductList {...props} />
  </Provider>
);

export default ProductListWithProvider;