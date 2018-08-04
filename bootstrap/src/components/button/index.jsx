let React = require("react");
let { className } = require("../tools.js");
// 这里有一个a disabled 的问题没有解决，我想到了我在vue中的解决方案不合理
class Component extends React.Component {
    constructor(props) {
        super(props)
        let { children, theme, href, target, size, outline, block, active, disabled } = props;
        this.state = { children, theme, href, target, size, outline, block, active, disabled }
    }
    render() {
        return (
            this.state.href ?
                <a href={this.state.href} target={this.state.target} className={className({ btn: true, [`btn-${this.state.size}`]: true, disabled: this.state.disabled, "btn-block": this.state.block, active: this.state.active, [`btn-${this.state.theme}`]: !this.state.outline, [`btn-outline-${this.state.theme}`]: this.state.outline })}>
                    {
                        this.state.children
                    }
                </a> :
                <button disabled={this.state.disabled} className={className({ btn: true, [`btn-${this.state.size}`]: true, disabled: this.state.disabled, "btn-block": this.state.block, active: this.state.active, [`btn-${this.state.theme}`]: !this.state.outline, [`btn-outline-${this.state.theme}`]: this.state.outline })}>
                    {
                        this.state.children
                    }
                </button>
        )
    }
    componentWillReceiveProps(nextProps) {
        let { children, theme, href, target, size, outline, block, active, disabled } = nextProps;
        this.setState({ children, theme, href, target, size, outline, block, active, disabled })
    }
}


Component.defaultProps = {
    children: null,
    //primary,secondary,success,danger,warning,info,light,dark,link
    theme: "primary",
    href: null,
    target: "_blank",
    //lg,sm
    size: "default",
    outline: false,
    block: false,
    active: false,
    disabled: false,
}
module.exports = Component