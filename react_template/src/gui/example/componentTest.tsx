import { Stage } from '../component/stage'
import { Button } from './button'
import { Input } from './input'
import React from "react"
export const test = class extends React.Component {
  render() {
    return <>
      <Stage type='playground'>
        <Button>abc</Button>
        <Input>abc</Input>
      </Stage>
      <Stage type='background' style={{ backgroundColor: 'black' }}>
      </Stage>
    </>
  }
}
