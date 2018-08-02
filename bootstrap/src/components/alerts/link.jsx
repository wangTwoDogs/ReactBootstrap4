let React = require("react")

class Component extends React.Component {
    constructor(props) {
        super(props)
        let { href } = props;
        this.state = { href }
    }
    render() {
        return (
            <a href={this.state.href} className="alert-link">
                {
                    this.props.children
                }
            </a>
        )
    }
    componentWillReceiveProps(nextProps) {
        let { href } = nextProps
        this.setState({ href })
    }
}

Component.defaultProps = {
    href: "###",
    children: null
}

module.exports = Component