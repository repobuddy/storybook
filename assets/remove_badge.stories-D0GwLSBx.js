import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-C7gAFWmM.js";import{g as i,m as a,t as o}from"./src-xVZ3M_hi.js";var s,c,l,u,d,f;e((()=>{n(),o(),s=t(),c={title:`storybook-addon-tag-badges/removeBadge`,tags:[`var`,`!snapshot`,`version:2.19`],render:()=>(0,s.jsx)(s.Fragment,{})},l={tags:[`remove:2`],decorators:[a({content:(0,s.jsxs)(`p`,{children:[`Feature or component scheduled for removal in version 2.0.0. In the sidebar it appears as `,(0,s.jsx)(`code`,{children:`☠️v2`}),`.`]})}),i({source:r`export const YourStory = {
                tags: ['remove:2'],
                render: () => <YourComponent />
            }`})]},u={tags:[`remove`],decorators:[a({content:(0,s.jsxs)(`p`,{children:[`Feature or component scheduled for removal in the next release. In the sidebar it appears as `,(0,s.jsx)(`code`,{children:`☠️`}),`.`]})}),i({source:r`export const YourStory = {
                tags: ['remove'],
                render: () => <YourComponent />
            }`})]},d={tags:[`remove:next`],decorators:[a({content:(0,s.jsxs)(`p`,{children:[`Feature or component scheduled for removal in the next release. In the sidebar it appears as `,(0,s.jsx)(`code`,{children:`☠️`}),`.`]})}),i({source:r`export const YourStory = {
                tags: ['remove:next'],
                render: () => <YourComponent />
            }`})]},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['remove:2'],
  decorators: [withStoryCard({
    content: <p>
                    Feature or component scheduled for removal in version 2.0.0. In the sidebar it appears as <code>☠️v2</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['remove:2'],
                render: () => <YourComponent />
            }\`
  })]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['remove'],
  decorators: [withStoryCard({
    content: <p>
                    Feature or component scheduled for removal in the next release. In the sidebar it appears as <code>☠️</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['remove'],
                render: () => <YourComponent />
            }\`
  })]
}`,...u.parameters?.docs?.source},description:{story:"Same badge as RemoveInNext; `remove` and `remove:next` are equivalent.",...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['remove:next'],
  decorators: [withStoryCard({
    content: <p>
                    Feature or component scheduled for removal in the next release. In the sidebar it appears as <code>☠️</code>.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['remove:next'],
                render: () => <YourComponent />
            }\`
  })]
}`,...d.parameters?.docs?.source},description:{story:"Same badge as RemovePlain; `remove` and `remove:next` are equivalent.",...d.parameters?.docs?.description}}},f=[`RemoveInVersion`,`RemovePlain`,`RemoveInNext`]}))();export{d as RemoveInNext,l as RemoveInVersion,u as RemovePlain,f as __namedExportsOrder,c as default};