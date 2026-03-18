import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{c as n,s as r}from"./blocks-DhGuBjpJ.js";import{r as i}from"./react-s010c3SE.js";import{t as a}from"./mdx-react-shim-OFG1gP_s.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`storybook-addon-tag-badges/removeBadge`}),`
`,(0,c.jsx)(t.h1,{id:`remove-badge`,children:`Remove badge`}),`
`,(0,c.jsxs)(t.p,{children:[`Use the `,(0,c.jsx)(t.strong,{children:`remove`}),` badge (☠️) to indicate that a feature, component, or behavior will be removed in a future version.`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Next release:`}),` `,(0,c.jsx)(t.code,{children:`remove`}),` or `,(0,c.jsx)(t.code,{children:`remove:next`}),` (same meaning)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Specific version:`}),` `,(0,c.jsx)(t.code,{children:`remove:<version>`}),` with the major version number (e.g. `,(0,c.jsx)(t.code,{children:`remove:2`}),` for version 2.0.0)`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`For removal in the next release, use `,(0,c.jsx)(t.code,{children:`remove`}),` or `,(0,c.jsx)(t.code,{children:`remove:next`}),` (equivalent):`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['remove'],
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsx)(t.p,{children:`Or:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['remove:next'],
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsx)(t.p,{children:`For removal in a specific version, use a version number:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['remove:2'],
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsx)(t.p,{children:`The badge displays the version in the sidebar and docs (e.g. "☠️ v2" or "☠️" for next).`})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};