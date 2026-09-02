/**
 * Gets the properties of an object type, passing `any` and `unknown` through unchanged.
 *
 * A local alias rather than a re-export of `type-plus`'s `Properties`:
 * the `any`/`unknown` passthrough is what the public `FnToArgTypes` type
 * depends on, and declaring it here pins that meaning to this package instead
 * of to whichever `type-plus` version resolves.
 */
export type Properties<T> = 0 extends 1 & T ? T : unknown extends T ? T : { [k in keyof T]: T[k] }
