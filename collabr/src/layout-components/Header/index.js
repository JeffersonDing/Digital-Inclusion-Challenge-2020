import React, { Fragment, Component } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Fab, AppBar, Tooltip } from '@material-ui/core';

import { connect } from 'react-redux';

import projectLogo from '../../assets/images/react.svg';

class Header extends Component {
  render() {
    let { headerShadow } = this.props;

    return (
      <Fragment>
        <div className="header-nav-wrapper header-nav-wrapper-lg" />
        <AppBar
          position="fixed"
          color="primary"
          className={clsx(
            'app-header header-nav-wrapper header-nav-wrapper-lg w-100 navbar-dark d-flex align-items-center justify-content-between',
            { 'app-header--shadow': headerShadow }
          )}>
          <Tooltip
            arrow
            title="Enjoy a well built Carolina UI Kit"
            placement="bottom">
            <div className="nav-logo">
              <Link to="/" title="Carolina React UI Kit with Material-UI Free">
                <i>
                  <img
                    alt="Carolina React UI Kit with Material-UI Free"
                    src={projectLogo}
                  />
                </i>
              </Link>
            </div>
          </Tooltip>
          <div>
            <Tooltip
              arrow
              title="Download Carolina React UI Kit with Material-UI Free"
              placement="bottom">
              <Fab
                size="small"
                color="secondary"
                className="ml-3"
                href="https://uifort.com/template/carolina-react-ui-kit-material-ui-free"
                target="_blank">
                <FontAwesomeIcon icon={['fas', 'download']} />
              </Fab>
            </Tooltip>
            <Tooltip
              arrow
              title="Learn more about Carolina React UI Kit Material-UI PRO version"
              placement="bottom">
              <Fab
                href="https://uifort.com/template/carolina-react-ui-kit-material-ui-pro"
                target="_blank"
                size="small"
                color="default"
                className="ml-3">
                <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
              </Fab>
            </Tooltip>
          </div>
        </AppBar>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  headerShadow: state.ThemeOptions.headerShadow
});

export default connect(mapStateToProps)(Header);
