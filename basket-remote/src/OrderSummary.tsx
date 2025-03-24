import React from 'react';
import './styles/basket.css';

const OrderSummary: React.FC<any> = ({ selectedProducts, addProduct, removeProduct, priceTotal, handleSubmit }) => {





    return (
        <div>
            {selectedProducts?.length === 0 ? (
                <p>No products in the basket</p>
            ) : (
                <div style={{
                    backgroundColor: '#1e1e1e',
                    borderRadius: '10px',
                    padding: '10px',
                }}>
                    <ul
                        style={{
                            listStyleType: 'none',
                            margin: '10px',
                            borderBottom: '1px solid rgba(222, 222, 222, 0.15)'

                        }}>
                        {selectedProducts.map((product: any) => (
                            <li
                                key={product.id}
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                    marginBottom: '10px',
                                    backgroundColor: '#1e1e1e',
                                    color: '#dedede',
                                }}
                            >
                                {/* Solda Resim */}
                                <div style={{ flex: '1', padding: '10px' }}>
                                    <img
                                        alt={product.title}
                                        src={product.image}
                                        style={{
                                            width: '10vw',
                                            height: '100%',
                                            objectFit: 'cover',
                                            scale: '1',
                                            borderRadius: '10px',
                                        }}
                                    />
                                </div>
                                <div style={{
                                    flex: '3', width: '100%', display: 'flex',
                                    alignItems: 'flex-start',
                                    justifyContent: 'space-between',
                                }}>


                                    {/* Sağda Bilgiler */}
                                    <div style={{ padding: '20px 10px' }}>

                                        <h4 style={{ margin: '0 0 20px 0' }}>{product.title}</h4>

                                        <p style={{ margin: '0 0 10px 0' }}>Quantity</p>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'flex-start',
                                            flexWrap: 'wrap',
                                        }}>
                                            <button
                                                onClick={() => addProduct(product)}
                                                className='quantityButton'
                                                style={{ marginRight: '5px' }}
                                            >
                                                +
                                            </button>
                                            <input
                                                type="number"
                                                value={product.quantity}
                                                readOnly
                                                style={{
                                                    width: '50px',
                                                    textAlign: 'center',
                                                    padding: '5px',
                                                    backgroundColor: '#2e2e2e',
                                                    color: '#dedede',
                                                    border: '1px solid #dedede',
                                                    borderRadius: '4px',
                                                }}
                                            />
                                            <button
                                                onClick={() => removeProduct(product.id)}
                                                className='quantityButton'
                                                style={{ marginLeft: '5px' }}
                                            >
                                                -
                                            </button>
                                        </div>
                                    </div>

                                    <div style={{ padding: '20px 10px', textAlign: 'right' }}>
                                        <p style={{ margin: '0 0 5px 0', display: 'flex' }}>
                                            Price:{product.price}
                                            <p style={{ margin: '0 0 5px 5px' }}> &#8378; </p>
                                        </p>

                                    </div>
                                </div>
                            </li>
                        ))}

                    </ul>
                    {/* ara toplam ve maliyetler */}
                    <div
                        style={{
                            padding: '5px',
                            marginBottom: '10px',
                            backgroundColor: '#1e1e1e',
                            color: '#dedede',
                            borderBottom: '1px solid rgba(222, 222, 222, 0.15)'

                        }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <p style={{ margin: '0 0 10px 10px' }}>
                                <strong>Subtotal:</strong>
                            </p>
                            <p style={{ margin: '0 10px 10px 0' }}>
                                {priceTotal.subtotal.toFixed(2)} &#8378;
                            </p>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <p style={{ margin: '0 0 10px 10px' }}>
                                <strong>Discount:</strong>
                            </p>
                            <p style={{ margin: '0 10px 10px 0' }}>
                                {priceTotal.discount.toFixed(2)} &#8378;
                            </p>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <p style={{ margin: '0 0 10px 10px' }}>
                                <strong>Shipping:</strong>
                            </p>
                            <p style={{ margin: '0 10px 10px 0' }}>
                                {priceTotal.shipping.toFixed(2)} &#8378;
                            </p>
                        </div>



                    </div>
                    {/* toplam fiyat*/}
                    <div
                        style={{
                            padding: '5px',
                            marginBottom: '10px',
                            backgroundColor: '#1e1e1e',
                            color: '#dedede',
                        }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <p style={{ margin: '0 0 10px 10px' }}>
                                <strong>Total:</strong>
                            </p>
                            <p style={{ margin: '0 10px 10px 0' }}>
                                {priceTotal.discountedTotal.toFixed(2)} &#8378;
                            </p>
                        </div>
                        <button
                            onClick={handleSubmit}
                            className='submitButton'
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderSummary;