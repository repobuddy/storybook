import{j as e,M as s}from"./iframe-B9TY5VBC.js";import{useMDXComponents as o}from"./index-B3dN6pKV.js";import"./preload-helper-PPVm8Dsz.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"storybook-addon-tag-badges/internalBadge"}),`
`,e.jsx(n.h1,{id:"internal-badge",children:"Internal badge"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"internal"}),' badge to hide stories from the sidebar during production build. The badge displays 🔒 with an "Internal" tooltip. Internal stories are excluded from the sidebar by default in filter selection.']}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"internal"})," tag to your story. Configure your ",e.jsx(n.code,{children:".storybook/main.ts"})," so that stories with the ",e.jsx(n.code,{children:"internal"})," tag are excluded from the sidebar in production:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export const YourStory = {
	tags: ['internal'],
	render: () => <YourComponent />
}
`})}),`
`,e.jsxs(n.p,{children:["In ",e.jsx(n.code,{children:".storybook/main.ts"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`export default {
	tags: {
		internal: {
			excludeFromSidebar: process.env.NODE_ENV === 'production'
		}
	}
}
`})}),`
`,e.jsx(n.p,{children:"Build with:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`NODE_ENV=production storybook build
`})})]})}function c(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{c as default};
