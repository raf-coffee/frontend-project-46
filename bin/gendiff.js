#!/usr/bin/env node
import { Command } from 'commander';
import index from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .argument('<filepath1>', 'path to file 1')
  .argument('<filepath2>', 'path to file 2')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((path1, path2, options) => console.log(index(path1, path2, options.format)));

program.parse();
