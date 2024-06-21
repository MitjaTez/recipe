import React, { useEffect } from "react";
import "./Popup.css";

const Popup = ({ message, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);
  return <div className={`popup ${visible ? "show" : ""}`}>{message}</div>;
};

export default Popup;
