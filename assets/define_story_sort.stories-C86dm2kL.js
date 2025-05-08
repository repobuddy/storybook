import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{d as i}from"./dedent-DVFkJXTl.js";import{s as I}from"./show_doc_source-CWgnZoeJ.js";import{d as n}from"./define_docs_param-lmgaBKCF.js";function s(e){return{storySort:e}}const k={title:"parameters/defineStorySort",tags:["new","version:1.0.0"],decorators:[I()],render:()=>d.jsx(d.Fragment,{})},t={parameters:{...s({method:"alphabetical"}),...n({source:{code:'defineStorySort({ method: "alphabetical" })'}})}},o={parameters:{...s({method:"custom",order:["Introduction","Components","*","Examples"]}),...n({source:{code:i`defineStorySort({
                    method: "custom",
                    order: ["Introduction", "Components", "*", "Examples"]
                })`}})}},r={parameters:{...s({method:"alphabetical-by-kind",locales:"en"}),...n({source:{code:i`defineStorySort({
                    method: "alphabetical-by-kind",
                    locales: "en"
                })`}})}},a={parameters:{...s((e,c)=>e.title.includes("Introduction")?-1:c.title.includes("Introduction")?1:e.title.localeCompare(c.title)),...n({source:{code:i`defineStorySort((a, b) => {
                // Custom sorting logic example
                if (a.title.includes('Introduction')) return -1
                if (b.title.includes('Introduction')) return 1
                return a.title.localeCompare(b.title)
            })`}})}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    ...defineStorySort({
      method: 'alphabetical'
    }),
    ...defineDocsParam({
      source: {
        code: 'defineStorySort({ method: "alphabetical" })'
      }
    })
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,S,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    ...defineStorySort({
      method: 'custom',
      order: ['Introduction', 'Components', '*', 'Examples']
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineStorySort({
                    method: "custom",
                    order: ["Introduction", "Components", "*", "Examples"]
                })\`
      }
    })
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var h,b,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    ...defineStorySort({
      method: 'alphabetical-by-kind',
      locales: 'en'
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineStorySort({
                    method: "alphabetical-by-kind",
                    locales: "en"
                })\`
      }
    })
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,g,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    ...defineStorySort((a, b) => {
      // Custom sorting logic example
      if (a.title.includes('Introduction')) return -1;
      if (b.title.includes('Introduction')) return 1;
      return a.title.localeCompare(b.title);
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineStorySort((a, b) => {
                // Custom sorting logic example
                if (a.title.includes('Introduction')) return -1
                if (b.title.includes('Introduction')) return 1
                return a.title.localeCompare(b.title)
            })\`
      }
    })
  }
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const A=["AlphabeticalSort","CustomSort","AlphabeticalByKindSort","CustomSortFunction"];export{r as AlphabeticalByKindSort,t as AlphabeticalSort,o as CustomSort,a as CustomSortFunction,A as __namedExportsOrder,k as default};
