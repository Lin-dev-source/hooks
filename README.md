# pluto-hooks

**一个好用的react hook工具库**



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



#### useFirstMountState

在该组件渲染次数在一定范围里执行

```
type {
	effect:EffectCallback,
	deps:DependencyList,
	options:ThrottleOptions
}
```



#### useAsyncEffect

可以传入异步函数

```
type {
	effect:EffectCallback,
	deps?:DependencyList
}
```



#### useDebounceEffect

将传入的Effect带上防抖，options可以配置防抖参数

```
type {
    effect:EffectCallback,
    deps?:DependencyList,
    options:DebounceOptions
}
```



#### useThrottleEffect

将传入的Effect带上节流，options可以配置节流参数

```
type {
	effect:EffectCallback,
	deps:DependencyList,
	options:ThrottleOptions
}
```



#### useEffectOnce

只在第一次渲染时执行

```
type {
	effect:EffectCallback,
}
```



#### useDeepCompareEffect

对deps进行深比较

```
type {
	effect:EffectCallback,
	deps:DependencyList,
}
```



#### useFirstMountState

判断改组件是否是第一次渲染，返回Boolean





#### useUpdateEffect

非首次渲染时执行

```
type {
	effect:EffectCallback,
	deps:DependencyList,
}
```

