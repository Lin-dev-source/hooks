import React,{useEffect,useRef} from 'react';

/* 判断组件是否是第一次执行 */

export default function useFirstMountState(){
  const isFirst = useRef(true)
  console.log('isFirst: ', isFirst);

  if(isFirst.current){
    isFirst.current = false;
    return true
  }

  return isFirst.current // 这里一定是false了

}