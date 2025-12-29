import { type Meta, defineDocsParam } from '@repobuddy/storybook'
import type { ActivityProps } from 'react'
import { testType } from 'type-plus'

export const meta: Meta = {
	tags: ['new']
}

const activityProps: ActivityProps = {
	children: <></>
}

testType.equal<true, true, true>(true)

export default () => (
	<>
		<div>type of defineDocsParam is {typeof defineDocsParam}</div>
		<div>type of activityProps is {typeof activityProps}</div>
	</>
)
