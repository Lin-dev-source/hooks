import React,{useState} from 'react';

export default function useBoolean(initState){
	const [state,setState] = useState(initState || true);  // 默认是true

	const toggle = ()=> {
		setState(state => !state)
	}
	const setTrue = ()=> {
		setState(true)
	}
	const setFalse = ()=> {
		setState(false)
	}
	return [state,{toggle,setTrue,setFalse}]
}