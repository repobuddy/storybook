import"./components-DmejZTLj.js";import"./react-K5peCFg_.js";import"./react-dom-CYc0L8kE.js";import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";import{f as n,m as r}from"./src-CPfUkyQY.js";var i=e(),a={title:`storybook-addon-tag-badges/perfBadge`,tags:[`var`,`!snapshot`,`version:2.22`],render:()=>(0,i.jsx)(i.Fragment,{})},o={tags:[`perf`],decorators:[n({content:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(`p`,{children:[`Story that demonstrates or tests performance. In the sidebar it appears as `,(0,i.jsx)(`code`,{children:`⚡`}),`.`]})})}),r({placement:`before`,source:t`export const YourStory = {
                tags: ['perf'],
                render: () => <YourComponent />
            }`}),n({content:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(`p`,{children:`To skip perf stories in Vitest:`}),(0,i.jsxs)(`ol`,{children:[(0,i.jsxs)(`li`,{children:[`Tag the story with `,(0,i.jsx)(`code`,{children:`perf`}),` (e.g. `,(0,i.jsx)(`code`,{children:`tags: ['perf']`}),`).`]}),(0,i.jsxs)(`li`,{children:[`In your Vitest browser config, pass `,(0,i.jsx)(`code`,{children:`tags: { exclude: ['perf'] }`}),` to`,` `,(0,i.jsx)(`code`,{children:`storybookTest()`}),` so those stories are not run and are not counted in results.`]})]})]})}),r({placement:`before`,source:t`
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
}`,...o.parameters?.docs?.source}}};var s=[`PerfBadge`];export{o as PerfBadge,s as __namedExportsOrder,a as default};