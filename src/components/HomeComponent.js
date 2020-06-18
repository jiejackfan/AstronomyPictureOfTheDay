import React from "react"
import {Link} from "react-router-dom";

export default class HomeComponent extends React.Component {
    render = () => {
      return (
          <div>
              <h3>Welcome!</h3>
              <Link to={`/search`}>
                  Search
              </Link>
          </div>

      )
    }
}