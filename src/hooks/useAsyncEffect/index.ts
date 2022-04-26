import React,{useEffect} from 'react';
import type { DependencyList, EffectCallback } from 'react';

export default function useAsyncEffect(effect:() => Promise<void>,deps?:DependencyList):void{
  useEffect(()=>{
    async function excute(){
      await effect()
    }
    excute();
  },deps)
}
  
