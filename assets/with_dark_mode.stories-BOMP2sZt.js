import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,i,n as a}from"./iframe-BOajTtkX.js";var o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{o=t(),a(),s=n(),c={title:`storybook-dark-mode/withDarkMode`,tags:[`new`,`version:1.0`],parameters:{layout:`centered`}},l={parameters:r({classTarget:`html`,darkClass:[`rbsb:bg-green-800`,`rbsb:font-extrabold`],lightClass:[`rbsb:bg-red-800`,`rbsb:font-extralight`]}),decorators:[i()],render:()=>((0,o.useEffect)(()=>()=>{document.documentElement.classList.remove(`rbsb:bg-green-800`,`rbsb:bg-red-800`,`rbsb:font-extrabold`,`rbsb:font-extralight`)},[]),(0,s.jsx)(`div`,{className:`rbsb:p-4`,children:(0,s.jsx)(`p`,{children:`The background color will turn green in dark mode and red in light mode.`})}))},u={parameters:r({classTarget:`html`,darkStyle:{backgroundColor:`#016630`,color:`#ffffff`},lightStyle:{backgroundColor:`#9f0712`,color:`#000000`}}),decorators:[i()],render:()=>((0,o.useEffect)(()=>()=>{document.documentElement.style.removeProperty(`background-color`),document.documentElement.style.removeProperty(`color`)},[]),(0,s.jsx)(`div`,{className:`rbsb:p-4`,children:(0,s.jsx)(`p`,{children:`The background color will turn green in dark mode and red in light mode.`})}))},d={name:`bodyClass`,tags:[`props`],decorators:[i({bodyClass:`rbsb:bg-red-800 rbsb:font-extralight rbsb:dark:bg-green-800 rbsb:dark:font-extrabold`})],render:()=>((0,o.useEffect)(()=>()=>{document.body.classList.remove(`rbsb:bg-red-800`,`rbsb:font-extralight`),document.body.classList.remove(`rbsb:dark:bg-green-800`,`rbsb:dark:font-extrabold`)},[]),(0,s.jsx)(`div`,{children:`The background color will turn green in dark mode and red in light mode.`}))},f={name:`bodyStyle`,tags:[`props`],decorators:[i({bodyStyle:{backgroundColor:`#016630`,color:`#ffffff`}})],render:()=>((0,o.useEffect)(()=>()=>{document.body.style.removeProperty(`background-color`),document.body.style.removeProperty(`color`)},[]),(0,s.jsx)(`div`,{children:"`bodyStyle` is useful for applying styles to the body element with CSS variables that changes value with different color theme."}))},p={parameters:r({classTarget:`body`,darkClass:[`rbsb:bg-green-800`,`rbsb:font-extrabold`],lightClass:[`rbsb:bg-red-800`,`rbsb:font-extralight`]}),decorators:[i()],render:()=>((0,o.useEffect)(()=>()=>{document.body.classList.remove(`rbsb:bg-green-800`,`rbsb:font-extrabold`),document.body.classList.remove(`rbsb:bg-red-800`,`rbsb:font-extralight`)},[]),(0,s.jsx)(`div`,{className:`rbsb:p-4`,children:(0,s.jsx)(`p`,{children:`The background color will turn green in dark mode and red in light mode.`})}))},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`WithClassName`,`WithStyle`,`BodyClass`,`BodyStyle`,`WithBodyTarget`]})))()}h();export{d as BodyClass,f as BodyStyle,p as WithBodyTarget,l as WithClassName,u as WithStyle,m as __namedExportsOrder,c as default};