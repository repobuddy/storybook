import{j as e,M as r}from"./iframe-DX_7qFCb.js";import{useMDXComponents as o}from"./index-DTFpFZSF.js";import"./preload-helper-PPVm8Dsz.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"storybook-addon-tag-badges/typeBadge"}),`
`,e.jsx(t.h1,{id:"type-badge",children:"Type badge"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.strong,{children:"type"})," badge for stories that showcase or document TypeScript types. The badge displays ",e.jsx(t.code,{children:"<T>"}),' with a "TypeScript Types" tooltip. This badge is hidden in MDX docs.']}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["Add the ",e.jsx(t.code,{children:"type"})," tag to your story."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['type'],
	render: () => <YourComponent />
}
`})}),`
`,e.jsxs(t.p,{children:["Stories tagged with ",e.jsx(t.code,{children:"type"})," will show the ",e.jsx(t.code,{children:"<T>"})," badge in the sidebar."]})]})}function a(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{a as default};
