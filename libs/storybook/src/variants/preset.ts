/**
 * User specifies `@repobuddy/storybook/variants/addon` in the `.storybook/main.ts`.
 *
 * Storybook loads it on the server side.
 *
 * It provides a default export (or in CJS, `module.exports =`) that contains:
 *
 * - `managerEntries` a function that returns an array of strings on where to load the manager (on the client side)
 * - `previewAnnotations` a function that returns an array of strings on where to load the preview (on the client side)
 * - `experimental_serverChannel` a function that handles the server-side channel
 */

console.info('variants.preset.js.load')

// export const managerEntries = ['@storybook-community/storybook-dark-mode/manager']
// const previewAnnotations = (entry = []) => [...entry, require.resolve('@storybook-community/storybook-dark-mode')]
// const previewAnnotations =  [ require.resolve('@storybook-community/storybook-dark-mode')]
export const managerEntries = ['@repobuddy/storybook/variants/manager']

// module.exports = {
// 	managerEntries,
// 	// previewAnnotations
// }
