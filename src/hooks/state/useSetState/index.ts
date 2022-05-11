import { useCallback, useState } from "react"
import { IsFunction } from "@yangzw/bruce-us";

export default function useSetState(initialState) {
  const [state, setState] = useState(initialState)

  const mergeState = useCallback(patch => {
    setState((prevState) => {
      const newState = IsFunction(patch) ? patch(prevState) : patch;
      return newState ? { ...prevState, ...newState } : prevState;
    })
  }, []);

  return [state, mergeState];
}