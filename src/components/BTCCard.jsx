import React from 'react';

const BtcCard = ({ icon, title }) => {
  return (
    <div className="card">
      <div className="card-icon">
      <img src={icon} alt={title} className="card-image" />
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default BtcCard;