import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig([
	{
		entries: [{ input: './src/', format: 'esm', ext: 'js' }],
		outDir: './esm',
		declaration: true
	},
	{
		entries: [{ input: './src/', format: 'cjs' }],
		outDir: './cjs',
		declaration: true
	}
])
