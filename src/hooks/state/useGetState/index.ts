import {useState,useRef,useEffect} from "react"
import type { Dispatch, SetStateAction } from 'react';

type GetStateAction<S> = () => S

export default function useGetState<S>(initValue: S | (() => S)):[S,Dispatch<SetStateAction<S>>,GetStateAction<S>]{
	const [state,setState] = useState(initValue)
	const ref = useRef(initValue)

	useEffect(()=>{
		ref.current = state
	},[state])

	const getState = () => ref.current  // ?? 源码加了useCallback

  return [state, setState, getState] // ?? 红了
}