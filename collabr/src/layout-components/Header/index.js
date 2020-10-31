import React, { Fragment, Component } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Button, AppBar, Tooltip } from '@material-ui/core';
import { connect } from 'react-redux';
import projectLogo from '../../assets/favicon/favicon-1.png';
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
          <Tooltip arrow title="CollabR Home" placement="bottom">
            <div className="nav-logo">
              <Link to="/" title="Home">
                <i>
                  <img alt="CollabR Logo" src={projectLogo} />
                </i>
              </Link>
            </div>
          </Tooltip>
          <div className="header-nav-menu d-none d-lg-block">
            <div className="d-flex justify-content-center">
              <Link to='/'>
                <Button
                  size="large"
                  color="inherit"
                  className="text-white ml-4 px-4 py-2 text-capitalize font-size-xl">
                  <FontAwesomeIcon
                    icon={['fas', 'home']}
                    className="font-size-xl pr-1"
                  />
                  Home
                </Button>
              </Link>
              <Link to="/Activities">
                <Button
                  size="large"
                  color="inherit"
                  className="text-white ml-4 px-4 py-2 text-capitalize font-size-xl">
                  <FontAwesomeIcon
                    icon={['fas', 'book']}
                    className="font-size-xl pr-1"
                  />
                  Activities
                </Button>
              </Link>
              <Link to='/Community'>
                <Button
                  size="large"
                  color="inherit"
                  className="text-white ml-4 px-4 py-2 text-capitalize font-size-xl">
                  <FontAwesomeIcon
                    icon={['fas', 'users']}
                    className="font-size-xl pr-1"
                  />
                  Community
                </Button>
              </Link>
              <Link to='/About'>
                <Button
                  size="large"
                  color="inherit"
                  className="text-white ml-4 px-4 py-2 text-capitalize font-size-xl">
                  <FontAwesomeIcon
                    icon={['fas', 'info-circle']}
                    className="font-size-xl pr-1"
                  />
                  About
                </Button>
              </Link>

              <Grid container justify="flex-end">
                <Link to="/signIn">
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    className="text-white text-capitalize">
                    <FontAwesomeIcon
                      icon={['fas', 'columns']}
                      className="font-size-xl pr-1"
                    />
                    DashBoard
                  </Button>
                </Link>
              </Grid>
            </div>
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
