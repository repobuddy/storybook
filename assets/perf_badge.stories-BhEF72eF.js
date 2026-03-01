import{j as e}from"./iframe-CPpg16TU.js";import{d as t}from"./dedent-BuYMbVyj.js";import{s as r}from"./show_source-CRov7rlt.js";import{w as n}from"./with_story_card-Cp4orGqg.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"storybook-addon-tag-badges/perfBadge",tags:["var","!snapshot","version:2.22"],render:()=>e.jsx(e.Fragment,{})},o={tags:["perf"],decorators:[n({content:e.jsx(e.Fragment,{children:e.jsxs("p",{children:["Story that demonstrates or tests performance. In the sidebar it appears as ",e.jsx("code",{children:"⚡"}),"."]})})}),r({placement:"before",source:t`export const YourStory = {
                tags: ['perf'],
                render: () => <YourComponent />
            }`}),n({content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"To skip perf stories in Vitest:"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Tag the story with ",e.jsx("code",{children:"perf"})," (e.g. ",e.jsx("code",{children:"tags: ['perf']"}),")."]}),e.jsxs("li",{children:["In your Vitest browser config, pass ",e.jsx("code",{children:"tags: { exclude: ['perf'] }"})," to"," ",e.jsx("code",{children:"storybookTest()"})," so those stories are not run and are not counted in results."]})]})]})}),r({placement:"before",source:t`
            // vitest.config.ts
            import { join } from 'node:path'
            import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
            import { defineConfig } from 'vitest/config'

            export default defineConfig({
                plugins: [
                    storybookTest({
                        configDir: join(import.meta.dirname, '.storybook'),
                        tags: { exclude: ['perf'] }
                    })
                ]
            })`})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['perf'],
  decorators: [withStoryCard({
    content: <>
                    <p>
                        Story that demonstrates or tests performance. In the sidebar it appears as <code>⚡</code>.
                    </p>
                </>
  }), showSource({
    placement: 'before',
    source: dedent\`export const YourStory = {
                tags: ['perf'],
                render: () => <YourComponent />
            }\`
  }), withStoryCard({
    content: <>
                    <p>To skip perf stories in Vitest:</p>
                    <ol>
                        <li>
                            Tag the story with <code>perf</code> (e.g. <code>tags: ['perf']</code>).
                        </li>
                        <li>
                            In your Vitest browser config, pass <code>{"tags: { exclude: ['perf'] }"}</code> to{' '}
                            <code>storybookTest()</code> so those stories are not run and are not counted in results.
                        </li>
                    </ol>
                </>
  }), showSource({
    placement: 'before',
    source: dedent\`
            // vitest.config.ts
            import { join } from 'node:path'
            import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
            import { defineConfig } from 'vitest/config'

            export default defineConfig({
                plugins: [
                    storybookTest({
                        configDir: join(import.meta.dirname, '.storybook'),
                        tags: { exclude: ['perf'] }
                    })
                ]
            })\`
  })]
}`,...o.parameters?.docs?.source}}};const f=["PerfBadge"];export{o as PerfBadge,f as __namedExportsOrder,p as default};
