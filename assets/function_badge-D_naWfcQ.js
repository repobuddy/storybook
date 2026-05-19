import{i as e}from"./preload-helper-Cs4UwXAW.js";import{d as t,f as n,lt as r,m as i}from"./iframe-cIlh6n6x.js";import{t as a}from"./mdx-react-shim-DHnxoV1S.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`storybook-addon-tag-badges/functionBadge`}),`
`,(0,c.jsx)(n.h1,{id:`function-badge`,children:`Function badge`}),`
`,(0,c.jsxs)(n.p,{children:[`Use the `,(0,c.jsx)(n.strong,{children:`func`}),` badge for stories that showcase or document functions. The badge displays `,(0,c.jsx)(n.strong,{children:`ƒ(x)`}),` with a "Function" tooltip. This badge is hidden in MDX docs.`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`Add the `,(0,c.jsx)(n.code,{children:`func`}),` tag to your meta (default export). No need to add it to each story.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`export default {
	tags: ['func'],
	// ...
} satisfies Meta

export const YourStory = {
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsxs)(n.p,{children:[`Stories in a file whose meta is tagged with `,(0,c.jsx)(n.code,{children:`func`}),` will show the `,(0,c.jsx)(n.strong,{children:`ƒ(x)`}),` badge in the sidebar.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};