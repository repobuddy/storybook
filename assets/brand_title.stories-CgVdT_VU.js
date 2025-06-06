import{j as n}from"./iframe-DaILpW6B.js";import{d as s}from"./dedent-DVFkJXTl.js";function i(a){return`<span style="display: flex; align-items: center; gap: 2px;">
		${a.logo??""}
		${a.title}
	</span>`}const I={title:"Manager/brandTitle",tags:["new","version:1.0","autodocs"]},e={parameters:{docs:{source:{code:s`brandTitle({
                    title: 'My Storybook'
                })`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"My Storybook"})}})},t={parameters:{docs:{source:{code:s`brandTitle({
                    title: '<span style="color: #ff4785;">My Storybook</span>'
                })`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:'<span style="color: #ff4785;">My Storybook</span>'})}})},o={parameters:{docs:{source:{code:s`brandTitle({
                    title: 'My Storybook 🚀'
                })`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"My Storybook 🚀"})}})},r={parameters:{docs:{source:{code:s`brandTitle({
                    title: 'My Storybook',
                    icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
                })`}}},render:()=>n.jsx("div",{dangerouslySetInnerHTML:{__html:i({title:"My Storybook",logo:'<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'})}})};var l,d,c,y,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:"Basic example showing how to create a brand title with just text",...(p=(y=e.parameters)==null?void 0:y.docs)==null?void 0:p.description}}};var m,u,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,b,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,M,v,T,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(M=r.parameters)==null?void 0:M.docs)==null?void 0:v.source},description:{story:"Example showing how to add an icon to the brand title",...(x=(T=r.parameters)==null?void 0:T.docs)==null?void 0:x.description}}};const w=["SimpleString","InHtml","WithEmoji","WithSvgIcon"];export{t as InHtml,e as SimpleString,o as WithEmoji,r as WithSvgIcon,w as __namedExportsOrder,I as default};
