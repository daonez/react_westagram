import React from "react";
import { withRouter } from "react-router-dom";
import "./login.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      pw: "",
      isToggleOn: true
    };
  }

  //Notes: Fetch method to get token (Wecode exercise)
  // handleClick = e => {
  //   fetch("http://10.58.1.200:8000/account/sign-in", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       email: this.state.id,
  //       password: this.state.pw
  //     })
  //   })
  //     .then(response => {
  //       console.log("response1", response);
  //       return response.json();
  //     })
  //     .then(response => {
  //       console.log("response2", response);
  //       if (response.token) {
  //         localStorage.setItem("wecode-token", response.token);
  //       }
  //     });
  // };

  handleClick = e => {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
    this.props.history.push("/Main");
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
      //Can handle multiple events?
    });
  };

  render() {
    return (
      <div action="" id="loginForm">
        <div>
          <input
            id="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleChange}
            value={this.state.id}
          />
        </div>
        <div>
          <input id="pw" type="password" placeholder="비밀번호" onChange={this.handleChange} value={this.state.pw} />
        </div>
        {this.state.id && this.state.pw ? (
          <button style={{ opacity: 1 }} onClick={this.handleClick}>
            로그인
          </button>
        ) : (
          <button className="form-container button">로그인</button>
        )}
        <div>또는</div>
        <div className="facebook-login">
          <img src="./img/facebook_logos_PNG19753.png" alt="" />
          <a href="">Facebook으로 로그인</a>
        </div>
        <div className="forgot-password">
          <a href="">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
