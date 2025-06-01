import{j as e,M as s}from"./iframe-7Yb0LowJ.js";import{useMDXComponents as r}from"./index-C207RtYI.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"createdarkmodedocscontainer",children:e.jsx(t.code,{children:"createDarkModeDocsContainer"})}),`
`,e.jsx(s,{title:"storybook-dark-mode/createDarkModeDocsContainer"}),`
`,e.jsxs(t.p,{children:["Creates a ",e.jsx(t.code,{children:"DocsContainer"})," for ",e.jsx(t.code,{children:"storybook"})," that works with ",e.jsx(t.code,{children:"storybook-dark-mode2"}),"."]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["It can be called with no arguments to use the default themes from ",e.jsx(t.code,{children:"storybook/theming"}),"."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`// .storybook/preview.tsx
import { createDarkModeDocsContainer } from '@repobuddy/storybook/react'

export const preview: Preview = {
	parameters: {
		docs: {
			container: createDarkModeDocsContainer()
		}
	}
}
`})}),`
`,e.jsx(t.p,{children:"It can also be called with a custom themes."}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`container: createDarkModeDocsContainer({
	light: customThemes.light,
	dark: customThemes.dark
})
`})})]})}function d(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{d as default};
