import{j as c,d as s}from"./iframe-DaILpW6B.js";import{d as a}from"./dedent-DVFkJXTl.js";import{s as g}from"./show_doc_source-Bjzrey6r.js";import{d as I}from"./define_parameters-BUOuTmGI.js";const w={title:"parameters/StorySortParam",tags:["new","version:1.0","autodocs"],decorators:[g()],parameters:I({docs:{description:{component:"`StorySortParam` is used to define how stories should be sorted in the navigation sidebar. It is used in `preview.ts`."}}}),render:()=>c.jsx(c.Fragment,{})},t={parameters:{options:{options:{storySort:{method:"alphabetical"}}},...s({source:{code:a`{
                    options: {
                        storySort: { method: "alphabetical" }
                    } satisfies StorySortParam
                }`}})}},o={parameters:{options:{options:{storySort:{method:"custom",order:["Introduction","Components","*","Examples"]}}},...s({source:{code:a`{
                    options: {
                        storySort: { method: "custom", order: ["Introduction", "Components", "*", "Examples"] }
                    } satisfies StorySortParam
                }`}})}},r={parameters:{options:{options:{storySort:{method:"alphabetical-by-kind",locales:"en"}}},...s({source:{code:a`{
                    options: {
                        storySort: { method: "alphabetical-by-kind", locales: "en" }
                    } satisfies StorySortParam
                }`}})}},e={parameters:{options:{storySort:(n,i)=>n.title.includes("Introduction")?-1:i.title.includes("Introduction")?1:n.title.localeCompare(i.title)},...s({source:{code:a`{
                    options: {
                        storySort: (a, b) => {
                            // Custom sorting logic example
                            if (a.title.includes('Introduction')) return -1
                            if (b.title.includes('Introduction')) return 1
                            return a.title.localeCompare(b.title)
                        }
                    } satisfies StorySortParam
                }`}})}};var m,d,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    options: {
      options: {
        storySort: {
          method: 'alphabetical'
        }
      } satisfies StorySortParam
    },
    ...defineDocsParam({
      source: {
        code: dedent\`{
                    options: {
                        storySort: { method: "alphabetical" }
                    } satisfies StorySortParam
                }\`
      }
    })
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,S;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    options: {
      options: {
        storySort: {
          method: 'custom',
          order: ['Introduction', 'Components', '*', 'Examples']
        }
      } satisfies StorySortParam
    },
    ...defineDocsParam({
      source: {
        code: dedent\`{
                    options: {
                        storySort: { method: "custom", order: ["Introduction", "Components", "*", "Examples"] }
                    } satisfies StorySortParam
                }\`
      }
    })
  }
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var y,f,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    options: {
      options: {
        storySort: {
          method: 'alphabetical-by-kind',
          locales: 'en'
        }
      } satisfies StorySortParam
    },
    ...defineDocsParam({
      source: {
        code: dedent\`{
                    options: {
                        storySort: { method: "alphabetical-by-kind", locales: "en" }
                    } satisfies StorySortParam
                }\`
      }
    })
  }
}`,...(h=(f=r.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,P,C;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    options: {
      storySort: (a, b) => {
        // Custom sorting logic example
        if (a.title.includes('Introduction')) return -1;
        if (b.title.includes('Introduction')) return 1;
        return a.title.localeCompare(b.title);
      }
    } satisfies StorySortParam,
    ...defineDocsParam({
      source: {
        code: dedent\`{
                    options: {
                        storySort: (a, b) => {
                            // Custom sorting logic example
                            if (a.title.includes('Introduction')) return -1
                            if (b.title.includes('Introduction')) return 1
                            return a.title.localeCompare(b.title)
                        }
                    } satisfies StorySortParam
                }\`
      }
    })
  }
}`,...(C=(P=e.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const A=["AlphabeticalSort","CustomSort","AlphabeticalByKindSort","CustomSortFunction"];export{r as AlphabeticalByKindSort,t as AlphabeticalSort,o as CustomSort,e as CustomSortFunction,A as __namedExportsOrder,w as default};
