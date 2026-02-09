import{j as e,M as s}from"./iframe-F9YGdXtg.js";import{useMDXComponents as d}from"./index-DT598CRY.js";import"./preload-helper-PPVm8Dsz.js";function o(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"storybook-addon-tag-badges/outdatedBadge"}),`
`,e.jsx(t.h1,{id:"outdated-badge",children:"Outdated badge"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.strong,{children:"outdated"}),' badge for components with design changes that were not yet implemented, which can incur extra development costs to your users. The badge displays ⚠️ with an "Outdated" tooltip.']}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["Add the ",e.jsx(t.code,{children:"outdated"})," tag to your story."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['outdated'],
	render: () => <YourComponent />
}
`})})]})}function i(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o(n)}export{i as default};
