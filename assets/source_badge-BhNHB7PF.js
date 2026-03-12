import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{s as t}from"./blocks-DV2fn3J6.js";import{n}from"./lib-BQmVA0vV.js";var r=e();function i(e){let i={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`storybook-addon-tag-badges/sourceBadge`}),`
`,(0,r.jsx)(i.h1,{id:`source-badge`,children:`Source badge`}),`
`,(0,r.jsxs)(i.p,{children:[`Use the `,(0,r.jsx)(i.strong,{children:`source`}),` badge to indicate stories that show source code in the docs. The badge displays `,(0,r.jsx)(i.code,{children:`</>`}),` with a "Source Code" tooltip.`]}),`
`,(0,r.jsx)(i.h2,{id:`usage`,children:`Usage`}),`
`,(0,r.jsxs)(i.p,{children:[`Add the `,(0,r.jsx)(i.code,{children:`source`}),` tag to your story and use the `,(0,r.jsx)(i.code,{children:`showSource()`}),` decorator so the story's source is visible in the docs.`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`import { showSource } from '#repobuddy/storybook'

export const YourStory = {
	tags: ['source'],
	decorators: [showSource()],
	render: () => <YourComponent />
}
`})}),`
`,(0,r.jsxs)(i.p,{children:[`Stories tagged with `,(0,r.jsx)(i.code,{children:`source`}),` will show the `,(0,r.jsx)(i.code,{children:`</>`}),` badge in the sidebar and docs.`]})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};