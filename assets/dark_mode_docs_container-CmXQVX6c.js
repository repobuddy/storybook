import{j as e,M as s}from"./iframe-DNG69xx-.js";import{useMDXComponents as r}from"./index-Db28T-m2.js";import"./preload-helper-PPVm8Dsz.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o.h1,{id:"createdarkmodedocscontainer",children:e.jsx(o.code,{children:"createDarkModeDocsContainer"})}),`
`,e.jsx(s,{title:"storybook-dark-mode/createDarkModeDocsContainer"}),`
`,e.jsxs(o.p,{children:["Creates a ",e.jsx(o.code,{children:"DocsContainer"})," for ",e.jsx(o.code,{children:"storybook"})," that works with ",e.jsx(o.code,{children:"@storybook-community/storybook-dark-mode"}),"."]}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(o.p,{children:["It can be called with no arguments to use the default themes from ",e.jsx(o.code,{children:"storybook/theming"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`// .storybook/preview.tsx
import { createDarkModeDocsContainer } from '@repobuddy/storybook/react'

export const preview: Preview = {
	parameters: {
		docs: {
			container: createDarkModeDocsContainer()
		}
	}
}
`})}),`
`,e.jsx(o.p,{children:"It can also be called with a custom themes."}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`container: createDarkModeDocsContainer({
	light: customThemes.light,
	dark: customThemes.dark
})
`})})]})}function i(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{i as default};
