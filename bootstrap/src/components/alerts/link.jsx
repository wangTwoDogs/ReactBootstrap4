let React = require("react")

class Component extends React.Component {
    constructor(props) {
        super(props)
        let { href, target, children } = props;
        this.state = { href, target, children }
    }
    render() {
        return (
            <a href={this.state.href} className="alert-link" target={this.state.target} >
                {
                    this.state.children
                }
            </a>
        )
    }
    componentWillReceiveProps(nextProps) {
        let { href, target, children } = nextProps
        this.setState({ href, target, children })
    }
}

Component.defaultProps = {
    href: "###",
    target: "_blank",
    children: null
}

module.exports = Component