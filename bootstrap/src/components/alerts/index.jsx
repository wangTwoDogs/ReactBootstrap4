let React = require("react");
let { className } = require("../tools.js");

class Component extends React.Component {
    constructor(props) {
        super(props)
        let { theme, heading, closeable, onClose, children } = props;
        this.state = { theme, heading, closeable, show: true, onClose, children }
    }
    render() {
        let onClose = () => {
            this.setState({ show: false })
            this.state.onClose()
        }
        return (
            <div className={className({ alert: true, [`alert-${this.state.theme}`]: true, "alert-dismissible": this.state.closeable, fade: true, show: this.state.show })}>
                {
                    this.state.heading ?
                        (
                            <h4 className="alert-heading">{this.state.heading}</h4>
                        ) : null
                }
                {
                    this.state.children
                }
                {
                    this.state.closeable ?
                        (
                            <button type="button" className="close" onClick={onClose}>
                                <span>&times;</span>
                            </button>
                        ) : null
                }
            </div>
        )
    }
    componentWillReceiveProps(nextProps) {
        let { theme, heading, closeable, onClose, children } = nextProps;
        this.setState({ theme, heading, closeable, onClose, children })
    }
}

Component.defaultProps = {
    //primary,secondary,success,danger,warning,info,light,dark
    theme: "primary",
    children: null,
    heading: null,
    closeable: false,
    onClose: function () { }
}

module.exports = Component