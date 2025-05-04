import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as m}from"./define_parameters-Dh8E5HRZ.js";const h={title:"parameters/defineParameters",tags:["new"]},e={parameters:m({layout:"centered"}),render:()=>t.jsxs("div",{children:["Story with centered layout using ",t.jsx("code",{children:"defineParameters"})]})},r={parameters:m({layout:"padded",something:{blah:"beer"}}),render:()=>t.jsx("div",{children:"Story with other parameters not defined in the type"})};var a,s,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: defineParameters({
    layout: 'centered'
  }),
  render: () => <div>
            Story with centered layout using <code>defineParameters</code>
        </div>
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var d,o,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: defineParameters({
    layout: 'padded',
    something: {
      blah: 'beer'
    }
  }),
  render: () => <div>Story with other parameters not defined in the type</div>
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const u=["WithLayout","WithOtherParams"];export{e as WithLayout,r as WithOtherParams,u as __namedExportsOrder,h as default};
