import React, { useState } from "react";
import Bid from "./Bid"; 
import SuccessPopup from "../SuccessPopup/SuccessPopup"; 

const ParentComponent = () => {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const handleOpenSuccessPopup = () => {
    setIsSuccessPopupOpen(true);
  };

  const handleCloseSuccessPopup = () => {
    setIsSuccessPopupOpen(false);
  };

  return (
    <div>
      <Bid onOpenSuccessPopup={handleOpenSuccessPopup} />
      <SuccessPopup isOpen={isSuccessPopupOpen} onClose={handleCloseSuccessPopup} />
    </div>
  );
};

export default ParentComponent;