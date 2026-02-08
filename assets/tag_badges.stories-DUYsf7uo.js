import{j as e}from"./iframe-D07mGodj.js";import{d as h}from"./dedent-BuYMbVyj.js";import{s as v}from"./show_doc_source-BM54YOos.js";import{d as y}from"./define_docs_param-lmgaBKCF.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"storybook-addon-tag-badges/tagBadges"},r={tags:["editor"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Story with live editor"}),e.jsx("code",{children:"tags: ['editor']"})]})},o={tags:["new"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Recently added components or props/features"}),e.jsx("code",{children:"tags: ['new']"})]})},t={tags:["beta"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Warn that a component or prop is not stable yet"}),e.jsx("code",{children:"tags: ['beta']"})]})},d={tags:["deprecated"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components or props that should be avoided in new code"}),e.jsx("code",{children:"tags: ['deprecated']"})]})},s={tags:["outdated"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components with design changes that weren't yet implemented, which can incur extra development costs to your users"}),e.jsx("code",{children:"tags: ['outdated']"})]})},n={tags:["danger"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components that require particular attention when configuring them (e.g. for with security concerns)"}),e.jsx("code",{children:"tags: ['danger']"})]})},a={tags:["todo"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Todo story"}),e.jsx("code",{children:"tags: ['todo']"})]})},i={tags:["code-only"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components that only exist in code, and not in design"}),e.jsx("code",{children:"tags: ['code-only']"})]})},c={tags:["internal"],parameters:y({source:{code:h`
            // Use this badge to hide stories from the sidebar during production build
            export const YourStory = {
                tags: ['internal'],
            }

            // To set this up, you need to add the following to your .storybook/main.ts file:
            export default {
                tags: {
                    internal: {
                        excludeFromSidebar: process.env.NODE_ENV === 'production'
                    }
                }
            }

            // And build your storybook with the following command:
            NODE_ENV=production storybook build
            `}}),decorators:[v()],render:()=>e.jsx(e.Fragment,{})},g={tags:["snapshot","!test"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Story with snapshot"}),e.jsx("code",{children:"tags: ['snapshot']"})]})},p={tags:["keyboard"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Story with keyboard interactions"}),e.jsx("code",{children:"tags: ['keyboard']"})]})},u={tags:["unit"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Unit test story"}),e.jsx("code",{children:"tags: ['unit']"})]})},l={tags:["integration"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Integration test story"}),e.jsx("code",{children:"tags: ['integration']"})]})},m={tags:["version:1.0"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Version tag is used to indicate when the component/feature/property becomes available."}),e.jsx("code",{children:"tags: ['version:1.0']"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  tags: ['editor'],
  render: () => <div>
            <div>Story with live editor</div>
            <code>tags: ['editor']</code>
        </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  tags: ['new'],
  render: () => <div>
            <div>Recently added components or props/features</div>
            <code>tags: ['new']</code>
        </div>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  tags: ['beta'],
  render: () => <div>
            <div>Warn that a component or prop is not stable yet</div>
            <code>tags: ['beta']</code>
        </div>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  tags: ['deprecated'],
  render: () => <div>
            <div>Components or props that should be avoided in new code</div>
            <code>tags: ['deprecated']</code>
        </div>
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  tags: ['outdated'],
  render: () => <div>
            <div>
                Components with design changes that weren't yet implemented, which can incur extra development costs to your
                users
            </div>
            <code>tags: ['outdated']</code>
        </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  tags: ['danger'],
  render: () => <div>
            <div>Components that require particular attention when configuring them (e.g. for with security concerns)</div>
            <code>tags: ['danger']</code>
        </div>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  tags: ['todo'],
  render: () => <div>
            <div>Todo story</div>
            <code>tags: ['todo']</code>
        </div>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  tags: ['code-only'],
  render: () => <div>
            <div>Components that only exist in code, and not in design</div>
            <code>tags: ['code-only']</code>
        </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  tags: ['internal'],
  parameters: defineDocsParam({
    source: {
      code: dedent\`
            // Use this badge to hide stories from the sidebar during production build
            export const YourStory = {
                tags: ['internal'],
            }

            // To set this up, you need to add the following to your .storybook/main.ts file:
            export default {
                tags: {
                    internal: {
                        excludeFromSidebar: process.env.NODE_ENV === 'production'
                    }
                }
            }

            // And build your storybook with the following command:
            NODE_ENV=production storybook build
            \`
    }
  }),
  decorators: [showDocSource()],
  render: () => <></>
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['snapshot', '!test'],
  render: () => <div>
            <div>Story with snapshot</div>
            <code>tags: ['snapshot']</code>
        </div>
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['keyboard'],
  render: () => <div>
            <div>Story with keyboard interactions</div>
            <code>tags: ['keyboard']</code>
        </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>
            <div>Unit test story</div>
            <code>tags: ['unit']</code>
        </div>
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  tags: ['integration'],
  render: () => <div>
            <div>Integration test story</div>
            <code>tags: ['integration']</code>
        </div>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ['version:1.0'],
  render: () => <div>
            <div>Version tag is used to indicate when the component/feature/property becomes available.</div>
            <code>tags: ['version:1.0']</code>
        </div>
}`,...m.parameters?.docs?.source}}};const f=["EditorBadge","NewBadge","BetaBadge","DeprecatedBadge","OutdatedBadge","DangerousBadge","TodoBadge","CodeOnlyBadge","InternalBadge","SnapshotBadge","KeyboardBadge","UnitTestBadge","IntegrationTestBadge","VersionBadge"];export{t as BetaBadge,i as CodeOnlyBadge,n as DangerousBadge,d as DeprecatedBadge,r as EditorBadge,l as IntegrationTestBadge,c as InternalBadge,p as KeyboardBadge,o as NewBadge,s as OutdatedBadge,g as SnapshotBadge,a as TodoBadge,u as UnitTestBadge,m as VersionBadge,f as __namedExportsOrder,S as default};
