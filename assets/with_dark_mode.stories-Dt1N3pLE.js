import{j as t,u as k,r as a,d as f}from"./iframe-DsYrPJFW.js";import"./preload-helper-PPVm8Dsz.js";function h(r){if(r===void 0)return;const e={};for(const[o,d]of Object.entries(r))e[o.startsWith("--")?o:o.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)]=d;return e}function n(r){return function(o,{parameters:d}){const s=d.darkMode;if(!s)return t.jsx(o,{});const p=k(),l=s.classTarget==="html"?document.documentElement:document.body;return p?(y(l,s.lightStyle),g(l,s.darkStyle)):(y(l,s.darkStyle),g(l,s.lightStyle)),r?.bodyClass&&v(document.body,r.bodyClass),r?.bodyStyle&&g(document.body,r.bodyStyle),t.jsx(o,{})}}function v(r,e){e&&(typeof e=="string"?r.classList.add(...e.split(" ")):Array.isArray(e)&&r.classList.add(...e))}function g(r,e){if(e)for(const[o,d]of Object.entries(h(e)))r.style.setProperty(o,d)}function y(r,e){if(e)for(const o of Object.keys(h(e)))r.style.removeProperty(o)}const C={title:"storybook-dark-mode/withDarkMode",tags:["new","version:1.0"],parameters:{layout:"centered"}},b={parameters:f({classTarget:"html",darkClass:["rbsb:bg-green-800","rbsb:font-extrabold"],lightClass:["rbsb:bg-red-800","rbsb:font-extralight"]}),decorators:[n()],render:()=>(a.useEffect(()=>()=>{document.documentElement.classList.remove("rbsb:bg-green-800","rbsb:bg-red-800","rbsb:font-extrabold","rbsb:font-extralight")},[]),t.jsx("div",{className:"rbsb:p-4",children:t.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})}))},c={parameters:f({classTarget:"html",darkStyle:{backgroundColor:"#016630",color:"#ffffff"},lightStyle:{backgroundColor:"#9f0712",color:"#000000"}}),decorators:[n()],render:()=>(a.useEffect(()=>()=>{document.documentElement.style.removeProperty("background-color"),document.documentElement.style.removeProperty("color")},[]),t.jsx("div",{className:"rbsb:p-4",children:t.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})}))},i={name:"bodyClass",tags:["props"],decorators:[n({bodyClass:"rbsb:bg-red-800 rbsb:font-extralight rbsb:dark:bg-green-800 rbsb:dark:font-extrabold"})],render:()=>(a.useEffect(()=>()=>{document.body.classList.remove("rbsb:bg-red-800","rbsb:font-extralight"),document.body.classList.remove("rbsb:dark:bg-green-800","rbsb:dark:font-extrabold")},[]),t.jsx("div",{children:"The background color will turn green in dark mode and red in light mode."}))},m={name:"bodyStyle",tags:["props"],decorators:[n({bodyStyle:{backgroundColor:"#016630",color:"#ffffff"}})],render:()=>(a.useEffect(()=>()=>{document.body.style.removeProperty("background-color"),document.body.style.removeProperty("color")},[]),t.jsx("div",{children:"`bodyStyle` is useful for applying styles to the body element with CSS variables that changes value with different color theme."}))},u={parameters:f({classTarget:"body",darkClass:["rbsb:bg-green-800","rbsb:font-extrabold"],lightClass:["rbsb:bg-red-800","rbsb:font-extralight"]}),decorators:[n()],render:()=>(a.useEffect(()=>()=>{document.body.classList.remove("rbsb:bg-green-800","rbsb:font-extrabold"),document.body.classList.remove("rbsb:bg-red-800","rbsb:font-extralight")},[]),t.jsx("div",{className:"rbsb:p-4",children:t.jsx("p",{children:"The background color will turn green in dark mode and red in light mode."})}))};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: defineDarkModeParam({
    classTarget: 'html',
    darkClass: ['rbsb:bg-green-800', 'rbsb:font-extrabold'],
    lightClass: ['rbsb:bg-red-800', 'rbsb:font-extralight']
  }),
  decorators: [withDarkMode()],
  render: () => {
    useEffect(() => () => {
      document.documentElement.classList.remove('rbsb:bg-green-800', 'rbsb:bg-red-800', 'rbsb:font-extrabold', 'rbsb:font-extralight');
    }, []);
    return <div className="rbsb:p-4">
                <p>The background color will turn green in dark mode and red in light mode.</p>
            </div>;
  }
}`,...b.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    return <div className="rbsb:p-4">
                <p>The background color will turn green in dark mode and red in light mode.</p>
            </div>;
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'bodyClass',
  tags: ['props'],
  decorators: [withDarkMode({
    bodyClass: 'rbsb:bg-red-800 rbsb:font-extralight rbsb:dark:bg-green-800 rbsb:dark:font-extrabold'
  })],
  render: () => {
    useEffect(() => () => {
      document.body.classList.remove('rbsb:bg-red-800', 'rbsb:font-extralight');
      document.body.classList.remove('rbsb:dark:bg-green-800', 'rbsb:dark:font-extrabold');
    }, []);
    return <div>The background color will turn green in dark mode and red in light mode.</div>;
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: defineDarkModeParam({
    classTarget: 'body',
    darkClass: ['rbsb:bg-green-800', 'rbsb:font-extrabold'],
    lightClass: ['rbsb:bg-red-800', 'rbsb:font-extralight']
  }),
  decorators: [withDarkMode()],
  render: () => {
    useEffect(() => () => {
      document.body.classList.remove('rbsb:bg-green-800', 'rbsb:font-extrabold');
      document.body.classList.remove('rbsb:bg-red-800', 'rbsb:font-extralight');
    }, []);
    return <div className="rbsb:p-4">
                <p>The background color will turn green in dark mode and red in light mode.</p>
            </div>;
  }
}`,...u.parameters?.docs?.source}}};const w=["WithClassName","WithStyle","BodyClass","BodyStyle","WithBodyTarget"];export{i as BodyClass,m as BodyStyle,u as WithBodyTarget,b as WithClassName,c as WithStyle,w as __namedExportsOrder,C as default};
