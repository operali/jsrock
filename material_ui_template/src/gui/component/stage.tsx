
import React, { ComponentClass, CSSProperties } from 'react'
import * as Box from './box'
import { layoutClasses } from '../style/layout'

export interface props_t extends Box.props_t {
    type?: "foreground" | "playground" | "background"
    z?: number
}

const Z_FOREGROUND: number = 1000;
const Z_PLAYGROUND: number = 0;
const Z_BACKGROUND: number = -1000;

export const defaultProps = {
    className: layoutClasses.stage,
    type: "playground",
    z: 0
}

type DefaultProps_t = props_t & Readonly<typeof defaultProps>

export const Stage = class _Stage extends React.Component<DefaultProps_t> {
    _props: DefaultProps_t
    constructor(props: DefaultProps_t) {
        super(props);
        this._props = { ...defaultProps, ...this.props } as DefaultProps_t;
    }

    static calcStyle(props: props_t) {
        let style = { ...props.style };
        let z = Z_FOREGROUND;
        if (props.type === 'background') {
            z = Z_BACKGROUND;
        } else if (props.type === 'playground') {
            z = Z_PLAYGROUND;
        } else if (props.type === 'foreground') {
            z = Z_FOREGROUND;
        }
        style.zIndex = z + props.z;
        return style;
    }

    static calcClassName(props: props_t) {
        let cn = layoutClasses.stage;
        if (props) {
            cn = cn + ' ' + props.className;
            if (props.debug) {
                cn = cn + ' ' + layoutClasses.debug
            }
        }
        return cn;
    }

    render() {
        let style = _Stage.calcStyle(this._props);
        return <div className={_Stage.calcClassName(this._props)} style={_Stage.calcStyle(this._props)}>{this.props.children}</div>
    }
} as ComponentClass<props_t>


