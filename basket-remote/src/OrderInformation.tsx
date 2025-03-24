import React from 'react';
import './styles/basket.css';

const OrderInformation: React.FC<any> = ({ formData, setFormData }) => {


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  return (
    <div style={{ padding: '20px', borderRadius: '10px' }}>
      <h3 style={{ marginBottom: '15px' }}>Contact Information</h3>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* Email */}
        <div>
          <label htmlFor="email" className='htmlLabel'>Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className='htmlInput' />
        </div>
        {/* Name */}
        <h3 style={{ marginBottom: '15px' }}>Shipping Information</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
          <div>
            <label htmlFor="firstName" className='htmlLabel' >First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className='htmlInput'
            />
          </div>
          <div>
            <label htmlFor="lastName" className='htmlLabel'>Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className='htmlInput' />
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className='htmlLabel'>Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className='htmlInput' />
        </div>


        {/* City */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
          <div>
            <label htmlFor="city" className='htmlLabel'>City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className='htmlInput' />
          </div>
          <div>
            <label htmlFor="district" className='htmlLabel'>District</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className='htmlInput' />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className='htmlLabel'>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className='htmlInput' />
        </div>
        <h3 style={{ marginBottom: '15px' }}>Payment Details</h3>

          <div>
            <label htmlFor="cardnumber" className='htmlLabel' >Card Number</label>
            <input
              type="number"
              id="cardnumber"
              name="cardnumber"
              value={formData.cardnumber}
              onChange={handleChange}
              required
              className='htmlInput'
            />
          </div>
          <div>
            <label htmlFor="cardholdername" className='htmlLabel' >Card holder name</label>
            <input
              type="text"
              id="cardholdername"
              name="cardholdername"
              value={formData.cardholdername}
              onChange={handleChange}
              required
              className='htmlInput'
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
          <div>
            <label htmlFor="cardexpirationdate" className='htmlLabel' >Expiration Date</label>
            <input
              type="text"
              id="cardexpirationdate"
              name="cardexpirationdate"
              value={formData.cardexpirationdate}
              onChange={handleChange}
              required
              className='htmlInput'
            />
          </div>
          <div>
            <label htmlFor="cardcvc" className='htmlLabel' >CVC</label>
            <input
              type="text"
              id="cardcvc"
              name="cardcvc"
              value={formData.cardcvc}
              onChange={handleChange}
              required
              className='htmlInput'
            />
          </div>
          </div>
   
      </form>
    </div>
  );
};

export default OrderInformation;