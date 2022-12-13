import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import svelte from "rollup-plugin-svelte";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input: 'src/main.js',
    output: {
        file: 'build/keyboard.js',
        format: 'iife',
    },
    plugins: [
        svelte({
            include: 'src/**/*.svelte',
            compilerOptions: {
                css: 'injected'
            },
            emitCss: false
        }),
        terser(),
        resolve({
            browser: true,
            exportConditions: ['svelte'],
            extensions: ['.svelte'],
        })
    ]
}