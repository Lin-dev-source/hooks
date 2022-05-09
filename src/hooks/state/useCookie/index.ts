import {useEffect, useState} from "react"
import {cookieOPtionsType,setCookie,removeCooikeItem} from "../../../utils/cookie"

export default function useCookie(key:string,value?:string,defaultOptions:cookieOPtionsType){
  const [state,setState] = useState(value ?? undefined)
  useEffect(()=>{
    state !== undefined ? setCookie(key,state,defaultOptions) : removeCooikeItem(key)
  },[state])
  return [state,setState]
}