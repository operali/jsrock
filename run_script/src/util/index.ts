import path from 'path'
import fs from 'fs'
import yargs from 'yargs'
import chalk from 'chalk'
import inquirer from 'inquirer'
import camelcase from 'camelcase'
import { ncp } from 'ncp'
import node_util from 'util'
import child_process from 'child_process'


const fsp = fs.promises;

const util = {
  path, chalk, yargs, inquirer, camelcase, node_util, fs, process, child_process,
  delay: (s: number) => new Promise((res) => {
    setTimeout(() => {
      res();
    }, s * 1000);
  }),
  copyDir: (source: string, dest: string, filter?: (path: string) => boolean) => {
    return new Promise((res, rej) => {
      let options = {
        filter: filter || ((fname) => {
          if (fname.indexOf('node_modules') != -1) {
            return false;
          }
          console.log(util.chalk.greenBright(fname), 'is copyed');
          return true;
        })
      }
      ncp(source, dest, options, function (err) {
        if (err) {
          rej(err);
          return;
        }
        res();
      });
    })
  },
  copyFile2Dir: async (from: string, dir: string) => {
    const { COPYFILE_EXCL } = fs.constants;
    return await fsp.copyFile(from, path.resolve(dir, path.basename(from)), COPYFILE_EXCL);
  },
  existFile: async (fpath: string) => {
    let r: Promise<boolean> = new Promise((res) => {
      fs.exists(fpath, (exists) => {
        res(exists)
      });
    });
    return r;
  },
  readFile: async (fpath: string, options?: object | string) => {
    let r: Promise<string> = new Promise((res, rej) => {
      fs.readFile(fpath, options, (err, data: string) => {
        if (err) {
          rej(err);
        } else {
          res(data);
        }
      });
    });
    return r
  },
  writeFile: async (fpath: string, data: string | ArrayBuffer) => {
    return new Promise((res, rej) => {
      fs.writeFile(fpath, data, (err) => {
        if (err) {
          rej(err);
        } else {
          res();
        }
      });
    });
  },
  exec: async (cmd: string) => {
    const exec = node_util.promisify(child_process.exec);
    const { stdout, stderr } = await exec(cmd);
    console.log(`${cmd}:`, stdout);
    if (stderr) {
      console.error(`error of ${cmd}:`, stderr)
    }
  }
}

export default util
