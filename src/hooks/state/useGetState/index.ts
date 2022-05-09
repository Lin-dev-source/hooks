import {useState,useRef,useEffect} from "react"

export default function useGetState(initValue){
	const [state,setState] = useState(initValue)
	const ref = useRef(initValue)

	useEffect(()=>{
		ref.current = state
	},[state])

	const getState = () => ref.current

  return [state, setState, getState]
}