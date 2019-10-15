
import React, { ComponentClass, CSSProperties } from 'react'
import * as Box from './box'
import { layoutClasses } from '../style/layout'


export interface props_t extends Box.props_t {
    grow?: boolean
    stretch?: boolean
    row?: boolean
    align?: 'start' | 'center' | 'end'
    reverse?: boolean
    className?: string
}

export const defaultProps = {
    className: layoutClasses.container
}

type DefaultProps = props_t & Readonly<typeof defaultProps>

export const Container = class _Container extends React.Component<DefaultProps> {
    _props: DefaultProps
    constructor(props: DefaultProps) {
        super(props);
        this._props = { ...defaultProps, ...this.props } as DefaultProps;
    }

    static calcStyle(props: props_t): CSSProperties {
        let style: CSSProperties = {};
        if (!props.style) {
            props.style = {}
        } else {
            style = { ...props.style };
        }

        if (!props.style.width && !props.style.height) {
            if (props.grow) {
                style.flexGrow = 1;
            } else {
                style.flexShrink = 1;
            }

            if (props.stretch) {
                style.alignSelf = 'stretch';
            }
        }

        if (props.align) {
            if (props.align === 'start') {
                style.justifyContent = 'flexStart';
            } else if (props.align == 'center') {
                style.justifyContent = 'center';
            } else if (props.align == 'end') {
                style.justifyContent = 'flexEnd';
            }
        }

        style.flexDirection = 'column';
        if (props.reverse) {
            style.flexDirection = 'column-reverse';
        }

        if (props.row) {
            style.flexDirection = 'row';
            if (props.reverse) {
                style.flexDirection = 'row-reverse';
            }
        }
        return style;
    }

    static calcClassName(props: props_t) {
        let cn = layoutClasses.container;
        if (props) {
            cn = cn + ' ' + props.className;
            if (props.debug) {
                cn = cn + ' ' + layoutClasses.border
            }
        }
        return cn;
    }

    render() {
        return React.createElement(Box.Box, { tabIndex: this.props.tabIndex, className: _Container.calcClassName(this._props), style: _Container.calcStyle(this._props) }, this.props.children);
    }
} as ComponentClass<props_t>
