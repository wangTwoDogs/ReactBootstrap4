let React = require("react");
let { className } = require("../tools.js");

class Component extends React.Component {
    constructor(props) {
        super(props)
        let { href, theme, target, isPill, children } = props
        this.state = { href, theme, target, isPill, children }
    }
    render() {
        return (
            this.state.href ?
                <a href={this.state.href} target={this.state.target} className={className({ badge: true, [`badge-${this.state.theme}`]: true, "badge-pill": this.state.isPill })}>{this.state.children}</a> :
                <span className={className({ badge: true, [`badge-${this.state.theme}`]: true, "badge-pill": this.state.isPill })}>{this.state.children}</span>
        )
    }
    componentWillReceiveProps(nextProps) {
        let { href, theme, target, isPill, children } = nextProps;
        this.setState({ href, theme, target, isPill, children })
    }
}



Component.defaultProps = {
    theme: "primary",
    href: null,
    target: "_blank",
    isPill: false,
    children: null,
}

module.exports = Component