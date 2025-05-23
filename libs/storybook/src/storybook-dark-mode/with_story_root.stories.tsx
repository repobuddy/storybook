import type { Meta, StoryObj } from '@storybook/react'
import { useEffect } from 'react'
import { withStoryRoot } from '../index.ts'

const meta = {
	title: 'storybook-dark-mode/withStoryRoot',
	tags: ['new', 'version:1.0'],
	parameters: {
		layout: 'centered'
	}
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const WithClassName: Story = {
	decorators: [
		withStoryRoot({
			classTarget: 'html',
			dark: {
				className: 'bg-green-800 text-white'
			},
			light: {
				className: ['bg-red-800', 'text-black']
			}
		})
	],
	render: () => {
		useEffect(
			() => () => {
				document.body.classList.remove('bg-green-800')
				document.body.classList.remove('bg-red-800')
			},
			[]
		)
		return (
			<div className="p-4">
				<p>The background color will turn green in dark mode and red in light mode.</p>
			</div>
		)
	}
}

export const WithStyle: Story = {
	decorators: [
		withStoryRoot({
			classTarget: 'html',
			dark: {
				style: {
					backgroundColor: '#016630',
					color: '#ffffff'
				}
			},
			light: {
				style: {
					backgroundColor: '#9f0712',
					color: '#000000'
				}
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
			<div className="p-4">
				<p>The background color will turn green in dark mode and red in light mode.</p>
			</div>
		)
	}
}

export const WithBodyTarget: Story = {
	decorators: [
		withStoryRoot({
			classTarget: 'body',
			dark: {
				className: 'bg-green-800 text-white'
			},
			light: {
				className: ['bg-red-800', 'text-black']
			}
		})
	],
	render: () => {
		return (
			<div className="p-4">
				<p>The background color will turn green in dark mode and red in light mode.</p>
			</div>
		)
	}
}
