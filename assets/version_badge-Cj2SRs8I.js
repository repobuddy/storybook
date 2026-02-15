import{j as e,M as t}from"./iframe-5VV-1lks.js";import{useMDXComponents as s}from"./index-7XQs8pzP.js";import"./preload-helper-PPVm8Dsz.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"storybook-addon-tag-badges/versionBadge"}),`
`,e.jsx(n.h1,{id:"version-badge",children:"Version badge"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"version"})," badge to indicate when a component, feature, or property becomes available. The tag format is ",e.jsx(n.code,{children:"version:<semver>"})," (e.g. ",e.jsx(n.code,{children:"version:1.0"}),", ",e.jsx(n.code,{children:"version:next"}),")."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Add a ",e.jsx(n.code,{children:"version"})," tag with a semver value to your story."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['version:1.0'],
	render: () => <YourComponent />
}
`})}),`
`,e.jsx(n.p,{children:"The badge displays the version number in the sidebar and docs."})]})}function c(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{c as default};
