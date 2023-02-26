install:
	npm ci

help:
	node bin/gendiff.js -h

genDiffTest:
	node bin/gendiff.js file1.json file2.json