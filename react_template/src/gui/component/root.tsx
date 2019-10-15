
import { layoutClasses } from '../style/layout'


const getRoot = () => {
    let r = document.getElementsByClassName(layoutClasses.root)[0];
    if (r) return r;
    r = document.createElement('div');
    r.className = layoutClasses.root;
    document.body.appendChild(r);
    return r;
}

const root = getRoot();
export { root }

