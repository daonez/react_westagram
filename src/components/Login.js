import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import "./login.css";
import "./reset.css";

class Login extends React.Component {
  render() {
    return (
      <section>
        <div className="only-tablet-desktop-view">
          <img src="./img/insta.png" alt="" />
        </div>
        <div className="login-main">
          <div className="login-page">
            <h1>
              <img src="./img/logo_text.png" alt="instagram" />
            </h1>
            <div className="form-container">
              <LoginForm />
            </div>
          </div>
          <div className="register-container">
            <p>
              계정이 없으신가요?<a href="">가입하기</a>
            </p>
          </div>
          <div>
            <p>앱을 다운로드하세요</p>
            <div className="mobile-download-container">
              <div className="goto-appstore">
                <a href="#">
                  <img src="./img/appstore-download_kr.png" alt="" />
                </a>
              </div>
              <div className="goto-appstore">
                <a href="#">
                  <img src="./img/googlestore-download_kr.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Login;
