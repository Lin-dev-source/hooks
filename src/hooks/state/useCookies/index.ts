import { getCookie, setCookie, removeCooikeItem, getAllCookie } from "../../../utils/cookie"

export default function useCookies() {
  return {
    getCookie, setCookie, removeCooikeItem, getAllCookie
  }
}