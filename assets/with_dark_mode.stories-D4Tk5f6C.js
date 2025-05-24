import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./index-D4lIrffr.js";import"./index-BSGadI03.js";import{d as l}from"./define_dark_mode-cIxEGJSY.js";import{w as o}from"./with_dark_mode-zmyIEEWU.js";import"./iframe-BxuJaD53.js";import"./index-DsJinFGm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";const B={title:"storybook-dark-mode/withDarkMode",tags:["new","version:1.0"],parameters:{layout:"centered"}},t={parameters:l({classTarget:"html",darkClass:["bg-green-800","font-extrabold"],lightClass:["bg-red-800","font-extralight"]}),decorators:[o()],render:()=>(r.useEffect(()=>()=>{document.documentElement.classList.remove("bg-green-800","font-extrabold"),document.documentElement.classList.remove("bg-red-800","font-extralight")},[]),e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})}))},a={parameters:l({classTarget:"html",darkStyle:{backgroundColor:"#016630",color:"#ffffff"},lightStyle:{backgroundColor:"#9f0712",color:"#000000"}}),decorators:[o()],render:()=>(r.useEffect(()=>()=>{document.documentElement.style.removeProperty("background-color"),document.documentElement.style.removeProperty("color")},[]),e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})}))},d={name:"bodyClass",tags:["props"],decorators:[o({bodyClass:"bg-red-800 font-extralight dark:bg-green-800 dark:font-extrabold"})],render:()=>(r.useEffect(()=>()=>{document.body.classList.remove("bg-red-800","font-extralight"),document.body.classList.remove("dark:bg-green-800","dark:font-extrabold")},[]),e.jsx("div",{children:"The background color will turn green in dark mode and red in light mode."}))},n={name:"bodyStyle",tags:["props"],decorators:[o({bodyStyle:{backgroundColor:"#016630",color:"#ffffff"}})],render:()=>(r.useEffect(()=>()=>{document.body.style.removeProperty("background-color"),document.body.style.removeProperty("color")},[]),e.jsx("div",{children:"`bodyStyle` is useful for applying styles to the body element with CSS variables that changes value with different color theme."}))},s={parameters:l({classTarget:"body",darkClass:["bg-green-800","font-extrabold"],lightClass:["bg-red-800","font-extralight"]}),decorators:[o()],render:()=>(r.useEffect(()=>()=>{document.body.classList.remove("bg-green-800","font-extrabold"),document.body.classList.remove("bg-red-800","font-extralight")},[]),e.jsx("div",{className:"p-4",children:e.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})}))};var c,m,i;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: defineDarkModeParam({
    classTarget: 'html',
    darkClass: ['bg-green-800', 'font-extrabold'],
    lightClass: ['bg-red-800', 'font-extralight']
  }),
  decorators: [withDarkMode()],
  render: () => {
    useEffect(() => () => {
      document.documentElement.classList.remove('bg-green-800', 'font-extrabold');
      document.documentElement.classList.remove('bg-red-800', 'font-extralight');
    }, []);
    return <div className="p-4">
                <p>The background color will turn green in dark mode and red in light mode.</p>
            </div>;
  }
}`,...(i=(m=t.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var g,u,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: defineDarkModeParam({
    classTarget: 'html',
    darkStyle: {
      backgroundColor: '#016630',
      color: '#ffffff'
    },
    lightStyle: {
      backgroundColor: '#9f0712',
      color: '#000000'
    }
  }),
  decorators: [withDarkMode()],
  render: () => {
    useEffect(() => () => {
      document.documentElement.style.removeProperty('background-color');
      document.documentElement.style.removeProperty('color');
    }, []);
    return <div className="p-4">
                <p>The background color will turn green in dark mode and red in light mode.</p>
            </div>;
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,p,h;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'bodyClass',
  tags: ['props'],
  decorators: [withDarkMode({
    bodyClass: 'bg-red-800 font-extralight dark:bg-green-800 dark:font-extrabold'
  })],
  render: () => {
    useEffect(() => () => {
      document.body.classList.remove('bg-red-800', 'font-extralight');
      document.body.classList.remove('dark:bg-green-800', 'dark:font-extrabold');
    }, []);
    return <div>The background color will turn green in dark mode and red in light mode.</div>;
  }
}`,...(h=(p=d.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var y,k,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'bodyStyle',
  tags: ['props'],
  decorators: [withDarkMode({
    bodyStyle: {
      backgroundColor: '#016630',
      color: '#ffffff'
    }
  })],
  render: () => {
    useEffect(() => () => {
      document.body.style.removeProperty('background-color');
      document.body.style.removeProperty('color');
    }, []);
    return <div>
                \`bodyStyle\` is useful for applying styles to the body element with CSS variables that changes value with
                different color theme.
            </div>;
  }
}`,...(v=(k=n.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var x,C,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: defineDarkModeParam({
    classTarget: 'body',
    darkClass: ['bg-green-800', 'font-extrabold'],
    lightClass: ['bg-red-800', 'font-extralight']
  }),
  decorators: [withDarkMode()],
  render: () => {
    useEffect(() => () => {
      document.body.classList.remove('bg-green-800', 'font-extrabold');
      document.body.classList.remove('bg-red-800', 'font-extralight');
    }, []);
    return <div className="p-4">
                <p>The background color will turn green in dark mode and red in light mode.</p>
            </div>;
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const W=["WithClassName","WithStyle","BodyClass","BodyStyle","WithBodyTarget"];export{d as BodyClass,n as BodyStyle,s as WithBodyTarget,t as WithClassName,a as WithStyle,W as __namedExportsOrder,B as default};
