import React, { useState, useEffect } from "react";
import Button from "./Button";
import { GoUpButton } from "./ScrollUpStyles";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  });
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <GoUpButton>
      {showTopBtn && (
        <Button
          alt
          children={
            <>
              <p>Go to the Top</p>
            </>
          }
          onClick={goToTop}
        />
      )}
    </GoUpButton>
  );
};
export default ScrollToTop;
