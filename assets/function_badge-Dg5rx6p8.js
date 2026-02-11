import{j as e,M as r}from"./iframe-B7G5b8mu.js";import{useMDXComponents as s}from"./index-DJy9XNyl.js";import"./preload-helper-PPVm8Dsz.js";function o(t){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"storybook-addon-tag-badges/functionBadge"}),`
`,e.jsx(n.h1,{id:"function-badge",children:"Function badge"}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.strong,{children:"func"})," badge for stories that showcase or document functions. The badge displays ",e.jsx(n.strong,{children:"ƒ(x)"}),' with a "Function" tooltip. This badge is hidden in MDX docs.']}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["Add the ",e.jsx(n.code,{children:"func"})," tag to your meta (default export). No need to add it to each story."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`export default {
	tags: ['func'],
	// ...
} satisfies Meta

export const YourStory = {
	render: () => <YourComponent />
}
`})}),`
`,e.jsxs(n.p,{children:["Stories in a file whose meta is tagged with ",e.jsx(n.code,{children:"func"})," will show the ",e.jsx(n.strong,{children:"ƒ(x)"})," badge in the sidebar."]})]})}function c(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{c as default};
