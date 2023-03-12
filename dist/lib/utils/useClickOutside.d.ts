import { RefObject } from "react";
export default function useClickOutside(ref: RefObject<HTMLDivElement>, callback: (event: MouseEvent | TouchEvent) => void, active: boolean): void;
