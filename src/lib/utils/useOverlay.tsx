import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const useOverlay = () => {
    const [overlayActive, setOverlayActive] = useState(false);
  
    const modalRoot = document.getElementById("root");
    const modaloverlay =
      document.getElementById("overlay");
  
    const overlay = createPortal(
      <div
        id="overlay"
        className="absolute top-0 left-0 z-40 h-screen w-screen bg-black opacity-60"
      ></div>,
      modalRoot!
    );
  
    useEffect(() => {
      !modaloverlay && setOverlayActive(!overlayActive);
      return;
    }, []);
  
    return overlayActive ? overlay : null;
  };

  export default useOverlay