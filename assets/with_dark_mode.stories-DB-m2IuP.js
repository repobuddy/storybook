import{j as t,u as k,d as b,r as n}from"./iframe-CLNnVhs-.js";import"./preload-helper-PPVm8Dsz.js";function h(r){if(r===void 0)return;const e={};for(const[o,a]of Object.entries(r))e[o.startsWith("--")?o:o.replace(/[A-Z]/g,d=>`-${d.toLowerCase()}`)]=a;return e}function s(r){return function(o,{parameters:a}){const d=a.darkMode;if(!d)return t.jsx(o,{});const p=k(),l=d.classTarget==="html"?document.documentElement:document.body;return p?(y(l,d.lightStyle),f(l,d.darkStyle)):(y(l,d.darkStyle),f(l,d.lightStyle)),r?.bodyClass&&v(document.body,r.bodyClass),r?.bodyStyle&&f(document.body,r.bodyStyle),t.jsx(o,{})}}function v(r,e){e&&(typeof e=="string"?r.classList.add(...e.split(" ")):Array.isArray(e)&&r.classList.add(...e))}function f(r,e){if(e)for(const[o,a]of Object.entries(h(e)))r.style.setProperty(o,a)}function y(r,e){if(e)for(const o of Object.keys(h(e)))r.style.removeProperty(o)}const C={title:"storybook-dark-mode/withDarkMode",tags:["new","version:1.0"],parameters:{layout:"centered"}},c={parameters:b({classTarget:"html",darkClass:["bg-green-800","font-extrabold"],lightClass:["bg-red-800","font-extralight"]}),decorators:[s()],render:()=>(n.useEffect(()=>()=>{document.documentElement.classList.remove("bg-green-800","bg-red-800","font-extrabold","font-extralight")},[]),t.jsx("div",{className:"p-4",children:t.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})}))},i={parameters:b({classTarget:"html",darkStyle:{backgroundColor:"#016630",color:"#ffffff"},lightStyle:{backgroundColor:"#9f0712",color:"#000000"}}),decorators:[s()],render:()=>(n.useEffect(()=>()=>{document.documentElement.style.removeProperty("background-color"),document.documentElement.style.removeProperty("color")},[]),t.jsx("div",{className:"p-4",children:t.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})}))},m={name:"bodyClass",tags:["props"],decorators:[s({bodyClass:"bg-red-800 font-extralight dark:bg-green-800 dark:font-extrabold"})],render:()=>(n.useEffect(()=>()=>{document.body.classList.remove("bg-red-800","font-extralight"),document.body.classList.remove("dark:bg-green-800","dark:font-extrabold")},[]),t.jsx("div",{children:"The background color will turn green in dark mode and red in light mode."}))},u={name:"bodyStyle",tags:["props"],decorators:[s({bodyStyle:{backgroundColor:"#016630",color:"#ffffff"}})],render:()=>(n.useEffect(()=>()=>{document.body.style.removeProperty("background-color"),document.body.style.removeProperty("color")},[]),t.jsx("div",{children:"`bodyStyle` is useful for applying styles to the body element with CSS variables that changes value with different color theme."}))},g={parameters:b({classTarget:"body",darkClass:["bg-green-800","font-extrabold"],lightClass:["bg-red-800","font-extralight"]}),decorators:[s()],render:()=>(n.useEffect(()=>()=>{document.body.classList.remove("bg-green-800","font-extrabold"),document.body.classList.remove("bg-red-800","font-extralight")},[]),t.jsx("div",{className:"p-4",children:t.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})}))};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: defineDarkModeParam({
    classTarget: 'html',
    darkClass: ['bg-green-800', 'font-extrabold'],
    lightClass: ['bg-red-800', 'font-extralight']
  }),
  decorators: [withDarkMode()],
  render: () => {
    useEffect(() => () => {
      document.documentElement.classList.remove('bg-green-800', 'bg-red-800', 'font-extrabold', 'font-extralight');
    }, []);
    return <div className="p-4">
                <p>The background color will turn green in dark mode and red in light mode.</p>
            </div>;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const w=["WithClassName","WithStyle","BodyClass","BodyStyle","WithBodyTarget"];export{m as BodyClass,u as BodyStyle,g as WithBodyTarget,c as WithClassName,i as WithStyle,w as __namedExportsOrder,C as default};
