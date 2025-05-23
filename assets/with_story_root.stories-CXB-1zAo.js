import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./index-D4lIrffr.js";import"./index-CVxveG77.js";import"./index-GpeTx76k.js";import{w as a}from"./with_story_root-B3sbkrcc.js";import"./iframe-BLRipPEc.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const T={title:"storybook-dark-mode/withStoryRoot",tags:["new","version:1.0"],parameters:{layout:"centered"}},r={decorators:[a({classTarget:"html",dark:{className:"bg-green-800 text-white"},light:{className:["bg-red-800","text-black"]}})],render:()=>(p.useEffect(()=>()=>{document.body.classList.remove("bg-green-800"),document.body.classList.remove("bg-red-800")},[]),e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})}))},o={decorators:[a({classTarget:"html",dark:{style:{backgroundColor:"#016630",color:"#ffffff"}},light:{style:{backgroundColor:"#9f0712",color:"#000000"}}})],render:()=>(p.useEffect(()=>()=>{document.body.style.removeProperty("background-color"),document.body.style.removeProperty("color")},[]),e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})}))},t={decorators:[a({classTarget:"body",dark:{className:"bg-green-800 text-white"},light:{className:["bg-red-800","text-black"]}})],render:()=>e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})})};var s,d,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  decorators: [withStoryRoot({
    classTarget: 'html',
    dark: {
      className: 'bg-green-800 text-white'
    },
    light: {
      className: ['bg-red-800', 'text-black']
    }
  })],
  render: () => {
    useEffect(() => () => {
      document.body.classList.remove('bg-green-800');
      document.body.classList.remove('bg-red-800');
    }, []);
    return <div className="p-4">
                <p>The background color will turn green in dark mode and red in light mode.</p>
            </div>;
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,n,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  decorators: [withStoryRoot({
    classTarget: 'html',
    dark: {
      style: {
        backgroundColor: '#016630',
        color: '#ffffff'
      }
    },
    light: {
      style: {
        backgroundColor: '#9f0712',
        color: '#000000'
      }
    }
  })],
  render: () => {
    useEffect(() => () => {
      document.body.style.removeProperty('background-color');
      document.body.style.removeProperty('color');
    }, []);
    return <div className="p-4">
                <p>The background color will turn green in dark mode and red in light mode.</p>
            </div>;
  }
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,g,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [withStoryRoot({
    classTarget: 'body',
    dark: {
      className: 'bg-green-800 text-white'
    },
    light: {
      className: ['bg-red-800', 'text-black']
    }
  })],
  render: () => {
    return <div className="p-4">
                <p>The background color will turn green in dark mode and red in light mode.</p>
            </div>;
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const S=["WithClassName","WithStyle","WithBodyTarget"];export{t as WithBodyTarget,r as WithClassName,o as WithStyle,S as __namedExportsOrder,T as default};
