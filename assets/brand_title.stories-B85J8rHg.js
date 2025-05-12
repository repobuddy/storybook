import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as a}from"./dedent-DVFkJXTl.js";import"./index-D4lIrffr.js";import{v as l,C as L}from"./index-BhdSJj-m.js";import"./index-DsJinFGm.js";import"./iframe-Fxb1zemG.js";function d(e){return`<span style="display: flex; align-items: center; gap: 2px;">
		${e.logo??""}
		${e.title}
	</span>`}l(L)`
  line-height: 1px;
`;l.div(({as:e,bgColor:j,borderColor:c,fgColor:p,context:m,theme:r})=>({display:"inline-block",fontSize:11,lineHeight:".75rem",alignSelf:"center",padding:m==="sidebar"?"3px 8px":"4px 12px",border:"none",cursor:e==="button"?"help":m==="sidebar"?"cursor":"initial",borderRadius:"3em",fontWeight:r.typography.weight.bold,background:j??r.color.mediumlight,boxShadow:r.base==="light"?`inset 0 0 0 1px ${c??`color-mix(in oklab, ${p??r.color.dark} 10%, transparent 90%)`}`:`inset 0 0 0 1px ${c??"none"}`,color:p??r.color.dark}));l.div(({theme:e})=>({padding:"8px 12px",boxSizing:"border-box",color:e.color.defaultText,lineHeight:"1.125rem"}));l.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-right: 32px;
`;const z={title:"Manager/brandTitle",tags:["new","version:1.0.0","autodocs"]},o={parameters:{docs:{source:{code:a`brandTitle({
                    title: 'My Storybook'
                })`}}},render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:d({title:"My Storybook"})}})},n={parameters:{docs:{source:{code:a`brandTitle({
                    title: '<span style="color: #ff4785;">My Storybook</span>'
                })`}}},render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:d({title:'<span style="color: #ff4785;">My Storybook</span>'})}})},i={parameters:{docs:{source:{code:a`brandTitle({
                    title: 'My Storybook 🚀'
                })`}}},render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:d({title:"My Storybook 🚀"})}})},t={parameters:{docs:{source:{code:a`brandTitle({
                    title: 'My Storybook',
                    icon: '<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'
                })`}}},render:()=>s.jsx("div",{dangerouslySetInnerHTML:{__html:d({title:"My Storybook",logo:'<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#ff4785"/></svg>'})}})};var y,g,u,b,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:"Basic example showing how to create a brand title with just text",...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.description}}};var S,x,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,M,T;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(T=(M=i.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var k,_,w,H,I;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(_=t.parameters)==null?void 0:_.docs)==null?void 0:w.source},description:{story:"Example showing how to add an icon to the brand title",...(I=(H=t.parameters)==null?void 0:H.docs)==null?void 0:I.description}}};const R=["SimpleString","InHtml","WithEmoji","WithSvgIcon"];export{n as InHtml,o as SimpleString,i as WithEmoji,t as WithSvgIcon,R as __namedExportsOrder,z as default};
