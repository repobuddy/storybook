import{n as e}from"./rolldown-runtime-Dxh6kD9_.js";import{en as t,gt as n,n as r,r as i,tn as a}from"./iframe-CQ9MsOev.js";import{n as o,t as s}from"./dedent-PcFMyqnX.js";import{O as c,_ as l,t as u,x as d}from"./src-vim89Lt8.js";var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{t(),o(),u(),r(),f=n(),a(),{fn:p}=__STORYBOOK_MODULE_TEST__,m=i.meta({title:`Parameters/defineActionsParam`,tags:[`func`,`!snapshot`,`new`,`version:1.0`],decorators:[c()],args:{onClick:p()},render:()=>(0,f.jsx)(f.Fragment,{})}),h=m.story({parameters:{...d({argTypesRegex:`^on[A-Z].*`}),...l({source:{code:s`defineActionsParam({
					argTypesRegex: '^on[A-Z].*'
				})`}})}}),g=m.story({parameters:{...d({disable:!0}),...l({source:{code:s`defineActionsParam({
					disable: true
				})`}})}}),_=m.story({parameters:{...d({handles:[`onClick`,`onMouseOver`,`onSubmit`]}),...l({source:{code:s`defineActionsParam({
					handles: ['onClick', 'onMouseOver', 'onSubmit']
				})`}})}}),v=m.story({parameters:{...d({argTypesRegex:`^on[A-Z].*`,handles:[`customEvent`,`anotherEvent`],disable:!1}),...l({source:{code:s`defineActionsParam({
				argTypesRegex: '^on[A-Z].*',
				handles: ['customEvent', 'anotherEvent'],
				disable: false
			})`}})}}),y=[`WithArgTypesRegex`,`DisabledActions`,`ExplicitHandles`,`CombinedConfig`],h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
	parameters: {
		...defineActionsParam({
			argTypesRegex: '^on[A-Z].*'
		}),
		...defineDocsParam({
			source: {
				code: dedent\`defineActionsParam({
					argTypesRegex: '^on[A-Z].*'
				})\`
			}
		})
	}
})`,...h.input.parameters?.docs?.source},description:{story:"Basic example showing how to configure actions parameters with `argTypesRegex`\nto automatically match event handler props.",...h.input.parameters?.docs?.description}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
	parameters: {
		...defineActionsParam({
			disable: true
		}),
		...defineDocsParam({
			source: {
				code: dedent\`defineActionsParam({
					disable: true
				})\`
			}
		})
	}
})`,...g.input.parameters?.docs?.source},description:{story:`Example showing how to disable actions for a story`,...g.input.parameters?.docs?.description}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
	parameters: {
		...defineActionsParam({
			handles: ['onClick', 'onMouseOver', 'onSubmit']
		}),
		...defineDocsParam({
			source: {
				code: dedent\`defineActionsParam({
					handles: ['onClick', 'onMouseOver', 'onSubmit']
				})\`
			}
		})
	}
})`,..._.input.parameters?.docs?.source},description:{story:`Example showing how to explicitly specify action handlers`,..._.input.parameters?.docs?.description}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
	parameters: {
		...defineActionsParam({
			argTypesRegex: '^on[A-Z].*',
			handles: ['customEvent', 'anotherEvent'],
			disable: false
		}),
		...defineDocsParam({
			source: {
				code: dedent\`defineActionsParam({
				argTypesRegex: '^on[A-Z].*',
				handles: ['customEvent', 'anotherEvent'],
				disable: false
			})\`
			}
		})
	}
})`,...v.input.parameters?.docs?.source},description:{story:`Example showing combined configuration options`,...v.input.parameters?.docs?.description}}}})))()}b();export{v as CombinedConfig,g as DisabledActions,_ as ExplicitHandles,h as WithArgTypesRegex,y as __namedExportsOrder};