import{j as e}from"./jsx-runtime-D_zvdyIk.js";function s(r){return{storySort:r}}const v={title:"parameters/defineStorySort",tags:["new"]},t={parameters:s({method:"alphabetical"}),render:()=>e.jsxs("div",{children:["Story with alphabetical sorting using ",e.jsx("code",{children:"defineStorySort"})]})},o={parameters:s({method:"custom",order:["Introduction","Components","*","Examples"]}),render:()=>e.jsxs("div",{children:["Story with custom sort order using ",e.jsx("code",{children:"defineStorySort"})]})},n={parameters:s({method:"alphabetical-by-kind",locales:"en"}),render:()=>e.jsxs("div",{children:["Story with alphabetical sorting by kind using ",e.jsx("code",{children:"defineStorySort"})]})},i={parameters:s((r,a)=>r.title.includes("Introduction")?-1:a.title.includes("Introduction")?1:r.title.localeCompare(a.title)),render:()=>e.jsxs("div",{children:["Story with custom sort function using ",e.jsx("code",{children:"defineStorySort"})]})};var d,c,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: defineStorySort({
    method: 'alphabetical'
  }),
  render: () => <div>
            Story with alphabetical sorting using <code>defineStorySort</code>
        </div>
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,m,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: defineStorySort({
    method: 'custom',
    order: ['Introduction', 'Components', '*', 'Examples']
  }),
  render: () => <div>
            Story with custom sort order using <code>defineStorySort</code>
        </div>
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var S,h,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: defineStorySort({
    method: 'alphabetical-by-kind',
    locales: 'en'
  }),
  render: () => <div>
            Story with alphabetical sorting by kind using <code>defineStorySort</code>
        </div>
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,g,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: defineStorySort((a, b) => {
    // Custom sorting logic example
    if (a.title.includes('Introduction')) return -1;
    if (b.title.includes('Introduction')) return 1;
    return a.title.localeCompare(b.title);
  }),
  render: () => <div>
            Story with custom sort function using <code>defineStorySort</code>
        </div>
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const j=["AlphabeticalSort","CustomSort","AlphabeticalByKindSort","CustomSortFunction"];export{n as AlphabeticalByKindSort,t as AlphabeticalSort,o as CustomSort,i as CustomSortFunction,j as __namedExportsOrder,v as default};
