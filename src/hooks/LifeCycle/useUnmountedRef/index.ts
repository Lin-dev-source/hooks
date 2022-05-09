import React, { useRef, useEffect } from 'react';

// 当组件卸载后不执行组件内的异步操作
export default function useUnmountedRef() {
	const ref = useRef(false);
	useEffect(() => {
		ref.current = false;

		return () => ref.current = true
	})
	return ref
}