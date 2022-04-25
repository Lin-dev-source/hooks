import React,{useEffect,useRef} from 'react';

// 第n次渲染才执行
export default function useCountUpdateEffect(effect,deps,n){
  const count = useRef(0)

  if(count.current < n){
    count.current=count.current+1;
  }
  useEffect(() => {
    console.log('useEffect',count.current);
    if(count.current == n){
      return effect()
    }
  },deps)
}