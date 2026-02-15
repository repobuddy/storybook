import{j as e,M as s}from"./iframe-ChM6l5-W.js";import{useMDXComponents as r}from"./index-VdOiZ3DN.js";import"./preload-helper-PPVm8Dsz.js";function n(o){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"storybook-addon-tag-badges/editorBadge"}),`
`,e.jsx(t.h1,{id:"editor-badge",children:"Editor badge"}),`
`,e.jsxs(t.p,{children:["Use the ",e.jsx(t.strong,{children:"editor"}),' badge for stories with a live editor. The badge displays ✏️ with an "Editor" tooltip.']}),`
`,e.jsx(t.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(t.p,{children:["Add the ",e.jsx(t.code,{children:"editor"})," tag to your story."]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['editor'],
	render: () => <YourComponent />
}
`})})]})}function c(o={}){const{wrapper:t}={...r(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(n,{...o})}):n(o)}export{c as default};
