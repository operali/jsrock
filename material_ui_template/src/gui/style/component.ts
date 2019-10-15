// https://cssinjs.org/?v=v10.0.0
// https://codesandbox.io/s/z21lpmvv33
import jss, { Rule, StyleSheet } from "jss"

import { CSSProperties } from 'react'

// const createGenerateId = () => {
//   let counter = 0
//   return (rule: Rule) => `component-${rule.key}-${counter++}`
// }
// jss.setup({ createGenerateId })

export type classes_t = { [key: string]: CSSProperties & { "&:hover"?: CSSProperties } };

const component: classes_t = {
}

export const componentCss = jss.createStyleSheet(component).attach();
