import{i as e}from"./preload-helper-Cs4UwXAW.js";import{d as t,f as n,lt as r,m as i}from"./iframe-cIlh6n6x.js";import{t as a}from"./mdx-react-shim-DHnxoV1S.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t,{title:`storybook-addon-tag-badges/removeBadge`}),`
`,(0,c.jsx)(n.h1,{id:`remove-badge`,children:`Remove badge`}),`
`,(0,c.jsxs)(n.p,{children:[`Use the `,(0,c.jsx)(n.strong,{children:`remove`}),` badge (☠️) to indicate that a feature, component, or behavior will be removed in a future version.`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Next release:`}),` `,(0,c.jsx)(n.code,{children:`remove`}),` or `,(0,c.jsx)(n.code,{children:`remove:next`}),` (same meaning)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Specific version:`}),` `,(0,c.jsx)(n.code,{children:`remove:<version>`}),` with the major version number (e.g. `,(0,c.jsx)(n.code,{children:`remove:2`}),` for version 2.0.0)`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(n.p,{children:[`For removal in the next release, use `,(0,c.jsx)(n.code,{children:`remove`}),` or `,(0,c.jsx)(n.code,{children:`remove:next`}),` (equivalent):`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['remove'],
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsx)(n.p,{children:`Or:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['remove:next'],
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsx)(n.p,{children:`For removal in a specific version, use a version number:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['remove:2'],
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsx)(n.p,{children:`The badge displays the version in the sidebar and docs (e.g. "☠️ v2" or "☠️" for next).`})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=r(),a(),n()}))();export{s as default};