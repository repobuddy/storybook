import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-LciDwcCM.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";import{O as o,t as s,w as c}from"./src-Dhw3iRbJ.js";var l,u,d,f;function p(){return(p=e((()=>{i(),s(),n(),l=t(),u=r.meta({title:`storybook-addon-tag-badges/perfBadge`,tags:[`var`,`!snapshot`,`version:2.22`],render:()=>(0,l.jsx)(l.Fragment,{})}),d=u.story({tags:[`perf`],decorators:[c({content:(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(`p`,{children:[`Story that demonstrates or tests performance. In the sidebar it appears as `,(0,l.jsx)(`code`,{children:`⚡`}),`.`]})})}),o({placement:`before`,source:a`export const YourStory = {
                tags: ['perf'],
                render: () => <YourComponent />
            }`}),c({content:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(`p`,{children:`To skip perf stories in Vitest:`}),(0,l.jsxs)(`ol`,{children:[(0,l.jsxs)(`li`,{children:[`Tag the story with `,(0,l.jsx)(`code`,{children:`perf`}),` (e.g. `,(0,l.jsx)(`code`,{children:`tags: ['perf']`}),`).`]}),(0,l.jsxs)(`li`,{children:[`In your Vitest browser config, pass `,(0,l.jsx)(`code`,{children:`tags: { exclude: ['perf'] }`}),` to`,` `,(0,l.jsx)(`code`,{children:`storybookTest()`}),` so those stories are not run and are not counted in results.`]})]})]})}),o({placement:`before`,source:a`
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
            })`})]}),d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...d.input.parameters?.docs?.source}}},f=[`PerfBadge`]})))()}p();export{d as PerfBadge,f as __namedExportsOrder};