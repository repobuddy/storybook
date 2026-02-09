import{j as o,M as r}from"./iframe-BCTz1HRV.js";import{useMDXComponents as s}from"./index-C_GfJY4u.js";import"./preload-helper-PPVm8Dsz.js";function n(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(r,{title:"storybook-addon-tag-badges/todoBadge"}),`
`,o.jsx(e.h1,{id:"todo-badge",children:"Todo badge"}),`
`,o.jsxs(e.p,{children:["Use the ",o.jsx(e.strong,{children:"todo"}),' badge for stories marked as todo or incomplete. The badge displays 📋 with a "Todo" tooltip.']}),`
`,o.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,o.jsxs(e.p,{children:["Add the ",o.jsx(e.code,{children:"todo"})," tag to your story."]}),`
`,o.jsx(e.pre,{children:o.jsx(e.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['todo'],
	render: () => <YourComponent />
}
`})})]})}function i(t={}){const{wrapper:e}={...s(),...t.components};return e?o.jsx(e,{...t,children:o.jsx(n,{...t})}):n(t)}export{i as default};
