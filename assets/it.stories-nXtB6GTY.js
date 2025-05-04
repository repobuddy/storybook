import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{e as p}from"./index-BW375jh7.js";const u={title:"testing/it",tags:["todo"]},e={parameters:{storyName:"test description"},tags:["!test"],render:()=>l.jsx("div",{children:"Hello"}),play:async({canvas:s})=>{await p(s.getByText("Hello")).toBeInTheDocument()}},t={tags:["!test"],render:()=>l.jsx("div",{children:"Hello"}),play:async({canvas:s})=>{await p(s.getByText("Hello")).toBeInTheDocument()}};var a,n,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    storyName: 'test description'
  },
  tags: ['!test'],
  render: () => {
    return <div>Hello</div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('Hello')).toBeInTheDocument();
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var o,c,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  tags: ['!test'],
  render: () => {
    return <div>Hello</div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText('Hello')).toBeInTheDocument();
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const g=["BasicUsage","SkipTest"];export{e as BasicUsage,t as SkipTest,g as __namedExportsOrder,u as default};
