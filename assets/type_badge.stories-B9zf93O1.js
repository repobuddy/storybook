import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-r2SG9fgm.js";import{g as i,m as a,t as o}from"./src-BUA0lNvr.js";var s,c,l,u,d;e((()=>{n(),o(),s=t(),c={title:`storybook-addon-tag-badges/typeBadge`,tags:[`var`,`!snapshot`,`version:2.15`],render:()=>(0,s.jsx)(s.Fragment,{})},l={tags:[`type`],decorators:[a({content:(0,s.jsxs)(`p`,{children:[`Story that showcases or documents TypeScript types. In the sidebar it appears as `,(0,s.jsx)(`code`,{children:`<T>`}),`.`]})}),i({source:r`export const YourStory = {
                tags: ['type'],
                render: () => <YourComponent />
            }`})]},u={tags:[`unit`],render:()=>(0,s.jsx)(`div`,{children:`Dummy story to force badge to show in story and not hoisted up`})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['type'],
  decorators: [withStoryCard({
    content: <p>
                    Story that showcases or documents TypeScript types. In the sidebar it appears as <code>{'<T>'}</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['type'],
                render: () => <YourComponent />
            }\`
  })]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
}`,...u.parameters?.docs?.source}}},d=[`TypeBadge`,`DummyStory`]}))();export{u as DummyStory,l as TypeBadge,d as __namedExportsOrder,c as default};