import { useEffect } from 'react'
import { defineDarkModeParam, withDarkMode } from '#repobuddy/storybook/storybook-dark-mode'
import preview from '../../.storybook/preview'

const meta = preview.meta({
	title: 'storybook-dark-mode/withDarkMode',
	tags: ['new', 'version:1.0'],
	parameters: {
		layout: 'centered'
	}
})

// These stories demonstrate specific colors, so the contrast rule is excluded
// rather than the colors changed -- the colors are the subject.
const demoColors = { a11y: { options: { rules: { 'color-contrast': { enabled: false } } } } }

export const WithClassName = meta.story({
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
})

export const WithStyle = meta.story({
	parameters: {
		...demoColors,
		...defineDarkModeParam({
			classTarget: 'html',
			darkStyle: {
				backgroundColor: '#016630',
				color: '#ffffff'
			},
			lightStyle: {
				backgroundColor: '#9f0712',
				color: '#000000'
			}
		})
	},
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
})

export const BodyClass = meta.story({
	name: 'bodyClass',
	tags: ['props'],
	parameters: demoColors,
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
})

export const BodyStyle = meta.story({
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
})

export const WithBodyTarget = meta.story({
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
})
