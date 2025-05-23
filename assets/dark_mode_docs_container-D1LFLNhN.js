import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-B8rYRX2K.js";import{M as s}from"./index-DsR4G5ps.js";import"./index-D4lIrffr.js";import"./index-CcVp9PAx.js";import"./index-DsJinFGm.js";import"./iframe-CuJswpXI.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t.h1,{id:"createdarkmodedocscontainer",children:e.jsx(t.code,{children:"createDarkModeDocsContainer"})}),`
`,e.jsx(s,{title:"storybook-dark-mode/createDarkModeDocsContainer"}),`
`,e.jsxs(t.p,{children:["Creates a ",e.jsx(t.code,{children:"DocsContainer"})," for ",e.jsx(t.code,{children:"storybook"})," that works with ",e.jsx(t.code,{children:"storybook-dark-mode"}),"."]}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["It can be called with no arguments to use the default themes from ",e.jsx(t.code,{children:"@storybook/theming"}),"."]}),`
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
`})})]})}function j(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{j as default};
