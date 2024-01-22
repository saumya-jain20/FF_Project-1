// // LeftColumn.js
// import React from 'react';
// import Home from './home';
// import Save from './save';
// import Liked from './liked';
// import Notification from './notification';
// import Notes from './notes';

// const LeftColumn = () => {
//   return (
//     <div className="left-column">
//       <Home />
//       <Save />
//       <Liked />
//       <Notification />
//       <Notes />
//     </div>
//   );
// };

// export default LeftColumn;


// LeftColumn.js
import React, { useState } from 'react';
import Home from './home';
import Save from './save';
import Liked from './liked';
import Notification from './notification';
import Notes from './notes';

const LeftColumn = () => {
  const [scanResult, setScanResult] = useState(null);

  const handleScanButtonClick = (selectedScreeners) => {
    // Perform the scan logic using the selected screeners
    // This is where you would implement the logic to handle the scan result
    // For now, let's just update the state with a message
    setScanResult(`Scanning with selected screeners: ${selectedScreeners.join(', ')}`);
  };

  return (
    <div className="left-column">
      <Home />
      <Save />
      <Liked />
      <Notification />
      <Notes />
      {scanResult && <p className="scan-result">{scanResult}</p>}

      <button className="scan-button" onClick={() => handleScanButtonClick()}>
        Scan
      </button>
    </div>
  );
};

export default LeftColumn;
