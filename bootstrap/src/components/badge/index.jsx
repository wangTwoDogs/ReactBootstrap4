let React = require("react");
let { className } = require("../tools.js");

class Component extends React.Component {
    constructor(props) {
        super(props)
        let { href, theme, target, pill, children } = props
        this.state = { href, theme, target, pill, children }
    }
    render() {
        return (
            this.state.href ?
                <a href={this.state.href} target={this.state.target} className={className({ badge: true, [`badge-${this.state.theme}`]: true, "badge-pill": this.state.pill })}>{this.state.children}</a> :
                <span className={className({ badge: true, [`badge-${this.state.theme}`]: true, "badge-pill": this.state.pill })}>{this.state.children}</span>
        )
    }
    componentWillReceiveProps(nextProps) {
        let { href, theme, target, pill, children } = nextProps;
        this.setState({ href, theme, target, pill, children })
    }
}



Component.defaultProps = {
    theme: "primary",
    href: null,
    target: "_blank",
    pill: false,
    children: null,
}

module.exports = Component