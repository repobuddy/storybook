import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{s as t}from"./blocks-DV2fn3J6.js";import{n}from"./lib-BQmVA0vV.js";var r=e();function i(e){let i={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`storybook-addon-tag-badges/versionBadge`}),`
`,(0,r.jsx)(i.h1,{id:`version-badge`,children:`Version badge`}),`
`,(0,r.jsxs)(i.p,{children:[`Use the `,(0,r.jsx)(i.strong,{children:`version`}),` badge to indicate when a component, feature, or property becomes available. The tag format is `,(0,r.jsx)(i.code,{children:`version:<semver>`}),` (e.g. `,(0,r.jsx)(i.code,{children:`version:1.0`}),`, `,(0,r.jsx)(i.code,{children:`version:next`}),`).`]}),`
`,(0,r.jsx)(i.h2,{id:`usage`,children:`Usage`}),`
`,(0,r.jsxs)(i.p,{children:[`Add a `,(0,r.jsx)(i.code,{children:`version`}),` tag with a semver value to your story.`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['version:1.0'],
	render: () => <YourComponent />
}
`})}),`
`,(0,r.jsx)(i.p,{children:`The badge displays the version number in the sidebar and docs.`})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};