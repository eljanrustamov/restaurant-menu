import React from "react";
import "./Main.scss";
import WoodBG from "../../assets/wood-bg.jpeg";
import BoardBG from "../../assets/board-bg.jpeg";

const Main = () => {
  return (
    <div className="main-wrapper">
      <img src={WoodBG} alt="bg" className="background" />

      <section className="menu" id="menu">
        <div className="row d-flex justify-content-center">
          <div className="col-7 col-sm-6 col-md-4 col-lg-3">
            <div className="menu-heading">
              <h2 className="title">
                <a href="#menu">MENU</a>
              </h2>
              <p>Eldorado Restaurant</p>
            </div>
          </div>
        </div>

        <div className="menu-list">
          <section className="menu-category-item" id="starters">
            <h3 className="category-name">Starters</h3>
            <ul className="category-items">
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Cocktail Strawberry</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>

              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Cocktail Strawberry</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section className="menu-category-item" id="sandwiches">
            <h3 className="category-name">Sandwiches</h3>
            <ul className="category-items">
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section className="menu-category-item" id="soups">
            <h3 className="category-name">Soups</h3>
            <ul className="category-items">
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section className="menu-category-item" id="burgers">
            <h3 className="category-name">Burgers</h3>
            <ul className="category-items">
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

          <section className="menu-category-item" id="salads">
            <h3 className="category-name">Salads</h3>
            <ul className="category-items">
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>

              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
              <li className="category-item">
                <div className="row">
                  <div className="col-10">
                    <h3 className="item-name">Lorem ipsum dolor</h3>
                    <p className="item-description">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quae.
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="item-price">10.0 AZN</p>
                  </div>
                </div>
              </li>
            </ul>
          </section>

        </div>
      </section>
    </div>
  );
};

export default Main;
