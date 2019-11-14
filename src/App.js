import React from 'react';
import './main.scss';

function App() {
  return (
    <div className="footer-background">
      <div className="background">

        <div className="container">

          <header className="header">
            <div className="header__logo-wrapper">
              <p className="header__logo">logo</p>
              <p className="header__logo_bottom">lorem ipsum</p>
            </div>

            <input type="button" value="Register Now" className="register" />
          </header>

          <div className="main-wrapper">
            <main className="main">
              <p className="text text_29px">limited time offer</p>
                <p className="text text__extra-bold text_43px wrapper">
                  FIRST DEPOSIT BONUS: 200% <br /> UP TO £50 + 200 BONUS 
                </p>
              <p className="text text__extra-bold text_29px p_indent">+40 free SPINS</p>

              <a href="#" className="register register_big">Register Now</a>
            </main>
          </div>

         
        </div>
      </div>

      <div className="footer-wrapper">
            <footer className="footer">
              <div className="footer__top">
                  <img src="./images/visa.png" alt="" />
                  <img src="./images/master-card.png" alt="" />
                  <img src="./images/skrill.png" alt="" />
                  <img src="./images/pay.png" alt="" />
                  <img src="./images/visa.png" alt="" />
                  <img src="./images/master-card.png" alt="" />
                  <img src="./images/skrill.png" alt="" />
                  <img src="./images/pay.png" alt="" />
                  <img src="./images/visa.png" alt="" />
                  <img src="./images/master-card.png" alt="" />
                  <img src="./images/skrill.png" alt="" />
              </div>

              <div className="footer__bottom">
                  <img src="./images/skrill.png" alt="" />
                  <img src="./images/pay.png" alt="" />
                  <img src="./images/visa.png" alt="" />
                  <img src="./images/master-card.png" alt="" />
                  <img src="./images/skrill.png" alt="" />
                  <img src="./images/pay.png" alt="" />
                  <img src="./images/visa.png" alt="" />
              </div>
            </footer>
          </div>
    </div>
  );
}

export default App;
