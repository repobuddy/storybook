import type { ReactNode } from 'react'

export type VariantOptions = {
	key: string
	strategy: ClassNameStrategy | DataAttributeStrategy
	variants: Record<
		string,
		| string
		| {
				icon?: ReactNode | undefined
				label?: string | undefined
				title?: string | undefined
				value: string
		  }
	>
	defaultValue: string
}

export type ClassNameStrategy = {
	type: 'className'
	selector: string
}

export type DataAttributeStrategy = {
	type: 'dataAttribute'
	selector: string
	attributeName: string
}

export type ProviderStrategy = {
	type: 'provider'
	provider: (props: {
		children: any
		value: string
	}) => any
}
