
// https://cssinjs.org/?v=v10.0.0
// https://codesandbox.io/s/z21lpmvv33

import preset from "jss-preset-default"
import jss from "jss"

import { CSSProperties } from 'react'
jss.setup(preset());

type styles_t = { [key: string]: CSSProperties }

const box: CSSProperties = {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    position: 'relative'
}

const container: CSSProperties = {
    ...box,
    display: "flex",
    justifyContent: 'flex-start',
    alignItems: "center",
    flexDirection: "column",
    flexWrap: 'nowrap',
    flexGrow: 0,
    flexShrink: 1,
}

const overlap: CSSProperties = {
    ...container,
    position: "absolute",
    margin: 'auto',
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
    flexWrap: 'nowrap',
    flexGrow: 0,
    flexShrink: 1,
}

const stage: CSSProperties = {
    ...container,
    position: "absolute",
    margin: 0,
    justifyContent: 'center',
    alignItems: "center",
    flexDirection: "column",
    flexWrap: 'nowrap',
    width: '100%',
    height: '100%'
}

const root: CSSProperties = {
    ...box,
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh'
}

const border: CSSProperties = {
    border: "1px red solid"
}

export const layout: styles_t = { box, container, overlap, stage, root, border };
export const layoutCss = jss.createStyleSheet(layout).attach();
export const layoutClasses = layoutCss.classes;

