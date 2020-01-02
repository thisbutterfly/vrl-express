import React, { Component } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background-color: #f7f9fc;
  width: 100vw;
  height: auto;
  padding-top: 6%;
`

const Form = styled.div`
  padding: 30px;
  background-color: #eef1f5;
`
const Title = styled.p`
  color: #3c4a62;
`

export default class About extends Component {
  render() {
    return (
      <Wrapper id="about">
        <div className="container">
          <div className="columns mt-5">
            <Form className="column is-4">
              <Title className="is-size-3 has-text-weight-bold">
                {" "}
                GET A QUOTE
              </Title>{" "}
              <br />
              <div className="field">
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" type="text" placeholder="Email" />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" type="number" placeholder="Phone" />
                </div>
              </div>
            </Form>
            <div className="column has-background-success">
              <p className="has-text-white">DATA HERE</p>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }
}
