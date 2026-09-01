import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-D1vhypr4.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,_ as s,p as c,t as l,w as u}from"./src-Dhw3iRbJ.js";var d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{i(),l(),n(),d=t(),f=a`// storySort must be a self-contained inline function — Storybook 10+ performs
    // static AST analysis and rejects variable references and function-call results.
    // TypeScript annotations are intentionally omitted from the helpers below:
    // Storybook parses this function body in plain Node.js, which does not understand
    // TypeScript syntax.
    // @ts-expect-error -- \`a.type\` is not in Storybook's public sort entry type
    storySort: (a, b) => {
        // ↓ Customize these two arrays for your project
        const order = ['Overview', 'Components', 'Hooks', '*', 'WIP']
        const tag   = ['playground', 'use-case', 'spec', 'props', '*', 'unit', 'integration']

        return (
            compareByTitle(a.title, b.title) ??
            compareByType(a.type, b.type) ??
            compareByTag(a.tags, b.tags) ??
            a.name.localeCompare(b.name, undefined, { numeric: true })
        )

        // @ts-expect-error -- untyped by design, see above
        function compareByTitle(aTitle, bTitle) {
            if (aTitle === bTitle) return undefined
            return (
                compareByKindOrder(aTitle, bTitle) ||
                aTitle.localeCompare(bTitle, undefined, { numeric: true }) ||
                undefined
            )
        }

        // @ts-expect-error -- untyped by design, see above
        function compareByKindOrder(aTitle, bTitle) {
            const aParts = aTitle.split('/')
            const bParts = bTitle.split('/')
            let currentOrder = order
            const maxDepth = Math.max(aParts.length, bParts.length)
            for (let depth = 0; depth < maxDepth; depth++) {
                const aPart = aParts[depth]
                const bPart = bParts[depth]
                if (aPart === undefined && bPart !== undefined) return -1
                if (aPart !== undefined && bPart === undefined) return 1
                if (aPart === bPart) {
                    const child = childOrderOf(aPart, currentOrder)
                    if (child) currentOrder = child
                    continue
                }
                const aPos = positionOf(aPart, currentOrder)
                const bPos = positionOf(bPart, currentOrder)
                if (aPos !== bPos) return aPos - bPos
                return aPart.localeCompare(bPart, undefined, { numeric: true })
            }
            return 0
        }

        // @ts-expect-error -- untyped by design, see above
        function positionOf(name, orderList) {
            const idx = indexIn(name, orderList)
            if (idx !== -1) return idx
            const wildcardIdx = indexIn('*', orderList)
            return wildcardIdx !== -1 ? wildcardIdx : orderList.length
        }

        // @ts-expect-error -- untyped by design, see above
        function childOrderOf(name, orderList) {
            for (let i = 0; i < orderList.length; i++) {
                const entry = orderList[i]
                if (Array.isArray(entry) && entry[0] === name) return entry[1]
            }
            return undefined
        }

        // @ts-expect-error -- untyped by design, see above
        function compareByType(aType, bType) {
            if (aType === bType) return undefined
            if (aType === 'docs') return -1
            if (bType === 'docs') return 1
            return undefined
        }

        // @ts-expect-error -- untyped by design, see above
        function compareByTag(aTags, bTags) {
            const aPriority = tagPriorityOf(aTags)
            const bPriority = tagPriorityOf(bTags)
            if (aPriority === bPriority) return undefined
            return aPriority < bPriority ? -1 : 1
        }

        // @ts-expect-error -- untyped by design, see above
        function tagPriorityOf(tags) {
            const wildcardIdx = indexIn('*', tag)
            const fallback = wildcardIdx !== -1 ? wildcardIdx : tag.length
            if (!tags) return fallback
            let best = fallback
            for (let i = 0; i < tags.length; i++) {
                const pos = indexIn(tags[i], tag)
                if (pos !== -1 && pos < best) best = pos
            }
            return best
        }

        // @ts-expect-error -- untyped by design, see above
        function indexIn(name, orderList) {
            for (let i = 0; i < orderList.length; i++) {
                const entry = orderList[i]
                const entryName = Array.isArray(entry) ? entry[0] : entry
                if (entryName === name) return i
            }
            return -1
        }
    }`,p=r.meta({title:`parameters/storySort`,tags:[`version:2.30`,`func`],decorators:[u(),o()],parameters:c({docs:{description:{component:a`The \`storySort\` inline function sorts stories by kind (title hierarchy) and then by tag category within the same component. Docs entries (autodocs and MDX) always appear first within a component.

                Copy the implementation from **Basic Usage** below into your \`.storybook/preview.ts\` and customize the two arrays at the top of the function:

                - **\`order\`** — title path segments in the desired sidebar order; \`'*'\` is the wildcard for unlisted items
                - **\`tag\`** — story tags in the desired order within a component; \`'*'\` is the wildcard for unlisted tags`}}}),render:()=>(0,d.jsx)(d.Fragment,{})}),m=p.story({tags:[`use-case`],parameters:{...s({description:{story:"Copy this block into your `.storybook/preview.ts` and customize the `order` and `tag` arrays at the top."},source:{code:f}})}}),h=p.story({tags:[`use-case`],parameters:{...s({description:{story:"Sort only by title hierarchy order. Set `tag` to an empty array to skip tag-based sorting; stories within the same component fall back to alphabetical name sorting."},source:{code:a`const order = ['Introduction', 'Components', 'Hooks', '*', 'Utilities']
                const tag   = []`}})}}),g=p.story({tags:[`use-case`],parameters:{...s({description:{story:"Sort only by tag priority within the same component. Set `order` to an empty array to skip title-based ordering; titles fall back to alphabetical sorting."},source:{code:a`const order = []
                const tag   = ['playground', 'use-case', 'example', 'spec', 'props', '*', 'edge-case', 'unit', 'integration']`}})}}),_=p.story({tags:[`use-case`],parameters:{...s({description:{story:"Nested ordering uses tuples `[name, children]` to control sub-level sort order."},source:{code:a`const order = ['Overview', ['Components', ['Button', 'Input', 'Select']], '*', 'WIP']
                const tag   = ['playground', 'use-case', '*']`}})}}),v=p.story({tags:[`use-case`],parameters:{...s({description:{story:"The `*` wildcard controls where unlisted items appear. Items before `*` sort first, items after `*` sort last, and unlisted items land at the `*` position sorted alphabetically."},source:{code:a`const order = ['First', '*', 'Last']
                const tag   = ['playground', 'spec', '*', 'unit', 'integration']`}})}}),m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['use-case'],
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'Copy this block into your \`.storybook/preview.ts\` and customize the \`order\` and \`tag\` arrays at the top.'
      },
      source: {
        code: fullImpl
      }
    })
  } as Parameters
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['use-case'],
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'Sort only by title hierarchy order. Set \`tag\` to an empty array to skip tag-based sorting; stories within the same component fall back to alphabetical name sorting.'
      },
      source: {
        code: dedent\`const order = ['Introduction', 'Components', 'Hooks', '*', 'Utilities']
                const tag   = []\`
      }
    })
  } as Parameters
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['use-case'],
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'Sort only by tag priority within the same component. Set \`order\` to an empty array to skip title-based ordering; titles fall back to alphabetical sorting.'
      },
      source: {
        code: dedent\`const order = []
                const tag   = ['playground', 'use-case', 'example', 'spec', 'props', '*', 'edge-case', 'unit', 'integration']\`
      }
    })
  } as Parameters
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['use-case'],
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'Nested ordering uses tuples \`[name, children]\` to control sub-level sort order.'
      },
      source: {
        code: dedent\`const order = ['Overview', ['Components', ['Button', 'Input', 'Select']], '*', 'WIP']
                const tag   = ['playground', 'use-case', '*']\`
      }
    })
  } as Parameters
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
  tags: ['use-case'],
  parameters: {
    ...defineDocsParam({
      description: {
        story: 'The \`*\` wildcard controls where unlisted items appear. Items before \`*\` sort first, items after \`*\` sort last, and unlisted items land at the \`*\` position sorted alphabetically.'
      },
      source: {
        code: dedent\`const order = ['First', '*', 'Last']
                const tag   = ['playground', 'spec', '*', 'unit', 'integration']\`
      }
    })
  } as Parameters
})`,...v.input.parameters?.docs?.source}}},y=[`BasicUsage`,`OrderOnly`,`TagOnly`,`NestedOrder`,`WildcardPositioning`]})))()}b();export{m as BasicUsage,_ as NestedOrder,h as OrderOnly,g as TagOnly,v as WildcardPositioning,y as __namedExportsOrder};