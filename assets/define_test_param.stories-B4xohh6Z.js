import{j as a}from"./iframe-DqDZFIl0.js";import{s as d}from"./with_story_card-B6VU7sTN.js";import{d as o}from"./define_docs_param-lmgaBKCF.js";import{d as n}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";function t(c){return{test:c}}const k={title:"Parameters/defineTestParam",tags:["new","version:1.0"],parameters:{docs:{description:{component:"Helper function to define test parameters for Storybook stories"}}},decorators:[d()],render:()=>a.jsx(a.Fragment,{})},e={parameters:{...t({clearMocks:!0,mockReset:!0,restoreMocks:!0}),...o({source:{code:n`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true
                })`}})}},r={parameters:{...t({clearMocks:!0,mockReset:!0,restoreMocks:!0,dangerouslyIgnoreUnhandledErrors:!0}),...o({source:{code:n`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true,
                    dangerouslyIgnoreUnhandledErrors: true
                })`}})}},s={parameters:{...t({clearMocks:!0}),...o({source:{code:n`defineTestParam({
                    clearMocks: true
                })`}})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineTestParam({
      clearMocks: true,
      mockReset: true,
      restoreMocks: true
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true
                })\`
      }
    })
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineTestParam({
      clearMocks: true,
      mockReset: true,
      restoreMocks: true,
      dangerouslyIgnoreUnhandledErrors: true
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineTestParam({
                    clearMocks: true,
                    mockReset: true,
                    restoreMocks: true,
                    dangerouslyIgnoreUnhandledErrors: true
                })\`
      }
    })
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...defineTestParam({
      clearMocks: true
    }),
    ...defineDocsParam({
      source: {
        code: dedent\`defineTestParam({
                    clearMocks: true
                })\`
      }
    })
  }
}`,...s.parameters?.docs?.source}}};const f=["Default","WithDangerouslyIgnoreUnhandledErrors","MinimalConfig"];export{e as Default,s as MinimalConfig,r as WithDangerouslyIgnoreUnhandledErrors,f as __namedExportsOrder,k as default};
