import { useEffect } from "react";

/**
 * Executes a handler function when you click outside specified DOM element
 *
 * @param ref reference to the element being clicked outside
 * @param handlerFunction function to be executed when someone clicks outside
 */
export const useOutsideClick = (ref, handlerFunction) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handlerFunction();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handlerFunction]);
};
