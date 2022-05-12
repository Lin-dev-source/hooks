import { useState } from "react";

interface Action<T>{
	add: (key: T) => void
	remove: (key: T) => void
	reset: () => void
}

export default function useSet<T>(initValue?: Iterable<T>): [Set<T>, Action<T>] {
	const [state, setState] = useState<Set<T>>(new Set<T>(initValue));
	// const setRef =  useRef(new Set(initValue))

	const add = (key: T): void => {
		setState(state => {
			const newSet = new Set(state); // 拷贝一份，如果没有，浅比较后state还是原来那份，state不会更新
			newSet.add(key);
			return newSet;
		});
		// setRef.current.add(key)
	};

	const remove = (key: T): void => {
		setState(state => {
			const newSet = new Set(state);
			newSet.delete(key);
			return newSet;
		});
		// setRef.current.delete(key)
	};

	const reset = (): void => {
		setState(new Set(initValue));
		// setRef.current = new Set(initValue)
	};

	return [state, { add, remove, reset }];
}