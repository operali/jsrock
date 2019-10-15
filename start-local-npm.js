const child_process = require('child_process');
child_process.execSync(`nrm use local`, { stdio: 'inherit' });
try {
  child_process.execSync(`verdaccio -l 10001 >> npm.log`, { stdio: 'inherit' });
} catch (ex) {
  console.log('SIGHUP');
  child_process.execSync(`nrm use cnpm`, { stdio: 'inherit' });
}
