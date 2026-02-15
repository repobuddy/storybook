import{j as e,M as r}from"./iframe-Sqf8-kFk.js";import{useMDXComponents as s}from"./index-BuotTO-Z.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"storybook-addon-tag-badges/newBadge"}),`
`,e.jsx(n.h1,{id:"new-badge",children:"New badge"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"new"}),' badge for recently added components or props/features. The badge displays 🆕 with a "New" tooltip.']}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"new"})," tag to your story."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['new'],
	render: () => <YourComponent />
}
`})})]})}function i(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{i as default};
