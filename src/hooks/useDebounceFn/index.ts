import React,{useRef,useMemo} from "react";
import {debounce} from "../../utils";
import useUnmount from "../useUnmount"
import {DebounceOptions} from "../../types"

type noop = (...args: any) => any;

export default function useDebounceFn<T extends noop>(fn:T, options:DebounceOptions) {
  // 保证 debounce 中每次取到的 fn 都是最新的
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const wait = options?.wait ?? 1000;

  const debounced = useMemo(
    () =>
      debounce(
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