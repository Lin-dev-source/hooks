import { useEffect } from 'react';
import type { EffectCallback } from 'react';

function useEffectOnce(effect: EffectCallback) {
  useEffect(effect, [])
}

export default useEffectOnce;