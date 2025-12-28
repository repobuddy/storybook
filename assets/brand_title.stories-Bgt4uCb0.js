import{j as n}from"./iframe-CKjSMc0F.js";import{d as s}from"./dedent-BuYMbVyj.js";import"./preload-helper-PPVm8Dsz.js";function i(a){return`<span style="display: flex; align-items: center; gap: 2px;">
		${a.logo??""}
		${a.title}
	</span>`}const p={title:"Manager/brandTitle",tags:["new","version:1.0","autodocs"]},e={parameters:{docs:{source:{code:s`brandTitle({
                    title: 'My Storybook'
                })`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"My Storybook"})}})},t={parameters:{docs:{source:{code:s`brandTitle({
                    title: '<span style="color: #ff4785;">My Storybook</span>'
                })`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:'<span style="color: #ff4785;">My Storybook</span>'})}})},o={parameters:{docs:{source:{code:s`brandTitle({
                    title: 'My Storybook 🚀'
                })`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"My Storybook 🚀"})}})},r={parameters:{docs:{source:{code:s`brandTitle({
                    title: 'My Storybook',
                    icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
                })`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"My Storybook",logo:'<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'})}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: dedent\`brandTitle({
                    title: 'My Storybook'
                })\`
      }
    }
  },
  render: () => <div
  // biome-ignore lint/security/noDangerouslySetInnerHtml: on purpose
  dangerouslySetInnerHTML={{
    __html: brandTitle({
      title: 'My Storybook'
    })
  }} />
}`,...e.parameters?.docs?.source},description:{story:"Basic example showing how to create a brand title with just text",...e.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: dedent\`brandTitle({
                    title: '<span style="color: #ff4785;">My Storybook</span>'
                })\`
      }
    }
  },
  render: () => <div
  // biome-ignore lint/security/noDangerouslySetInnerHtml: on purpose
  dangerouslySetInnerHTML={{
    __html: brandTitle({
      title: '<span style="color: #ff4785;">My Storybook</span>'
    })
  }} />
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: dedent\`brandTitle({
                    title: 'My Storybook 🚀'
                })\`
      }
    }
  },
  render: () => <div
  // biome-ignore lint/security/noDangerouslySetInnerHtml: on purpose
  dangerouslySetInnerHTML={{
    __html: brandTitle({
      title: 'My Storybook 🚀'
    })
  }} />
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: dedent\`brandTitle({
                    title: 'My Storybook',
                    icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
                })\`
      }
    }
  },
  render: () => <div
  // biome-ignore lint/security/noDangerouslySetInnerHtml: on purpose
  dangerouslySetInnerHTML={{
    __html: brandTitle({
      title: 'My Storybook',
      logo: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
    })
  }} />
}`,...r.parameters?.docs?.source},description:{story:"Example showing how to add an icon to the brand title",...r.parameters?.docs?.description}}};const y=["SimpleString","InHtml","WithEmoji","WithSvgIcon"];export{t as InHtml,e as SimpleString,o as WithEmoji,r as WithSvgIcon,y as __namedExportsOrder,p as default};
