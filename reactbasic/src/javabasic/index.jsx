import React from "react";
import "./style.css";
import back from "../back.jpeg";

function Header() {
  return (
    <header>
      <nav>
        <h1 className="logo">
          <a href="./">
            <img className="logo" src="applelogo.png" alt="logo" />
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
      <div style={{ backgroundImage: "url(" + back + ")", height: "500px" }}>
        <div className="frontBox">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem in
            id nemo eum, iure illum!
          </p>
          <button className="frontBtn" type="button">
            버튼
          </button>
        </div>
      </div>

      <div className="top">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          <br></br>
          omnis modi? Cupiditate totam sed a atque sint blanditiis minima cum?
        </p>
      </div>

      <section className="postBox">
        <div className="postCard">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p className="postBoxTxt">
            Lorem ipsum dolor sit amet , consectetur adipisicing elit. Incidunt,
            omnis modi? Cupiditate totam sed a atque sint blanditiis minima cum?
          </p>
        </div>
        <div className="postCard">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p className="postBoxTxt">
            Lorem ipsum dolor sit amet , consectetur adipisicing elit. Incidunt,
            omnis modi? Cupiditate totam sed a atque sint blanditiis minima cum?
          </p>
        </div>
        <div className="postCard">
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p className="postBoxTxt">
            Lorem ipsum dolor sit amet , consectetur adipisicing elit. Incidunt,
            omnis modi? Cupiditate totam sed a atque sint blanditiis minima cum?
          </p>
        </div>
      </section>
    </div>
  );
}

function Fotter() {
  return (
    <div class="footerWrapper">
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
