import type { AnyFunction, CreateTuple, Properties, Tail } from 'type-plus'

/**
 * Converts a function's parameter types to `Args` type for Storybook.
 * Each name maps to the parameter type at the same index in F.
 *
 * @example
 * type F = (a: number, b: string) => void
 * type R = FnToArgTypes<F, ['x', 'y']>  // { x: number; y: string }
 */
export type FnToArgTypes<
	F extends AnyFunction,
	Names extends CreateTuple<Parameters<F>['length'], string>
> = Properties<ReduceToRecord<Parameters<F>, Names>>

type ReduceToRecord<Params extends Array<any>, Names extends Array<any>> = Names['length'] extends 1
	? Names extends [infer K extends string]
		? { [I in K]: Params[0] }
		: never
	: Names extends [infer K extends string, ...infer Rest]
		? { [I in K]: Params[0] } & ReduceToRecord<Tail<Params>, Rest>
		: never
