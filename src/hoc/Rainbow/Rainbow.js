import React from 'react';

const Rainbow = WrappedComponent => {
  const colours = ['red', 'orange', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = `${randomColour}-text`;

  return () => {
    return (
      <div className={className}>
        <WrappedComponent />
      </div>
    );
  };
};

export default Rainbow;
