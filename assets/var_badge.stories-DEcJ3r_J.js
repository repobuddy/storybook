import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-TIXhxgm8.js";import{g as i,m as a,t as o}from"./src-XpyBqwIv.js";var s,c,l,u,d;e((()=>{n(),o(),s=t(),c={title:`storybook-addon-tag-badges/varBadge`,tags:[`var`,`!snapshot`,`version:2.16`],render:()=>(0,s.jsx)(s.Fragment,{})},l={name:`Variable Badge`,tags:[`var`],decorators:[a({content:(0,s.jsxs)(`p`,{children:[`Story that describes values and variables. In the sidebar it appears as `,(0,s.jsx)(`code`,{children:`var`}),`.`]})}),i({source:r`export default {
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
}`,...u.parameters?.docs?.source}}},d=[`VarBadge`,`DummyStory`]}))();export{u as DummyStory,l as VarBadge,d as __namedExportsOrder,c as default};