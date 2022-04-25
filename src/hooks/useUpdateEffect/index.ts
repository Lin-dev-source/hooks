import React,{useEffect} from 'react';
import useFirstMountState from '../useFirstMountState';

export default function useUpdateEffect(effect, deps) {
  const isFirstMount = useFirstMountState(); // 是否首次渲染

  useEffect(() => {
    if (!isFirstMount) { 
      return effect();
    }
  }, deps);
};