import React from "react";
import ReactDOM from "react-dom";
import CommentFeeds from "./CommentFeeds";
import "./main.css";
import "./reset.css";

class Main extends React.Component {
  render() {
    return (
      <section>
        <nav>
          <div className="nav-wrap">
            <div className="navbar-left-side-links">
              <a href="">
                <img src="./img/icons8-instagram-50.png" alt="" />
              </a>
              <div className="logo-between-line"></div>
              <a href="">
                <img src="./img/logo_text.png" alt="" className="logo" />
              </a>
            </div>
            <div className="navbar-search">
              <img src="./img/icons8-search-24.png" alt="" />
              <input type="text" placeholder="검색" />
            </div>
            <div className="navbar-rightside-links">
              <a href="">
                <img src="./img/explore.png" alt="" />
              </a>
              <a href="">
                <img src="./img/heart.png" alt="" />
              </a>
              <a href="">
                <img src="./img/profile.png" alt="" />
              </a>
            </div>
          </div>
        </nav>
        <div className="contents-wrap">
          <div className="main-contents-container">
            <div className="main-contents-title">
              <img src="./img/profile1.jpg" alt="" />
              <p>title</p>
              <div className="main-contents-title-more">
                <img src="./img/more.png" alt="" />
              </div>
            </div>
            <div className="main-contents-body">
              <img src="./img/pizza.jpeg" alt="" />
              <div className="main-contents-footer">
                <div className="main-contents-footer_links">
                  <img src="./img/heart.png" alt="" />
                  <img src="./img/comment.png" alt="" />
                  <img src="./img/share.png" alt="" />
                </div>
                <div>
                  <img src="./img/bookmark.png" alt="" />
                </div>
              </div>
              <CommentFeeds />
            </div>
          </div>
          <div className="story-feeds">
            <div className="story-feeds-title">
              <img src="./img/profile1.jpg" alt="" />
              <span>
                title<p>title2</p>
              </span>
            </div>
            <div className="story-feeds-body">
              <div className="story-feeds-story">
                <div className="story-feeds-body">
                  <p className="story-feeds-container">스토리</p>
                  <span>모두 보기</span>
                  <div>
                    <ul className="story__story-container">
                      <li>
                        <img src="./img/pizza.jpeg" alt="" />
                        <p>a</p>
                      </li>
                      <li>
                        <img src="./img/pizza.jpeg" alt="" />
                        <p>a</p>
                      </li>
                      <li>
                        <img src="./img/pizza.jpeg" alt="" />
                        <p>a</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="story__story-container">
              <div>
                <ul className="story__story-container">
                  <p>회원님을 위한 추천</p>
                  <span>모두 보기</span>
                  <li>
                    <img src="./img/pizza.jpeg" alt="" />
                    <p>a</p>
                    <p className="follow">팔로우</p>
                  </li>
                  <li>
                    <img src="./img/pizza.jpeg" alt="" />
                    <p>a</p>
                    <p className="follow">팔로우</p>
                  </li>
                  <li>
                    <img src="./img/pizza.jpeg" alt="" />
                    <p>a</p>
                    <p className="follow">팔로우</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
