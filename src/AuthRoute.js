import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { setToken } from "./actions/tokenActions";

function login() {
  return "https://accounts.spotify.com/authorize?client_id=a5df0354e4004683bbd1b4ceab1b8974&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/";
}

class AuthenticatedRoute extends React.PureComponent {
  state = {
    isAuthenticated: null
  };

  componentDidMount() {
    let params = {};
    let e,
      reg = /([^&;=]+)=?([^&;]*)/g,
      token = window.location.hash.substring(1);
    while ((e = reg.exec(token))) {
      params[e[1]] = decodeURIComponent(e[2]);
    }

    if (!params.access_token) {
      window.location.href = login();
      this.setState({ isAuthenticated: false });
    } else {
      this.setState({ isAuthenticated: true });
      this.props.setToken(params.access_token);
    }
  }

  render() {
    const { component: C, props: cProps, ...rest } = this.props;
    const { isAuthenticated } = this.state;

    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? <C {...props} {...cProps} /> : false
        }
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setToken
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(AuthenticatedRoute);
