import { useState } from "react";

interface Action {
	toggle: () => void
	setTrue: () => void
	setFalse: () => void
}

export default function useBoolean(initState?: boolean): [boolean, Action] {
	const [state, setState] = useState<boolean>(initState ?? true); // 默认是true

	const toggle = (): void => {
		setState(state => !state);
	};
	const setTrue = (): void => {
		setState(true);
	};
	const setFalse = (): void => {
		setState(false);
	};
	return [state, { setFalse, setTrue, toggle }];
}