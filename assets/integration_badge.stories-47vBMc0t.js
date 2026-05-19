import{i as e}from"./preload-helper-Cs4UwXAW.js";import{lt as t}from"./iframe-cIlh6n6x.js";import{n,t as r}from"./dedent-DwYWIg5g.js";import{g as i,m as a,t as o}from"./src-BqlPNXF8.js";var s,c,l,u;e((()=>{n(),o(),s=t(),c={title:`storybook-addon-tag-badges/integrationBadge`,tags:[`var`,`!snapshot`,`version:0.9`],render:()=>(0,s.jsx)(s.Fragment,{})},l={tags:[`integration`],decorators:[a({content:(0,s.jsxs)(`p`,{children:[`Integration test story. This badge is hidden in the sidebar; it appears as `,(0,s.jsx)(`code`,{children:`🔗`}),` when displayed elsewhere.`]})}),i({source:r`export const YourStory = {
                tags: ['integration'],
                render: () => <YourComponent />
            }`})]},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['integration'],
  decorators: [withStoryCard({
    content: <p>
                    Integration test story. This badge is hidden in the sidebar; it appears as <code>🔗</code> when displayed
                    elsewhere.
                </p>
  }), showSource({
    source: dedent\`export const YourStory = {
                tags: ['integration'],
                render: () => <YourComponent />
            }\`
  })]
}`,...l.parameters?.docs?.source}}},u=[`IntegrationTestBadge`]}))();export{l as IntegrationTestBadge,u as __namedExportsOrder,c as default};