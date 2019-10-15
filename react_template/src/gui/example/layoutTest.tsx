import { Container } from '../component/container'
import { Box } from '../component/box'
import { Anchor } from '../component/anchor'
import { Stage } from '../component/stage'
import React from "react"
import bg from './res/bg.jpg'
import head from './res/head.jpg'
import controller from './res/controller.png'
import cyclone from './res/cyclone.png'
import earthquake from './res/earthquake.png'
import run from './res/run.png'

console.log(`bg: ${bg}`)
export const test = class extends React.Component {
    render() {
        let Img = (img: string, row: 'left' | 'right' | 'center', col: 'top' | 'bottom' | 'center', margin: string, width: number, round?: boolean) => {
            let borderRadius = null;
            if (round) {
                borderRadius = (width / 2) + 'vw';
            }
            return <Anchor rowAlign={row} colAlign={col}>
                <Box style={{ margin, width: width + 'vw', height: width + 'vw', backgroundImage: `url(${img})`, backgroundSize: 'cover', borderRadius }}></Box>
            </Anchor>;
        }
        return <>
            <Stage type={"foreground"}> {/**UI */}
                {Img(head as string, "left", "top", '2rem', 15, true)}
                {Img(controller as string, "left", "bottom", '2rem', 20)}
                <Anchor rowAlign={'right'} colAlign={'bottom'}  style={{ margin: '2rem', width: '25vw', height: '25vw', transform: `rotate(45deg)` }}>
                    {Img(cyclone as string, "left", "top", '0rem', 10)}
                    {Img(earthquake as string, "left", "bottom", '0rem', 10)}
                    {Img(run as string, "right", "bottom", '0rem', 10)}
                </Anchor>
                <Anchor rowAlign={'center'} colAlign={'top'}  row style={{ margin: '2rem' }}>
                    <Box  style={{ width: '10vw', height: '10vw' }}> </Box>
                    <Box  style={{ width: '10vw', height: '10vw' }}> </Box>
                    <Box  style={{ width: '10vw', height: '10vw' }}> </Box>
                    <Box  style={{ width: '10vw', height: '10vw' }}> </Box>
                </Anchor>
            </Stage>
            <Stage type={"playground"}> {/**stage */}

            </Stage>
            <Stage type={"background"}  style={{ backgroundImage: `url(${bg})` }}>
            </Stage>
        </>
    }
}
