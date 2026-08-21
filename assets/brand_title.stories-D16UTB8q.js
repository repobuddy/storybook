import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./dedent-DQaCLeUO.js";function i(e){return`<span style="display: flex; align-items: center; gap: 2px;">
		${e.logo??``}
		${e.title}
	</span>`}var a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),a=t(),o={title:`Manager/brandTitle`,tags:[`new`,`version:1.0`,`autodocs`]},s={parameters:{docs:{source:{code:r`brandTitle({
                    title: 'My Storybook'
                })`}}},render:()=>(0,a.jsx)(`div`,{dangerouslySetInnerHTML:{__html:i({title:`My Storybook`})}})},c={parameters:{docs:{source:{code:r`brandTitle({
                    title: '<span style="color: #ff4785;">My Storybook</span>'
                })`}}},render:()=>(0,a.jsx)(`div`,{dangerouslySetInnerHTML:{__html:i({title:`<span style="color: #ff4785;">My Storybook</span>`})}})},l={parameters:{docs:{source:{code:r`brandTitle({
                    title: 'My Storybook 🚀'
                })`}}},render:()=>(0,a.jsx)(`div`,{dangerouslySetInnerHTML:{__html:i({title:`My Storybook 🚀`})}})},u={parameters:{docs:{source:{code:r`brandTitle({
                    title: 'My Storybook',
                    icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
                })`}}},render:()=>(0,a.jsx)(`div`,{dangerouslySetInnerHTML:{__html:i({title:`My Storybook`,logo:`<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>`})}})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`Basic example showing how to create a brand title with just text`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Example showing how to add an icon to the brand title`,...u.parameters?.docs?.description}}},d=[`SimpleString`,`InHtml`,`WithEmoji`,`WithSvgIcon`]})))()}f();export{c as InHtml,s as SimpleString,l as WithEmoji,u as WithSvgIcon,d as __namedExportsOrder,o as default};