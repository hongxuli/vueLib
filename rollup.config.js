import babel from '@rollup/plugin-babel';
import vuePlugin from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import sass from 'node-sass';
import postcss from 'rollup-plugin-postcss';
export default {
	input: './src/main.ts',
	external: ['vue'],
	output: [
    {
			file: './main/index.cjs.js',
			format: 'cjs',
			name: 'fpcVueComponent',
			globals: {
				vue: 'Vue',
			},
		},
		{
			file: './main/index.browser.js',
			format: 'iife',
			name: 'fpcVueComponent',
			globals: {
				vue: 'Vue',
			},
		},
		{
			file: './main/index.es.js',
			format: 'es',
			name: 'fpcVueComponent',
		},
	],
	plugins: [
		// ts({

		// }),
		babel({
			babelHelpers: 'bundled',
			presets: ['@vue/cli-plugin-babel/preset'],
			exclude: 'node_modules/**',
		}),
		vuePlugin(),
		postcss({
			extract: true,
			minimize: true,
			extensions: ['.css', '.scss'],
			// process: function(context, payload) {
			//   return new Promise((resolve, reject) => {
			//     sass.render({
			//       file: context
			//     }, function(err, result) {
			//       if (!err) {
			//         resolve(result)
			//       } else {
			//         reject(err)
			//       }
			//     })
			//   })
			// },
		}),
		// scss({
		//   exclude: [],
		// }),

		// terser(),
	],
};
