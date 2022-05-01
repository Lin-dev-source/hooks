## pluto-hooks <img src="https://img.shields.io/badge/pluto-hooks/hooks工具库-66f.svg">

**一个好用的react hook工具库**

[![author](https://img.shields.io/badge/author-PlutoLam-f66.svg)](https://github.com/Lin-dev-source/hooks)
[![version](https://img.shields.io/badge/version-0.0.2-f66.svg)](https://github.com/Lin-dev-source/hooks)
[![web](https://img.shields.io/badge/web-%3E%3D%2095%25-3c9.svg)](https://github.com/Lin-dev-source/hooks)
[![node](https://img.shields.io/badge/node-%3E%3D%208.0.0-3c9.svg)](https://github.com/Lin-dev-source/hooks)
[![test](https://img.shields.io/badge/test-passing-f90.svg)](https://github.com/Lin-dev-source/hooks)
[![build](https://img.shields.io/badge/build-passing-f90.svg)](https://github.com/Lin-dev-source/hooks)
[![coverage](https://img.shields.io/badge/coverage-90%25-09f.svg)](https://github.com/Lin-dev-source/hooks)
[![license](https://img.shields.io/badge/license-MIT-09f.svg)](https://github.com/Lin-dev-source/hooks)



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

```react
import { useEffectOnece } from "pluto-hooks";

useEffectOnece(() => {
  console.log("触发");
});
```



### hooks介绍
**type为参数类型**

#### useCountUpdateEffect

第n次渲染并且deps变化才执行effect

```ts
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

```react
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



调用``useAsyncEffect``，effect function即可可以传入异步函数

##### 示例

```react
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



#### useFirstMountState

判断改组件是否是第一次渲染，返回Boolean

##### 示例

```react
import { useFirstMountState } from "pluto-hooks"

function App(){
    const isFirst = useFirstMountState()
    
    if(isFirst){
        // 第一次渲染要执行的
    }
}
```





#### useUpdateEffect

非首次渲染时执行

```
type {
    effect:EffectCallback,
    deps:DependencyList,
}
```

