import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{l as n,p as r,s as i}from"./src-CPfUkyQY.js";var a=e(),o={title:`parameters/StorySortParam`,tags:[`new`,`!snapshot`,`version:1.0`,`autodocs`],decorators:[r()],parameters:i({docs:{description:{component:"`StorySortParam` is used to define how stories should be sorted in the navigation sidebar. It is used in `preview.ts`."}}}),render:()=>(0,a.jsx)(a.Fragment,{})},s={parameters:{options:{options:{storySort:{method:`alphabetical`}}},...n({source:{code:t`{
                    options: {
                        storySort: { method: "alphabetical" }
                    } satisfies StorySortParam
                }`}})}},c={parameters:{options:{options:{storySort:{method:`custom`,order:[`Introduction`,`Components`,`*`,`Examples`]}}},...n({source:{code:t`{
                    options: {
                        storySort: { method: "custom", order: ["Introduction", "Components", "*", "Examples"] }
                    } satisfies StorySortParam
                }`}})}},l={parameters:{options:{options:{storySort:{method:`alphabetical-by-kind`,locales:`en`}}},...n({source:{code:t`{
                    options: {
                        storySort: { method: "alphabetical-by-kind", locales: "en" }
                    } satisfies StorySortParam
                }`}})}},u={parameters:{options:{storySort:(e,t)=>e.title.includes(`Introduction`)?-1:t.title.includes(`Introduction`)?1:e.title.localeCompare(t.title)},...n({source:{code:t`{
                    options: {
                        storySort: (a, b) => {
                            // Custom sorting logic example
                            if (a.title.includes('Introduction')) return -1
                            if (b.title.includes('Introduction')) return 1
                            return a.title.localeCompare(b.title)
                        }
                    } satisfies StorySortParam
                }`}})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};var d=[`AlphabeticalSort`,`CustomSort`,`AlphabeticalByKindSort`,`CustomSortFunction`];export{l as AlphabeticalByKindSort,s as AlphabeticalSort,c as CustomSort,u as CustomSortFunction,d as __namedExportsOrder,o as default};