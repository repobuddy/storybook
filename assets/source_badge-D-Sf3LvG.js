import{j as e,M as n}from"./iframe-DP2Lvi7r.js";import{useMDXComponents as r}from"./index-BZAQkzkB.js";import"./preload-helper-PPVm8Dsz.js";function t(s){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n,{title:"storybook-addon-tag-badges/sourceBadge"}),`
`,e.jsx(o.h1,{id:"source-badge",children:"Source badge"}),`
`,e.jsxs(o.p,{children:["Use the ",e.jsx(o.strong,{children:"source"})," badge to indicate stories that show source code in the docs. The badge displays ",e.jsx(o.code,{children:"</>"}),' with a "Source Code" tooltip.']}),`
`,e.jsx(o.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(o.p,{children:["Add the ",e.jsx(o.code,{children:"source"})," tag to your story and use the ",e.jsx(o.code,{children:"showDocSource()"})," decorator so the story's source is visible in the docs."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { showDocSource } from '#repobuddy/storybook'

export const YourStory = {
	tags: ['source'],
	decorators: [showDocSource()],
	render: () => <YourComponent />
}
`})}),`
`,e.jsxs(o.p,{children:["Stories tagged with ",e.jsx(o.code,{children:"source"})," will show the ",e.jsx(o.code,{children:"</>"})," badge in the sidebar and docs."]})]})}function h(s={}){const{wrapper:o}={...r(),...s.components};return o?e.jsx(o,{...s,children:e.jsx(t,{...s})}):t(s)}export{h as default};
