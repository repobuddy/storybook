import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{_ as n,g as r,h as i,v as a}from"./iframe-pxBOiIH1.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...a(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h1,{id:`createdarkmodedocscontainer`,children:(0,c.jsx)(t.code,{children:`createDarkModeDocsContainer`})}),`
`,(0,c.jsx)(i,{title:`storybook-dark-mode/createDarkModeDocsContainer`}),`
`,(0,c.jsxs)(t.p,{children:[`Creates a `,(0,c.jsx)(t.code,{children:`DocsContainer`}),` for `,(0,c.jsx)(t.code,{children:`storybook`}),` that works with `,(0,c.jsx)(t.code,{children:`@storybook-community/storybook-dark-mode`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`It can be called with no arguments to use the default themes from `,(0,c.jsx)(t.code,{children:`storybook/theming`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`// .storybook/preview.tsx
import { createDarkModeDocsContainer } from '@repobuddy/storybook/storybook-dark-mode'

export const preview: Preview = {
	parameters: {
		docs: {
			container: createDarkModeDocsContainer()
		}
	}
}
`})}),`
`,(0,c.jsx)(t.p,{children:`It can also be called with a custom themes.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`container: createDarkModeDocsContainer({
	light: customThemes.light,
	dark: customThemes.dark
})
`})})]})}function s(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),n(),r()})))()}l();export{s as default};