import { X } from "phosphor-react";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { useClickOutside } from "./utils";

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
  return (
    <>
      {/* overlay */}
      <div className="absolute top-0 left-0 z-40 h-screen w-screen bg-opacity-10"></div>
      {/* modal */}
      <div
        ref={ref}
        className={twMerge([
          "absolute left-0 right-0 top-[30%] z-50 ml-auto mr-auto flex w-full max-w-[500px] flex-col rounded bg-white px-6 py-5 shadow",
          className,
        ])}
      >
        {/* closebutton */}
        <div
          className="absolute top-[-14px] right-[-14px] cursor-pointer rounded bg-white p-[6px] text-defaultText"
          onClick={handleClose}
        >
          <X size={20} />
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
