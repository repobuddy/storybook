import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dedent-DQaCLeUO.js";import{O as i,t as a,w as o}from"./src-yOJfan-s.js";var s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),s=t(),c={title:`storybook-addon-tag-badges/varBadge`,tags:[`var`,`!snapshot`,`version:2.16`],render:()=>(0,s.jsx)(s.Fragment,{})},l={name:`Variable Badge`,tags:[`var`],decorators:[o({content:(0,s.jsxs)(`p`,{children:[`Story that describes values and variables. In the sidebar it appears as `,(0,s.jsx)(`code`,{children:`var`}),`.`]})}),i({source:r`export default {
                tags: ['var'],
                // ...
            } satisfies Meta

            export const YourStory = {
                render: () => <YourComponent />
            }`})]},u={tags:[`unit`],render:()=>(0,s.jsx)(`div`,{children:`Dummy story to force badge to show in story and not hoisted up`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Variable Badge',
  tags: ['var'],
  decorators: [withStoryCard({
    content: <p>
                    Story that describes values and variables. In the sidebar it appears as <code>var</code>.
                </p>
  }), showSource({
    source: dedent\`export default {
                tags: ['var'],
                // ...
            } satisfies Meta

            export const YourStory = {
                render: () => <YourComponent />
            }\`
  })]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...u.parameters?.docs?.source}}},d=[`VarBadge`,`DummyStory`]})))()}f();export{u as DummyStory,l as VarBadge,d as __namedExportsOrder,c as default};