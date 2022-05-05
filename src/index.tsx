import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";

import "./assets/css/reset.css";
import "./index.scss";
import UseEffectOnce from "./hooks/useEffectOnce/demo/demo1"
import Async from "./hooks/useAsyncEffect/demo/demo1"
import Update from "./hooks/useUpdateEffect/demo/demo1"
import Deep from "./hooks/useDeepCompareEffect/demo/demo1"
import Debounce from "./hooks/useDebounceEffect/demo/demo"
import Throttle from "./hooks/useThrottleEffect/demo/demo1"
import CountUpdate from "./hooks/useCountUpdateEffect/demo/demo1"
import RangeUpdate from "./hooks/useRangeUpdateEffect/demo/demo1"
import First from "./hooks/useFirstMountState/demo/demo1"
import SetState from "./hooks/useSetState/demo/demo1"


function App(): JSX.Element {
	return (
		<div>
			
			<Router>
				<div className="tab">
					<Link to="/once">once</Link>
					<Link to="/async">async</Link>
					<Link to="/update">Update</Link>
					<Link to="/Deep">Deep</Link>
					<Link to="/Debounce">Debounce</Link>
					<Link to="/Throttle">Throttle</Link>
					<Link to="/CountUpdate">CountUpdate</Link>
					<Link to="/RangeUpdate">RangeUpdate</Link>
					<Link to="/First">First</Link>
					<Link to="/SetState">SetState</Link>
				</div>
				<Routes>
					<Route path="/once" element={<UseEffectOnce />} />
					<Route path="/async" element={<Async />} />
					<Route path="/update" element={<Update />} />
					<Route path="/Deep" element={<Deep />} />
					<Route path="/Debounce" element={<Debounce />} />
					<Route path="/Throttle" element={<Throttle />} />
					<Route path="/CountUpdate" element={<CountUpdate />} />
					<Route path="/RangeUpdate" element={<RangeUpdate />} />
					<Route path="/First" element={<First />} />
					<Route path="/SetState" element={<SetState />} />
				</Routes>
			</Router>
		</div>
		
	);
}

console.log("应用构建环境：", process.env.NODE_ENV);
console.log("应用运行环境：", RUN_ENV); // eslint-disable-line
RUN_ENV === "dev" && module?.hot?.accept(); // eslint-disable-line
render(<App />, document.getElementById("root"));