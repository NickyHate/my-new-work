import React from "react";

export default function Footer() {
  return (
    <div className="low-bar">
      <div className="page-container">
        <a href="mailto:nikitostokarev22@gmail.com">
          nikitostokarev22@gmail.com
        </a>
      </div>
      <div className="social-container">
        <a
          href="https://github.com/NickyHate/"
          className="social-container__item"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://vk.com/tt_35"
          className="social-container__item"
          target="_blank"
        >
          VKontakte
        </a>
        <a
          href="https://www.facebook.com/"
          className="social-container__item"
          target="_blank"
        >
          Facebook
        </a>
      </div>
    </div>
  );
}
