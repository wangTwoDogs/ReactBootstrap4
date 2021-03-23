require("bootstrap@4");
const ROOT_CONTAINER = "react-root-container";
let React = require("react");
let ReactDOM = require("react-dom");
let Alert = require("../src/components/alerts/index.jsx");
let AlertLink = require("../src/components/alerts/link.jsx");
let Badge = require("../src/components/badge/index.jsx");
let Button = require("../src/components/button/index.jsx");

class Root extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div style={{ padding: '20px' }}>
                <h1>这是最简单的实验页面</h1>
                <div>
                    <div>
                        <h2>alerts</h2>
                        <Alert>
                            This is a primary alert—check it out!
                        </Alert>
                        <Alert theme="success" closeable>
                            This is a primary alert—check it out!
                        </Alert>
                        <Alert theme="info" closeable>
                            This is a primary alert with <AlertLink>an example link</AlertLink>. Give it a click if you like.
                        </Alert>
                        <Alert heading="Well done!" closeable onClose={() => { alert(1) }}>
                            This is a primary alert with <AlertLink>an example link</AlertLink>. Give it a click if you like.
                        </Alert>
                        <h2>badges</h2>
                        <Badge theme="primary">primary</Badge>
                        <Badge theme="secondary" pill>secondary</Badge>
                        <Badge theme="success">success</Badge>
                        <Badge theme="dark" href="###">dark</Badge>
                        <h2>buttons</h2>
                        <Button theme="primary">primary</Button>
                        <Button theme="secondary">secondary</Button>
                        <Button theme="success">success</Button>
                        <Button theme="danger">danger</Button>
                        <Button theme="warning">warning</Button>
                        <Button theme="info">info</Button>
                        <Button theme="light" outline>light</Button>
                        <Button theme="dark">dark</Button>
                        <Button theme="link">link</Button>
                        <Button theme="primary" size="lg" active disabled>primary</Button>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Root />,
    document.getElementById(ROOT_CONTAINER)
);
