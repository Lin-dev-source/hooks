import React from "react";
import useUrlState from "../index";

// ahook中将page置为undefined后再+还是数字？
export default function demo() {
	const [state, setState] = useUrlState({ page: "1", pageSize: "10" }, {
		navigateMode: "replace"
	});

	return (
		<>
			<div>
        page: {state.page}
				<span style={{ paddingLeft: 8 }}>
					<button
						onClick={() => {
							setState((s) => ({ page: Number(s.page) + 1 }));
						}}
					>
            +
					</button>
					<button
						onClick={() => {
							setState((s) => ({ page: Number(s.page) - 1 }));
						}}
						style={{ margin: "0 8px" }}
					>
            -
					</button>
					<button
						onClick={() => {
							setState({ page: undefined });
						}}
					>
            reset
					</button>
				</span>
			</div>
			<br />
			<div>
        pageSize: {state.pageSize}
				<span style={{ paddingLeft: 8 }}>
					<button
						onClick={() => {
							setState((s) => ({ pageSize: Number(s.pageSize) + 1 }));
						}}
					>
            +
					</button>
					<button
						onClick={() => {
							setState((s) => ({ pageSize: Number(s.pageSize) - 1 }));
						}}
						style={{ margin: "0 8px" }}
					>
            -
					</button>
					<button
						onClick={() => {
							setState({ pageSize: undefined });
						}}
					>
            reset
					</button>
				</span>
			</div>
		</>
	);
}