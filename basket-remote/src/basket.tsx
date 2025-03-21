
// import React from 'react';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// interface BasketProps {
//   selectedProducts: Product[];
// }

// const Basket: React.FC<BasketProps> = ({ selectedProducts }) => {
//   return (
//     <div>
//       <h1>Basket</h1>
//       {selectedProducts.length === 0 ? (
//         <p>No products in the basket</p>
//       ) : (
//         <ul>
//           {selectedProducts.map((product) => (
//             <li key={product.id}>
//               {product.name} - ${product.price}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Basket;
import React from 'react';

const Basket: React.FC = () => {
  return (
    <div>
      <h1>Basket Module</h1>
      <p>burası basketRemote.</p>
    </div>
  );
};

export default Basket;