import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  border-bottom: 1px solid brown;
  .navbar-item {
      color: #fff;
    padding: 2.5rem 1.75rem;
    :hover {
      background-color: transparent;
      color: brown;
    }
  }
`;

export default class Navbar extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container">
          <nav class="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
              <img src="https://via.placeholder.com/70" />
            </div>

            <div className="navbar-end">
              <a className="navbar-item">HOME</a>
              <a className="navbar-item">ABOUT</a>
              <a className="navbar-item">SERVICES</a>
              <a className="navbar-item">CONTACT</a>
            </div>
          </nav>
        </div>
      </Wrapper>
    )
  }
}
