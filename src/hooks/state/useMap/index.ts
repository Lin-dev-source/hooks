import {useRef,useState,useEffect,useCallback} from "react"


export default function useMap<K,T>(initialValue?: Iterable<readonly [K,T]>){
	const [state,setState] = useState<Map<K,T>>(new Map(initialValue))

	const set = (key:any,value:any):void => {
		setState(state => {
			const newMap = new Map(state)
			newMap.set(key,value)
			return newMap
		})
	}

	const setAll = (newMap: Iterable<[any, any]>):void => {
		setState(new Map(newMap))
	}

	const remove = (key:any):void => {
		setState(state => {
			const newMap = new Map(state)
			newMap.delete(key)
			return newMap
		})
	}

	const reset = ():void => {
		setState(new Map(initialValue))
	}

	// 在组件渲染

	const get = (key:K) => {
		// console.log('get执行',mapRef.current.get(key));
		return state.get(key)
	}

	return [state,{set,setAll,remove,reset,get}]
}