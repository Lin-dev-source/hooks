interface cookieType {
  [key: string]: string
}
export interface cookieOPtionsType {
  domain?: string,
  path?: string,
  day?: number, // 表示过期天数，-1表示立即过期
  secure?: boolean,
  sameSite?: "strict" | "lax" | "none"
}
// https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies
//max-age是保存的时间 expires是过期的时间
/* 
  SameSite 可以有下面三种值：
None。浏览器会在同站请求、跨站请求下继续发送 cookies，不区分大小写。
Strict。浏览器将只在访问相同站点时发送 cookie。（在原有 Cookies 的限制条件上的加强，如上文 “Cookie 的作用域” 所述）
Lax。与 Strict 类似，但用户从外部站点导航至URL时（例如通过链接）除外。 在新版本浏览器中，为默认选项，Same-site cookies 将会为一些跨站子请求保留，如图片加载或者 frames 的调用，但只有当用户从外部站点导航到URL时才会发送。如 link 链接
*/
export function getCookie(key:string){// 后面有个空格
  const keyValue = document.cookie.split("; ").find(v => (v.split("="),v[0]===key))
  return keyValue.split("=")[1]
}

export function getAllCookie(){
  return document.cookie.split("; ").reduce((v,t)=>{
    const [key,value] = t.split("=")
    v[key] = value
    return v
  },{})
}

export function removeCooikeItem(key:string) {
  setCookie(key, "", { day: -1 })
}

export function setCookie(key: string, value: string, options: cookieOPtionsType = {}) {
  const { domain, path, secure, sameSite } = options
  const date = new Date()
  const day = value === undefined ? -1 : options.day ?? 1 // 若没有定义的话一天后过期，若value为undefined则直接过期
  date.setDate(date.getDate() + day)
  console.log(encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";expires=" + date + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "") + (secure ? "; secure" : ""));
  document.cookie = `${key}=${value};expires=${date}${domain ? `;domain=${domain}` : ""}${path ? ";path=" + path : ""}${secure ? ";secure" : ""}${sameSite ? ";SameSite=" + sameSite : ""}`
  // document.cookie =  encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";expires=" + date + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "") + (secure ? "; secure" : "");
}