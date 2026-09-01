/**
 * Is `T` a string literal (or a union of string literals)?
 *
 * Declared locally instead of imported from `type-plus`:
 * `IsStringLiteral` only exists in the unreleased `type-plus@8` line,
 * and this package depends on the stable `type-plus@^7`.
 * Behavior matches `type-plus@8`'s `IsStringLiteral` for the cases used here:
 * `never` and `string` are `false`, literals and template literals are `true`.
 */
export type IsStringLiteral<T> = [T] extends [never]
	? false
	: T extends string
		? string extends T
			? false
			: true
		: false
