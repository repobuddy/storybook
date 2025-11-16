import React, { useCallback, useState } from 'react'
import { Button, IconButton } from 'storybook/internal/components'
import type { Variants } from '../types.js'

export type ClassNameSwitcherProps = {
	selector: string
	current: string
	variants: Variants
}

export function ClassNameSwitcher({ selector, current, variants }: ClassNameSwitcherProps) {
	const [selected, setSelected] = useState(current)

	const handleClick = useCallback(
		(selected: string) => {
			const element = document.querySelector(selector)
			if (element) {
				const entries = Object.entries(variants)

				const values = entries.map(([, variant]) => (typeof variant === 'string' ? variant : variant.value))

				element.classList.remove(...values.filter((v) => v !== selected))
				element.classList.add(selected)

				const selectedIndex = entries.findIndex(([key]) => key === selected)
				const nextIndex = (selectedIndex + 1) % entries.length
				setSelected(entries[nextIndex][0])
			}
		},
		[variants]
	)

	const entry = variants[selected]
	const title = typeof entry === 'object' ? entry.title : undefined
	const label = typeof entry === 'object' ? entry.label : entry
	const style = typeof entry === 'object' ? entry.style : undefined

	if (entry && typeof entry === 'object' && 'icon' in entry) {
		return (
			<IconButton size="small" title={title} aria-label={label} style={style} onClick={() => handleClick(selected)}>
				{entry.icon} {label}
			</IconButton>
		)
	}

	return (
		<Button size="small" style={style} title={title} aria-label={label} onClick={() => handleClick(selected)}>
			{label}
		</Button>
	)
}
