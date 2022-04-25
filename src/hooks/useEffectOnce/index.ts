import React,{useEffect} from 'react';

// type effectHookType = typeof useEffect

function useEffectOnece(effect){
  useEffect(effect,[])
}

export default useEffectOnece;