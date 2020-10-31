import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { Container, Button, Tooltip } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import hero8 from '../assets/images/hero-bg/education.jpg';
const LandingPage = () => {
  return (
    <Fragment>
      <div className="rm-padding-wrapper">
        <div className="hero-wrapper bg-composed-wrapper min-vh-100 bg-premium-dark pt-5">
          <div className="flex-grow-1 w-100 d-flex align-items-center">
            <div
              className="bg-composed-wrapper--image bg-composed-filter-rm opacity-6"
              style={{ backgroundImage: 'url(' + hero8 + ')' }}
            />
            <div className="bg-composed-wrapper--bg bg-vicious-stance opacity-5" />
            <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
              <Container maxWidth="md" className="py-5">
                <div className="d-flex align-items-center">
                  <div className="text-center">
                    <div className="px-4 px-sm-0 text-white mt-4">
                      <h1 className="display-2 mb-4 font-weight-bold">
                        CollabR™
                      </h1>
                      <p className="font-size-xl text-white-50 mb-3">
                        While we may use the word “unprecedented” to describe
                        the present circumstances that shape our lives, what is
                        not “unprecedented” is students uniting together to stay
                        strong and continue to thrive.
                      </p>
                      <p className="text-white font-size-lg">
                        The first virtual learning social platform. Made for
                        students by students.
                      </p>
                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50"></div>
                      <div>
                        <Link to='/Activities'>
                          <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className="d-block d-sm-inline-block px-5 py-3 ml-0 mt-3 mt-sm-0 ml-sm-3"
                            target="_blank">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon icon={['fas', 'book']} />
                            </span>
                            <span className="btn-wrapper--label">
                              Explore Activities
                            </span>
                          </Button>
                        </Link>
                        <Link to='/signIn'>
                          <Button
                            variant="contained"
                            target="_blank"
                            size="large"
                            color="primary"
                            className="px-5 py-3 d-block d-sm-inline-block ml-0 ml-sm-3 mt-3 mt-sm-0">
                            <span className="btn-wrapper--icon">
                              <FontAwesomeIcon
                                icon={['fas', 'external-link-alt']}
                              />
                            </span>
                            <span className="btn-wrapper--label">
                              Register / Sign In
                            </span>
                          </Button>
                        </Link>
                      </div>
                      <small className="d-block pt-4">
                        Start your journey with the 1,000+ students around you! Find new friends and learn new skills!
                      </small>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
