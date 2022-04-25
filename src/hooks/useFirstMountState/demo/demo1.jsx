import React, { useState } from "react";
import useFirstMountState from "../index";

export default function Demo() {
	const [isFirst, setIsFirst] = useState(useFirstMountState());
	if (useFirstMountState()) {
		setIsFirst(true);
	} else {
		setIsFirst(false);
	}
	return (
		<div>FirstMount:{isFirst}</div>
	);
}