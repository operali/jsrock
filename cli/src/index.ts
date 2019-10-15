#!/usr/bin/env node
import * as script from "@jsrock/run_script"
import clone from './clone';
const util = script.util;
const log = console.log;

let argv = util.yargs
  .example('jsrock clone', ': choose a template for your project')
  .example('jsrock distribute', ': publish your builded project')
  .demandCommand()
  .argv

let subCommand = argv._[0];

if (subCommand) {
  if (subCommand == 'clone') {
    clone();
  } else if (script[subCommand]) {
    script[subCommand]();
    util.process.exit(0);
  } else {
    log(util.chalk.redBright(`$\n\n\ncannot understand\n`));
  }
}

