import React,{useEffect,useRef} from 'react';

// 第n次渲染才执行
export default function useCountUpdateEffect(effect,n){
  const count = useRef(0)

  if(count.current < n){
    count.current=count.current+1;
  }
  useEffect(() => {
    if(count.current >= n){
      return effect()
    }
  })
}