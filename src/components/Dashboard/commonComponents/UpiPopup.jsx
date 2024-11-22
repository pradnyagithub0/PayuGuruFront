import React from "react";
import CopyButtonIcon from "./CopyButtonIcon";
import QRCodeButton from "./QRCodeIcon";
import { Link } from "react-router-dom";

const UpiPopup = ({ data, onClose }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(data.upi_id);
    alert("UPI ID copied to clipboard!");
  };
  

  return (
    <div className="gridViewUPI"
      
    >
      {/* 1. UPI ID */}
      <div
        className="popup-item"
      >
        <strong>UPI ID</strong>
        <span>{data.upi_id}</span>
      </div>

      {/* 2. Copy Option */}
      <div
        className="popup-item"
      >
        <CopyButtonIcon
                data={
                  data.upi_id === data.upi_id
                    ? data.upi_id
                    : ""
                }
                style={{ BackgroundColor: "#f8dcdc !important",color: "blackv!important", }}
              />
      </div>

      {/* 3. QR Code */}
      <div
        className="popup-item"
      >
       <QRCodeButton
                data={data.upi_id}
                
                style={{ backgroundColor: "#f8dcdc !important" ,color: "black !!important",}}
              />
      </div>
      <div
        className="popup-item"
      >
        
        <Link to="/paymentCollect" className="btn btn1 virtual-btn" 
        >
        <strong>Payment Collect</strong>
      </Link>
      </div>


      {/* 4-9. Sample Options */}
      {["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"].map(
        (option, index) => (
          <div
            key={index}
           className="popup-item"
          >
            <strong>{option}</strong>
          </div>
        )
      )}

      {/* Close Button */}
      <button
        className="close-Btn"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default UpiPopup;
