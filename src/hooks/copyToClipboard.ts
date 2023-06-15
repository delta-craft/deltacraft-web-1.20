import { useCopyToClipboard as uCTC } from "usehooks-ts";
import { useRef, useState } from "react";

const useCopyToClipboard = () => {
  const [, handleCopy] = uCTC();

  const [showSuccess, setShowSuccess] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const hCopy = async (text: string) => {
    const res = await handleCopy(text);
    if (res) {
      setShowSuccess(true);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        setShowSuccess(false);
        timerRef.current = undefined;
      }, 3000);
    }
  };

  return { isCopied: showSuccess, handleCopy: hCopy };
};

export default useCopyToClipboard;
