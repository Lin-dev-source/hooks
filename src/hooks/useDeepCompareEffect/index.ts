import useCompareEffect from "../useCompareEffect";
import {isEqual} from '../../utils';
import type { DependencyList, EffectCallback } from 'react';

export default function useDeepCompareEffect(effect:EffectCallback,deps:DependencyList){
  useCompareEffect(effect,deps,isEqual);
}