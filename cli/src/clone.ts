#!/usr/bin/env node

import {
  util
} from '@jsrock/run_script'
import process from 'process'

let tempalteRoot = '@jsrock'
let distributeTemplate = 'dist_template'

type template_t = 'node_app' | 'node_module' | 'webpack' | 'react';
const templates: template_t[] = ['node_app', 'node_module', 'webpack', 'react'];

const clone = () => {
  const getArgs = async function () {
    const argv = util.yargs
      .option('type', {
        alias: 't',
        description: '(node_module/node_app/webpack/react)',
        type: 'string',
      })
      .option('name', {
        alias: 'n',
        description: 'your project name',
        type: 'string',
      })
      .help()
      .alias('help', 'h')
      .version('0.0.1')
      .argv;
    const isArgsValid = (function () {
      if (!argv.name) return false;
      if (!argv.type) return false;
      if (templates.indexOf(argv.type as template_t) == -1) return false;
      return true;
    })();
    let name = argv.name
    let type = argv.type
    if (!isArgsValid) {
      const templatePrompt = [{
        type: 'list',
        name: 'type',
        message: util.chalk.redBright`choose a project template:`,
        choices: templates
      },
      {
        type: 'input',
        name: 'name',
        message: util.chalk.redBright('type your project name:')
      }
      ];
      const answers = await util.inquirer.prompt(templatePrompt);
      name = answers['name'] as string;
      type = answers['type'] as string;
    }
    return {
      name,
      type
    }
  }

  const fixPackageJson = async (packagejsonPath: string, projectName: string) => {
    if (!(await util.existFile(packagejsonPath))) {
      return;
    }
    let packagejson = JSON.parse(await util.readFile(packagejsonPath, 'utf8'));
    packagejson['name'] = projectName;
    packagejson['version'] = '0.0.1';
    packagejson["description"] = "describe your project here";
    let binField = packagejson['bin']
    if (binField) {
      delete packagejson['bin'];
      binField = {}
      binField[util.camelcase(projectName)] = "./bin/index.js";
      packagejson['bin'] = binField;
    }
    await util.writeFile(packagejsonPath, JSON.stringify(packagejson, null, 2));
  }

  const fixProjectConfig = async (fpath: string, projectName: string) => {
    if (!(await util.existFile(fpath))) {
      return;
    }
    let strProjectConfig = await util.readFile(fpath, 'utf8');
    let fixStrProjectConfig = strProjectConfig.replace(/moduleName: '(.*)'/, `moduleName: '${projectName}'`)
    await util.writeFile(fpath, fixStrProjectConfig);
  }

  const cloneProject = async (projectName: string, type: template_t) => {
    console.log(util.chalk.yellow(`start cloning project ${projectName}`));

    // clone for lib
    let source = util.path.dirname(require.resolve(`${tempalteRoot}/${type}_template/package.json`));
    let destination = util.path.resolve('./', util.camelcase(projectName));

    console.log('copy from', source, "to", destination);
    // await util.exec(`mkdir "${destination}"`)
    await util.copyDir(source, destination, () => true);
    let packagejsonPath = util.path.resolve(destination, 'package.json');
    console.log(`fix configuration`);
    await fixPackageJson(packagejsonPath, projectName + "_src");
    let packagejsonDistPath = util.path.resolve(destination, distributeTemplate, 'package.json');
    await fixPackageJson(packagejsonDistPath, projectName);
    let projectConfgPath = util.path.resolve(destination, 'project.config.ts');
    await fixProjectConfig(projectConfgPath, projectName);
    // template
    console.log(util.chalk.yellow(`cloning ${projectName} finished at \n${destination}`));
  }

  const main = async () => {
    let {
      name,
      type
    } = await getArgs();
    await cloneProject(name, type as template_t)
  }
  main().catch(ex => {
    if (ex === 'help') {
      return
    }
    console.error(ex)
    process.exit(1)
  })
}

export default clone;
