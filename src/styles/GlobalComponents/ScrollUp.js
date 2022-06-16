import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import Button from "./Button";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
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
      behavior: "smooth",
    });
  };
  return (
    <div style={{ position: "fixed", left: 0 }}>
      {showTopBtn && (
        <Button
          children={
            <>
              <p>Go to the Top</p>
            </>
          }
          alt
          onClick={goToTop}
        />
        // <className="icon-position icon-style" />
      )}
    </div>
  );
};
export default ScrollToTop;
