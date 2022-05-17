import React from "react";
import "./PricingPage.css";
import "./PriceRes.css";

const PricingPage = () => {
  return (
    <>
      <section className="PriceSec">
        <div className="PricePage-heading">
          <h2>
            Best Plan's<span> for Your Site.</span>
          </h2>
        </div>
        <div className="pricing-container">
          <div className="price-flex">
            <div
              className="price-card"
            >
              <div className="img-div">
                <img src="./images/price-2.gif" alt="price card images" />
              </div>
              <div className="priceCard-content">
                <h3>Basic</h3>
                <h4>
                  A Simple option but powerful to
                  <span> manage your business</span>
                </h4>
                <p>Email support</p>
                <h1>
                  $100/ <span>Month</span>
                </h1>
                <p>₹159.00/mo when you renew</p>
                <div className="price-btn">
                  <button>
                    Add to cart<i class="bx bx-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="price-card"
            >
              <div className="Recommended">Recommended</div>
              <div className="img-div">
                <img src="./images/astronot.gif" alt="price card images" />
              </div>
              <div className="priceCard-content">
                <h3>Premium</h3>
                <h4>
                  Unlimited product including apps
                  <span> and more features</span>
                </h4>
                <p>Mon-Fri support</p>
                <h1>
                  $49/ <span>Month</span>
                </h1>
                <p>₹249.00/mo when you renew</p>
                <div className="price-btn">
                  <button>
                    Add to cart<i class="bx bx-like"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="price-card"
              
            >
              <div className="img-div">
                <img src="./images/price-1.gif" alt="price card images" />
              </div>
              <div className="priceCard-content">
                <h3>Ultimate</h3>
                <h4>
                  A wise option for large companie<span> and individuals</span>
                </h4>
                <p>24/7 support</p>
                <h1>
                  $99/ <span>Month</span>
                </h1>
                <p>₹499.00/mo when you renew</p>
                <div className="price-btn">
                  <button>
                    Add to cart<i class="bx bx-gift"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
