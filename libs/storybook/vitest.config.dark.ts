import { browserTestPreset } from '@repobuddy/vitest/config'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import tailwindcss from '@tailwindcss/vite'
import { join } from 'node:path'
import { storybookVis } from 'storybook-addon-vis/vitest-plugin'
import { defineProject } from 'vitest/config'

export default defineProject({
	plugins: [
		tailwindcss(),
		storybookTest({ configDir: join(import.meta.dirname, '.storybook') }),
		storybookVis({
			snapshotRootDir({ ci, platform }) {
				return ci ? `__vis__/${platform}/dark` : '__vis__/local/dark'
			}
		}),
		browserTestPreset()
	],
	optimizeDeps: {
		include: [
			'react/jsx-dev-runtime',
			'@storybook/react-vite',
			'storybook-addon-vis/vitest-setup',
			'@storybook/addon-docs/blocks',
			'storybook/theming',
			'react',
			'storybook-dark-mode2',
			'@just-web/css'
		]
	},
	test: {
		name: 'sb:dark',
		setupFiles: ['.storybook/vitest.setup.dark.ts']
	}
})
