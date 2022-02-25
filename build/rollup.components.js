import babel from "@rollup/plugin-babel";
import vuePlugin from "rollup-plugin-vue";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import components from "../build/components.json";

const configsArray = [];
Object.keys(components).forEach((key) => {
  const config = {
    input: `./src/${components[key]}`,
    external: ["vue"],
    output: [
      {
        file: `./lib/${key}.es.js`,
        format: "es",
      },
    ],
    plugins: [
      ts(),
      babel({
        babelHelpers: "bundled",
        presets: ["@vue/cli-plugin-babel/preset"],
        exclude: "node_modules/**",
      }),
      vuePlugin(),
      postcss({
        extract: true,
        minimize: true,
        extensions: [".css", ".scss"],
      }),
      // terser(),
    ],
  };
  configsArray.push(config);
});

export default configsArray;
