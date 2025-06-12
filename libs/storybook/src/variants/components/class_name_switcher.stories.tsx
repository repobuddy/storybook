import type { Meta, StoryObj } from '#repobuddy/storybook/internal'
import { MoonIcon, SunIcon } from '@storybook/icons'
import React from 'react'
import { convert, ThemeProvider, themes } from 'storybook/internal/theming'
import { ClassNameSwitcher } from './class_name_switcher'

const meta = {
	title: 'variants/components/ClassNameSwitcher',
	component: ClassNameSwitcher,
	parameters: {
		layout: 'centered'
	},
	decorators: [
		(Story) => (
			<ThemeProvider theme={convert(themes.light)}>
				<Story />
			</ThemeProvider>
		)
	]
} satisfies Meta<typeof ClassNameSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const WithIcon: Story = {
	args: {
		selector: 'html',
		current: 'dark',
		variants: {
			dark: {
				value: 'dark',
				icon: <MoonIcon />
			},
			light: {
				value: 'light',
				icon: <SunIcon />
			}
		}
	},
	render: (args) => <ClassNameSwitcher {...args} />
}

export const WithLabelAndStyle: Story = {
	args: {
		selector: 'html',
		current: 'dark',
		variants: {
			dark: {
				value: 'dark',
				label: 'Dark',
				style: {
					color: 'white',
					backgroundColor: 'black'
				}
			},
			light: {
				value: 'light',
				label: 'Light'
			}
		}
	},
	render: (args) => <ClassNameSwitcher {...args} />
}

export const WithTitle: Story = {
	args: {
		selector: 'html',
		current: 'dark',
		variants: {
			dark: {
				icon: <MoonIcon />,
				title: 'Switch to Dark',
				value: 'dark'
			},
			light: {
				icon: <SunIcon />,
				title: 'Switch to Light',
				value: 'light'
			}
		}
	},
	render: (args) => <ClassNameSwitcher {...args} />
}
