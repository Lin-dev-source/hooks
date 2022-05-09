import React from "react";
import useLocalStorageState from "../index";

export default function demo() {
	const [message, setMessage] = useLocalStorageState("use-local-storage-state-demo3", {
		defaultValue: "Hello~",
		serializer: (v) => v,
		deserializer: (v) => v
	});

	return (
		<>
			<input
				value={message || ""}
				placeholder="Please enter some words..."
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button style={{ margin: "0 8px" }} type="button" onClick={() => setMessage("Hello~")}>
        Reset
			</button>
			<button type="button" onClick={() => setMessage()}>
        Clear
			</button>
		</>
	);
}