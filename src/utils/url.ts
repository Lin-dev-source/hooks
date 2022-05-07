
interface paramsType {
  [key:string]:string
}

function isEmptyObject(obj){
  return Object.keys(obj).length === 0 ? true : false
}

export function parseUrlSearch(){
  const {search} = location;
  console.log('search: ', search);
  if(search === '') return {}
  const obj = search.replace(/^\?/g,"").split("&")
  const res = obj.reduce((v,t) => {
    const [key,value] = t.split("=")
    v[key] = decodeURIComponent(value)
    return v
  },{})
  return res
}

export function stringfyParams(Params:paramsType){
  if(isEmptyObject(Params)) return;
  console.log('Params: ', Params);
  const res = Object.entries(Params).reduce((v,t) => (v.push(t[0] + "=" + t[1]),v),[])
  return "?"+res.join("&");
}

export function setUrlParams(Params:paramsType){
  // url = origin + pathname + params(srarch) + hash
  const {origin, pathname,hash} =  location
  const url = origin+pathname
  const oldParams = parseUrlSearch()
  console.log('oldParams: ', oldParams);
  const newParams = Object.assign({},oldParams,Params)
  console.log('newParams: ', newParams);
  // history API https://developer.mozilla.org/zh-CN/docs/Web/API/History_API
  history.pushState({},document.title,url + stringfyParams(newParams) + hash)
}