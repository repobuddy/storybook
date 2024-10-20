import { expect, it } from 'vitest'
import { page } from './context/page.js'
import { imageSnapshotSymbol } from './index.js'

it('save file under __results__', async () => {
	const f1 = await page.imageSnapshot()

	expect(f1[imageSnapshotSymbol].resultPath).toMatch(
		'__screenshots__/image_snapshot.spec.ts/__results__/save-file-under---results---1.png',
	)

	const f2 = await page.imageSnapshot()
	expect(f2[imageSnapshotSymbol].resultPath).toMatch(
		'__screenshots__/image_snapshot.spec.ts/__results__/save-file-under---results---2.png',
	)
})
