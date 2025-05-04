import{j as D}from"./jsx-runtime-D_zvdyIk.js";import{f as W}from"./index-BW375jh7.js";import{d as j}from"./define_parameters-Dh8E5HRZ.js";function t(Z){return{actions:Z}}const M={title:"Parameters/defineActionsParam",tags:["new","version:1.0.0"],parameters:t({argTypesRegex:"^on[A-Z].*"}),args:{onClick:W()},render:()=>D.jsx("div",{children:"Hello"})},e={},r={parameters:t({disable:!0})},s={parameters:t({handles:["onClick","onMouseOver","onSubmit"]})},a={parameters:t({argTypesRegex:"^on[A-Z].*",handles:["customEvent","anotherEvent"],disable:!1})},o={parameters:j({actions:{argTypesRegex:"^on[A-Z].*"}})};var n,i,c,m,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"Basic example showing how to configure actions parameters with `argTypesRegex`\nto automatically match event handler props.",...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};var d,l,g,u,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: defineActionsParam({
    disable: true
  })
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source},description:{story:"Example showing how to disable actions for a story",...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var h,x,y,A,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: defineActionsParam({
    handles: ['onClick', 'onMouseOver', 'onSubmit']
  })
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:"Example showing how to explicitly specify action handlers",...(b=(A=s.parameters)==null?void 0:A.docs)==null?void 0:b.description}}};var E,P,v,w,R;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: defineActionsParam({
    argTypesRegex: '^on[A-Z].*',
    handles: ['customEvent', 'anotherEvent'],
    disable: false
  })
}`,...(v=(P=a.parameters)==null?void 0:P.docs)==null?void 0:v.source},description:{story:"Example showing combined configuration options",...(R=(w=a.parameters)==null?void 0:w.docs)==null?void 0:R.description}}};var T,C,S;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: defineParameters<ActionsParam>({
    actions: {
      argTypesRegex: '^on[A-Z].*'
    }
  })
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const _=["WithArgTypesRegex","DisabledActions","ExplicitHandles","CombinedConfig","WithDefineParameters"];export{a as CombinedConfig,r as DisabledActions,s as ExplicitHandles,e as WithArgTypesRegex,o as WithDefineParameters,_ as __namedExportsOrder,M as default};
