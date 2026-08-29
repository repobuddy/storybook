import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{a as t}from"./chunk-W22LQPXL-yBdeBQmp.js";import{n,r}from"./iframe-BpweSj9K.js";import{n as i,t as a}from"./dedent-DQaCLeUO.js";function o(e){return`<span style="display: flex; align-items: center; gap: 2px;">
		${e.logo??``}
		${e.title}
	</span>`}var s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{i(),n(),s=t(),c=r.meta({title:`Manager/brandTitle`,tags:[`new`,`version:1.0`,`autodocs`]}),l={a11y:{options:{rules:{"color-contrast":{enabled:!1}}}}},u=c.story({parameters:{docs:{source:{code:a`brandTitle({
                    title: 'My Storybook'
                })`}}},render:()=>(0,s.jsx)(`div`,{dangerouslySetInnerHTML:{__html:o({title:`My Storybook`})}})}),d=c.story({parameters:{...l,docs:{source:{code:a`brandTitle({
                    title: '<span style="color: #ff4785;">My Storybook</span>'
                })`}}},render:()=>(0,s.jsx)(`div`,{dangerouslySetInnerHTML:{__html:o({title:`<span style="color: #ff4785;">My Storybook</span>`})}})}),f=c.story({parameters:{docs:{source:{code:a`brandTitle({
                    title: 'My Storybook 🚀'
                })`}}},render:()=>(0,s.jsx)(`div`,{dangerouslySetInnerHTML:{__html:o({title:`My Storybook 🚀`})}})}),p=c.story({parameters:{docs:{source:{code:a`brandTitle({
                    title: 'My Storybook',
                    icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
                })`}}},render:()=>(0,s.jsx)(`div`,{dangerouslySetInnerHTML:{__html:o({title:`My Storybook`,logo:`<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>`})}})}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...u.input.parameters?.docs?.source},description:{story:`Basic example showing how to create a brand title with just text`,...u.input.parameters?.docs?.description}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  parameters: {
    ...demoColors,
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
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source},description:{story:`Example showing how to add an icon to the brand title`,...p.input.parameters?.docs?.description}}},m=[`SimpleString`,`InHtml`,`WithEmoji`,`WithSvgIcon`]})))()}h();export{d as InHtml,u as SimpleString,f as WithEmoji,p as WithSvgIcon,m as __namedExportsOrder};