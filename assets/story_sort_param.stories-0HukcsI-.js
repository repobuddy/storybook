import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dedent-DQaCLeUO.js";import{O as i,_ as a,p as o,t as s}from"./src-D21r-Siz.js";var c,l,u,d,f,p,m;function h(){return(h=e((()=>{n(),s(),c=t(),l={title:`parameters/StorySortParam`,tags:[`type`,`!snapshot`,`version:1.0`,`autodocs`],decorators:[i()],parameters:o({docs:{description:{component:"`StorySortParam` is used to define how stories should be sorted in the navigation sidebar. It is used in `preview.ts`."}}}),render:()=>(0,c.jsx)(c.Fragment,{})},u={parameters:{options:{options:{storySort:{method:`alphabetical`}}},...a({source:{code:r`{
                    options: {
                        storySort: { method: "alphabetical" }
                    } satisfies StorySortParam
                }`}})}},d={parameters:{options:{options:{storySort:{method:`custom`,order:[`Introduction`,`Components`,`*`,`Examples`]}}},...a({source:{code:r`{
                    options: {
                        storySort: { method: "custom", order: ["Introduction", "Components", "*", "Examples"] }
                    } satisfies StorySortParam
                }`}})}},f={parameters:{options:{options:{storySort:{method:`alphabetical-by-kind`,locales:`en`}}},...a({source:{code:r`{
                    options: {
                        storySort: { method: "alphabetical-by-kind", locales: "en" }
                    } satisfies StorySortParam
                }`}})}},p={parameters:{options:{storySort:(e,t)=>e.title.includes(`Introduction`)?-1:t.title.includes(`Introduction`)?1:e.title.localeCompare(t.title)},...a({source:{code:r`{
                    options: {
                        storySort: (a, b) => {
                            // Custom sorting logic example
                            if (a.title.includes('Introduction')) return -1
                            if (b.title.includes('Introduction')) return 1
                            return a.title.localeCompare(b.title)
                        }
                    } satisfies StorySortParam
                }`}})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`AlphabeticalSort`,`CustomSort`,`AlphabeticalByKindSort`,`CustomSortFunction`]})))()}h();export{f as AlphabeticalByKindSort,u as AlphabeticalSort,d as CustomSort,p as CustomSortFunction,m as __namedExportsOrder,l as default};