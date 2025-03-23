import React from 'react';
import { useGetProductsQuery } from '../../../container/dataFetch/productApi';
import { Card, Typography, Row, Col, Rate, ConfigProvider, Input, Button } from 'antd';
import { useSearchParams } from 'next/navigation';
import styles from '../../../styles/product.module.css';
import Link from 'next/link';
import { store } from '@/container/redux/store';
import { Provider } from 'react-redux';

const CollectionDetailPage = ({ categoryName }: { categoryName: string }) => {

  const { data: products, isLoading, error } = useGetProductsQuery();
console.log("categoryName",categoryName)
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  // Kategoriye göre ürünleri filtrele
  const filteredProducts = products?.filter((product: any) => product.category === categoryName);

  return (
    <div style={{ padding: '20px', color: '#dedede' }}>
      <Typography.Title level={2} style={{ color: '#dedede', padding: '10px 20px' }}>
        {categoryName} Products
      </Typography.Title>

      <Row gutter={[16, 16]}>
        {filteredProducts?.map((product: any) => (
          <Col key={product.id} xs={24} sm={12} md={8} >
            <Card
              className={styles.productCard}
              cover={
                <Link href={`/products/productdetails?id=${product.id}`}>
                  <div style={{ aspectRatio: '4 / 4', cursor: 'pointer' }}>
                    <img alt={product.title} src={product.image} />
                  </div>
                </Link>
              }
            >
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
                  <Typography.Title level={5} style={{ color: '#dedede ' }}>Quantity</Typography.Title>
                  <Input
                    maxLength={3}
                    style={{ width: '30%' }}
                  />
                </ConfigProvider>
              </div>

              <Button
                type="text"
                className={styles.addButton}
              // onClick={() => onProductSelect(product)}
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


const CollectionDetails = (props: any) => (
  <Provider store={store}>
    <CollectionDetailPage {...props} />
  </Provider>
);

export default CollectionDetails;
