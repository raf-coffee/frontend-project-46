import { readFileSync } from 'node:fs';
import path from 'path';

const compare = (obj1, obj2) => {
	const keys = Array.from(new Set(Object.keys(obj1).concat(Object.keys(obj2))))
		.sort((a, b) => a[0].localeCompare(b[0]));
	let finalStr = '';
	keys.forEach(key => {
		if (!obj2.hasOwnProperty(key)) {
			finalStr += `  - ${key}: ${obj1[key]}\n`;
		} else if (!obj1.hasOwnProperty(key)) {
			finalStr += `  + ${key}: ${obj2[key]}\n`;
		} else if (obj1[key] !== obj2[key]) {
			finalStr += `  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}\n`;
		} else {
			finalStr += `    ${key}: ${obj2[key]}\n`;
		}
	});
	return `{\n${finalStr}}`;
}

export const genDiff = (f1, f2) => {
	const dataFromFile1 = JSON.parse(readFileSync(path.resolve(f1), "utf-8"));
	const dataFromFile2 = JSON.parse(readFileSync(path.resolve(f2), "utf-8"));
	return compare(dataFromFile1, dataFromFile2);
};