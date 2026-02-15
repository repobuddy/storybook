import{j as e,M as s}from"./iframe-D1XledYu.js";import{useMDXComponents as r}from"./index-Dt_98nIW.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"storybook-addon-tag-badges/rcBadge"}),`
`,e.jsx(n.h1,{id:"rc-badge",children:"RC badge"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"rc"}),' badge to mark that a component or prop is a release candidate. The badge displays 🔵 with a "Release Candidate" tooltip.']}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"rc"})," tag to your story."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['rc'],
	render: () => <YourComponent />
}
`})})]})}function i(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{i as default};
