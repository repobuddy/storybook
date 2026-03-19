import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-r2SG9fgm.js";import{g as i,m as a,t as o}from"./src-BUA0lNvr.js";var s,c,l,u;e((()=>{n(),o(),s=t(),c={title:`storybook-addon-tag-badges/perfBadge`,tags:[`var`,`!snapshot`,`version:2.22`],render:()=>(0,s.jsx)(s.Fragment,{})},l={tags:[`perf`],decorators:[a({content:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(`p`,{children:[`Story that demonstrates or tests performance. In the sidebar it appears as `,(0,s.jsx)(`code`,{children:`⚡`}),`.`]})})}),i({placement:`before`,source:r`export const YourStory = {
                tags: ['perf'],
                render: () => <YourComponent />
            }`}),a({content:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`p`,{children:`To skip perf stories in Vitest:`}),(0,s.jsxs)(`ol`,{children:[(0,s.jsxs)(`li`,{children:[`Tag the story with `,(0,s.jsx)(`code`,{children:`perf`}),` (e.g. `,(0,s.jsx)(`code`,{children:`tags: ['perf']`}),`).`]}),(0,s.jsxs)(`li`,{children:[`In your Vitest browser config, pass `,(0,s.jsx)(`code`,{children:`tags: { exclude: ['perf'] }`}),` to`,` `,(0,s.jsx)(`code`,{children:`storybookTest()`}),` so those stories are not run and are not counted in results.`]})]})]})}),i({placement:`before`,source:r`
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
            })`})]},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`PerfBadge`]}))();export{l as PerfBadge,u as __namedExportsOrder,c as default};