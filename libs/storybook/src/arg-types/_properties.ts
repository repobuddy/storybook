/**
 * Gets the properties of an object type, passing `any` and `unknown` through unchanged.
 *
 * Declared locally instead of imported from `type-plus`:
 * `type-plus@7`'s `Properties<T>` is a bare mapped type, so `Properties<unknown>`
 * widens to `{}`. The `type-plus@8` line added the `any`/`unknown` passthrough.
 * This package depends on the stable `type-plus@^7`, so the guard lives here to
 * keep the public `FnToArgTypes` type unchanged.
 */
export type Properties<T> = 0 extends 1 & T ? T : unknown extends T ? T : { [k in keyof T]: T[k] }
