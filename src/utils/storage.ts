import { useEffect,useState } from "react";

interface Options<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

export default function useStorageState<T>(type: "local"|"session",key:string,options:Options<T>){
	const Storage = type === "session" ? sessionStorage : localStorage;
	const [state,setState] = useState(options.defaultValue ?? "")
	
	// if(options.defaultValue !== undefined) setStorage(defaultValue)
	const serializer = options.serializer || JSON.stringify
	const deserializer = options.deserializer || JSON.parse
	// useEffect(()=>{
	// 	state === undefined ? Storage.removeItem(key) :Storage.setItem(key,serializer(state)) 

	// },[state])
	const setStorage = (value) => {
		// console.log('value: ', serializer(state));
		value === undefined ? Storage.removeItem(key) :Storage.setItem(key,serializer(value)) 
		const newState = deserializer(Storage.getItem(key))
		setState(newState)
	}
	useEffect(()=>{
		setStorage(state)
	},[])
	return [state,setStorage]
}