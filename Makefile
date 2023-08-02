install:
	npm ci

help:
	node bin/gendiff.js -h

stylish:
	node bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

plain:
	node bin/gendiff.js --format plain __fixtures__/file1.json __fixtures__/file2.json

json:
	node bin/gendiff.js --format json __fixtures__/file1.json __fixtures__/file2.json

error:
	node bin/gendiff.js --format js __fixtures__/file1.json __fixtures__/file2.json

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8
