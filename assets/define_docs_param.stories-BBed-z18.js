import{j as D}from"./jsx-runtime-D_zvdyIk.js";function s(l){return{docs:l}}const g={title:"Parameters/defineDocsParam",tags:["autodocs","new","version:1.0.0"],parameters:s({description:{component:"`docs.description.component` can be used to describe the component in meta. It has no effect on the stories."}}),render:()=>D.jsx("div",{children:"Hello"})},e={},r={parameters:s({description:{story:"`docs.description.story` can also be used to describe the story."}})},o={parameters:s({source:{code:"Source code"}})};var t,c,a,n,d;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(a=(c=e.parameters)==null?void 0:c.docs)==null?void 0:a.source},description:{story:"Storybook uses JSDoc to generate documentation for the story.",...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.description}}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    description: {
      story: '\`docs.description.story\` can also be used to describe the story.'
    }
  })
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,y,S,f,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: defineDocsParam({
    source: {
      code: 'Source code'
    }
  })
}`,...(S=(y=o.parameters)==null?void 0:y.docs)==null?void 0:S.source},description:{story:"`docs.source.code` can be used to define the source code of the story.",...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.description}}};const x=["JSDoc","WithStoryDescription","SourceCode"];export{e as JSDoc,o as SourceCode,r as WithStoryDescription,x as __namedExportsOrder,g as default};
