import { useState } from "react";

export default function useSet<T>(initValue?: Iterable<T>) {
	const [state, setState] = useState(new Set(initValue))
	// const setRef =  useRef(new Set(initValue))

	const add = (key: any): void => {
		setState(state => {
			const newSet = new Set(state) // 拷贝一份，如果没有，浅比较后state还是原来那份，state不会更新
			newSet.add(key)
			return newSet
		})
		// setRef.current.add(key)
	}

	const remove = (key: any): void => {
		setState(state => {
			const newSet = new Set(state)
			newSet.delete(key)
			return newSet
		})
		// setRef.current.delete(key)
	}

	const reset = (): void => {
		setState(new Set(initValue))
		// setRef.current = new Set(initValue)
	}

	return [state, { add, remove, reset }]
}