/**
 * Generates a key for React collections, falling back to a simple counter-based ID if crypto.randomUUID is unavailable.
 * crypto.randomUUID() requires a secure context (HTTPS, localhost, or 127.0.0.1).
 *
 * This can be moved to `@just-web` in the future.
 */
export function generateKey(prefix?: string | undefined): string {
	const randomId =
		typeof crypto !== 'undefined' && crypto.randomUUID
			? crypto.randomUUID()
			: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`

	return prefix ? `${prefix}-${randomId}` : randomId
}
