import{j as n,M as d}from"./iframe-CgJZ0YZZ.js";import{useMDXComponents as s}from"./index-Bmroi7ng.js";import"./preload-helper-PPVm8Dsz.js";function t(o){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(d,{title:"storybook-addon-tag-badges/codeOnlyBadge"}),`
`,n.jsx(e.h1,{id:"code-only-badge",children:"Code-only badge"}),`
`,n.jsxs(e.p,{children:["Use the ",n.jsx(e.strong,{children:"code-only"}),' badge for components that only exist in code and not in design. The badge displays 📝 with a "Code Only" tooltip. This badge is hidden in MDX docs.']}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsxs(e.p,{children:["Add the ",n.jsx(e.code,{children:"code-only"})," tag to your story."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['code-only'],
	render: () => <YourComponent />
}
`})})]})}function i(o={}){const{wrapper:e}={...s(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(t,{...o})}):t(o)}export{i as default};
