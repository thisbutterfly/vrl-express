import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* Add custom css or scripts here */}
          <link
            href="https://fonts.googleapis.com/css?family=Lato:700%7CMontserrat:400,600"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
          />
          <link
            type="text/css"
            rel="stylesheet"
            href="/css/bootstrap.min.css"
          />
          <link type="text/css" rel="stylesheet" href="/css/style.css" />
          <link rel="stylesheet" href="/css/font-awesome.min.css" />
          {/* Add custom css or scripts here */}

          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script type="text/javascript" src="/js/jquery.min.js" />
          <script type="text/javascript" src="/js/bootstrap.min.js" />
          <script type="text/javascript" src="/js/main.js" />
          <script type="text/javascript" src="js/jquery.min.js" />
          <script type="text/javascript" src="js/bootstrap.min.js" />
          <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false" />
          <script type="text/javascript" src="js/google-map.js" />
          <script type="text/javascript" src="js/main.js" />
          <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js" />
          <div id="preloader">
            <div className="preloader" />
          </div>
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
