import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-DC6t-S6Q.js";import{_ as n,f as r,i,m as a,y as o}from"./iframe-BsHda9nq.js";import{n as s,t as c}from"./dedent-DU6uki2e.js";var l,u,d,f,p,m,h,g;e((()=>{s(),i(),l=t(),u={title:`parameters/createStorySort`,tags:[`version:2.30`,`autodocs`],decorators:[n(),o()],parameters:r({docs:{description:{component:c`\`createStorySort\` creates a story sort comparator that sorts by kind (title hierarchy) and then by tag category within the same component.

                In Storybook 10+, \`storySort\` must be defined as an inline function in your preview config.
                Assign the result of \`createStorySort\` to a variable and delegate from the inline function:`}}}),render:()=>(0,l.jsx)(l.Fragment,{})},d={tags:[`use-case`],parameters:{...a({description:{story:"A typical configuration combining both `order` and `tag` sorting, compatible with Storybook 10+ inline requirement."},source:{code:c`import { createStorySort } from '@repobuddy/storybook'

                const compare = createStorySort({
                    order: ['Overview', 'Components', 'Hooks', '*', 'WIP'],
                    tag: ['playground', 'use-case', 'spec', 'props', '*', 'unit', 'integration']
                })

                export default {
                    parameters: {
                        options: {
                            storySort(a, b) {
                                return compare(a, b)
                            }
                        }
                    }
                }`}})}},f={tags:[`use-case`],parameters:{...a({description:{story:`Sort only by title hierarchy order. Stories within the same component fall back to alphabetical name sorting.`},source:{code:c`const compare = createStorySort({
                    order: ['Introduction', 'Components', 'Hooks', '*', 'Utilities']
                })

                // in preview config:
                storySort(a, b) {
                    return compare(a, b)
                }`}})}},p={tags:[`use-case`],parameters:{...a({description:{story:`Sort only by tag priority within the same component. Titles fall back to alphabetical sorting.`},source:{code:c`const compare = createStorySort({
                    tag: ['playground', 'use-case', 'example', 'spec', 'props', '*', 'edge-case', 'unit', 'integration']
                })

                // in preview config:
                storySort(a, b) {
                    return compare(a, b)
                }`}})}},m={tags:[`use-case`],parameters:{...a({description:{story:"Nested ordering uses tuples `[name, children]` to control sub-level sort order."},source:{code:c`const compare = createStorySort({
                    order: ['Overview', ['Components', ['Button', 'Input', 'Select']], '*', 'WIP']
                })

                // in preview config:
                storySort(a, b) {
                    return compare(a, b)
                }`}})}},h={tags:[`use-case`],parameters:{...a({description:{story:"The `*` wildcard controls where unlisted items appear. Items before `*` sort first, items after `*` sort last, and unlisted items land at the `*` position sorted alphabetically."},source:{code:c`const compare = createStorySort({
                    order: ['First', '*', 'Last'],
                    tag: ['playground', 'spec', '*', 'unit', 'integration']
                })

                // in preview config:
                storySort(a, b) {
                    return compare(a, b)
                }`}})}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'A typical configuration combining both \`order\` and \`tag\` sorting, compatible with Storybook 10+ inline requirement.'
      },
      source: {
        code: dedent\`import { createStorySort } from '@repobuddy/storybook'

                const compare = createStorySort({
                    order: ['Overview', 'Components', 'Hooks', '*', 'WIP'],
                    tag: ['playground', 'use-case', 'spec', 'props', '*', 'unit', 'integration']
                })

                export default {
                    parameters: {
                        options: {
                            storySort(a, b) {
                                return compare(a, b)
                            }
                        }
                    }
                }\`
      }
    })
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'Sort only by title hierarchy order. Stories within the same component fall back to alphabetical name sorting.'
      },
      source: {
        code: dedent\`const compare = createStorySort({
                    order: ['Introduction', 'Components', 'Hooks', '*', 'Utilities']
                })

                // in preview config:
                storySort(a, b) {
                    return compare(a, b)
                }\`
      }
    })
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'Sort only by tag priority within the same component. Titles fall back to alphabetical sorting.'
      },
      source: {
        code: dedent\`const compare = createStorySort({
                    tag: ['playground', 'use-case', 'example', 'spec', 'props', '*', 'edge-case', 'unit', 'integration']
                })

                // in preview config:
                storySort(a, b) {
                    return compare(a, b)
                }\`
      }
    })
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'Nested ordering uses tuples \`[name, children]\` to control sub-level sort order.'
      },
      source: {
        code: dedent\`const compare = createStorySort({
                    order: ['Overview', ['Components', ['Button', 'Input', 'Select']], '*', 'WIP']
                })

                // in preview config:
                storySort(a, b) {
                    return compare(a, b)
                }\`
      }
    })
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['use-case'],
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'The \`*\` wildcard controls where unlisted items appear. Items before \`*\` sort first, items after \`*\` sort last, and unlisted items land at the \`*\` position sorted alphabetically.'
      },
      source: {
        code: dedent\`const compare = createStorySort({
                    order: ['First', '*', 'Last'],
                    tag: ['playground', 'spec', '*', 'unit', 'integration']
                })

                // in preview config:
                storySort(a, b) {
                    return compare(a, b)
                }\`
      }
    })
  }
}`,...h.parameters?.docs?.source}}},g=[`BasicUsage`,`OrderOnly`,`TagOnly`,`NestedOrder`,`WildcardPositioning`]}))();export{d as BasicUsage,m as NestedOrder,f as OrderOnly,p as TagOnly,h as WildcardPositioning,g as __namedExportsOrder,u as default};