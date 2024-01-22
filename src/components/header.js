import React from 'react';

const Header = () => {
  return (
    <div className="header">
      {/* Company Logo on the left */}
      <div className="logo">
        <img src="https://futuresfirst.com/wp-content/uploads/2019/12/ff.png" alt="Futures First" />
      </div>

      {/* Login and Signup options on the right */}
      <div className="user-options">
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
      </div>
    </div>
  );
};

export default Header;