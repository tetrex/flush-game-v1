import Image from "next/image";

export default function HomeCard() {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-head">
            <Image
              src="https://s8.hostingkartinok.com/uploads/images/2018/01/0c86fd4a4747a64d3501de8eff2aab98.png"
              alt="logo"
              className="card-logo"
              height="55"
              width="55"
            />

            <div className="product-detail">
              <h2>Flush Game </h2>
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h3>
            </div>
            <span className="back-text">HPNS</span>

            <div className="card-body">
              <div className="product-desc">
                <span className="product-title">
                  Join<b>POOL</b>
                  <span className="bage">Hot</span>
                </span>
                <span className="product-caption">
                  Winner takes all Loosers take some{" "}
                </span>
                <br />
                <br />

                <br />
                <span className="product-price">
                  BNB<b>10</b>
                </span>
                <br />
                <br />
                <div style={{ alignSelf: "center" }}>
                  <a href="./GamePage" className="btn">
                    JOIN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
