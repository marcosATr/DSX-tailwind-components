import { X } from "phosphor-react";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import { useClickOutside } from "./utils";

const useOverlay = (active: boolean) => {
  const modalRoot = document.getElementById("root");
  return active
    ? createPortal(
        <div
          id="modaloverlay"
          className="absolute top-0 left-0 z-40 h-screen w-screen bg-black opacity-60"
        ></div>,
        modalRoot!
      )
    : null;
};

function ModalContent({
  content,
  className,
  handleClose,
  closeOnClickOutside,
  open,
}) {
  const ref = useRef(null);
  useClickOutside(
    ref,
    handleClose,
    closeOnClickOutside && open
  );

  const overlay = useOverlay(open);

  return (
    <>
      {/* overlay */}
      {/* <div className="absolute top-0 left-0 z-40 h-screen w-screen bg-black opacity-60"></div> */}
      {/* modal */}
      {overlay}
      <div
        ref={ref}
        className={twMerge([
          "absolute left-0 right-0 top-[30%] z-50 ml-auto mr-auto flex w-full max-w-[500px] flex-col rounded bg-white px-6 py-5 shadow-md",
          className,
        ])}
      >
        {/* closebutton */}
        <div
          className="absolute top-[-14px] right-[-14px] cursor-pointer rounded bg-white p-[6px] text-defaultText shadow-md"
          onClick={handleClose}
        >
          <X
            size={20}
            weight="bold"
          />
        </div>
        {content}
      </div>
    </>
  );
}

function Modal({
  open,
  children,
  className,
  handleClose,
  closeOnClickOutside,
}) {
  return open ? (
    <ModalContent
      content={children}
      className={className}
      handleClose={handleClose}
      closeOnClickOutside={closeOnClickOutside}
      open={open}
    />
  ) : null;
}

export default Modal;
