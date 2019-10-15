import { foo as utilFoo } from './util'
export default {
  async foo() {
    console.log('foo from index');
    return await utilFoo();
  }
}
