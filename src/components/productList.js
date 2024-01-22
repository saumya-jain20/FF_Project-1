
// import React, { useState } from 'react';

// const ProductList = () => {
//   const [products, setProducts] = useState([
//     'Product 1',
//     'Product 2',
//     'Product 3',
//     'Product 4',
//     'Product 5',
//     'Product 6',
//     'Product 7',
//     'Product 8',
//     'Product 9',
//     // Add more products as needed
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');

//   // For demonstration purposes, assuming prices correspond to each product
//   const [prices, setPrices] = useState([
//     '$100.00',
//     '$150.25',
//     '$175.50',
//     '$120.75',
//     '$190.20',
//     '$160.10',
//     '$110.30',
//     '$185.60',
//     '$195.75',
//     '$105.80',
//     // Add more prices as needed
//   ]);

//   const [selectedProducts, setSelectedProducts] = useState([]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const timeFrames = ['1m', '5m', '1h', '2h', '4h', '1d'];

//   const handleProductSelect = (product) => {
//     if (selectedProducts.includes(product)) {
//       // Remove product if already selected
//       setSelectedProducts(selectedProducts.filter((selected) => selected !== product));
//     } else {
//       // Add product if not selected
//       setSelectedProducts([...selectedProducts, product]);
//     }
//   };

//   const filteredProducts = products
//     .filter((product) =>
//       product.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .map((product, index) => ({
//       name: product,
//       price: prices[index], // Assuming prices are in the same order as products
//     }));

//     return (
//       <div className="product-list">
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//           />
//         </div>
//         <div className="list">
//           <h3>Product List</h3>
//           <ul>
//             {filteredProducts.map((product, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleProductSelect(product)}
//                 className={`product-box ${selectedProducts.includes(product) ? 'selected' : ''}`}
//               >
//                 <div className="product-details">
//                   <div className="product-name">{product.name}</div>
//                 </div>
//                 <div className="additional-details">
//                   <div className="time-frame-dropdown">
//                     <select defaultValue="5m">
//                       {timeFrames.map((timeFrame, idx) => (
//                         <option key={idx} value={timeFrame}>
//                           {timeFrame}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="current-price">{product.price}</div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
// };

// export default ProductList;

import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([
    'Product 1',
    'Product 2',
    'Product 3',
    'Product 4',
    'Product 5',
    'Product 6',
    'Product 7',
    'Product 8',
    'Product 9',
    // Add more products as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // For demonstration purposes, assuming prices correspond to each product
  const [prices, setPrices] = useState([
    '$100.00',
    '$150.25',
    '$175.50',
    '$120.75',
    '$190.20',
    '$160.10',
    '$110.30',
    '$185.60',
    '$195.75',
    '$105.80',
    // Add more prices as needed
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const timeFrames = ['1m', '5m', '1h', '2h', '4h', '1d'];

  const handleProductSelect = (product) => {
    if (selectedProducts.includes(product)) {
      // Remove product if already selected
      setSelectedProducts(selectedProducts.filter((selected) => selected !== product));
    } else {
      // Add product if not selected
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const filteredProducts = products
    .filter((product) =>
      product.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((product, index) => ({
      name: product,
      price: prices[index], // Assuming prices are in the same order as products
    }));

  return (
    <div className="product-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="list">
        <h3>Product List</h3>
        <ul>
          {filteredProducts.map((product, index) => (
            <li key={index} className={`product-box ${selectedProducts.includes(product) ? 'selected' : ''}`}>
              <div className="clickable-container" onClick={() => handleProductSelect(product)}>
                <div className="product-details">
                  <div className="product-name">{product.name}</div>
                </div>
                <div className="additional-details">
                  <div className="time-frame-dropdown">
                    <select defaultValue="5m">
                      {timeFrames.map((timeFrame, idx) => (
                        <option key={idx} value={timeFrame}>
                          {timeFrame}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="current-price">{product.price}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
