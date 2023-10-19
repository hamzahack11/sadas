import React from "react";

const Logo = () => {
  return (
    <div className="logo" style={{ margin: "20px", padding: "10px" }}>
      <img
        src="./assets/images/logo.png"
        alt="logo"
        style={{
          width: "200px", // Set the width as needed
          height: "auto", // Maintain aspect ratio
        }}
      />
    </div>
  );
};

export default Logo;
