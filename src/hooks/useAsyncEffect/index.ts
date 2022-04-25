import React,{useEffect} from 'react';

export default function useAsyncEffect(effect,deps){
  useEffect(()=>{
    async function excute(){
      await effect()
    }
    excute();
  },deps)
}
  
