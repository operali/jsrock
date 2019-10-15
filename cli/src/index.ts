#!/usr/bin/env node
import * as script from "@jsrock/run_script"
import clone from './clone';
const util = script.util;
const log = console.log;

// about to run
// `node xxx <subCommand> ...args`
const subCommand = process.argv.slice(2, 3)[0];
const args = process.argv.slice(3);

const cmdStr = [subCommand, ...args].join(' ');

if (subCommand == 'clone') {
  clone();
} else if (!script[subCommand]) {
  log(util.chalk.redBright(`$\n\n\ncannot understand: \n${cmdStr}`));
} else {
  script[subCommand]();
}

