import{j as t,M as r}from"./iframe-xG9xzY9M.js";import{useMDXComponents as o}from"./index-CjXovQoY.js";import"./preload-helper-PPVm8Dsz.js";function e(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(r,{title:"storybook-addon-tag-badges/snapshotBadge"}),`
`,t.jsx(n.h1,{id:"snapshot-badge",children:"Snapshot badge"}),`
`,t.jsxs(n.p,{children:["Use the ",t.jsx(n.strong,{children:"snapshot"}),' badge for stories with snapshot tests. The badge displays 📸 with a "Snapshot Test" tooltip. It is shown in the toolbar on the story canvas, not in the sidebar.']}),`
`,t.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,t.jsxs(n.p,{children:["Add the ",t.jsx(n.code,{children:"snapshot"})," tag to your story."]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['snapshot'],
	render: () => <YourComponent />
}
`})})]})}function i(s={}){const{wrapper:n}={...o(),...s.components};return n?t.jsx(n,{...s,children:t.jsx(e,{...s})}):e(s)}export{i as default};
