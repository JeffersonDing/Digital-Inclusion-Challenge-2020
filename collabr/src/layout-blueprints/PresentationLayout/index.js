import React, { Fragment } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

import { connect } from 'react-redux';

import { Header, Footer } from '../../layout-components';

const PresentationLayout = (props) => {
  const { children, contentBackground } = props;

  return (
    <Fragment>
      <div className={clsx(contentBackground)}>
          <Header />
        <Container maxWidth="xl" className="px-3 px-lg-5">
          {children}
        </Container>
        <Footer />
      </div>
    </Fragment>
  );
};

PresentationLayout.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = (state) => ({
  contentBackground: state.ThemeOptions.contentBackground
});

export default connect(mapStateToProps)(PresentationLayout);
