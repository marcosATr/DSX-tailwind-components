import { ReactNode } from "react";
export interface IModalProps {
    children: ReactNode;
    className?: string;
    closeOnClickOutside?: boolean;
    open: boolean;
    handleClose: () => void;
}
declare function Modal({ children, open, className, handleClose, closeOnClickOutside, }: IModalProps): JSX.Element | null;
export default Modal;
