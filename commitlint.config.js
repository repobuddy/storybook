const DISABLE = [0, 'always']

module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-case': DISABLE,
		'header-max-length': DISABLE,
		'body-max-line-length': DISABLE,
		'footer-max-line-length': DISABLE
	}
}
