import React,{useState,useRef} from 'react';

export default function useToggle(defaultValue,reverseValue){
	const left = useRef(defaultValue)
	const right = useRef(reverseValue)
	const [state,setState] = useState(left.current ?? true);
	right.current = right.current || false
	const toggle = () => {
		setState(state === left.current ? right.current : left.current);
	}
	const set = (value) => {
		setState(value)
	}
	const setLeft = () => {
		setState(left.current)
	}
	const setRight = () => {
		setState(right.current)
	}
	return [state,{toggle,set,setLeft,setRight}]
}