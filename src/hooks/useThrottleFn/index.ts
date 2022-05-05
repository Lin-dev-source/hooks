import React,{useRef,useMemo} from "react";
import throttle from "lodash/throttle";
import useUnmount from "../useUnmount"
import {ThrottleOptions} from "../../types"

type noop = (...args: any) => any; // 默认

export default function useThrottleFn<T extends noop>(fn:T, options:ThrottleOptions) {
  // 保证 debounce 中每次取到的 fn 都是最新的
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const wait = options?.wait ?? 1000;

  const debounced = useMemo(
    () =>
    throttle(
        ((...args) => {
          return fnRef.current(...args);
        }),
        wait,
        options,
      ),
    [],
  );

  useUnmount(() => {
    debounced.cancel(); 
  });

  return {
    run: debounced,
    cancel: debounced.cancel,
    flush: debounced.flush,
  };
}