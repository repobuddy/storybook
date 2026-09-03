import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{_ as n,g as r,h as i,v as a}from"./iframe-LciDwcCM.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...a(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`storybook-addon-tag-badges/sourceBadge`}),`
`,(0,c.jsx)(t.h1,{id:`source-badge`,children:`Source badge`}),`
`,(0,c.jsxs)(t.p,{children:[`Use the `,(0,c.jsx)(t.strong,{children:`source`}),` badge to indicate stories that show source code in the docs. The badge displays `,(0,c.jsx)(t.code,{children:`</>`}),` with a "Source Code" tooltip.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`Add the `,(0,c.jsx)(t.code,{children:`source`}),` tag to your story and use the `,(0,c.jsx)(t.code,{children:`showSource()`}),` decorator so the story's source is visible in the docs.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { showSource } from '#repobuddy/storybook'

export const YourStory = {
	tags: ['source'],
	decorators: [showSource()],
	render: () => <YourComponent />
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Stories tagged with `,(0,c.jsx)(t.code,{children:`source`}),` will show the `,(0,c.jsx)(t.code,{children:`</>`}),` badge in the sidebar and docs.`]})]})}function s(e={}){let{wrapper:t}={...a(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),n(),r()})))()}l();export{s as default};