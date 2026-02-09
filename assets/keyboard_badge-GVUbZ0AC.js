import{j as e,M as s}from"./iframe-F9YGdXtg.js";import{useMDXComponents as r}from"./index-DT598CRY.js";import"./preload-helper-PPVm8Dsz.js";function t(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"storybook-addon-tag-badges/keyboardBadge"}),`
`,e.jsx(n.h1,{id:"keyboard-badge",children:"Keyboard badge"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"keyboard"}),' badge for stories with keyboard interactions. The badge displays ⌨️ with a "Keyboard Interaction" tooltip.']}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"keyboard"})," tag to your story."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['keyboard'],
	render: () => <YourComponent />
}
`})})]})}function c(o={}){const{wrapper:n}={...r(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{c as default};
