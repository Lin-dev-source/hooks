import { useCallback, useRef } from "react";
import useUpdateEffect from "../../effect/useUpdateEffect";


// 当useCallback没有依赖或依赖没变化时，希望获得最新的props或state
export default function useEvent(fn, deps) {
	const fnRef = useRef(fn);
	// console.log('fnRef: ', fnRef);

	/* 
	这么写不一定能获取到最新的prop和state，应该要在渲染完成之后更新fn
	if(fnRef){
		fnRef.current = fn
	} */
	useUpdateEffect(() => {
		fnRef.current = fn
	})


	return useCallback((...args) => {
		const curFn = fnRef.current
		curFn(...args);
	}, deps)
}