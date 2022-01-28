import React from 'react';
import './OpenSign.css';

export default function OpenSign({ isOpen }) {
  return <div className="open-sign">
    {isOpen ? 'Come on in!' : 'Sorry, the zoo is closed.'}
  </div>;
}
