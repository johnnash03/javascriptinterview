import { useState, useEffect } from "react";

function useFetch(url) {
  const [responseJSON, setResponseJSON] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let shouldCancel = false;

    const callFetch = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        const newResponseJSON = await response.json();
        if (shouldCancel) return;
        setResponseJSON(newResponseJSON);
        setError(null``);
      } catch (newError) {
        if (shouldCancel) return;
        setError(newError);
        setResponseJSON(null);
      }
      setIsLoading(false);
    };
    callFetch();

    return () => (shouldCancel = true);
  });
  return {
    responseJSON,
    isLoading,
    error,
  };
}

/* useFetch2 */
import { useState, useEffect, useReducer } from "react";

function reducer(state, { type, responseJSON, erro }) {
  switch (type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "success":
      return { responseJSON, isLoading: false, error: null };
    case "error":
      return { responseJSON: null, isLoading: false, error };
    default:
      throw new Error("Unknown action type");
  }
}
function useFetch2(url) {
  const [state, dispatch] = useReducer(reducer, {
    responseJSON: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    let shouldCancel = false;
    const callFetch = async () => {
      dispatch({ type: "loading" });

      try {
        const response = await fetch(url);
        const newResponseJSON = await response.json();
        if (shouldCancel) return;
        dispatch({ type: "success", responseJSON: newResponseJSON });
      } catch (newError) {
        if (shouldCancel) return;
        dispatch({ type: "error", error: newError });
      }
    };
    callFetch();
    return () => (shouldCancel = true);
  }, [url]);
  return state;
}
