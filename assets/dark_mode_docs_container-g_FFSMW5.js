import{i as e}from"./preload-helper-Cs4UwXAW.js";import{d as t,f as n,lt as r,m as i}from"./iframe-cIlh6n6x.js";import{t as a}from"./mdx-react-shim-DHnxoV1S.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:`createdarkmodedocscontainer`,children:(0,c.jsx)(n.code,{children:`createDarkModeDocsContainer`})}),`
`,(0,c.jsx)(t,{title:`storybook-dark-mode/createDarkModeDocsContainer`}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a `,(0,c.jsx)(n.code,{children:`DocsContainer`}),` for `,(0,c.jsx)(n.code,{children:`storybook`}),` that works with `,(0,c.jsx)(n.code,{children:`@storybook-community/storybook-dark-mode`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`It can be called with no arguments to use the default themes from `,(0,c.jsx)(n.code,{children:`storybook/theming`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`// .storybook/preview.tsx
import { createDarkModeDocsContainer } from '@repobuddy/storybook/react'

export const preview: Preview = {
	parameters: {
		docs: {
			container: createDarkModeDocsContainer()
		}
	}
}
`})}),`
`,(0,c.jsx)(n.p,{children:`It can also be called with a custom themes.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`container: createDarkModeDocsContainer({
	light: customThemes.light,
	dark: customThemes.dark
})
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};