import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{s as t}from"./blocks-DV2fn3J6.js";import{n}from"./lib-BQmVA0vV.js";var r=e();function i(e){let i={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`storybook-addon-tag-badges/removeBadge`}),`
`,(0,r.jsx)(i.h1,{id:`remove-badge`,children:`Remove badge`}),`
`,(0,r.jsxs)(i.p,{children:[`Use the `,(0,r.jsx)(i.strong,{children:`remove`}),` badge (☠️) to indicate that a feature, component, or behavior will be removed in a future version.`]}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Next release:`}),` `,(0,r.jsx)(i.code,{children:`remove`}),` or `,(0,r.jsx)(i.code,{children:`remove:next`}),` (same meaning)`]}),`
`,(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:`Specific version:`}),` `,(0,r.jsx)(i.code,{children:`remove:<version>`}),` with the major version number (e.g. `,(0,r.jsx)(i.code,{children:`remove:2`}),` for version 2.0.0)`]}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`usage`,children:`Usage`}),`
`,(0,r.jsxs)(i.p,{children:[`For removal in the next release, use `,(0,r.jsx)(i.code,{children:`remove`}),` or `,(0,r.jsx)(i.code,{children:`remove:next`}),` (equivalent):`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['remove'],
	render: () => <YourComponent />
}
`})}),`
`,(0,r.jsx)(i.p,{children:`Or:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['remove:next'],
	render: () => <YourComponent />
}
`})}),`
`,(0,r.jsx)(i.p,{children:`For removal in a specific version, use a version number:`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['remove:2'],
	render: () => <YourComponent />
}
`})}),`
`,(0,r.jsx)(i.p,{children:`The badge displays the version in the sidebar and docs (e.g. "☠️ v2" or "☠️" for next).`})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};