## pluto-hooks ![](https://img.shields.io/badge/pluto-hooks/hooks工具库-66f.svg#crop=0&crop=0&crop=1&crop=1&id=utX74&originHeight=20&originWidth=150&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

**一个好用的react hook工具库**

![](https://img.shields.io/badge/author-PlutoLam-f66.svg#crop=0&crop=0&crop=1&crop=1&id=OXVaV&originHeight=20&originWidth=108&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />![](https://img.shields.io/badge/version-0.0.2-f66.svg#crop=0&crop=0&crop=1&crop=1&id=Nc47V&originHeight=20&originWidth=90&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />![](https://img.shields.io/badge/web-%3E%3D%2095%25-3c9.svg#crop=0&crop=0&crop=1&crop=1&id=LyZIm&originHeight=20&originWidth=90&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />![](https://img.shields.io/badge/node-%3E%3D%208.0.0-3c9.svg#crop=0&crop=0&crop=1&crop=1&id=GoxKU&originHeight=20&originWidth=98&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />![](https://img.shields.io/badge/test-passing-f90.svg#crop=0&crop=0&crop=1&crop=1&id=b74TK&originHeight=20&originWidth=82&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />![](https://img.shields.io/badge/build-passing-f90.svg#crop=0&crop=0&crop=1&crop=1&id=iQz3r&originHeight=20&originWidth=88&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />![](https://img.shields.io/badge/coverage-90%25-09f.svg#crop=0&crop=0&crop=1&crop=1&id=h35xX&originHeight=20&originWidth=96&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)<br />![](https://img.shields.io/badge/license-MIT-09f.svg#crop=0&crop=0&crop=1&crop=1&id=PxjBJ&originHeight=20&originWidth=78&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

### 前言

随着react16.8的发布，hook新特性随之而来，hook的到来让function组件焕发出强大的能力，足矣取代之前的class组件。函数式组件依靠useState、useEffect等hook实现变量状态维持、抽离副作用等功能。虽然原生的useEffect具有强大的功能，但是那些常用的写法每次都要手动复现一次，不但影响开发效率，而且容易出错，所以笔者将有关useEffect常用的写法都封装起来，让你的开发如鱼得水。

此项目大部分hook都是和useEffect有关，当然也有其他，开发者们可以自行选择使用

后续会继续更新更多hook的拓展功能！！

### 安装

#### yarn

```
yarn add pluto-hooks
```

#### npm

```
npm i pluto-hooks
```

### 使用

```
import { useEffectOnece } from "pluto-hooks";

useEffectOnece(() => {
  console.log("触发");
});
```

### hooks介绍

### effect相关

#### useCountUpdateEffect

第n次渲染并且deps变化才执行effect

```typescript
type {
	effect:EffectCallback,
    n:number,
    deps?:DependencyList
}
```

#### useRangeUpdateEffect

在组件渲染次数为[range[0],range[1]]之间执行

```
type {
	effect:EffectCallback,
	deps:DependencyList,
	range:number[]
}
```

#### useCompareEffect

```
type {
	effect:EffectCallback,
	deps:DependencyList,
	depsEqual:(oldDeps:DependencyList,nextDeps:DependencyList) => boolean
}
```

第三个参数为比较函数，depsEqual的第一个参数是旧的deps数组，第二个参数为新的deps数组，该函数返回一个boolean值，为true时不执行effect，反之执行

##### 示例

```
import React, { useState } from "react";
import useCompareEffect from "../index"

export default function demo() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count, setCount] = useState(0)

  const compareFn = (old,next) => {
    console.log('old,next: ', old,next);
    return old[1] === next[1]
  }

  useCompareEffect(() => {
    // 只有count2改变时会触发
    setCount(state => state + 1)
  }, [count1, count2],compareFn)

  return (
    <div>
      <h2>{count}</h2>
      <h2>{count1}</h2>
      <h2>{count2}</h2>
      <button onClick={() => {setCount1(state => state + 1)}}>count1</button>
      <button onClick={() => {setCount2(state => state + 1)}}>count2</button>
    </div>
  )
}
```

#### useDeepCompareEffect

当组件重新渲染时执行useDeepCompareEffect，该hook将对deps进行深比较，若相等则执行effect

```
type {
	effect:EffectCallback,
	deps:DependencyList,
}
```

#### useAsyncEffect

```
type {
	effect:EffectCallback,
	deps?:DependencyList
}
```

普通的useEffect的第一个参数是不能传入一个异步函数的，理由是 effect function 应该返回一个销毁函数（effect：是指return返回的cleanup函数），如果 useEffect 第一个参数传入 async，返回值则变成了 Promise，会导致 react 在调用销毁函数的时候报错 ：function.apply is undefined。

调用`useAsyncEffect`，effect function即可可以传入异步函数

##### 示例

```
import { useAsyncEffect } from "pluto-hooks"

function App(){
    useAsyncEffect(async () => {
        // 进行异步操作
    },[])
}
```

#### useDebounceFn

处理防抖函数

```
const {
  run,
  cancel,
  flush
} = useDebounceFn(
  fn: (...args: any[]) => any,
  options?: Options
);
```

run, cancel, flush为可执行函数

run：开始防抖地执行fn，传入run的参数会传到fn

cancel：取消执行fn

flush：立即执行fn，不用等到wait时间结束

#### useDebounceEffect

```
type {
    effect:EffectCallback,
    deps?:DependencyList,
    options:DebounceOptions
}
```

将传入的Effect带上防抖，options可以配置防抖参数

options参数（默认值）：

```
[options.wait=1000] (number): 等待时间，单位为毫秒。
[options.leading=false] (boolean): 指定在延迟开始前调用。
[options.maxWait] (number): 设置 func 允许被延迟的最大值。
[options.trailing=true] (boolean): 指定在延迟结束后调用。
```

#### useThrottleFn

处理节流函数的hook

```
const {
  run,
  cancel,
  flush
} = useThrottleFn(
  fn: (...args: any[]) => any,
  options?: Options
);
```

options参数：

```
[options.wait=1000] (number): 等待时间，单位为毫秒。
[options.leading=true] (boolean): 指定调用在节流开始前。
[options.trailing=true] (boolean): 指定调用在节流结束后。
```

run, cancel, flush为可执行函数

run：开始防抖地执行fn，传入run的参数会传到fn

cancel：取消执行fn

flush：立即执行fn，不用等到wait时间结束

#### useThrottleEffect

将传入的Effect带上节流功能，options可以配置节流参数

```
type {
	effect:EffectCallback,
	deps:DependencyList,
	options:ThrottleOptions
}
```

options参数：

```
[options.wait=1000] (number): 等待时间，单位为毫秒。
[options.leading=true] (boolean): 指定调用在节流开始前。
[options.trailing=true] (boolean): 指定调用在节流结束后。
```

#### useEffectOnce

只在第一次渲染时执行

```
type {
	effect:EffectCallback,
}
```

#### 
#### useUpdateEffect

非首次渲染时执行

```
type {
	effect:EffectCallback,
	deps:DependencyList,
}
```
#### 
### leftCycle相关

#### useFirstMountState

判断改组件是否是第一次渲染，返回Boolean

##### 示例

```
import { useFirstMountState } from "pluto-hooks"

function App(){
    const isFirst = useFirstMountState()
    
    if(isFirst){
        // 第一次渲染要执行的
    }
}
```


#### useMount
只在第一次渲染执行传入的函数
```javascript
type {
  fn: (...args: any) => void
}
```

#### useUnmount
在组件卸载时执行传入的函数
```javascript
type {
  fn: (...args: any) => void
}
```

#### useUnmountedRef
维护一个ref并返回，当组件已经卸载时为true，否则为false

- 经常用于阻止组件卸载后副作用继续执行

example：
```javascript
import useUnmountedRef from "../index";
import React, { useEffect } from "react";

// 加载后马上按button，效果是三秒后没有执行setTimeout的异步操作
const MyComponent = () => {
	const unmountedRef = useUnmountedRef();
	useEffect(() => {
		setTimeout(() => {
			if (!unmountedRef.current) {  // 当前组件卸载后则不再执行某些异步操作
				console.log("component is alive");
			}
		}, 3000);
	}, []);

	return <p>Hello World!</p>;
};
```

### state相关

#### useBoolean
管理一个boolean类型的state，返回当前state和4个方法<br />toggle：将取反<br />setTrue：将state设为true<br />setFalse：将state设为false
```javascript
const [ state, { toggle, setTrue, setFalse }] = useBoolean(
  initState?: boolean,
);
  
```

#### useCookie
设置并管理一个cookie的状态<br />若要将cookie删除，调用`useCookie()`或`useCookie(undefined)`即可
```javascript
export interface cookieOPtionsType {
  domain?: string,
  path?: string,
  day?: number, // 表示过期天数，-1表示立即过期
  secure?: boolean,
  sameSite?: "strict" | "lax" | "none"
}
 
const [cookie, setCookie] = useCookie(
  key: string, 
  value?: string, 
  defaultOptions: cookieOPtionsType
)
```

#### useCookies
管理当前全部的cookie<br />getCookie：`const cookie = getCookie(key:string)`<br /> setCookie：` setCookie(key: string, value: string, options: cookieOPtionsType= {})`<br />removeCooikeItem：` removeCooikeItem(key:string)`<br /> getAllCookie：获取所有的cookie
```javascript
interface cookieType {
  [key: string]: string
}

const cookieArr = getAllCookie():cookieType
```
```javascript
const {
  getCookie, 
  setCookie, 
  removeCooikeItem, 
  getAllCookie
} = useCookies()
```

#### useGetState
可以跳出当前闭包环境获取state的最新值<br />返回数组的前两个元素和useState返回的没有差别，第三个函数可以实时获取state的最新值
```javascript
const [state, setState, getState] = 
      useGetState<S>(initValue: S | (() => S))
```

#### useLocalStorageState
设置并管理一个localStorage<br />defaultValue为初始值<br />serializer：默认为`JSON.stringify`可以自定义序列化函数，每次设置值都会存储序列化后的值<br />deserializer：默认为`JSON.parse`可以自定义反序列化函数，每次取值都会进行反序列化
```javascript
interface Options<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

const [state, setState] = 
     useLocalStorageState<T>(key: string, options: Options<T>)

```

#### useSessionStorageState
与useLocalStorageState一样


#### useMap
维护一个map<br />可以选择传入的参数为一个二维数组作为初始值，如
```javascript
[
		["key1", "hello world"],
		[123, "number type"]
]
```
```javascript
const [map, { set, setAll, remove, reset, get }] = 
      useMap<K, T>(initialValue?: Iterable<readonly [K, T]>)
```
set：添加键值对<br />`set(key: any, value: any): void`

setAll：重置该map，传入二维数组

remove：移除一对键值对<br />`remove(key: any): void`

reset：重置为初始值

get：传入一个key获取value

#### useSet
维护一个set<br />传入一个数组作为初始值
```javascript
const [state, { add, remove, reset }] = 
      useSet<T>(initValue?: Iterable<T>)
```
add：接收一个参数，为set添加值<br />remove：接收一个key，移除它<br />reset：重置为初始值

#### usePrevious
维护state上次的值<br />传入一个状态state
```javascript
const previous = usePrevious<T>(state: T): T
```

#### useSetState
管理 object 类型 state 的 Hooks，用法与 class 组件的 `this.setState` 基本一致。<br />可以直接合并新旧对象
```javascript
const [state, setState] = useSetState(initialState)
```

#### useToggle
维护两个状态，可以相互转换

- 若不传入参数，则用法和`useBoolean`一样
- 若值传入第一个参数，right则取left的反值（!left）

toggle：换到另一个状态<br />set：修改状态值<br />setLeft：将状态值修改为defaultValue<br />setRight：将状态值修改为reverseValue
```javascript
const [state, { toggle, set, setLeft, setRight }] = 
      useToggle(defaultValue, reverseValue)
```

#### useUrlState
维护url的params参数，管理一个object对象，基于上面的`useSetState`<br />若要删除某个参数，将其设为undefined即可
```javascript
interface paramsType {
  [key: string]: string
}

interface optionsType {
  navigateMode: "push" | "replace" 
  // push 使用history.pushState()这个API
  // replace 使用history.replaceState()这个APi
}

const [state, setState] = 
      useUrlState(initParams: paramsType, options: optionsType)
```

### other

#### useEvent
使useCallback的依赖没有发生变化的情况下，它的函数能取最新的props和state<br />example：
```javascript
export default function demo1() {
	const [count, setCount] = useState(1);
	const fn = useEvent(() => {
		setCount(state => state + 1);
		console.log(count);
	}, []);
	return (
		<button onClick={() => { fn(); }}>Click</button>
	);
}
```
如果`fn`使用useCallback包裹，那么当点击Click时打印出来的count每次都是1，这里有两个原因

1. `useState`是异步的，setCount后state不会马上发生变化
1. 当第二次点击时，因为被useCallback包裹，fn的状态还是停留在最初渲染时，而且没有依赖，所以fn的引用永远不会改变，所以fn里面的state永远都是1

使用`useEvent`包裹后，state即可获取到最新的上下文
