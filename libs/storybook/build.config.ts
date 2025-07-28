import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
	{
		entries: [{ input: './src/', format: 'esm', ext: 'js', esbuild: { jsx: 'automatic' } }],
		outDir: './esm',
		declaration: true
	},
	{
		entries: [{ input: './src/', format: 'cjs', esbuild: { jsx: 'automatic' } }],
		outDir: './cjs',
		declaration: true
	}
])
