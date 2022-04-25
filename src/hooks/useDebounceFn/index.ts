import React,{useRef,useMemo} from "react";
import debounce from "lodash/debounce";
import useUnmount from "../useUnmount"

export default function useDebounceFn(fn, options) {
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