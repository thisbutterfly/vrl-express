import React, { Component } from "react"
import styled from "styled-components"
import bgImage from "../images/copy.jpeg"
import Navbar from "./navbar"

const Wrapper = styled.section`
  background-image: url(${bgImage});
  background-size: cover;
  height: 90vh;
  p.title{
      word-spacing: 15px;
  }
  div.button-container{
      display: flex;
      justify-content: center;
  }
`

export default class HomeSection extends Component {
  render() {
    return (
      <>
        <Wrapper className="hero is-fullheight">
          <Navbar />
          <div className="hero-body">
            <div className="container">
              <p className="title has-text-centered is-size-2 has-text-white">
                WE HELP YOU TAKE YOUR PRODUCTS <br /> WHEREVER YOU WANT THEM TO
                BE.
              </p>{" "}
              <br />
              <h2 className="subtitle has-text-centered is-size-5 has-text-white">
                We provide fastest, cheapest and safest, hassle-free logistic
                services
              </h2>{" "}
              <br />
              <div className="button-container">
                <button className="button has-text-white is-outlined is-inverted is-primary">
                  OUR SERVICE
                </button>
              </div>
            </div>
          </div>
        </Wrapper>
      </>
    )
  }
}
