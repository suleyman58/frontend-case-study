import dynamic from 'next/dynamic';
import React, { useState } from 'react';

interface Product {
  id: string; // Ürünün benzersiz kimliği
  title: string; // Ürünün başlığı
  price?: number; // Ürünün fiyatı (opsiyonel)
  description?: string; // Ürünün açıklaması (opsiyonel)
  [key: string]: any; // Diğer dinamik alanlar
}

interface HomeProps {
  products?: Product[]; // Opsiyonel olarak ürün listesi
  onProductSelect?: (product: Product) => void; // Opsiyonel olarak onProductSelect fonksiyonu
}


const RemoteProducts = dynamic(() => import('productsRemote/products'), { ssr: false });
// const RemoteBasket = dynamic(() => import('basketRemote/basket'), { ssr: false });

const Home: React.FC<HomeProps> = () => {

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const handleSelectProduct = (product:Product) => {
    setSelectedProducts((prev) => [...prev, product]);
  };
  return (
    <div>
      <h1>Host Application</h1>
     <RemoteProducts onProductSelect={handleSelectProduct} />
      {/* <RemoteBasket /> */}
    </div>
  );
};

export default Home;