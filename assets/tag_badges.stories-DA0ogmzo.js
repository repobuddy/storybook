import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as $}from"./dedent-DVFkJXTl.js";import{s as ee}from"./show_doc_source-CWgnZoeJ.js";import{d as re}from"./define_docs_param-lmgaBKCF.js";const de={title:"storybook-addon-tag-badges/tagBadges"},r={tags:["editor"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Story with live editor"}),e.jsx("code",{children:"tags: ['editor']"})]})},o={tags:["new"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Recently added components or props/features"}),e.jsx("code",{children:"tags: ['new']"})]})},t={tags:["beta"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Warn that a component or prop is not stable yet"}),e.jsx("code",{children:"tags: ['beta']"})]})},n={tags:["deprecated"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components or props that should be avoided in new code"}),e.jsx("code",{children:"tags: ['deprecated']"})]})},s={tags:["outdated"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components with design changes that weren't yet implemented, which can incur extra development costs to your users"}),e.jsx("code",{children:"tags: ['outdated']"})]})},d={tags:["danger"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components that require particular attention when configuring them (e.g. for with security concerns)"}),e.jsx("code",{children:"tags: ['danger']"})]})},a={tags:["todo"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Todo story"}),e.jsx("code",{children:"tags: ['todo']"})]})},i={tags:["code-only"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Components that only exist in code, and not in design"}),e.jsx("code",{children:"tags: ['code-only']"})]})},c={tags:["internal"],parameters:re({source:{code:$`
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
            `}}),decorators:[ee()],render:()=>e.jsx(e.Fragment,{})},g={tags:["snapshot","!test"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Story with snapshot"}),e.jsx("code",{children:"tags: ['snapshot']"})]})},p={tags:["unit"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Unit test story"}),e.jsx("code",{children:"tags: ['unit']"})]})},u={tags:["integration"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Integration test story"}),e.jsx("code",{children:"tags: ['integration']"})]})},l={tags:["version:1.0"],render:()=>e.jsxs("div",{children:[e.jsx("div",{children:"Version tag is used to indicate when the component/feature/property becomes available."}),e.jsx("code",{children:"tags: ['version:1.0']"})]})};var m,h,v;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['editor'],
  render: () => <div>
            <div>Story with live editor</div>
            <code>tags: ['editor']</code>
        </div>
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,y,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  tags: ['new'],
  render: () => <div>
            <div>Recently added components or props/features</div>
            <code>tags: ['new']</code>
        </div>
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var b,w,B;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  tags: ['beta'],
  render: () => <div>
            <div>Warn that a component or prop is not stable yet</div>
            <code>tags: ['beta']</code>
        </div>
}`,...(B=(w=t.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var f,S,D;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  tags: ['deprecated'],
  render: () => <div>
            <div>Components or props that should be avoided in new code</div>
            <code>tags: ['deprecated']</code>
        </div>
}`,...(D=(S=n.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var E,C,N;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  tags: ['outdated'],
  render: () => <div>
            <div>
                Components with design changes that weren't yet implemented, which can incur extra development costs to your
                users
            </div>
            <code>tags: ['outdated']</code>
        </div>
}`,...(N=(C=s.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var T,O,V;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  tags: ['danger'],
  render: () => <div>
            <div>Components that require particular attention when configuring them (e.g. for with security concerns)</div>
            <code>tags: ['danger']</code>
        </div>
}`,...(V=(O=d.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var _,k,I;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  tags: ['todo'],
  render: () => <div>
            <div>Todo story</div>
            <code>tags: ['todo']</code>
        </div>
}`,...(I=(k=a.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var U,F,R;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  tags: ['code-only'],
  render: () => <div>
            <div>Components that only exist in code, and not in design</div>
            <code>tags: ['code-only']</code>
        </div>
}`,...(R=(F=i.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var q,A,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var W,Y,z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  tags: ['snapshot', '!test'],
  render: () => <div>
            <div>Story with snapshot</div>
            <code>tags: ['snapshot']</code>
        </div>
}`,...(z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  tags: ['unit'],
  render: () => <div>
            <div>Unit test story</div>
            <code>tags: ['unit']</code>
        </div>
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,L,M;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ['integration'],
  render: () => <div>
            <div>Integration test story</div>
            <code>tags: ['integration']</code>
        </div>
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var Q,X,Z;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ['version:1.0'],
  render: () => <div>
            <div>Version tag is used to indicate when the component/feature/property becomes available.</div>
            <code>tags: ['version:1.0']</code>
        </div>
}`,...(Z=(X=l.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};const ae=["EditorBadge","NewBadge","BetaBadge","DeprecatedBadge","OutdatedBadge","DangerousBadge","TodoBadge","CodeOnlyBadge","InternalBadge","SnapshotBadge","UnitTestBadge","IntegrationTestBadge","VersionBadge"];export{t as BetaBadge,i as CodeOnlyBadge,d as DangerousBadge,n as DeprecatedBadge,r as EditorBadge,u as IntegrationTestBadge,c as InternalBadge,o as NewBadge,s as OutdatedBadge,g as SnapshotBadge,a as TodoBadge,p as UnitTestBadge,l as VersionBadge,ae as __namedExportsOrder,de as default};
