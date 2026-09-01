import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-y1S8zoWT.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,_ as s,p as c,t as l}from"./src-Dhw3iRbJ.js";var u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),l(),n(),u=t(),d=r.meta({title:`parameters/StorySortParam`,tags:[`type`,`!snapshot`,`version:1.0`,`autodocs`],decorators:[o()],parameters:c({docs:{description:{component:"`StorySortParam` is used to define how stories should be sorted in the navigation sidebar. It is used in `preview.ts`."}}}),render:()=>(0,u.jsx)(u.Fragment,{})}),f=d.story({parameters:{options:{options:{storySort:{method:`alphabetical`}}},...s({source:{code:a`{
                    options: {
                        storySort: { method: "alphabetical" }
                    } satisfies StorySortParam
                }`}})}}),p=d.story({parameters:{options:{options:{storySort:{method:`custom`,order:[`Introduction`,`Components`,`*`,`Examples`]}}},...s({source:{code:a`{
                    options: {
                        storySort: { method: "custom", order: ["Introduction", "Components", "*", "Examples"] }
                    } satisfies StorySortParam
                }`}})}}),m=d.story({parameters:{options:{options:{storySort:{method:`alphabetical-by-kind`,locales:`en`}}},...s({source:{code:a`{
                    options: {
                        storySort: { method: "alphabetical-by-kind", locales: "en" }
                    } satisfies StorySortParam
                }`}})}}),h=d.story({parameters:{options:{storySort:(e,t)=>e.title.includes(`Introduction`)?-1:t.title.includes(`Introduction`)?1:e.title.localeCompare(t.title)},...s({source:{code:a`{
                    options: {
                        storySort: (a, b) => {
                            // Custom sorting logic example
                            if (a.title.includes('Introduction')) return -1
                            if (b.title.includes('Introduction')) return 1
                            return a.title.localeCompare(b.title)
                        }
                    } satisfies StorySortParam
                }`}})}}),f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
  } as Parameters
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
  } as Parameters
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
  } as Parameters
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
  } as Parameters
})`,...h.input.parameters?.docs?.source}}},g=[`AlphabeticalSort`,`CustomSort`,`AlphabeticalByKindSort`,`CustomSortFunction`]})))()}_();export{m as AlphabeticalByKindSort,f as AlphabeticalSort,p as CustomSort,h as CustomSortFunction,g as __namedExportsOrder};