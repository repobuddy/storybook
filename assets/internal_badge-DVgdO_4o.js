import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{c as n,s as r}from"./blocks-HtkV8Oo4.js";import{r as i}from"./react-C5Ar8u5Z.js";import{t as a}from"./mdx-react-shim-DEzP97PB.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`storybook-addon-tag-badges/internalBadge`}),`
`,(0,c.jsx)(t.h1,{id:`internal-badge`,children:`Internal badge`}),`
`,(0,c.jsxs)(t.p,{children:[`Use the `,(0,c.jsx)(t.strong,{children:`internal`}),` badge to hide stories from the sidebar during production build. The badge displays 🔒 with an "Internal" tooltip. Internal stories are excluded from the sidebar by default in filter selection.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`Add the `,(0,c.jsx)(t.code,{children:`internal`}),` tag to your story. Configure your `,(0,c.jsx)(t.code,{children:`.storybook/main.ts`}),` so that stories with the `,(0,c.jsx)(t.code,{children:`internal`}),` tag are excluded from the sidebar in production:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['internal'],
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`In `,(0,c.jsx)(t.code,{children:`.storybook/main.ts`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`export default {
	tags: {
		internal: {
			excludeFromSidebar: process.env.NODE_ENV === 'production'
		}
	}
}
`})}),`
`,(0,c.jsx)(t.p,{children:`Build with:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-sh`,children:`NODE_ENV=production storybook build
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};