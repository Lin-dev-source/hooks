import useSetState from "../../state/useSetState"
import { setUrlParams } from "../../../utils/url";
import { useEffect } from "react"
interface paramsType {
  [key: string]: string
}

interface optionsType {
  navigateMode: "push" | "replace"
}

export default function useUrlState(initParams: paramsType, options: optionsType) {
  // state是params对象
  const [state, setState] = useSetState(initParams)
  const navigateMode = options?.navigateMode
  useEffect(() => {
    setUrlParams(state, navigateMode)
  }, [state])
  return [state, setState]
}