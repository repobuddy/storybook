import{i as e}from"./preload-helper-Cs4UwXAW.js";import{d as t,f as n,lt as r,m as i}from"./iframe-cIlh6n6x.js";import{t as a}from"./mdx-react-shim-DHnxoV1S.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`storybook-addon-tag-badges/versionBadge`}),`
`,(0,c.jsx)(n.h1,{id:`version-badge`,children:`Version badge`}),`
`,(0,c.jsxs)(n.p,{children:[`Use the `,(0,c.jsx)(n.strong,{children:`version`}),` badge to indicate when a component, feature, or property becomes available. The tag format is `,(0,c.jsx)(n.code,{children:`version:<semver>`}),` (e.g. `,(0,c.jsx)(n.code,{children:`version:1.0`}),`, `,(0,c.jsx)(n.code,{children:`version:next`}),`).`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`Add a `,(0,c.jsx)(n.code,{children:`version`}),` tag with a semver value to your story.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['version:1.0'],
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsx)(n.p,{children:`The badge displays the version number in the sidebar and docs.`})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};