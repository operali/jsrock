import { Container } from '../component/container'
import { Box } from '../component/box'
import { Anchor } from '../component/anchor'
import { Stage } from '../component/stage'
import React from "react"
const layoutTest = class extends React.Component {
  render() {
    return <>
      <Stage type={"playground"}>
        <Container border>
          <Container border>
          </Container>
          <Container row border>
          </Container>
        </Container >
      </Stage>
      <Stage type={"foreground"} border style={{ borderWidth: '18rem', backgroundColor: "rgba(0.2,0.2,0.2,0.2)" }}>
        <div >22</div>
      </Stage>
    </>
  }
}

export { layoutTest }
