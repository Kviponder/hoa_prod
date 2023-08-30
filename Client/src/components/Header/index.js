import React, { useState } from "react";
import { FaCode } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header-title">
          <FaCode className="header-icon" /> Kai Ponder
        </h1>
      </div>
    </header>
  );
}


export default Header;
