module.exports = {
	rootDir: '../',
	verbose: true,
	setupFilesAfterEnv: ['<rootDir>/config/enzyme.config.js'],
	modulePaths: ['<rootDir>src/'],
	transform: {
		'^.+\\.(js|jsx)?$': 'babel-jest'
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	moduleNameMapper: {
		'\\.(css|scss)$': '<rootDir>/__mocks__/style.mock.js',
		'\\.module\\.(css|scss)$': '<rootDir>/__mocks__/style.mock.js',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/file.mock.js'
	}
};
