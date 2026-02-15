import{j as e,M as t}from"./iframe-ChM6l5-W.js";import{useMDXComponents as s}from"./index-VdOiZ3DN.js";import"./preload-helper-PPVm8Dsz.js";function o(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"storybook-addon-tag-badges/removeBadge"}),`
`,e.jsx(n.h1,{id:"remove-badge",children:"Remove badge"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"remove"})," badge (☠️) to indicate that a feature, component, or behavior will be removed in a future version."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Next release:"})," ",e.jsx(n.code,{children:"remove"})," or ",e.jsx(n.code,{children:"remove:next"})," (same meaning)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Specific version:"})," ",e.jsx(n.code,{children:"remove:<version>"})," with the major version number (e.g. ",e.jsx(n.code,{children:"remove:2"})," for version 2.0.0)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["For removal in the next release, use ",e.jsx(n.code,{children:"remove"})," or ",e.jsx(n.code,{children:"remove:next"})," (equivalent):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['remove'],
	render: () => <YourComponent />
}
`})}),`
`,e.jsx(n.p,{children:"Or:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['remove:next'],
	render: () => <YourComponent />
}
`})}),`
`,e.jsx(n.p,{children:"For removal in a specific version, use a version number:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['remove:2'],
	render: () => <YourComponent />
}
`})}),`
`,e.jsx(n.p,{children:'The badge displays the version in the sidebar and docs (e.g. "☠️ v2" or "☠️" for next).'})]})}function a(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{a as default};
