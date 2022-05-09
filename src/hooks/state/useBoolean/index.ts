import React,{useState} from 'react';

interface Action{
	toggle:() => void;
	setTrue:() => void;
	setFalse:() => void;
}

export default function useBoolean(initState?:boolean):[boolean, Action] {
	const [state,setState] = useState<boolean>(initState || true);  // 默认是true

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