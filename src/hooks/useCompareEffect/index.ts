import React,{useEffect,useRef} from 'react';

export default function useCompareEffect(effect,deps,depsEqual){
  const ref = useRef(undefined)

  if(ref.current === undefined || !depsEqual(deps,ref.current)){
    ref.current = deps
  }

  useEffect(effect,ref.current)
}