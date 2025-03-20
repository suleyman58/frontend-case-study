import React, { useEffect, useState } from 'react';

const ProductList = ({ onProductsFetched }: { onProductsFetched: (products: any[]) => void }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    //fetch ile apiden ürünleri al 
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        onProductsFetched(data);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [onProductsFetched]);
//loading ve error durumlarına göre ekrana mesaj yazdır
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return null; 
};

export default ProductList;