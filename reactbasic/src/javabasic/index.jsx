import React from "react";
import logo from "./style.css";

function Header() {
  return (
    <header>
      <nav>
        <h1 className="logo">
          <a href="./">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </h1>
        <ul className="gnbList">
          <li className="gnbItem">
            <a href="./">menu1</a>
          </li>
          <li className="gnbItem">
            <a href="./">menu2</a>
          </li>
          <li className="gnbItem">
            <a href="./">menu3</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Body() {
  return (
    <div className="bodyWrapper">
      <section className="backgroundImge"></section>
      <h1>Lorem ipsum dolor sit.</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem in id
        nemo eum, iure illum!
      </p>
      <button type="button">버튼</button>
      {/* onClick={alert("hi")} */}

      <div className="top">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          omnis modi? Cupiditate totam sed a atque sint blanditiis minima cum?
        </p>
      </div>

      <section className="postBox">
        <div className="postCard">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p className="postBoxTxt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            omnis modi? Cupiditate totam sed a atque sint blanditiis minima cum?
          </p>
        </div>
        <div className="postCard">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p className="postBoxTxt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            omnis modi? Cupiditate totam sed a atque sint blanditiis minima cum?
          </p>
        </div>
        <div className="postCard">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p className="postBoxTxt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
            omnis modi? Cupiditate totam sed a atque sint blanditiis minima cum?
          </p>
        </div>
      </section>
    </div>
  );
}

function Fotter() {
  return (
    <div class="global-footer">
      <h3>Contact</h3>
      <ul class="footer-list">
        <li class="footer-item">
          <a href="jn_ll@naver.com">메일</a>
        </li>
        <li class="footer-item">
          <a href="tel:01082091094">전화</a>
        </li>
        <li class="footer-item">
          <a href="https://www.youtube.com">유튜브</a>
        </li>
      </ul>
    </div>
  );
}

function Index() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Fotter />
    </div>
  );
}

export default Index;

//수입수출
