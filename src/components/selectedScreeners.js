// SelectedScreeners.js
import React from 'react';
 
const SelectedScreeners = ({ selectedScreeners }) => {
  return (
    <div className="selected-screeners">
      <h3>Selected Screeners</h3>
      <div className="selected-screener-list">
        {selectedScreeners.map((screener, index) => (
          <div key={index} className="selected-screener">
            <span>{screener}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedScreeners;