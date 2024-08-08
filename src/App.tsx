import React from 'react';

const button = {
  backgroundColor: "#438e5d",
  color: "white",
  padding: "5px 10px",
  borderRadius: "4.5px",
  border: "none",
};

const header = () => {
  return (
    <div 
    style={{
      color : "#438e5d",
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100px',
      fontFamily: 'Arial',
      fontSize: '24px',

    }}
    >
      <h1>Mahogany Hall </h1>
      <button
      style={{
        ...button,
      }}
      >About</button>
      <button
      style={{
        ...button,
      }}
      >Services</button>
      <button
      style={{
        ...button
      }}
      >Gallery</button>
      <button
      style={{
        ...button
      }}
      >Contact</button>
    </div>
  )
}

function App() {
  // #438e5d
  return (
    <div
    style={{
      backgroundColor: "#fffefc",
      color: "#438e5d",
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    }}
    >
    {header()}
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Arial',
      fontSize: '24px',
    }}
    >
      <div style={{
        border: '1px solid #438e5d',
        width : '50%',
        height: '50%',
      }}>

      </div>
    </div>
    </div>
  );
}

export default App;
