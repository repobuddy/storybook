import { expect as storyExpect } from '@storybook/test'
import { page } from './context/page.js'
import { imageSnapshot } from './image_snapshot.js'
import { toMatchImageSnapshot } from './to_match_image_snapshot.js'

page.extend({ imageSnapshot })
// `MatcherState` missing `snapshotState` due to module augmentation not working well with type param.
storyExpect.extend({ toMatchImageSnapshot: toMatchImageSnapshot as any })
