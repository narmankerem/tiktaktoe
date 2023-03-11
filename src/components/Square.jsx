import React from 'react';
import '../style.scss';

const Square = ({ value }) => {
  return (
    <div className="square">
      <button type="button" className="square">
        {value}
      </button>
    </div>
  );
};

export default Square;
