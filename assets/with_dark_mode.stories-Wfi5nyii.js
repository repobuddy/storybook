import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-B_0iYUWB.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{n as i,r as a,t as o}from"./iframe-DyubpZFz.js";var s,c,l,u,d,f,p,m,h;t((()=>{s=e(n(),1),o(),c=r(),l={title:`storybook-dark-mode/withDarkMode`,tags:[`new`,`version:1.0`],parameters:{layout:`centered`}},u={parameters:a({classTarget:`html`,darkClass:[`rbsb:bg-green-800`,`rbsb:font-extrabold`],lightClass:[`rbsb:bg-red-800`,`rbsb:font-extralight`]}),decorators:[i()],render:()=>((0,s.useEffect)(()=>()=>{document.documentElement.classList.remove(`rbsb:bg-green-800`,`rbsb:bg-red-800`,`rbsb:font-extrabold`,`rbsb:font-extralight`)},[]),(0,c.jsx)(`div`,{className:`rbsb:p-4`,children:(0,c.jsx)(`p`,{children:`The background color will turn green in dark mode and red in light mode.`})}))},d={parameters:a({classTarget:`html`,darkStyle:{backgroundColor:`#016630`,color:`#ffffff`},lightStyle:{backgroundColor:`#9f0712`,color:`#000000`}}),decorators:[i()],render:()=>((0,s.useEffect)(()=>()=>{document.documentElement.style.removeProperty(`background-color`),document.documentElement.style.removeProperty(`color`)},[]),(0,c.jsx)(`div`,{className:`rbsb:p-4`,children:(0,c.jsx)(`p`,{children:`The background color will turn green in dark mode and red in light mode.`})}))},f={name:`bodyClass`,tags:[`props`],decorators:[i({bodyClass:`rbsb:bg-red-800 rbsb:font-extralight rbsb:dark:bg-green-800 rbsb:dark:font-extrabold`})],render:()=>((0,s.useEffect)(()=>()=>{document.body.classList.remove(`rbsb:bg-red-800`,`rbsb:font-extralight`),document.body.classList.remove(`rbsb:dark:bg-green-800`,`rbsb:dark:font-extrabold`)},[]),(0,c.jsx)(`div`,{children:`The background color will turn green in dark mode and red in light mode.`}))},p={name:`bodyStyle`,tags:[`props`],decorators:[i({bodyStyle:{backgroundColor:`#016630`,color:`#ffffff`}})],render:()=>((0,s.useEffect)(()=>()=>{document.body.style.removeProperty(`background-color`),document.body.style.removeProperty(`color`)},[]),(0,c.jsx)(`div`,{children:"`bodyStyle` is useful for applying styles to the body element with CSS variables that changes value with different color theme."}))},m={parameters:a({classTarget:`body`,darkClass:[`rbsb:bg-green-800`,`rbsb:font-extrabold`],lightClass:[`rbsb:bg-red-800`,`rbsb:font-extralight`]}),decorators:[i()],render:()=>((0,s.useEffect)(()=>()=>{document.body.classList.remove(`rbsb:bg-green-800`,`rbsb:font-extrabold`),document.body.classList.remove(`rbsb:bg-red-800`,`rbsb:font-extralight`)},[]),(0,c.jsx)(`div`,{className:`rbsb:p-4`,children:(0,c.jsx)(`p`,{children:`The background color will turn green in dark mode and red in light mode.`})}))},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`WithClassName`,`WithStyle`,`BodyClass`,`BodyStyle`,`WithBodyTarget`]}))();export{f as BodyClass,p as BodyStyle,m as WithBodyTarget,u as WithClassName,d as WithStyle,h as __namedExportsOrder,l as default};