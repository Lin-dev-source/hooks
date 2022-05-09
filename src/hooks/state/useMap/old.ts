import {useRef,useState,useEffect,useCallback} from "react"
import useFirstMountState from "../../useFirstMountState"

function arrayToMap(arr: Iterable<[any, any]>){
	// const map = new Map()
	// for(const v of arr){
	// 	map.set(v[0],v[1])
	// }
	// return map
	return arr.reduce((v,t) => (v.set(t[0],t[1]),v),new Map())
} 

export default function useMap(initialValue?: Iterable<[any, any]>){
	const [state,setState] = useState<Iterable<[any, any]>>(initialValue)
	const mapRef = useRef(arrayToMap(state))

	/* 初始化不能使用useEffect，它会在组件渲染完成后才执行 */
	// useEffect(()=>{
	// 	mapRef.current = arrayToMap(state)
	// 	console.log('mapRef.current: ', mapRef.current);
	// 	console.log("msg",mapRef.current.get("msg"));
	// },[])
	// if(useFirstMountState()) mapRef.current = 

	
	const set = (key:any,value:any):void => {
		mapRef.current.set(key,value)
		setState(state => [...state,[key,value]])
	}

	const setAll = (newMap: Iterable<[any, any]>):void => {
		mapRef.current = arrayToMap(newMap)
		setState(newMap)
	}

	const remove = (key:any):void => {
		setState(state => state.filter(v => v[0] !== key))
		mapRef.current.delete(key)
	}

	const reset = ():void => {
		setState(initialValue)
		mapRef.current = arrayToMap(initialValue)
	}

	// 在组件渲染

	const get = (key:any):any => {
		// console.log('get执行',mapRef.current.get(key));
		return mapRef.current.get(key)
	}

	return [state,{set,setAll,remove,reset,get}]
}