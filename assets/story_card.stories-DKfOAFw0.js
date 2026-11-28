import{n as e}from"./rolldown-runtime-Dxh6kD9_.js";import{en as t,gt as n,n as r,r as i,tn as a}from"./iframe-CQ9MsOev.js";import{_ as o,j as s,t as c,w as l}from"./src-vim89Lt8.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=e((()=>{t(),c(),r(),u=n(),a(),{expect:d}=__STORYBOOK_MODULE_TEST__,f=i.meta({title:`components/StoryCard`,tags:[`new`,`version:2.8`,`autodocs`],component:s,parameters:o({description:{component:"`StoryCard` is a card component that displays information with optional title and appearance styling.<br/>It supports appearance variants: `error`, `warn`, `info` (default), `source`, and `output`.<br/>The component accepts a `title` prop for the heading and `children` for the card body content."}}),argTypes:{appearance:{control:{type:`select`},options:[`error`,`warn`,`info`,`source`,`output`]},status:{control:{type:`select`},options:[`error`,`warn`,`info`]},title:{control:{type:`text`}},className:{control:{type:`text`}},"data-testid":{control:{type:`text`}}}}),p=f.story({args:{children:`This is a basic story card with default info status.`}}),m=f.story({name:`title: provided`,tags:[`props`],parameters:o({description:{story:`StoryCard with a title heading displayed above the content.`}}),args:{title:`Card Title`,children:`This card has a title displayed as a heading.`}}),h=f.story({name:`status: error`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.8`],parameters:o({description:{story:'Deprecated: use `appearance: "error"` instead.'}}),args:{status:`error`,title:`Error Card`,children:`This card displays an error status with red background styling.`},decorators:[l({appearance:`warn`})]}),g=f.story({name:`status: warn`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.8`],parameters:o({description:{story:'Deprecated: use `appearance: "warn"` instead.'}}),args:{status:`warn`,title:`Warning Card`,children:`This card displays a warning status with yellow background styling.`},decorators:[l({appearance:`warn`})]}),_=f.story({name:`status: info`,tags:[`props`,`deprecated`,`version:2.14`,`!version:2.8`],parameters:o({description:{story:'Deprecated: use `appearance: "info"` instead.'}}),args:{status:`info`,title:`Info Card`,children:`This card displays an info status with blue background styling.`},decorators:[l({appearance:`warn`})]}),v=f.story({name:`appearance: error`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:o({description:{story:`Use for failure states, validation errors, or critical messages that require immediate attention.`}}),args:{appearance:`error`,title:`Error Card`,children:`Use appearance="error" when the card conveys a failure or critical message.`}}),y=f.story({name:`appearance: warn`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:o({description:{story:`Use for cautions, deprecation notices, or non-blocking issues the user should be aware of.`}}),args:{appearance:`warn`,title:`Warning Card`,children:`Use appearance="warn" when the card conveys a caution or deprecation.`}}),b=f.story({name:`appearance: info`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:o({description:{story:`Use for general context, tips, or neutral information. Default when neither appearance nor status is set.`}}),args:{appearance:`info`,title:`Info Card`,children:`Use appearance="info" for neutral context or tips (default).`}}),x=f.story({name:`appearance: source`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:o({description:{story:`Use when embedding code or source snippets so the card blends with the page (e.g. with showSource).`}}),args:{appearance:`source`,title:`Source Card`,children:`Use appearance="source" for code/source blocks that should blend in.`}}),S=f.story({name:`appearance: output`,tags:[`props`,`version:2.14`,`!version:2.8`],parameters:o({description:{story:`Use when showing results, success feedback, or generated output.`}}),args:{appearance:`output`,title:`Output Card`,children:`Use appearance="output" for results or success feedback.`}}),C=f.story({name:`children: complex content`,tags:[`props`],parameters:o({description:{story:`StoryCard can contain complex React content, not just plain text.`}}),render:()=>(0,u.jsx)(s,{title:`Complex Content Example`,children:(0,u.jsxs)(`div`,{className:`rbsb:flex rbsb:flex-col rbsb:gap-2`,children:[(0,u.jsx)(`p`,{children:`This card contains multiple elements:`}),(0,u.jsxs)(`ul`,{className:`rbsb:list-disc rbsb:list-inside rbsb:ml-4`,children:[(0,u.jsx)(`li`,{children:`List item one`}),(0,u.jsx)(`li`,{children:`List item two`}),(0,u.jsx)(`li`,{children:`List item three`})]}),(0,u.jsx)(`button`,{type:`button`,className:`rbsb:bg-sky-700 rbsb:text-white rbsb:rounded rbsb:px-4 rbsb:py-2 rbsb:self-start`,children:`Action Button`})]})})}),w=f.story({name:`className: custom`,tags:[`props`],parameters:o({description:{story:`StoryCard accepts a custom className prop to override or extend default styles.`}}),args:{title:`Custom Styled Card`,className:`rbsb:border-2 rbsb:border-sky-500`,children:`This card has custom border styling applied via className.`}}),T=f.story({name:`className: function`,tags:[`props`],parameters:o({description:{story:`StoryCard accepts a function for className that receives the card state (including appearance) and default className.`}}),render:()=>(0,u.jsx)(s,{title:`Function-based className`,appearance:`warn`,className:({appearance:e,defaultClassName:t})=>`${t} rbsb:border-2 ${e===`warn`?`rbsb:border-yellow-500`:`rbsb:border-gray-500`} rbsb:shadow-lg`,children:`This card uses a function to compute className based on the card state.`})}),E=f.story({name:`data-testid`,tags:[`props`,`unit`],parameters:o({description:{story:"StoryCard forwards the `data-testid` prop to the root section for testing and automation."}}),args:{"data-testid":`story-card-example`,title:`Card with data-testid`,children:`This card has data-testid="story-card-example" on the root section for testing.`},play:async({canvas:e})=>{let t=e.getByTestId(`story-card-example`);await d(t).toBeInTheDocument()}}),D=[`BasicUsage`,`WithTitle`,`StatusError`,`StatusWarn`,`StatusInfo`,`AppearanceError`,`AppearanceWarn`,`AppearanceInfo`,`AppearanceSource`,`AppearanceOutput`,`WithComplexContent`,`CustomClassName`,`CustomClassNameFunction`,`DataTestId`],p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
	args: {
		children: 'This is a basic story card with default info status.'
	}
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'title: provided',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'StoryCard with a title heading displayed above the content.'
		}
	}),
	args: {
		title: 'Card Title',
		children: 'This card has a title displayed as a heading.'
	}
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'status: error',
	tags: ['props', 'deprecated', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Deprecated: use \`appearance: "error"\` instead.'
		}
	}),
	args: {
		status: 'error',
		title: 'Error Card',
		children: 'This card displays an error status with red background styling.'
	},
	decorators: [withStoryCard({ appearance: 'warn' })]
})`,...h.input.parameters?.docs?.source}}},g.input.parameters={...g.input.parameters,docs:{...g.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'status: warn',
	tags: ['props', 'deprecated', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Deprecated: use \`appearance: "warn"\` instead.'
		}
	}),
	args: {
		status: 'warn',
		title: 'Warning Card',
		children: 'This card displays a warning status with yellow background styling.'
	},
	decorators: [withStoryCard({ appearance: 'warn' })]
})`,...g.input.parameters?.docs?.source}}},_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'status: info',
	tags: ['props', 'deprecated', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Deprecated: use \`appearance: "info"\` instead.'
		}
	}),
	args: {
		status: 'info',
		title: 'Info Card',
		children: 'This card displays an info status with blue background styling.'
	},
	decorators: [withStoryCard({ appearance: 'warn' })]
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'appearance: error',
	tags: ['props', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Use for failure states, validation errors, or critical messages that require immediate attention.'
		}
	}),
	args: {
		appearance: 'error',
		title: 'Error Card',
		children: 'Use appearance="error" when the card conveys a failure or critical message.'
	}
})`,...v.input.parameters?.docs?.source}}},y.input.parameters={...y.input.parameters,docs:{...y.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'appearance: warn',
	tags: ['props', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Use for cautions, deprecation notices, or non-blocking issues the user should be aware of.'
		}
	}),
	args: {
		appearance: 'warn',
		title: 'Warning Card',
		children: 'Use appearance="warn" when the card conveys a caution or deprecation.'
	}
})`,...y.input.parameters?.docs?.source}}},b.input.parameters={...b.input.parameters,docs:{...b.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'appearance: info',
	tags: ['props', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Use for general context, tips, or neutral information. Default when neither appearance nor status is set.'
		}
	}),
	args: {
		appearance: 'info',
		title: 'Info Card',
		children: 'Use appearance="info" for neutral context or tips (default).'
	}
})`,...b.input.parameters?.docs?.source}}},x.input.parameters={...x.input.parameters,docs:{...x.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'appearance: source',
	tags: ['props', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Use when embedding code or source snippets so the card blends with the page (e.g. with showSource).'
		}
	}),
	args: {
		appearance: 'source',
		title: 'Source Card',
		children: 'Use appearance="source" for code/source blocks that should blend in.'
	}
})`,...x.input.parameters?.docs?.source}}},S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'appearance: output',
	tags: ['props', 'version:2.14', '!version:2.8'],
	parameters: defineDocsParam({
		description: {
			story: 'Use when showing results, success feedback, or generated output.'
		}
	}),
	args: {
		appearance: 'output',
		title: 'Output Card',
		children: 'Use appearance="output" for results or success feedback.'
	}
})`,...S.input.parameters?.docs?.source}}},C.input.parameters={...C.input.parameters,docs:{...C.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'children: complex content',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'StoryCard can contain complex React content, not just plain text.'
		}
	}),
	render: () => (
		<StoryCard title="Complex Content Example">
			<div className="rbsb:flex rbsb:flex-col rbsb:gap-2">
				<p>This card contains multiple elements:</p>
				<ul className="rbsb:list-disc rbsb:list-inside rbsb:ml-4">
					<li>List item one</li>
					<li>List item two</li>
					<li>List item three</li>
				</ul>
				<button
					type="button"
					className="rbsb:bg-sky-700 rbsb:text-white rbsb:rounded rbsb:px-4 rbsb:py-2 rbsb:self-start"
				>
					Action Button
				</button>
			</div>
		</StoryCard>
	)
})`,...C.input.parameters?.docs?.source}}},w.input.parameters={...w.input.parameters,docs:{...w.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'className: custom',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story: 'StoryCard accepts a custom className prop to override or extend default styles.'
		}
	}),
	args: {
		title: 'Custom Styled Card',
		className: 'rbsb:border-2 rbsb:border-sky-500',
		children: 'This card has custom border styling applied via className.'
	}
})`,...w.input.parameters?.docs?.source}}},T.input.parameters={...T.input.parameters,docs:{...T.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'className: function',
	tags: ['props'],
	parameters: defineDocsParam({
		description: {
			story:
				'StoryCard accepts a function for className that receives the card state (including appearance) and default className.'
		}
	}),
	render: () => (
		<StoryCard
			title="Function-based className"
			appearance="warn"
			className={({ appearance, defaultClassName }) => {
				const borderColor = appearance === 'warn' ? 'rbsb:border-yellow-500' : 'rbsb:border-gray-500'
				return \`\${defaultClassName} rbsb:border-2 \${borderColor} rbsb:shadow-lg\`
			}}
		>
			This card uses a function to compute className based on the card state.
		</StoryCard>
	)
})`,...T.input.parameters?.docs?.source}}},E.input.parameters={...E.input.parameters,docs:{...E.input.parameters?.docs,source:{originalSource:`meta.story({
	name: 'data-testid',
	tags: ['props', 'unit'],
	parameters: defineDocsParam({
		description: {
			story: 'StoryCard forwards the \`data-testid\` prop to the root section for testing and automation.'
		}
	}),
	args: {
		'data-testid': 'story-card-example',
		title: 'Card with data-testid',
		children: 'This card has data-testid="story-card-example" on the root section for testing.'
	},
	play: async ({ canvas }) => {
		const section = canvas.getByTestId('story-card-example')
		await expect(section).toBeInTheDocument()
	}
})`,...E.input.parameters?.docs?.source}}}})))()}O();export{v as AppearanceError,b as AppearanceInfo,S as AppearanceOutput,x as AppearanceSource,y as AppearanceWarn,p as BasicUsage,w as CustomClassName,T as CustomClassNameFunction,E as DataTestId,h as StatusError,_ as StatusInfo,g as StatusWarn,C as WithComplexContent,m as WithTitle,D as __namedExportsOrder};