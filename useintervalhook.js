/* 
  Why callback is ref. Refer video
  Why `setInterval(callbackRef.current, delay)` is wrong. Refer video
  Why do we need 2 useEffects. Can this be achieved in just one?
  Understand: Reason for using callbackRef: We need to maintain callback value between renders. 
  Even if component re-renders for reason unrelated to this useInterval, we need to keep track of 
  what the callback is but updating the callback shouldn't cause a rerender in itself.
*/

import { useRef, useEffect } from "react";

function useInterval(callback, delay) {
  const callbackRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) return;

    const intervalID = setInterval(() => callbackRef.current(), delay);
    return () => clearInterval(intervalID);
  }, [delay]);
}
