
import React, { ComponentClass, CSSProperties } from 'react'
import * as Box from './box'
import * as Container from './container'
import { layoutClasses } from '../style/layout'

export interface props_t extends Container.props_t {
    grow?: boolean
    stretch?: boolean
    row?: boolean
    reverse?: boolean
    className?: string
    rowAlign?: 'left' | 'center' | 'right'
    colAlign?: 'top' | 'center' | 'bottom'
}

export const defaultProps = {
    rowAlign: 'center',
    colAlign: 'center'
}

type DefaultProps = props_t & Readonly<typeof defaultProps>

export const Anchor = class extends React.Component<DefaultProps> {
    constructor(props: DefaultProps) {
        super(props);
    }

    get _props(): DefaultProps {
        return { ...defaultProps, ...this.props } as DefaultProps
    }

    render() {
        let props = this._props;
        let boxProps = { className: layoutClasses.overlap, style: {} as CSSProperties };
        if (props.rowAlign == 'left') {
            boxProps.style.left = 0;
        } else if (props.rowAlign == 'right') {
            boxProps.style.right = 0;
        } else {
            boxProps.style.left = 0;
            boxProps.style.right = 0;
        }

        if (props.colAlign == 'top') {
            boxProps.style.top = 0;
        } else if (props.colAlign == 'bottom') {
            boxProps.style.bottom = 0;
        } else {
            boxProps.style.top = 0;
            boxProps.style.bottom = 0;
        }
        const container = React.createElement(Container.Container, this.props, this.props.children);
        return React.createElement(Box.Box, boxProps, container);
    }
} as ComponentClass<props_t>
