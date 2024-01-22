

// // ScreenerList.js
// import React, { useState } from 'react';

// const ScreenerList = () => {
//   const [screeners, setScreeners] = useState([
//     'Screener 1',
//     'Screener 2',
//     'Screener 3',
//     'Screener 4',
//     'Screener 5',
//     'Screener 6',
//     'Screener 7',
//     'Screener 8',
//     'Screener 9',
//     // Add more screeners as needed
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedScreeners, setSelectedScreeners] = useState([]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleScreenerSelect = (screener) => {
//     if (!selectedScreeners.includes(screener)) {
//       setSelectedScreeners([...selectedScreeners, screener]);
//     }
//   };

//   const filteredScreeners = screeners.filter((screener) =>
//     screener.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="screener-container">
//       <div className="screener-list">
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search screeners..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//           />
//         </div>
//         <div className="list">
//           <h3>Screener List</h3>
//           <ul>
//             {filteredScreeners.map((screener, index) => (
//               <li key={index} onClick={() => handleScreenerSelect(screener)}>
//                 {screener}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScreenerList;


// import React, { useState } from 'react';

// const ScreenerList = () => {
//   const [screeners, setScreeners] = useState([
//     'Screener 1',
//     'Screener 2',
//     'Screener 3',
//     'Screener 4',
//     'Screener 5',
//     'Screener 6',
//     'Screener 7',
//     'Screener 8',
//     'Screener 9',
//     // Add more screeners as needed
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedScreeners, setSelectedScreeners] = useState([]);

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleScreenerSelect = (screener) => {
//     if (!selectedScreeners.includes(screener)) {
//       setSelectedScreeners([...selectedScreeners, screener]);
//     }
//   };

//   const filteredScreeners = screeners.filter((screener) =>
//     screener.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="screener-container">
//       <div className="screener-list">
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search screeners..."
//             value={searchTerm}
//             onChange={handleSearchChange}
//           />
//         </div>
//         <div className="list">
//           <h3>Screener List</h3>
//           <ul>
//             {filteredScreeners.map((screener, index) => (
//               <li key={index} onClick={() => handleScreenerSelect(screener)}>
//                 {screener}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScreenerList;

import React, { useState } from 'react';
import SelectedScreeners from './selectedScreeners';

const ScreenerList = () => {
  const [screeners, setScreeners] = useState([
    'Screener 1',
    'Screener 2',
    'Screener 3',
    'Screener 4',
    'Screener 5',
    'Screener 6',
    'Screener 7',
    'Screener 8',
    'Screener 9',
    // Add more screeners as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScreeners, setSelectedScreeners] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleScreenerSelect = (screener) => {
    const isSelected = selectedScreeners.some((selected) => selected === screener);

    if (isSelected) {
      setSelectedScreeners(selectedScreeners.filter((selected) => selected !== screener));
    } else {
      setSelectedScreeners([...selectedScreeners, screener]);
    }
  };

  const filteredScreeners = screeners.filter((screener) =>
    screener.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="screener-container">
      <div className="screener-list">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search screeners..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="list">
          <h3>Screener List</h3>
          <ul>
            {filteredScreeners.map((screener, index) => (
              <li
                key={index}
                onClick={() => handleScreenerSelect(screener)}
                className={selectedScreeners.includes(screener) ? 'selected' : ''}
              >
                {screener}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SelectedScreeners selectedScreeners={selectedScreeners} />
    </div>
  );
};

export default ScreenerList;

