import React, { Component, ComponentClass } from 'react'
import ReactDOM from 'react-dom'

import { root } from './gui/component/root'
import * as componentTest from './gui/example/componentTest'
import * as layoutTest from './gui/example/layoutTest'
import * as layoutTest1 from './gui/example/layoutTest1'
import * as events from './gui/example/events'


let tests: ComponentClass[] = [layoutTest.test, events.test, componentTest.test, layoutTest1.test];

let index = 0;
const open = () => {
  if (index == tests.length) {
    index = 0;
  }
  ReactDOM.render(React.createElement(tests[index++]), root);
}

const close = () => {
  ReactDOM.unmountComponentAtNode(root);
}

export { open, close }
