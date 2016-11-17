import React from 'react'
import { IndexLink, Link } from 'react-router'
import { FaBars } from 'react-icons/lib/fa'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }
  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";
    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <FaBars size={20} color='white' />
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <IndexLink to="/" activeClassName="active" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li>
                <Link to="photos" activeClassName="active" onClick={this.toggleCollapse.bind(this)}>Photos</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
