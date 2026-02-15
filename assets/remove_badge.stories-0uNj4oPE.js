import{j as e}from"./iframe-5VV-1lks.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"storybook-addon-tag-badges/removeBadge",tags:["var","version:next"],render:()=>e.jsx(e.Fragment,{})},s={tags:["remove:2"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Feature or component scheduled for removal in version 2. Badge shows ☠️ v2."}),e.jsx("code",{children:"tags: ['remove:2']"})]})},r={tags:["remove"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Feature or component scheduled for removal in the next release."}),e.jsx("code",{children:"tags: ['remove']"})]})},o={tags:["remove:next"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Feature or component scheduled for removal in the next release."}),e.jsx("code",{children:"tags: ['remove:next']"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['remove:2'],
  render: () => <div>
            <div>Feature or component scheduled for removal in version 2. Badge shows ☠️ v2.</div>
            <code>tags: ['remove:2']</code>
        </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['remove'],
  render: () => <div>
            <div>Feature or component scheduled for removal in the next release.</div>
            <code>tags: ['remove']</code>
        </div>
}`,...r.parameters?.docs?.source},description:{story:"Same badge as RemoveInNext; `remove` and `remove:next` are equivalent.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['remove:next'],
  render: () => <div>
            <div>Feature or component scheduled for removal in the next release.</div>
            <code>tags: ['remove:next']</code>
        </div>
}`,...o.parameters?.docs?.source},description:{story:"Same badge as RemovePlain; `remove` and `remove:next` are equivalent.",...o.parameters?.docs?.description}}};const t=["RemoveInVersion","RemovePlain","RemoveInNext"];export{o as RemoveInNext,s as RemoveInVersion,r as RemovePlain,t as __namedExportsOrder,d as default};
