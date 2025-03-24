import React, { useEffect, useState } from 'react';
import OrderInformation from './OrderInformation';
import OrderSummary from './OrderSummary';
import './styles/basket.css'; // CSS dosyasını ekliyoruz

const Basket: React.FC<any> = ({ selectedProducts, addProduct, removeProduct }) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    district: '',
    phone: '',
    cardnumber:'',
    cardholdername:'',
    cardexpirationdate:'',
    cardcvc:''
  });

  const [priceTotal, setPriceTotal] = useState({
    subtotal: 0,
    discount: 0,
    shipping: 10,
    discountedTotal: 0,
  });

  useEffect(() => {
    const subtotal = selectedProducts.reduce((acc: number, product: any) => {
      return acc + product.price * product.quantity;
    }, 0);

    const discount = subtotal * 0.05;
    const shipping = 10;
    const discountedTotal = subtotal - discount - shipping;

    setPriceTotal({ subtotal, discount, shipping, discountedTotal });
  }, [selectedProducts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', basket);
    alert('Form submitted successfully!');
  };
  const [basket, setBasket] = useState({ formData, selectedProducts, priceTotal });

  useEffect(() => {
    setBasket({ formData, selectedProducts, priceTotal });
  }, [formData, selectedProducts, priceTotal]);


  return (
    <div className="basket-container">
      <div className="basket-section">
        <OrderInformation formData={formData} setFormData={setFormData}  />
      </div>
      <div className="basket-section">
        <OrderSummary 
        selectedProducts={selectedProducts} 
        addProduct={addProduct} 
        removeProduct={removeProduct}
        priceTotal={priceTotal}
        handleSubmit={handleSubmit}
         />
      </div>
    </div>
  );
};

export default Basket;