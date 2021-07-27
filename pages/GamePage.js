import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import winnerPng from "../images/crown.png";
export default function GamePage() {
  const [userAddress, setuserAddress] = useState("CONNECT");
  let connectButton;

  useEffect(() => {
    if (window.ethereum) {
      try {
        // console.log(window.ethereum.selectedAddress);
        // console.log(window.ethereum.chainId);
        ethereum
          .request({ method: "eth_requestAccounts" })
          .then((p) => console.log(p));

        // setuserAddress(window.ethereum.selectedAddress);
        connectButton = window.ethereum.selectedAddress;
        setuserAddress(connectButton);
      } catch (err) {
        console.log("SOME ERROR =====>");
        console.log(err);
      }
    } else {
      console.log("window.ethereum not found");
    }
  }, []);

  return (
    <div>
      <div>
        <a href="#" className="btn">
          {userAddress}
        </a>
      </div>
      <div style={{ height: "20em", width: "auto", backgroundColor: "red" }}>
        <div style={{ alignItems: "center" }}>
          <h1>HELLO</h1>
        </div>
      </div>
      <div>
        <button style={{ width: "10em" }} className="btn">
          ROLL
        </button>
      </div>
      <div class="quiz-window">
        <div class="quiz-window-body">
          <div class="gui-window-awards">
            <ul class="guiz-awards-row player-palying">
              <li class="guiz-awards-star">
                <span class="star">SB</span>
              </li>
              <li class="guiz-awards-track">
                <span class="star startpaying">
                  {" "}
                  <Image src={winnerPng} width="24" height="24" />{" "}
                </span>
              </li>
              <li class="guiz-awards-title">
                Sumit Bhandari
                <div class="guiz-awards-subtitle">
                  bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlhdiv/
                </div>
              </li>

              <li class="guiz-awards-time">
                <span class="star startpayg">
                  <i class="fa fa-angle-right"></i>{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
