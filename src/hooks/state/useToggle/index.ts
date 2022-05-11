import { useState, useRef } from 'react';

interface Actions<T> {
	setLeft: () => void;
	setRight: () => void;
	set: (value: T) => void;
	toggle: () => void;
}

export default function useToggle(defaultValue, reverseValue) {
	const left = useRef(defaultValue)
	const right = useRef(reverseValue)
	const [state, setState] = useState(left.current ?? true); // 默认是true和false
	right.current = right.current === undefined ? defaultValue === undefined ? false : !defaultValue : right.current
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
	return [state, { toggle, set, setLeft, setRight }]
}