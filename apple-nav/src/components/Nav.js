import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import SubNav from "./SubNav";
import Data from "../data";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      nav: []
    };
  }

  componentDidMount() {
    this.setState({ nav: Data });
  }

  render() {
    return (
      <div>
        <div className="nav">
          <i className="fab fa-apple apple-icon" />
          {this.state.nav.map(i => (
            <div key={i.id} className="nav-links">
              <NavLink to={`/${i.name}`}>{i.name}</NavLink>
            </div>
          ))}
          <i className="fa fa-search search-icon" />
          <i className="fas fa-shopping-bag shopping-bag-icon" />
        </div>
        <Route
          exact
          path="/:name"
          render={props => <SubNav {...props} nav={this.state.nav} />}
        />
      </div>
    );
  }
}
export default Nav;
