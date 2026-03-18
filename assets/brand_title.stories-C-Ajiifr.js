import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./dedent-r2SG9fgm.js";function i(e){return`<span style="display: flex; align-items: center; gap: 2px;">
		${e.logo??``}
		${e.title}
	</span>`}var a=e((()=>{})),o=e((()=>{a()})),s,c,l,u,d,f,p;e((()=>{n(),o(),s=t(),c={title:`Manager/brandTitle`,tags:[`new`,`version:1.0`,`autodocs`]},l={parameters:{docs:{source:{code:r`brandTitle({
                    title: 'My Storybook'
                })`}}},render:()=>(0,s.jsx)(`div`,{dangerouslySetInnerHTML:{__html:i({title:`My Storybook`})}})},u={parameters:{docs:{source:{code:r`brandTitle({
                    title: '<span style="color: #ff4785;">My Storybook</span>'
                })`}}},render:()=>(0,s.jsx)(`div`,{dangerouslySetInnerHTML:{__html:i({title:`<span style="color: #ff4785;">My Storybook</span>`})}})},d={parameters:{docs:{source:{code:r`brandTitle({
                    title: 'My Storybook 🚀'
                })`}}},render:()=>(0,s.jsx)(`div`,{dangerouslySetInnerHTML:{__html:i({title:`My Storybook 🚀`})}})},f={parameters:{docs:{source:{code:r`brandTitle({
                    title: 'My Storybook',
                    icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
                })`}}},render:()=>(0,s.jsx)(`div`,{dangerouslySetInnerHTML:{__html:i({title:`My Storybook`,logo:`<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>`})}})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:`Basic example showing how to create a brand title with just text`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Example showing how to add an icon to the brand title`,...f.parameters?.docs?.description}}},p=[`SimpleString`,`InHtml`,`WithEmoji`,`WithSvgIcon`]}))();export{u as InHtml,l as SimpleString,d as WithEmoji,f as WithSvgIcon,p as __namedExportsOrder,c as default};