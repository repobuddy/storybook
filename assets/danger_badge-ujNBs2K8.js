import{j as e,M as s}from"./iframe-CgJZ0YZZ.js";import{useMDXComponents as o}from"./index-Bmroi7ng.js";import"./preload-helper-PPVm8Dsz.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"storybook-addon-tag-badges/dangerBadge"}),`
`,e.jsx(n.h1,{id:"danger-badge",children:"Danger badge"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"danger"}),' badge for components that require particular attention when configuring them (e.g. security concerns). The badge displays 🚨 with a "Dangerous" tooltip.']}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"danger"})," tag to your story."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['danger'],
	render: () => <YourComponent />
}
`})})]})}function i(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{i as default};
