import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{a as n}from"./chunk-W22LQPXL-B066xLLY.js";import{i as r,n as i,o as a,r as o,s}from"./iframe-DFuO2ShR.js";var c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{c=t(),r(),i(),l=n(),u=o.meta({title:`storybook-dark-mode/withDarkMode`,tags:[`new`,`version:1.0`],parameters:{layout:`centered`}}),d={a11y:{options:{rules:{"color-contrast":{enabled:!1}}}}},f=u.story({parameters:s({classTarget:`html`,darkClass:[`rbsb:bg-green-800`,`rbsb:font-extrabold`],lightClass:[`rbsb:bg-red-800`,`rbsb:font-extralight`]}),decorators:[a()],render:()=>((0,c.useEffect)(()=>()=>{document.documentElement.classList.remove(`rbsb:bg-green-800`,`rbsb:bg-red-800`,`rbsb:font-extrabold`,`rbsb:font-extralight`)},[]),(0,l.jsx)(`div`,{className:`rbsb:p-4`,children:(0,l.jsx)(`p`,{children:`The background color will turn green in dark mode and red in light mode.`})}))}),p=u.story({parameters:{...d,...s({classTarget:`html`,darkStyle:{backgroundColor:`#016630`,color:`#ffffff`},lightStyle:{backgroundColor:`#9f0712`,color:`#000000`}})},decorators:[a()],render:()=>((0,c.useEffect)(()=>()=>{document.documentElement.style.removeProperty(`background-color`),document.documentElement.style.removeProperty(`color`)},[]),(0,l.jsx)(`div`,{className:`rbsb:p-4`,children:(0,l.jsx)(`p`,{children:`The background color will turn green in dark mode and red in light mode.`})}))}),m=u.story({name:`bodyClass`,tags:[`props`],parameters:d,decorators:[a({bodyClass:`rbsb:bg-red-800 rbsb:font-extralight rbsb:dark:bg-green-800 rbsb:dark:font-extrabold`})],render:()=>((0,c.useEffect)(()=>()=>{document.body.classList.remove(`rbsb:bg-red-800`,`rbsb:font-extralight`),document.body.classList.remove(`rbsb:dark:bg-green-800`,`rbsb:dark:font-extrabold`)},[]),(0,l.jsx)(`div`,{children:`The background color will turn green in dark mode and red in light mode.`}))}),h=u.story({name:`bodyStyle`,tags:[`props`],decorators:[a({bodyStyle:{backgroundColor:`#016630`,color:`#ffffff`}})],render:()=>((0,c.useEffect)(()=>()=>{document.body.style.removeProperty(`background-color`),document.body.style.removeProperty(`color`)},[]),(0,l.jsx)(`div`,{children:"`bodyStyle` is useful for applying styles to the body element with CSS variables that changes value with different color theme."}))}),g=u.story({parameters:s({classTarget:`body`,darkClass:[`rbsb:bg-green-800`,`rbsb:font-extrabold`],lightClass:[`rbsb:bg-red-800`,`rbsb:font-extralight`]}),decorators:[a()],render:()=>((0,c.useEffect)(()=>()=>{document.body.classList.remove(`rbsb:bg-green-800`,`rbsb:font-extrabold`),document.body.classList.remove(`rbsb:bg-red-800`,`rbsb:font-extralight`)},[]),(0,l.jsx)(`div`,{className:`rbsb:p-4`,children:(0,l.jsx)(`p`,{children:`The background color will turn green in dark mode and red in light mode.`})}))}),_=[`WithClassName`,`WithStyle`,`BodyClass`,`BodyStyle`,`WithBodyTarget`],f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  parameters: {
    ...demoColors,
    ...defineDarkModeParam({
      classTarget: 'html',
      darkStyle: {
        backgroundColor: '#016630',
        color: '#ffffff'
      },
      lightStyle: {
        backgroundColor: '#9f0712',
        color: '#000000'
      }
    })
  },
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
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  name: 'bodyClass',
  tags: ['props'],
  parameters: demoColors,
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
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...g.input.parameters?.docs?.source}}}})))()}v();export{m as BodyClass,h as BodyStyle,g as WithBodyTarget,f as WithClassName,p as WithStyle,_ as __namedExportsOrder};