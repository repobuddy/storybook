import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-BpweSj9K.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,t as s,w as c}from"./src-Dhw3iRbJ.js";var l,u,d,f,p;function m(){return(m=e((()=>{i(),s(),n(),l=t(),u=r.meta({title:`storybook-addon-tag-badges/functionBadge`,tags:[`var`,`!snapshot`,`version:2.16`],render:()=>(0,l.jsx)(l.Fragment,{})}),d=u.story({tags:[`func`],decorators:[c({content:(0,l.jsxs)(`p`,{children:[`Story that showcases or documents functions. In the sidebar it appears as `,(0,l.jsx)(`code`,{children:`ƒ(x)`}),`.`]})}),o({source:a`export const YourStory = {
                tags: ['func'],
                render: () => <YourComponent />
            }`})]}),f=u.story({tags:[`unit`],render:()=>(0,l.jsx)(`div`,{children:`Dummy story to force badge to show in story and not hoisted up`})}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['unit'],
  render: () => <div>Dummy story to force badge to show in story and not hoisted up</div>
})`,...f.input.parameters?.docs?.source}}},p=[`FunctionBadge`,`DummyStory`]})))()}m();export{f as DummyStory,d as FunctionBadge,p as __namedExportsOrder};