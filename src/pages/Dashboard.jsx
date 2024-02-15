import React, { useState } from "react";

const Dashboard = () => {
  const colors = [
    "lightblue",
    "lightcoral",
    "lightgreen",
    "lightpink",
    "lightyellow",
  ];
  const [backgroundColorIndex, setBackgroundColorIndex] = useState(0);

  const click = () => {
    const newIndex = (backgroundColorIndex + 1) % colors.length;
    setBackgroundColorIndex(newIndex);
  };

  return (
    <div style={{ backgroundColor: colors[backgroundColorIndex],width:'100%',height:'100%' }}>
      <h1>Hai</h1>
      <p>Click the Button </p>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Dashboard;
