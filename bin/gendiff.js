#!/usr/bin/env node
import { Command } from "commander";
import { genDiff } from "../genDiff.js";

const program = new Command();

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0', '-V, --version', 'output the version number')
	.argument('<filepath1>', 'path to file 1')
	.argument('<filepath2>', 'path to file 2')
	.option('-f, --format <type>', 'output format')
	.action((filepath1, filepath2) => console.log(genDiff(filepath1, filepath2)))

program.parse();