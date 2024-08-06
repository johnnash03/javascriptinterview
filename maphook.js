/* 
    All three of the returned functions (set, delete, and clear) should be
    static, meaning that the same function should be returned on every render
    for a given usage of `useMap` in a component instance. However,
    the map itself does not need to be static. Calling any of these functions
    should cause the component instance to rerender.
*/

import React, { useCallback } from "react";

function useMap(initialValue) {
  const [map, setMap] = useState(new Map(initialValue));

  const set = useCallback(function (key, value) {
    setMap((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.set(key, value);
      return newMap;
    });
  }, []);
  const del = useCallback(function (key) {
    setMap((prevMap) => {
      const newMap = new Map(prevMap);
      newMap.delete(key);
      return newMap;
    });
  }, []);

  const clear = useCallback(function clear() {
    setMap(new Map());
  }, []);
  return { map, set, delete: del, clear };
}

// Do not edit the line below.
exports.useMap = useMap;
