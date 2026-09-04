import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{c as t,s as n}from"./blocks-uvQy2ZS2.js";import{a as r}from"./chunk-W22LQPXL-B066xLLY.js";import{i,r as a}from"./react-Bl2r1tuC.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n,{title:`storybook-addon-tag-badges/knownIssueBadge`}),`
`,(0,c.jsx)(t.h1,{id:`known-issue-badge`,children:`Known issue badge`}),`
`,(0,c.jsxs)(t.p,{children:[`Use the `,(0,c.jsx)(t.strong,{children:`known-issue`}),` badge to mark a story that documents a known, accepted issue and is therefore expected to fail its tests, such as an a11y story that demonstrates a color contrast problem that has not been fixed yet. The badge displays 🩹 with a "Known Issue" tooltip.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Use `,(0,c.jsx)(t.code,{children:`bug`}),` (🐛) instead when the story reproduces a defect that is meant to be fixed, and `,(0,c.jsx)(t.code,{children:`known-issue`}),` when the failure is acknowledged and left in place as documentation.`]}),`
`,(0,c.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,c.jsxs)(t.p,{children:[`Add the `,(0,c.jsx)(t.code,{children:`known-issue`}),` tag to your story.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`export const YourStory = {
	tags: ['known-issue'],
	render: () => <YourComponent />
}
`})})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),a(),t()})))()}l();export{s as default};