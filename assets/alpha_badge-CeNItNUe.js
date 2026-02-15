import{j as e,M as r}from"./iframe-DsYrPJFW.js";import{useMDXComponents as a}from"./index-DJTs29vm.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"storybook-addon-tag-badges/alphaBadge"}),`
`,e.jsx(n.h1,{id:"alpha-badge",children:"Alpha badge"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"alpha"}),' badge to mark that a component or prop is experimental. The badge displays 🔴 with an "Alpha" tooltip.']}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"alpha"})," tag to your story."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['alpha'],
	render: () => <YourComponent />
}
`})})]})}function p(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{p as default};
