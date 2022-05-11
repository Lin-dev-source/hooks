import { useRef } from "react";
import useEffectOnece from "../../effect/useEffectOnce";

type noop = (...args: any) => any;

export default function useUnmount<T extends noop>(fn: T) {
  const ref = useRef<T>(fn);

  ref.current = fn
  useEffectOnece(() => () => ref.current())
}