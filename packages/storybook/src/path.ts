import { dirname } from 'pathe'
import { filename } from 'pathe/utils'

export function getDiffPath(snapshotPath: string) {
	const snapshotDir = dirname(snapshotPath)
	const fname = filename(snapshotPath)
	return `${snapshotDir}/__diff__/${fname}`
}

export function getResultPath(snapshotPath: string) {
	const snapshotDir = dirname(snapshotPath)
	const fname = filename(snapshotPath)
	return `${snapshotDir}/__results__/${fname}`
}
