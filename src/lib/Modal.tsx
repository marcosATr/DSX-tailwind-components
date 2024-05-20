// import { X } from "phosphor-react";
// import { ReactNode, useRef } from "react";
// import { twMerge } from "tailwind-merge";
// import { useClickOutside, useOverlay } from "./utils";

// export interface IModalProps {
//   children: ReactNode;
//   className?: string;
//   closeOnClickOutside?: boolean;
//   open: boolean;
//   handleClose: () => void;
// }

// function ModalContent({
//   children,
//   className,
//   handleClose,
//   closeOnClickOutside,
//   open,
// }: IModalProps) {
//   const ref = useRef(null);

//   useClickOutside(
//     ref,
//     handleClose,
//     !!closeOnClickOutside && open
//   );

//   const overlay = useOverlay();

//   return (
//     <>
//       {/* modal */}
//       <div
//         ref={ref}
//         className={twMerge([
//           "absolute left-0 right-0 top-[30%] z-50 ml-auto mr-auto flex w-full max-w-[500px] flex-col rounded bg-white px-6 py-5 shadow-md",
//           className,
//         ])}
//       >
//         {/* closebutton */}
//         <div
//           className="absolute top-[-14px] right-[-14px] cursor-pointer rounded bg-white p-[6px] text-defaultText shadow-md"
//           onClick={handleClose}
//         >
//           <X
//             size={20}
//             weight="bold"
//           />
//         </div>
//         {children}
//       </div>
//       {overlay}
//     </>
//   );
// }

// function Modal({
//   children,
//   open,
//   className,
//   handleClose,
//   closeOnClickOutside,
// }: IModalProps) {
//   return open ? (
//     <ModalContent
//       className={className}
//       handleClose={handleClose}
//       closeOnClickOutside={closeOnClickOutside}
//       open={open}
//     >
//       {children}
//     </ModalContent>
//   ) : null;
// }

// export default Modal;
