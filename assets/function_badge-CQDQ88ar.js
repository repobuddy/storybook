import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{_ as n,g as r,h as i,v as a}from"./iframe-y1S8zoWT.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...a(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`storybook-addon-tag-badges/functionBadge`}),`
`,(0,c.jsx)(t.h1,{id:`function-badge`,children:`Function badge`}),`
`,(0,c.jsxs)(t.p,{children:[`Use the `,(0,c.jsx)(t.strong,{children:`func`}),` badge for stories that showcase or document functions. The badge displays `,(0,c.jsx)(t.strong,{children:`ƒ(x)`}),` with a "Function" tooltip. This badge is hidden in MDX docs.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`Add the `,(0,c.jsx)(t.code,{children:`func`}),` tag to your meta (default export). No need to add it to each story.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`export default {
	tags: ['func'],
	// ...
} satisfies Meta

export const YourStory = {
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Stories in a file whose meta is tagged with `,(0,c.jsx)(t.code,{children:`func`}),` will show the `,(0,c.jsx)(t.strong,{children:`ƒ(x)`}),` badge in the sidebar.`]})]})}function s(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),n(),r()})))()}l();export{s as default};