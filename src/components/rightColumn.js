// RightColumn.js
import React, { useState } from 'react';
import ProductList from './productList'; // Import the new component
import ScreenerList from './screenerList'; // Import the new component
const RightColumn = () => {
 
  return (
<div className="right-column">
<ProductList /> {/* Include the new ScreenerList component */}
<ScreenerList /> {/* Include the new ScreenerList component */}
</div>
  );
};
 
export default RightColumn;