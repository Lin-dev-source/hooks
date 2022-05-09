import React from "react";
import { setCookie, getAllcookie } from "../../../../utils/cookie";

// domain和path与当前路径相同才可以set
export default function demo() {
	setCookie("b", "123", {
		day: 1,
		// domain: "192.168.1.105",
		// path: "/Cookie",
		secure: true
		// sameSite: "strict"
	});
	// setCookie("a", undefined);
	console.log(getAllcookie());

	return <div>123</div>;
}