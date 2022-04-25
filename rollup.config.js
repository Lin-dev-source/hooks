import CommonjsPlugin from "@rollup/plugin-commonjs";
import NodeResolvePlugin from "@rollup/plugin-node-resolve";
import ReplacePlugin from "@rollup/plugin-replace";
import TypescriptPlugin from "@rollup/plugin-typescript";
import { cleandir as CleandirPlugin } from "rollup-plugin-cleandir";
import DtsPlugin from "rollup-plugin-dts";
import { terser as TerserPlugin } from "rollup-plugin-terser";

const EXTERNALS = [
	"react",
	"react-dom"
];

const GLOBALS = {
	react: "React",
	"react-dom": "ReactDom"
};

const PLUGINS = [
	NodeResolvePlugin(),
	CommonjsPlugin(),
	TypescriptPlugin(),
	ReplacePlugin({
		preventAssignment: true,
		values: { "process.env.NODE_ENV": JSON.stringify("production") }
	}),
	TerserPlugin({
		compress: { drop_console: false },
		format: { comments: false }
	})
];

export default [{
	external: EXTERNALS,
	input: "src/pluto-hook.ts",
	output: { file: "dist/index.js", format: "cjs", globals: GLOBALS },
	plugins: [...PLUGINS, CleandirPlugin("dist")]
}, {
	external: EXTERNALS,
	input: "src/pluto-hook.ts",
	output: { file: "dist/index.esm.js", format: "esm", globals: GLOBALS },
	plugins: PLUGINS
}, {
	input: "src/pluto-hook.ts",
	output: { file: "dist/index.d.ts", format: "esm" },
	plugins: [PLUGINS[0], DtsPlugin()]
}];