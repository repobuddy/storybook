import{i as e}from"./preload-helper-Cs4UwXAW.js";import{d as t,f as n,lt as r,m as i}from"./iframe-cIlh6n6x.js";import{t as a}from"./mdx-react-shim-DHnxoV1S.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`storybook-addon-tag-badges/sourceBadge`}),`
`,(0,c.jsx)(n.h1,{id:`source-badge`,children:`Source badge`}),`
`,(0,c.jsxs)(n.p,{children:[`Use the `,(0,c.jsx)(n.strong,{children:`source`}),` badge to indicate stories that show source code in the docs. The badge displays `,(0,c.jsx)(n.code,{children:`</>`}),` with a "Source Code" tooltip.`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`Add the `,(0,c.jsx)(n.code,{children:`source`}),` tag to your story and use the `,(0,c.jsx)(n.code,{children:`showSource()`}),` decorator so the story's source is visible in the docs.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`import { showSource } from '#repobuddy/storybook'

export const YourStory = {
	tags: ['source'],
	decorators: [showSource()],
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Stories tagged with `,(0,c.jsx)(n.code,{children:`source`}),` will show the `,(0,c.jsx)(n.code,{children:`</>`}),` badge in the sidebar and docs.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};