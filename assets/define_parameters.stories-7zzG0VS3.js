import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{d as s}from"./dedent-DVFkJXTl.js";import{s as W,d as t}from"./define_docs_param-DYEy_vX9.js";import{d as o}from"./define_parameters-Dh8E5HRZ.js";const j={title:"parameters/defineParameters",tags:["new","version:1.0.0"],decorators:[W()],render:()=>d.jsx(d.Fragment,{})},r={parameters:{...o({layout:"centered"}),...t({source:{code:s`defineParameters({
                layout: 'centered'
            })`}})}},e={parameters:{...o({actions:{argTypesRegex:"^on[A-Z].*"}}),...t({source:{code:s`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })`}})}},a={parameters:{...o({backgrounds:{default:"light"}}),...t({source:{code:s`defineParameters({
                backgrounds: {
                    default: 'light'
                }
            })`}})}},n={parameters:{...o({layout:"padded",something:{blah:"beer"}}),...t({source:{code:s`defineParameters({
                layout: 'padded',
                something: {
                    blah: 'beer'
                }
            })`}})},render:()=>d.jsx("div",{children:"You can use this to configure parameters that are not defined in the type"})};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    ...defineParameters({
      layout: 'centered'
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineParameters({
                layout: 'centered'
            })\`
      }
    })
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,p,f,g,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    ...defineParameters<ActionsParam>({
      actions: {
        argTypesRegex: '^on[A-Z].*'
      }
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineParameters<ActionsParam>({
                actions: {
                    argTypesRegex: '^on[A-Z].*'
                }
            })\`
      }
    })
  }
}`,...(f=(p=e.parameters)==null?void 0:p.docs)==null?void 0:f.source},description:{story:"Example showing how to use `defineParameters` to configure actions parameters",...(h=(g=e.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var P,l,y;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    ...defineParameters({
      backgrounds: {
        default: 'light'
      }
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineParameters({
                backgrounds: {
                    default: 'light'
                }
            })\`
      }
    })
  }
}`,...(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var b,x,A;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    ...defineParameters({
      layout: 'padded',
      something: {
        blah: 'beer'
      }
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineParameters({
                layout: 'padded',
                something: {
                    blah: 'beer'
                }
            })\`
      }
    })
  },
  render: () => <div>You can use this to configure parameters that are not defined in the type</div>
}`,...(A=(x=n.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const v=["WithLayout","WithActionsParam","WithBackgroundsParam","WithOtherParams"];export{e as WithActionsParam,a as WithBackgroundsParam,r as WithLayout,n as WithOtherParams,v as __namedExportsOrder,j as default};
