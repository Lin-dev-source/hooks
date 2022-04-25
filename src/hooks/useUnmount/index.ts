import React,{useRef} from "react";
import useEffectOnece from "../useEffectOnce";

export default function useUnmount(fn){
  const ref = useRef(fn);

  ref.current = fn
  useEffectOnece(()=>()=>ref.current())
}