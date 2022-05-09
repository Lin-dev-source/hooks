import {useState,useEffect} from "react"
import useUpdateEffect from "../../useUpdateEffect"

export default function usePrevious<T>(state:T):T{
	const [curState,setCurState] = useState<T>(state)
	const [previous,setPrevious] = useState<null | T>(null)
	useUpdateEffect(() => {
		setPrevious(curState)
		setCurState(state)
	},[state])
	return previous
} 