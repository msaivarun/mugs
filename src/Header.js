import React from 'react';

const Header = () => {
  return (
    <div style={{ display: 'flex',  margin:'0px',padding:'0px' }}>
      <div style={{ marginTop:'30px',marginLeft:'20px', marginRight: '20px', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'gray' }}></div>
      <h1 style={{ fontSize: '40px' ,fontVariant: 'small-caps'}}>Tailer Talk</h1>
      <div style={{ marginTop:'40px', marginLeft: '880px', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'gray' }}></div>
    </div>
  );
};

export default Header;
