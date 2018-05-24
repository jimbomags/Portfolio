import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Links = () => {
  const linkNames = ['About', 'Skills', 'Portfolio', 'Contact'];
  return linkNames.map(linkName => (<a href={`#${linkName.toLowerCase()}`} role="button" tabIndex="0" key={linkName}>{linkName}</a>));
};

const BurgerMenu = ({ showNav }) => (
  <div
    id="burger_icon"
    role="button"
    tabIndex="0"
    onKeyPress={showNav}
    onClick={showNav}
  >
    <div />
    <div />
    <div />
  </div>
);

BurgerMenu.propTypes = {
  showNav: PropTypes.func.isRequired,
};

const NavBarDisplay = ({ display, showNav }) => (
  <nav>
    <BurgerMenu showNav={showNav} />
    <ul id="links" style={{ display }}>
      <Links />
    </ul>
  </nav>);

NavBarDisplay.propTypes = {
  display: PropTypes.string.isRequired,
  showNav: PropTypes.func.isRequired,
};

class NavBarContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: '',
    };
    this.showNav = this.showNav.bind(this);
  }
  showNav() {
    this.setState(this.state.display === 'flex' ? { display: 'none' } : { display: 'flex' });
  }
  render() {
    return <NavBarDisplay showNav={this.showNav} display={this.state.display} />;
  }
}

export default NavBarContainer;
