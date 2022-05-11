import { useEffect, useState } from "react";
import useThrottleFn from "../useThrottleFn";
import useUnmount from "../../lifeCycle/useUnmount";
import useUpdateEffect from "../useUpdateEffect";
import type { DependencyList, EffectCallback } from 'react';
import { ThrottleOptions } from "@/types"

export default function useThrottleEffect(effect: EffectCallback, deps: DependencyList, options: ThrottleOptions) {
  const [flag, setFlag] = useState({}); // 记录延迟是否结束

  const { run, cancel } = useThrottleFn(() => {
    setFlag({});
  }, options);

  // 正常 deps 变化，执行 effect，同时防抖开始计时
  useEffect(() => {
    return run();
  }, deps);

  // 组件卸载后，取消防抖函数调用
  useUnmount(cancel);

  // 使用 useUpdateEffect, 只在 flag 变化时执行 effect
  useUpdateEffect(effect, [flag]);
}