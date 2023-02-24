import { useEffect } from "react";

export default function useClickOutside(
  ref,
  callback,
  active
) {
  useEffect(() => {
    const listener = (event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target)
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
