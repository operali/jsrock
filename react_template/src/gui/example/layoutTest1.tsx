import { Container } from '../component/container'
import { Box } from '../component/box'
import { Anchor } from '../component/anchor'
import { Stage } from '../component/stage'
import React from "react"
export const test = class extends React.Component {
  render() {
    return <>
      <Stage type={"playground"}>
        <Container debug row reverse>
          <Box debug style={{ width: '5rem', height: '5rem' }}>1</Box>
          <Box style={{ width: '5rem', height: '5rem' }}>2</Box>
          <Box debug style={{
            width: '20rem',
            height: '20rem'
          }}>
            <p>3</p>
            <Anchor debug rowAlign={'left'} colAlign={'center'} align="center" style={{ marginLeft: '1rem', width: '5rem' }}>
              <Box debug >1</Box>
              <Container debug stretch>2</Container>
              <Box debug >3</Box>
            </Anchor>
            <Anchor debug rowAlign={'center'} colAlign={'center'} style={{ width: '5rem', height: '5rem', background: 'red' }}>3.2</Anchor>
          </Box>
        </Container >
      </Stage>
      <Stage type={"foreground"} debug style={{ borderWidth: '20rem', backgroundColor: "rgba(0.2,0.2,0.2,0.2)" }}>
        <div >22</div>
      </Stage>
    </>
  }
}
