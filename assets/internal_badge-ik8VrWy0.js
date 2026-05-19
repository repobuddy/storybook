import{i as e}from"./preload-helper-Cs4UwXAW.js";import{d as t,f as n,lt as r,m as i}from"./iframe-cIlh6n6x.js";import{t as a}from"./mdx-react-shim-DHnxoV1S.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`storybook-addon-tag-badges/internalBadge`}),`
`,(0,c.jsx)(n.h1,{id:`internal-badge`,children:`Internal badge`}),`
`,(0,c.jsxs)(n.p,{children:[`Use the `,(0,c.jsx)(n.strong,{children:`internal`}),` badge to hide stories from the sidebar during production build. The badge displays 🔒 with an "Internal" tooltip. Internal stories are excluded from the sidebar by default in filter selection.`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`Add the `,(0,c.jsx)(n.code,{children:`internal`}),` tag to your story. Configure your `,(0,c.jsx)(n.code,{children:`.storybook/main.ts`}),` so that stories with the `,(0,c.jsx)(n.code,{children:`internal`}),` tag are excluded from the sidebar in production:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['internal'],
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`In `,(0,c.jsx)(n.code,{children:`.storybook/main.ts`}),`:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-ts`,children:`export default {
	tags: {
		internal: {
			excludeFromSidebar: process.env.NODE_ENV === 'production'
		}
	}
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Build with:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-sh`,children:`NODE_ENV=production storybook build
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};