import{j as c}from"./iframe-DC_o8yvB.js";import{s as m}from"./with_story_card-BAbP_D3A.js";import{d as s}from"./define_docs_param-lmgaBKCF.js";import{d}from"./define_parameters-BUOuTmGI.js";import{d as a}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"parameters/StorySortParam",tags:["new","version:1.0","autodocs"],decorators:[m()],parameters:d({docs:{description:{component:"`StorySortParam` is used to define how stories should be sorted in the navigation sidebar. It is used in `preview.ts`."}}}),render:()=>c.jsx(c.Fragment,{})},o={parameters:{options:{options:{storySort:{method:"alphabetical"}}},...s({source:{code:a`{
                    options: {
                        storySort: { method: "alphabetical" }
                    } satisfies StorySortParam
                }`}})}},t={parameters:{options:{options:{storySort:{method:"custom",order:["Introduction","Components","*","Examples"]}}},...s({source:{code:a`{
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
                }`}})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const b=["AlphabeticalSort","CustomSort","AlphabeticalByKindSort","CustomSortFunction"];export{r as AlphabeticalByKindSort,o as AlphabeticalSort,t as CustomSort,e as CustomSortFunction,b as __namedExportsOrder,h as default};
