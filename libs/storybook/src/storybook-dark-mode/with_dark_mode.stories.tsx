import type { Meta, StoryObj } from '@storybook/react-vite'
import { useEffect } from 'react'
import { defineDarkModeParam, withDarkMode } from '#repobuddy/storybook/storybook-dark-mode'

const meta = {
	title: 'storybook-dark-mode/withDarkMode',
	tags: ['new', 'version:1.0'],
	parameters: {
		layout: 'centered'
	}
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const WithClassName: Story = {
	parameters: defineDarkModeParam({
		classTarget: 'html',
		darkClass: ['rbsb:bg-green-800', 'rbsb:font-extrabold'],
		lightClass: ['rbsb:bg-red-800', 'rbsb:font-extralight']
	}),
	decorators: [withDarkMode()],
	render: () => {
		useEffect(
			() => () => {
				document.documentElement.classList.remove(
					'rbsb:bg-green-800',
					'rbsb:bg-red-800',
					'rbsb:font-extrabold',
					'rbsb:font-extralight'
				)
			},
			[]
		)
		return (
			<div className="rbsb:p-4">
				<p>The background color will turn green in dark mode and red in light mode.</p>
			</div>
		)
	}
}

export const WithStyle: Story = {
	parameters: defineDarkModeParam({
		classTarget: 'html',
		darkStyle: {
			backgroundColor: '#016630',
			color: '#ffffff'
		},
		lightStyle: {
			backgroundColor: '#9f0712',
			color: '#000000'
		}
	}),
	decorators: [withDarkMode()],
	render: () => {
		useEffect(
			() => () => {
				document.documentElement.style.removeProperty('background-color')
				document.documentElement.style.removeProperty('color')
			},
			[]
		)
		return (
			<div className="rbsb:p-4">
				<p>The background color will turn green in dark mode and red in light mode.</p>
			</div>
		)
	}
}

export const BodyClass: Story = {
	name: 'bodyClass',
	tags: ['props'],
	decorators: [
		withDarkMode({
			bodyClass: 'rbsb:bg-red-800 rbsb:font-extralight rbsb:dark:bg-green-800 rbsb:dark:font-extrabold'
		})
	],
	render: () => {
		useEffect(
			() => () => {
				document.body.classList.remove('rbsb:bg-red-800', 'rbsb:font-extralight')
				document.body.classList.remove('rbsb:dark:bg-green-800', 'rbsb:dark:font-extrabold')
			},
			[]
		)
		return <div>The background color will turn green in dark mode and red in light mode.</div>
	}
}

export const BodyStyle: Story = {
	name: 'bodyStyle',
	tags: ['props'],
	decorators: [
		withDarkMode({
			bodyStyle: {
				backgroundColor: '#016630',
				color: '#ffffff'
			}
		})
	],
	render: () => {
		useEffect(
			() => () => {
				document.body.style.removeProperty('background-color')
				document.body.style.removeProperty('color')
			},
			[]
		)
		return (
			<div>
				`bodyStyle` is useful for applying styles to the body element with CSS variables that changes value with
				different color theme.
			</div>
		)
	}
}

export const WithBodyTarget: Story = {
	parameters: defineDarkModeParam({
		classTarget: 'body',
		darkClass: ['rbsb:bg-green-800', 'rbsb:font-extrabold'],
		lightClass: ['rbsb:bg-red-800', 'rbsb:font-extralight']
	}),
	decorators: [withDarkMode()],
	render: () => {
		useEffect(
			() => () => {
				document.body.classList.remove('rbsb:bg-green-800', 'rbsb:font-extrabold')
				document.body.classList.remove('rbsb:bg-red-800', 'rbsb:font-extralight')
			},
			[]
		)
		return (
			<div className="rbsb:p-4">
				<p>The background color will turn green in dark mode and red in light mode.</p>
			</div>
		)
	}
}
