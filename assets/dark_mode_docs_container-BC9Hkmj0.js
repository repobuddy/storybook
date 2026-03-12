import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{s as t}from"./blocks-DV2fn3J6.js";import{n}from"./lib-BQmVA0vV.js";var r=e();function i(e){let i={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:`createdarkmodedocscontainer`,children:(0,r.jsx)(i.code,{children:`createDarkModeDocsContainer`})}),`
`,(0,r.jsx)(t,{title:`storybook-dark-mode/createDarkModeDocsContainer`}),`
`,(0,r.jsxs)(i.p,{children:[`Creates a `,(0,r.jsx)(i.code,{children:`DocsContainer`}),` for `,(0,r.jsx)(i.code,{children:`storybook`}),` that works with `,(0,r.jsx)(i.code,{children:`@storybook-community/storybook-dark-mode`}),`.`]}),`
`,(0,r.jsx)(i.h2,{id:`usage`,children:`Usage`}),`
`,(0,r.jsxs)(i.p,{children:[`It can be called with no arguments to use the default themes from `,(0,r.jsx)(i.code,{children:`storybook/theming`}),`.`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`// .storybook/preview.tsx
import { createDarkModeDocsContainer } from '@repobuddy/storybook/react'

export const preview: Preview = {
	parameters: {
		docs: {
			container: createDarkModeDocsContainer()
		}
	}
}
`})}),`
`,(0,r.jsx)(i.p,{children:`It can also be called with a custom themes.`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`container: createDarkModeDocsContainer({
	light: customThemes.light,
	dark: customThemes.dark
})
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};