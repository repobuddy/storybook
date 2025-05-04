import{j as n}from"./jsx-runtime-D_zvdyIk.js";function i(s){return`<span style="display: flex; align-items: center; gap: 2px;">
		${s.icon??""}
		${s.title}
	</span>`}const w={title:"Manager/brandTitle",tags:["new","version:1.0.0","autodocs"]},e={name:"Title String",parameters:{docs:{source:{code:`
brandTitle({
    title: 'My Storybook'
})`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"My Storybook"})}})},r={name:"Title HTML",parameters:{docs:{source:{code:`
brandTitle({
    title: '<span style="color: #ff4785;">My Storybook</span>'
})`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:'<span style="color: #ff4785;">My Storybook</span>'})}})},o={name:"Title with Emoji",parameters:{docs:{source:{code:`
brandTitle({
    title: 'My Storybook 🚀'
})`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"My Storybook 🚀"})}})},t={name:"Title with Icon",parameters:{docs:{source:{code:`
brandTitle({
    title: 'My Storybook',
    icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
})`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"My Storybook",icon:'<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'})}})};var a,l,c,d,m;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Title String',
  parameters: {
    docs: {
      source: {
        code: \`
brandTitle({
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
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source},description:{story:"Basic example showing how to create a brand title with just text",...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};var y,p,u;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Title HTML',
  parameters: {
    docs: {
      source: {
        code: \`
brandTitle({
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
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,S,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Title with Emoji',
  parameters: {
    docs: {
      source: {
        code: \`
brandTitle({
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
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var b,h,M,f,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Title with Icon',
  parameters: {
    docs: {
      source: {
        code: \`
brandTitle({
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
      icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
    })
  }} />
}`,...(M=(h=t.parameters)==null?void 0:h.docs)==null?void 0:M.source},description:{story:"Example showing how to add an icon to the brand title",...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};const _=["TitleString","TitleHtml","TitleWithEmoji","WithSvgIcon"];export{r as TitleHtml,e as TitleString,o as TitleWithEmoji,t as WithSvgIcon,_ as __namedExportsOrder,w as default};
