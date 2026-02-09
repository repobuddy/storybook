import{j as t,M as r}from"./iframe-DKaBjCts.js";import{useMDXComponents as o}from"./index-CO5LtjZF.js";import"./preload-helper-PPVm8Dsz.js";function s(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"storybook-addon-tag-badges/unitBadge"}),`
`,t.jsx(e.h1,{id:"unit-badge",children:"Unit badge"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.strong,{children:"unit"}),' badge for stories that serve as unit tests. The badge displays 🧪 with a "Unit Test" tooltip.']}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsxs(e.p,{children:["Add the ",t.jsx(e.code,{children:"unit"})," tag to your story."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['unit'],
	render: () => <YourComponent />
}
`})})]})}function c(n={}){const{wrapper:e}={...o(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(s,{...n})}):s(n)}export{c as default};
