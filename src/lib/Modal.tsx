import { X } from "phosphor-react";
import { twMerge } from "tailwind-merge";

function ModalContent({ content, className, handleClose }) {
  return (
    <>
      {/* overlay */}
      <div className="absolute top-0 left-0 z-40 h-screen w-screen bg-opacity-10"></div>
      {/* modal */}
      <div
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

function Modal({ open, children, className, handleClose }) {
  console.log(open);
  return open ? (
    <ModalContent
      content={children}
      className={className}
      handleClose={handleClose}
    />
  ) : null;
}

export default Modal;
