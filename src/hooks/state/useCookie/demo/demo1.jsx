import React from "react";
import { setCookie } from "../../../../utils/cookie";
import useCookie from "../index";

import useCookies from "../../useCookies";
// domain和path与当前路径相同才可以set
export default function demo() {
	const { getAllCookie } = useCookies();
	console.log(getAllCookie());
	const [message, setMessage] = useCookie("useCookieStateString");
	return (
		<input
			value={message}
			placeholder="Please enter some words..."
			onChange={(e) => setMessage(e.target.value)}
			style={{ width: 300 }}
		/>
	);
}