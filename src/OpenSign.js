import React from 'react';

export default function OpenSign({ isOpen }) {
  return <div>
    {isOpen ? 'Come on in!' : 'Sorry, the zoo is closed.'}
  </div>;
}
