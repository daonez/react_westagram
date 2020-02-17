import React from "react";
import ReactDOM from "react-dom";
import "./login.css";

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
              <form action="" id="loginForm">
                <div>
                  <input id="getId" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
                </div>
                <div>
                  <input id="getPassword" type="password" placeholder="비밀번호" />
                </div>
                <button id="login">로그인</button>
                <div>또는</div>
                <div className="facebook-login">
                  <img src="./img/facebook_logos_PNG19753.png" alt="" />
                  <a href="">Facebook으로 로그인</a>
                </div>
                <div>
                  <a href="">비밀번호를 잊으셨나요?</a>
                </div>
              </form>
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
