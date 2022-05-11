import useFirstMountState from "../useFirstMountState";

export default function useMount(fn:() => void) {
  if (useFirstMountState()) fn()
}