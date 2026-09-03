import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-LciDwcCM.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,t as s,w as c}from"./src-Dhw3iRbJ.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{i(),s(),n(),l=t(),u=r.meta({title:`storybook-addon-tag-badges/removeBadge`,tags:[`var`,`!snapshot`,`version:2.19`],render:()=>(0,l.jsx)(l.Fragment,{})}),d=u.story({tags:[`remove:2`],decorators:[c({content:(0,l.jsxs)(`p`,{children:[`Feature or component scheduled for removal in version 2.0.0. In the sidebar it appears as `,(0,l.jsx)(`code`,{children:`☠️v2`}),`.`]})}),o({source:a`export const YourStory = {
                tags: ['remove:2'],
                render: () => <YourComponent />
            }`})]}),f=u.story({tags:[`remove`],decorators:[c({content:(0,l.jsxs)(`p`,{children:[`Feature or component scheduled for removal in the next release. In the sidebar it appears as `,(0,l.jsx)(`code`,{children:`☠️`}),`.`]})}),o({source:a`export const YourStory = {
                tags: ['remove'],
                render: () => <YourComponent />
            }`})]}),p=u.story({tags:[`remove:next`],decorators:[c({content:(0,l.jsxs)(`p`,{children:[`Feature or component scheduled for removal in the next release. In the sidebar it appears as `,(0,l.jsx)(`code`,{children:`☠️`}),`.`]})}),o({source:a`export const YourStory = {
                tags: ['remove:next'],
                render: () => <YourComponent />
            }`})]}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source},description:{story:"Same badge as RemoveInNext; `remove` and `remove:next` are equivalent.",...f.input.parameters?.docs?.description}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source},description:{story:"Same badge as RemovePlain; `remove` and `remove:next` are equivalent.",...p.input.parameters?.docs?.description}}},m=[`RemoveInVersion`,`RemovePlain`,`RemoveInNext`]})))()}h();export{p as RemoveInNext,d as RemoveInVersion,f as RemovePlain,m as __namedExportsOrder};