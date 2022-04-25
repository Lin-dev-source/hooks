import useCompareEffect from "../useCompareEffect";
import isEqual from 'lodash/isEqual';

export default function useDeepCompareEffect(effect,deps){
  useCompareEffect(effect,deps,isEqual);
}