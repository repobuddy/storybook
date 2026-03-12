import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{s as t}from"./blocks-DV2fn3J6.js";import{n}from"./lib-BQmVA0vV.js";var r=e();function i(e){let i={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`storybook-addon-tag-badges/internalBadge`}),`
`,(0,r.jsx)(i.h1,{id:`internal-badge`,children:`Internal badge`}),`
`,(0,r.jsxs)(i.p,{children:[`Use the `,(0,r.jsx)(i.strong,{children:`internal`}),` badge to hide stories from the sidebar during production build. The badge displays 🔒 with an "Internal" tooltip. Internal stories are excluded from the sidebar by default in filter selection.`]}),`
`,(0,r.jsx)(i.h2,{id:`usage`,children:`Usage`}),`
`,(0,r.jsxs)(i.p,{children:[`Add the `,(0,r.jsx)(i.code,{children:`internal`}),` tag to your story. Configure your `,(0,r.jsx)(i.code,{children:`.storybook/main.ts`}),` so that stories with the `,(0,r.jsx)(i.code,{children:`internal`}),` tag are excluded from the sidebar in production:`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['internal'],
	render: () => <YourComponent />
}
`})}),`
`,(0,r.jsxs)(i.p,{children:[`In `,(0,r.jsx)(i.code,{children:`.storybook/main.ts`}),`:`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-ts`,children:`export default {
	tags: {
		internal: {
			excludeFromSidebar: process.env.NODE_ENV === 'production'
		}
	}
}
`})}),`
`,(0,r.jsx)(i.p,{children:`Build with:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-sh`,children:`NODE_ENV=production storybook build
`})})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};