import * as script from "@jsrock/run_script"
const util = script.util;
const log = console.log;

// about to run
// `ts-node script <subCommand> ...args`
const subCommand = process.argv.slice(2, 3)[0];
const args = process.argv.slice(3);

const cmdStr = [subCommand, ...args].join(' ');
log(util.chalk.yellow(`ready to run: ${cmdStr}`));

try {
  script[subCommand]();
} catch (ex) {
  log(util.chalk.redBright(`${ex}\n\n\ncannot understand: \n${cmdStr}`));
}
