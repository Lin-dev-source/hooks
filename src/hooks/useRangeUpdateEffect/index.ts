import React,{useEffect,useRef} from 'react';

// 在range[0]到range[1]中的渲染次数才执行
export default function useCountUpdateEffect(effect,deps,range:number[]):void {
  const count = useRef(0)

  count.current=count.current+1;
  
  useEffect(() => {
    console.log('useEffect',count.current);
    if(range[0] <= count.current && count.current <= range[1]){
      return effect()
    }
  },deps)
}