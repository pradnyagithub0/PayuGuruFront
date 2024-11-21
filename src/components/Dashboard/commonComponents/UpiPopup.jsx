import React from "react";
import CopyButtonIcon from "./CopyButtonIcon";
import QRCodeButton from "./QRCodeIcon";

const UpiPopup = ({ data, onClose }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(data.upi_id);
    alert("UPI ID copied to clipboard!");
  };
  

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "2000",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#ffffff",
        padding: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        borderRadius: "8px",
        width: "400px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
      }}
    >
      {/* 1. UPI ID */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          color: "black",
          borderRadius: "8px",
        }}
      >
        <strong>UPI ID</strong>
        <span>{data.upi_id}</span>
      </div>

      {/* 2. Copy Option */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          color: "black",
          borderRadius: "8px",
        }}
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
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#f5f5f5",
          color: "black",
          borderRadius: "8px",
        }}
      >
       <QRCodeButton
                data={data.upi_id}
                
                style={{ backgroundColor: "#f8dcdc !important" ,color: "black !!important",}}
              />
      </div>

      {/* 4-9. Sample Options */}
      {["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6"].map(
        (option, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "#f5f5f5",
              color: "black",
              borderRadius: "8px",
            }}
          >
            <strong>{option}</strong>
          </div>
        )
      )}

      {/* Close Button */}
      <button
        style={{
          gridColumn: "span 3",
          marginTop: "10px",
          padding: "8px 12px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default UpiPopup;
