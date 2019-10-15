
import { Container } from '../component/container'
import { Stage } from '../component/stage'
import React from "react"
import ReactDOM from 'react-dom'


export const test = class extends React.Component {
  _first: HTMLElement
  _second: Element
  _third: Element

  componentDidMount() {
    this._first.addEventListener('keypress', () => {
      console.log('postkeydown1');
    });
    this._first.addEventListener('keypress', () => {
      console.log('prekeydown1');
    }, true);
    this._second.addEventListener('keypress', () => {
      console.log('postkeydown2');
    });
    this._second.addEventListener('keypress', () => {
      console.log('prekeydown2');
    }, true);
    this._third.addEventListener('keypress', () => {
      console.log('postkeydown3');
    });
    this._third.addEventListener('keypress', () => {
      console.log('prekeydown3');
    }, true);

    this._first.focus();
    console.log('mount')
    console.log(this._third);
  }

  render() {
    return <Stage>
      <Container tabIndex={0} ref={e => this._first = ReactDOM.findDOMNode(e) as HTMLElement} debug style={{ width: '20rem', height: '20rem' }}>
        <Container ref={e => this._second = ReactDOM.findDOMNode(e) as HTMLElement} debug style={{ userSelect: 'all', width: '10rem', height: '10rem' }}>
          <Container tabIndex={0} ref={e => this._third = ReactDOM.findDOMNode(e) as HTMLElement} debug style={{ width: '5rem', height: '5rem' }}>
          </Container>
        </Container>
      </Container>
    </Stage>
  }
}
