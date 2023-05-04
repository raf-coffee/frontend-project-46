install:
	npm ci

help:
	node bin/gendiff.js -h

run:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

plain:
	node bin/gendiff.js --format plain __fixtures__/file1.json __fixtures__/file2.json

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8
