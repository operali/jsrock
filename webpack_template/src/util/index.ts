
const delay = async (ns: number) => {
  return new Promise(res => {
    setTimeout(() => {
      res();
    }, ns * 1000);
  })
}


async function foo() {
  // test of es6
  let ma = { a: 3, b: 3 };
  let mb = { b: 4, c: 5 }
  let mc = new Map();
  mc.set('d', 6);
  if ({ ...ma, ...mb }.b == 4 && mc.get('d') == 6 && [1,2].includes(2)) {
    await delay(1);
    console.log('foo from util/index');
  }

  return 'bar';
}

export {
  delay, foo
}
