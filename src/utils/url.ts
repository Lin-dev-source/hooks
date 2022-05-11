
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
  // console.log('Params: ', Params);
  // 如果newParams有的value为undefined，则清除这个key
  const res = Object.entries(Params).reduce((v,t) => (t[1] !== undefined && t[1] !== null && v.push(t[0] + "=" + t[1]),v),[])
  return res.length ? "?"+res.join("&") : "";
}

type historyState = [Object,string,string]

export function setUrlParams(Params:paramsType,navigateMode:"push"|"replace"){
  // url = origin + pathname + params(srarch) + hash
  const {origin, pathname,hash} =  location
  const url = origin+pathname
  const oldParams = parseUrlSearch()
  const newParams = Object.assign({},oldParams,Params)
  // history API https://developer.mozilla.org/zh-CN/docs/Web/API/History_API
  const query:historyState = [{},document.title,url + stringfyParams(newParams) + hash] 
  navigateMode ? navigateMode === "push" ? history.pushState(...query): history.replaceState(...query) :history.pushState(...query)
}