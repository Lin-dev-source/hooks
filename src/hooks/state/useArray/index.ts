import { useState } from "react";

interface actionType{
	push: () => void
	deleteItem: () => void
	setItem: () => void
	reset: () => void
}

function useArray<T>(initValue?: T[]): [T[], actionType] {
	const [arr, setArr] = useState(initValue);
	const push = (x: T): void => {
		setArr((arr: T[]) => {
			const newArr = arr.slice();
			newArr.push(x);
			return newArr;
		});
	};
	const deleteItem = (index: number): void => {
		setArr((arr: T[]) => {
			const newArr = arr.slice();
			newArr.splice(index, 1);
			return newArr;
		});
	};
	const setItem = (index: number, value: T): void => {
		setArr((arr: T[]) => {
			const newArr = arr.slice();
			newArr[index] = value;
			return newArr;
		});
	};
	const popItem = (): T => {
		const lastItem = arr[arr.length - 1];
		setArr((arr: T[]) => {
			const newArr = arr.slice();
			newArr.pop();
			return newArr;
		});
		return lastItem;
	};
	const reset = (): void => {
		setArr(initValue);
	};
	/* eslint-disable sort-keys */
	return [arr, { setArr, push, deleteItem, setItem, popItem, reset }];
	/* eslint-enable */
}

export default useArray;