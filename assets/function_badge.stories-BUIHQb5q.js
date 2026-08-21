import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dedent-DQaCLeUO.js";import{O as i,t as a,w as o}from"./src-D21r-Siz.js";var s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),s=t(),c={title:`storybook-addon-tag-badges/functionBadge`,tags:[`var`,`!snapshot`,`version:2.16`],render:()=>(0,s.jsx)(s.Fragment,{})},l={tags:[`func`],decorators:[o({content:(0,s.jsxs)(`p`,{children:[`Story that showcases or documents functions. In the sidebar it appears as `,(0,s.jsx)(`code`,{children:`ƒ(x)`}),`.`]})}),i({source:r`export const YourStory = {
                tags: ['func'],
                render: () => <YourComponent />
            }`})]},u={tags:[`unit`],render:()=>(0,s.jsx)(`div`,{children:`Dummy story to force badge to show in story and not hoisted up`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['func'],
  decorators: [withStoryCard({
    content: <p>
                    Story that showcases or documents functions. In the sidebar it appears as <code>ƒ(x)</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['func'],
                render: () => <YourComponent />
            }\`
  })]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...u.parameters?.docs?.source}}},d=[`FunctionBadge`,`DummyStory`]})))()}f();export{u as DummyStory,l as FunctionBadge,d as __namedExportsOrder,c as default};