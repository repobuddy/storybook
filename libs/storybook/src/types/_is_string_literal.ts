/**
 * Is `T` a string literal (or a union of string literals)?
 *
 * A local alias rather than a re-export of `type-plus`'s `IsStringLiteral`,
 * so the published tag types keep this exact meaning independent of which
 * `type-plus` version resolves: `never` and `string` are `false`, literals and
 * template literals are `true`.
 */
export type IsStringLiteral<T> = [T] extends [never]
	? false
	: T extends string
		? string extends T
			? false
			: true
		: false
