import useStorageState from "../../../utils/storage"

interface Options<T> {
  defaultValue?: T | (() => T);
  serializer?: (value: T) => string;
  deserializer?: (value: string) => T;
}

export default function useLocalStorageState<T>(key: string, options: Options<T>) {
  return useStorageState("local", key, options)
}