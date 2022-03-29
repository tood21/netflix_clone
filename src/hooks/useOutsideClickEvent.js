import { useEffect } from "react";

export default function useOutsideClickEvent(ref, setModalOpen) {
  useEffect(() => {
    console.log(`useEffect()`);

    function handleClickOutside(event) {
      console.log(ref);

      if (ref.current && !ref.current.contains(event.target)) {
        console.log(`select의 외부 클릭을 감지!`);
        setModalOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
