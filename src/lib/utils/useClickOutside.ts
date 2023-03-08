import { RefObject, useEffect } from "react";

export default function useClickOutside(
  ref: RefObject<HTMLDivElement>,
  callback: (event: MouseEvent | TouchEvent) => void,
  active: boolean
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (
        !ref.current ||
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      callback(event);
    };
    if (ref.current && active) {
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
    }

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [active, callback]);
}
