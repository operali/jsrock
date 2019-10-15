import * as Box from '../component/box'
import { componentCss, classes_t } from '../style/component'
import React, { Component } from 'react';
import util from 'util';
import ReactDOM from 'react-dom';

let widgetStyle: classes_t = {
  input: {
    padding: '0.25rem',
    margin: '0.25rem',
    height: '2rem',
    width: '16rem',
    borderRadius: '0.25rem',
    backgroundColor: 'white',
    display: "inline-block",
    overflow: "auto",
    wordWrap: "break-word"
  }
};

export type widget_t = typeof widgetStyle;
const widgetRule = componentCss.addRule('input', widgetStyle.input);
let widgetClass = widgetRule['id'];

interface props_t extends Box.props_t {
  text?: string
}

let B = Box.Box;

export const Input = class extends React.Component<props_t> {
  _element: HTMLElement
  componentDidMount() {
    this._element.addEventListener('keypress', event => {
      if (event.key == 'Enter') {
        event.preventDefault()
      }
    })
  }
  render() {
    let props = { ref: (c: Component) => { this._element = ReactDOM.findDOMNode(c) as HTMLElement }, ...this.props, className: widgetClass, contentEditable: true }
    return React.createElement(B, props, this.props.text);
  }
}


