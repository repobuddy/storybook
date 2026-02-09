import{j as t,M as s}from"./iframe-DX012i83.js";import{useMDXComponents as r}from"./index-BQs7DDjK.js";import"./preload-helper-PPVm8Dsz.js";function o(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"storybook-addon-tag-badges/integrationBadge"}),`
`,t.jsx(e.h1,{id:"integration-badge",children:"Integration badge"}),`
`,t.jsxs(e.p,{children:["Use the ",t.jsx(e.strong,{children:"integration"}),' badge for stories that serve as integration tests. The badge displays 🔗 with an "Integration Test" tooltip. It is hidden from the sidebar by default.']}),`
`,t.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,t.jsxs(e.p,{children:["Add the ",t.jsx(e.code,{children:"integration"})," tag to your story."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['integration'],
	render: () => <YourComponent />
}
`})})]})}function g(n={}){const{wrapper:e}={...r(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(o,{...n})}):o(n)}export{g as default};
