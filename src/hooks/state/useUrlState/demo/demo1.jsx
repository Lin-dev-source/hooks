import React from "react";
import { stringfyParams, setUrlParams } from "../../../../utils/url";

export default function demo() {
	// parseUrlSearch();
	setUrlParams({
		a: 1,
		b: 2
	});
	return <div>123</div>;
}