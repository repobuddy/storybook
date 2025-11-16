import type { CSSProperties } from '@just-web/css'
import type { ReactNode } from 'react'

export type VariantConfigOptions = {
	key: string
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
	/**
	 * The current variant value.
	 */
	current?: string | undefined
}

export type Variants = Record<
	string,
	| string
	| {
			icon?: ReactNode | undefined
			label?: string | undefined
			style?: CSSProperties | undefined
			title?: string | undefined
			value: string
	  }
>

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

export type VariantOptions<S extends ClassNameStrategy | DataAttributeStrategy | ProviderStrategy = ClassNameStrategy> =
	{
		key: string
		strategy: S
		variants: Record<string, string>
		/**
		 * The current variant value.
		 */
		current?: string | undefined
	}
