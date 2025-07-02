// custom hook
// 1. Think of the input, output of the hook before coding it.

import { useEffect, useState } from "react";

function useOnlineStatus() {
  const [status, setStatus] = useState<boolean | null>(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setStatus(true);
    });
    window.addEventListener("offline", () => {
      setStatus(false);
    });
  }, []);

  return { status };
}
export default useOnlineStatus;
