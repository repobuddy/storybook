import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as te}from"./dedent-DVFkJXTl.js";import{s as de}from"./show_doc_source-CWgnZoeJ.js";import{d as se}from"./define_docs_param-lmgaBKCF.js";const ge={title:"storybook-addon-tag-badges/tagBadges"},r={tags:["editor"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Story with live editor"}),e.jsx("code",{children:"tags: ['editor']"})]})},o={tags:["new"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Recently added components or props/features"}),e.jsx("code",{children:"tags: ['new']"})]})},t={tags:["beta"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Warn that a component or prop is not stable yet"}),e.jsx("code",{children:"tags: ['beta']"})]})},d={tags:["deprecated"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components or props that should be avoided in new code"}),e.jsx("code",{children:"tags: ['deprecated']"})]})},s={tags:["outdated"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components with design changes that weren't yet implemented, which can incur extra development costs to your users"}),e.jsx("code",{children:"tags: ['outdated']"})]})},n={tags:["danger"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components that require particular attention when configuring them (e.g. for with security concerns)"}),e.jsx("code",{children:"tags: ['danger']"})]})},a={tags:["todo"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Todo story"}),e.jsx("code",{children:"tags: ['todo']"})]})},i={tags:["code-only"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components that only exist in code, and not in design"}),e.jsx("code",{children:"tags: ['code-only']"})]})},c={tags:["internal"],parameters:se({source:{code:te`
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
            `}}),decorators:[de()],render:()=>e.jsx(e.Fragment,{})},g={tags:["snapshot","!test"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Story with snapshot"}),e.jsx("code",{children:"tags: ['snapshot']"})]})},p={tags:["keyboard"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Story with keyboard interactions"}),e.jsx("code",{children:"tags: ['keyboard']"})]})},u={tags:["unit"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Unit test story"}),e.jsx("code",{children:"tags: ['unit']"})]})},l={tags:["integration"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Integration test story"}),e.jsx("code",{children:"tags: ['integration']"})]})},m={tags:["version:1.0"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Version tag is used to indicate when the component/feature/property becomes available."}),e.jsx("code",{children:"tags: ['version:1.0']"})]})};var h,v,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  tags: ['editor'],
  render: () => <div>
            <div>Story with live editor</div>
            <code>tags: ['editor']</code>
        </div>
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,j,b;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['new'],
  render: () => <div>
            <div>Recently added components or props/features</div>
            <code>tags: ['new']</code>
        </div>
}`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var w,B,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  tags: ['beta'],
  render: () => <div>
            <div>Warn that a component or prop is not stable yet</div>
            <code>tags: ['beta']</code>
        </div>
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var f,k,D;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['deprecated'],
  render: () => <div>
            <div>Components or props that should be avoided in new code</div>
            <code>tags: ['deprecated']</code>
        </div>
}`,...(D=(k=d.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var E,C,N;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['outdated'],
  render: () => <div>
            <div>
                Components with design changes that weren't yet implemented, which can incur extra development costs to your
                users
            </div>
            <code>tags: ['outdated']</code>
        </div>
}`,...(N=(C=s.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var T,O,V;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['danger'],
  render: () => <div>
            <div>Components that require particular attention when configuring them (e.g. for with security concerns)</div>
            <code>tags: ['danger']</code>
        </div>
}`,...(V=(O=n.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,I,U;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['todo'],
  render: () => <div>
            <div>Todo story</div>
            <code>tags: ['todo']</code>
        </div>
}`,...(U=(I=a.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};var F,R,q;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ['code-only'],
  render: () => <div>
            <div>Components that only exist in code, and not in design</div>
            <code>tags: ['code-only']</code>
        </div>
}`,...(q=(R=i.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var A,K,P;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(P=(K=c.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var W,Y,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['snapshot', '!test'],
  render: () => <div>
            <div>Story with snapshot</div>
            <code>tags: ['snapshot']</code>
        </div>
}`,...(z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['keyboard'],
  render: () => <div>
            <div>Story with keyboard interactions</div>
            <code>tags: ['keyboard']</code>
        </div>
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var L,M,Q;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>
            <div>Unit test story</div>
            <code>tags: ['unit']</code>
        </div>
}`,...(Q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Z,$;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ['integration'],
  render: () => <div>
            <div>Integration test story</div>
            <code>tags: ['integration']</code>
        </div>
}`,...($=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,oe;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ['version:1.0'],
  render: () => <div>
            <div>Version tag is used to indicate when the component/feature/property becomes available.</div>
            <code>tags: ['version:1.0']</code>
        </div>
}`,...(oe=(re=m.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};const pe=["EditorBadge","NewBadge","BetaBadge","DeprecatedBadge","OutdatedBadge","DangerousBadge","TodoBadge","CodeOnlyBadge","InternalBadge","SnapshotBadge","KeyboardBadge","UnitTestBadge","IntegrationTestBadge","VersionBadge"];export{t as BetaBadge,i as CodeOnlyBadge,n as DangerousBadge,d as DeprecatedBadge,r as EditorBadge,l as IntegrationTestBadge,c as InternalBadge,p as KeyboardBadge,o as NewBadge,s as OutdatedBadge,g as SnapshotBadge,a as TodoBadge,u as UnitTestBadge,m as VersionBadge,pe as __namedExportsOrder,ge as default};
