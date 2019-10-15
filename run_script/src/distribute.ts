import util from './util'

const distribute = () => {
  const curDir = util.path.resolve('./')
  const buildDir = util.path.resolve('./build')
  const distDir = util.path.resolve('./dist')
  const distTemplateDir = util.path.resolve('./dist_template')

  const getArgs = async () => {
    const argv = util.yargs
      .option('level', {
        alias: 'l',
        description: 'npm version (patch/minor/major)',
        type: 'string',
      })
      .option('publish', {
        alias: 'p',
        description: 'do you really want to publish',
        type: 'string',
      })
      .help()
      .alias('help', 'h')
      .version('0.0.1')
      .argv;
    const isArgsValid = (function () {
      if (argv.help) throw 'help';
      if (argv.publish === undefined) return false
      if (!argv.level) return false
      if (['patch', 'minor', 'major'].indexOf(argv.level) == -1) return false
      return true;
    })();
    let level = argv.level
    let publish = argv.publish == undefined ? false : true
    if (!isArgsValid) {
      const question = [{
        type: 'list',
        name: 'level',
        message: util.chalk.redBright`npm version `,
        choices: ['patch', 'minor', 'major']
      }, {
        type: 'confirm',
        name: 'publish',
        default: false,
        message: util.chalk.redBright`do you really want to publish?`
      }];
      const answers = await util.inquirer.prompt(question);
      level = answers.level as string;
      publish = answers.publish as boolean;
    }
    return {
      level,
      publish
    }
  }

  const updateVersion = async (NO: number, versionLv: string) => {
    console.log(util.chalk.redBright(`${NO} try updating version of ${versionLv}`))
    process.chdir(distTemplateDir);
    await util.exec(`npm version ${versionLv}`);
    process.chdir(curDir);
  }

  const collectFiles = async (NO: number) => {
    console.log(util.chalk.redBright(`${NO} start collecting template files...`));
    await util.copyDir(util.path.resolve(distTemplateDir), util.path.resolve(curDir, 'dist'));
    process.chdir(curDir);
    console.log(util.chalk.redBright(`${NO} start collecting dist files...`))
    await util.copyDir(buildDir, distDir, (fname: string) => {
      if (fname.indexOf('node_modules') != -1) {
        return false;
      }
      if (fname.endsWith('type')) {
        return false
      }
      console.log(util.chalk.greenBright(fname), 'is copyed');
      return true;
    });
  }

  const build = async (NO: number) => {
    console.log(util.chalk.redBright(`${NO} build project, wait`))
    process.chdir(curDir)
    await util.exec('npm run build');
  }

  const distribute = async (NO: number, publish: boolean) => {
    console.log(util.chalk.redBright(`${NO} distribute ${distDir}`))
    if (publish) {
      process.chdir(distDir)
      await util.exec(`npm publish`)
    }
  }

  const main = async () => {
    let {
      publish,
      level
    } = await getArgs();
    await build(1);
    await updateVersion(2, level);
    await collectFiles(3);
    await distribute(4, publish);
    console.log(util.chalk.redBright(`finished successfully`))
  }
  main().catch(ex => {
    if (ex == 'help') return
    console.error('error: ', ex)
    process.exit(1)
  })
}

export default distribute
