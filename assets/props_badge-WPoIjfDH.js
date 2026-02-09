import{j as e,M as r}from"./iframe-BCTz1HRV.js";import{useMDXComponents as s}from"./index-C_GfJY4u.js";import"./preload-helper-PPVm8Dsz.js";function t(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"storybook-addon-tag-badges/propsBadge"}),`
`,e.jsx(o.h1,{id:"props-badge",children:"Props badge"}),`
`,e.jsxs(o.p,{children:["Use the ",e.jsx(o.strong,{children:"props"}),' badge to indicate stories focused on component props. The badge displays 🔧 with a "Props" tooltip.']}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(o.p,{children:["Add the ",e.jsx(o.code,{children:"props"})," tag to your story."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['props'],
	render: () => <YourComponent />
}
`})})]})}function c(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{c as default};
