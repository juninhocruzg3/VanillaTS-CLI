#! /usr/bin/env node
import { Command } from 'commander';
import { newProject } from './commands/new.js';
import { version } from './commands/version.js';

const program = new Command();

program
	.name('vanilla-ts')
	.description('The VanillaTS CLI to make easier your web development.')
	.version('0.0.1');

program
	.command('version')
	.alias('v')
	.description('Outputs VanillaTS CLI version.	[alias: v]')
	.action(version);

program
	.command('new')
	.alias('n')
	.argument('<name>', 'The name of the new workspace and initial project.')
	.description('Creates a new VanillaTS workspace. 	[alias: n]')
	.action(newProject);

program.parse();