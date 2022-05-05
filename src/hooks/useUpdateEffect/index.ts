import React,{useEffect} from 'react';
import useFirstMountState from '../useFirstMountState';
import type { DependencyList, EffectCallback } from 'react';


export default function useUpdateEffect(effect:EffectCallback, deps:DependencyList) {
  const isFirstMount = useFirstMountState(); // 是否首次渲染

  useEffect(() => {
    if (!isFirstMount) { 
      return effect();
    }
  }, deps);
};