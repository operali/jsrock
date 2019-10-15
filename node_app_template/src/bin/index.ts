import chalk from 'chalk'
// note: tsconfig target to es2015
const delay = (sec: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, sec * 1000);
  })
};


(async function () {
  let count = 0
  let exit = false;
  while (!exit) {
    console.log(chalk.greenBright(`greeting from ${__filename} ${count++} times`))
    if (count > 10) {
      exit = true;
    }
    await delay(3);// delay 5 secs
  }
})()
