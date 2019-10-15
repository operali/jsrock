import * as Box from '../component/box'
import * as Container from '../component/container'
import React  from "react"
import { componentCss, classes_t } from '../style/component'

let widgetStyle: classes_t = {
  button: {
    padding: '0.25rem',
    margin: '0.25rem',
    userSelect: 'none',
    transition: 'background 0.2s linear, color 0.2s linear',
    color: 'black',
    backgroundColor: 'pink',
    borderRadius: '0.5rem',
    "&:hover": {
      color: 'white',
      backgroundColor: 'red'
    }
  }
};

export type widget_t = typeof widgetStyle;
const widgetRule = componentCss.addRule('button', widgetStyle.button);
let widgetClass = widgetRule['id'];

interface props_t extends Box.props_t {
  // text: string
}

let Cont = Container.Container;
let B = Box.Box;

export const Button = class extends React.Component<props_t> {
  render() {
    return < Cont className={widgetClass}>
      <B>{this.props.children}</B>
    </Cont >
  }
}


