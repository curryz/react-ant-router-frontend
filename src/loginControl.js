import React from "react";
import { ReactDOM } from "react";

class LoginControl extends React.component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isdLoggedIn: false};
    }

    handleLoginClick() {
        this.setSate({isdLoggedIn: true});
    }

    handleLogoutClick() {
        this.setSate({isdLoggedIn: false});
    }

    render() {
        // const isLoggedIn = this.state.isdLoggedIn;
        let button;
        // if (isLoggedIn) {
        //     button = <logoutButton onClick={this.handleLogoutClick} />;
        // } else {
        //     button = <loginButton onClick={this.handleLoginClick} />;
        // }

        return (
            <div>
                {/* <Greeting isLoggedIn={isLoggedIn} /> */}
                {button}
            </div>
        )
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);
