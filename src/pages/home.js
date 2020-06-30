import React from "react";
import Header from "../components/header";

export default function Home() {
  return (
    <div class="bg">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div class="container">
        <Header />
        <div class="content active" id="home">
          <div class="content__description">
            <p class="text-content">
              My name is Nikita Tokarev.
              <br />
              I'm junior Frontend developer
              <br />
              from Saint-Petersburg.
            </p>
            <a href="#" class="btn-container">
              <button class="contact-btn">Contact me</button>
            </a>
          </div>
          <div class="content__image">
            <div class="cube">
              <div class="side top">
                <p class="side-text">html5</p>
              </div>
              <div class="side right">
                <p class="side-text">css3</p>
              </div>
              <div class="side left">
                <p class="side-text">js</p>
              </div>
              <div class="side bottom">
                <p class="side-text">cms</p>
              </div>
              <div class="side front">
                <p class="side-text">react</p>
              </div>
              <div class="side back">
                <p class="side-text">webpack</p>
              </div>
            </div>
          </div>
        </div>

        <div class="low-bar">
          <div class="page-container">
            <a href="mailto:nikitostokarev22@gmail.com">
              nikitostokarev22@gmail.com
            </a>
          </div>
          <div class="social-container">
            <a
              href="https://github.com/NickyHate/"
              class="social-container__item"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://vk.com/tt_35"
              class="social-container__item"
              target="_blank"
            >
              VKontakte
            </a>
            <a
              href="https://www.facebook.com/"
              class="social-container__item"
              target="_blank"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
