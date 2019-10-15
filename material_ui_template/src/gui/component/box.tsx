import React, { ComponentClass, CSSProperties, HTMLAttributes } from 'react'
import { layoutClasses } from '../style/layout'


export interface props_t extends HTMLAttributes<HTMLElement> {
    debug?: boolean
    name?: string
    
}

export const defaultProps = {
    className: layoutClasses.box
}

type DefaultProperty_t = props_t & Readonly<typeof defaultProps>

export const Box = class _Box extends React.Component<DefaultProperty_t> {
    _props: DefaultProperty_t
    constructor(props: DefaultProperty_t) {
        super(props);
        this._props = { ...defaultProps, ...this.props } as DefaultProperty_t
    }

    static calcStyle(props: props_t): CSSProperties {
        return { ...props.style }
    }

    static calcClassName(props: props_t) {
        let cn = layoutClasses.box;
        if (props) {
            cn = cn + ' ' + props.className;
            if (props.debug) {
                cn = cn + ' ' + layoutClasses.border
            }
        }
        return cn;
    }

    render() {
        console.log('tabIndex', this.props.tabIndex);
        let props = {...this.props, className:_Box.calcClassName(this._props), style:_Box.calcStyle(this._props)};
        return React.createElement('div', props, this.props.children);
    }
} as ComponentClass<props_t>
