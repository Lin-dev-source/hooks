import { useEffect, useRef } from "react";
import type { DependencyList, EffectCallback } from "react";

// 第n次渲染并且deps变化才执行
export default function useCountUpdateEffect(effect: EffectCallback, n: number, deps?: DependencyList): void {
	const count = useRef<number>(0);

	count.current = count.current + 1;
	useEffect(() => {
		// console.log('useEffect',count.current);
		if (count.current === n) {
			return effect();
		}
	}, deps);
}