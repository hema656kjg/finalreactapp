import React from 'react';
import { useParams } from 'react-router-dom'; 

const DonatePage = () => {
  const { upiId } = useParams();  // Extract the UPI ID from the URL

  const handleUPIPayment = () => {
    if (upiId) {
      const upiLink = `upi://pay?pa=${upiId}&pn=hemalatha&tn=Donate to NGO&cu=INR`;
      // Redirect to UPI payment app
      window.location.href = upiLink;
    }
  };

  if (!upiId) {
    return <p>Loading...</p>;  // Handle case where upiId is not yet available
  }

  return (
    <div className="donate-page">
      <h2>Donate to Support {upiId.split('@')[0]}</h2> {/* Dynamically show NGO name */}
      <p>Your donation will make a difference!</p>
      <p>{upiId}</p>
      <button onClick={handleUPIPayment} className="upi-button">Donate via UPI</button>
    </div>
  );
};

export default DonatePage;
