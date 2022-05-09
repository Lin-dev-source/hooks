import {useState,useEffect} from "react"
import useUpdateEffect from "../../useUpdateEffect"

export default function usePrevious(state){
	const [curState,setCurState] = useState(state)
	const [previous,setPrevious] = useState(null)
	useUpdateEffect(() => {
		setPrevious(curState)
		setCurState(state)
	},[state])
	return previous
} 