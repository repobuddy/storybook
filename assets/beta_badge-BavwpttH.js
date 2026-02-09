import{j as e,M as r}from"./iframe-F9YGdXtg.js";import{useMDXComponents as s}from"./index-DT598CRY.js";import"./preload-helper-PPVm8Dsz.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"storybook-addon-tag-badges/betaBadge"}),`
`,e.jsx(t.h1,{id:"beta-badge",children:"Beta badge"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.strong,{children:"beta"}),' badge to warn that a component or prop is not stable yet. The badge displays 🅱️ with a "Beta" tooltip.']}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["Add the ",e.jsx(t.code,{children:"beta"})," tag to your story."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['beta'],
	render: () => <YourComponent />
}
`})})]})}function i(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{i as default};
