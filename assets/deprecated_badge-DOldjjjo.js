import{j as e,M as d}from"./iframe-BviagkjD.js";import{useMDXComponents as r}from"./index-Dozc8TYx.js";import"./preload-helper-PPVm8Dsz.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"storybook-addon-tag-badges/deprecatedBadge"}),`
`,e.jsx(t.h1,{id:"deprecated-badge",children:"Deprecated badge"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.strong,{children:"deprecated"}),' badge for components or props that should be avoided in new code. The badge displays 🗑️ with a "Deprecated" tooltip.']}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["Add the ",e.jsx(t.code,{children:"deprecated"})," tag to your story."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['deprecated'],
	render: () => <YourComponent />
}
`})})]})}function p(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{p as default};
