import{t as e}from"./jsx-runtime-BUC2lftT.js";import{t}from"./dedent-rZS-CQtP.js";function n(e){return`<span style="display: flex; align-items: center; gap: 2px;">
		${e.logo??``}
		${e.title}
	</span>`}var r=e(),i={title:`Manager/brandTitle`,tags:[`new`,`version:1.0`,`autodocs`]},a={parameters:{docs:{source:{code:t`brandTitle({
                    title: 'My Storybook'
                })`}}},render:()=>(0,r.jsx)(`div`,{dangerouslySetInnerHTML:{__html:n({title:`My Storybook`})}})},o={parameters:{docs:{source:{code:t`brandTitle({
                    title: '<span style="color: #ff4785;">My Storybook</span>'
                })`}}},render:()=>(0,r.jsx)(`div`,{dangerouslySetInnerHTML:{__html:n({title:`<span style="color: #ff4785;">My Storybook</span>`})}})},s={parameters:{docs:{source:{code:t`brandTitle({
                    title: 'My Storybook 🚀'
                })`}}},render:()=>(0,r.jsx)(`div`,{dangerouslySetInnerHTML:{__html:n({title:`My Storybook 🚀`})}})},c={parameters:{docs:{source:{code:t`brandTitle({
                    title: 'My Storybook',
                    icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
                })`}}},render:()=>(0,r.jsx)(`div`,{dangerouslySetInnerHTML:{__html:n({title:`My Storybook`,logo:`<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>`})}})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source},description:{story:`Basic example showing how to create a brand title with just text`,...a.parameters?.docs?.description}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:`Example showing how to add an icon to the brand title`,...c.parameters?.docs?.description}}};var l=[`SimpleString`,`InHtml`,`WithEmoji`,`WithSvgIcon`];export{o as InHtml,a as SimpleString,s as WithEmoji,c as WithSvgIcon,l as __namedExportsOrder,i as default};