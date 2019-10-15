import React, { Component, ComponentClass } from 'react'
import ReactDOM from 'react-dom'

import { root } from './gui/component/root'
import LabelBottomNavigation from './gui/example/navigator'


let index = 0;
const open = () => {
  ReactDOM.render(React.createElement(LabelBottomNavigation), root);
}

const close = () => {
  ReactDOM.unmountComponentAtNode(root);
}

export { open, close }
