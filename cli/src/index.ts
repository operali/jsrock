#!/usr/bin/env node
import * as script from "@jsrock/run_script"
import clone from './clone';
const util = script.util;
const log = console.log;


let argv = util.yargs
  .command('clone', 'choose a template for your project', () => {
    clone();
    util.process.exit(0);
  })
  .example('jsrock clone', ': choose a template for your project')
  .example('jsrock distribute', ': publish your builded project')
  .demandCommand()
  .argv

// } else if (!script[subCommand]) {
//   log(util.chalk.redBright(`$\n\n\ncannot understand: \n${cmdStr}`));
// } else {

let subCommand = argv._[0];

if (subCommand && script[subCommand]) {
  script[subCommand]();
  util.process.exit(0);
}

log(util.chalk.redBright(`$\n\n\ncannot understand\n`));
