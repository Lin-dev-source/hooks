import { useState, useRef, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

type GetStateAction<S> = () => S;

export default function useGetState<S>(initValue: S | (() => S)): [S, Dispatch<SetStateAction<S>>, GetStateAction<S>] {
	const [state, setState] = useState(initValue);
	const ref = useRef<S>();

	useEffect(() => {
		ref.current = state;
	}, [state]);

	const getState = (): S => ref.current; // ?? 源码加了useCallback

	return [state, setState, getState];
}