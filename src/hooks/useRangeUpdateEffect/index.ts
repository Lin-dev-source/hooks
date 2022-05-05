import React,{useEffect,useRef} from 'react';
import type { DependencyList, EffectCallback } from 'react';
// 在range[0]到range[1]中的渲染次数才执行
export default function useRangeUpdateEffect(effect:EffectCallback,range:number[],deps?:DependencyList):void {
  const count = useRef<number>(0)
  const left = range[0] ? range[0] : 0
  const right = range[1] ? range[1] : Infinity

  count.current=count.current+1;
  
  useEffect(() => {
    if(left <= count.current && count.current <= right){
      return effect()
    }
  },deps)
}