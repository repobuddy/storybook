import{j as e,M as a}from"./iframe-CKNOMXmu.js";import{useMDXComponents as r}from"./index-B8jiInB7.js";import"./preload-helper-PPVm8Dsz.js";function s(n){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"storybook-addon-tag-badges/varBadge"}),`
`,e.jsx(t.h1,{id:"var-badge",children:"Var badge"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.strong,{children:"var"})," badge for stories that describe values and variables. The badge displays ",e.jsx(t.strong,{children:"var"}),' with a "Variables" tooltip. This badge is hidden in MDX docs.']}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["Add the ",e.jsx(t.code,{children:"var"})," tag to your meta (default export). No need to add it to each story."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`export default {
	tags: ['var'],
	// ...
} satisfies Meta

export const YourStory = {
	render: () => <YourComponent />
}
`})}),`
`,e.jsxs(t.p,{children:["Stories in a file whose meta is tagged with ",e.jsx(t.code,{children:"var"})," will show the ",e.jsx(t.strong,{children:"var"})," badge in the sidebar."]})]})}function h(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{h as default};
