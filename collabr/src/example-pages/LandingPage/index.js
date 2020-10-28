import React, { Fragment } from 'react';

import { Container, Button, Tooltip } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import hero8 from '../../assets/images/hero-bg/hero-8.jpg';

import Buttons from '../Buttons';
import Dropdowns from '../Dropdowns';
import NavigationMenus from '../NavigationMenus';
import ProgressBars from '../ProgressBars';
import Pagination from '../Pagination';
import Scrollable from '../Scrollable';
import Badges from '../Badges';
import Icons from '../Icons';
import UtilitiesHelpers from '../UtilitiesHelpers';
import Cards3 from '../Cards3';
import ListGroups from '../ListGroups';
import Accordions from '../Accordions';
import Modals from '../Modals';
import Notifications from '../Notifications';
import Carousels from '../Carousels';
import Popovers from '../Popovers';
import TabsExamples from '../Tabs';
import RegularTables1 from '../RegularTables1';
import RegularTables4 from '../RegularTables4';
import FormsControls from '../FormsControls';
import ApexCharts from '../ApexCharts';
import Maps from '../Maps';

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
                    <Tooltip arrow placement="top" title="Version: 1.0.0">
                      <div className="badge badge-warning px-4 text-uppercase h-auto py-1">
                        FREE react UI Kit
                      </div>
                    </Tooltip>

                    <div className="px-4 px-sm-0 text-white mt-4">
                      <h1 className="display-2 mb-4 font-weight-bold">
                        Carolina React UI Kit with Material-UI Free
                      </h1>
                      <p className="font-size-xl text-white-50 mb-3">
                        Looking for a simple, easy to use Google Material Design
                        Ui Kit? Search no more, you&#39;ve found the perfect
                        one!
                      </p>
                      <p className="text-white font-size-lg">
                        Fully customizable, fully responsive, free React UI Kit
                        with Material Design.
                      </p>
                      <div className="divider border-2 border-light my-5 border-light opacity-2 mx-auto rounded-circle w-50"></div>
                      <div>
                        <Button
                          variant="contained"
                          size="large"
                          color="secondary"
                          className="d-block d-sm-inline-block px-5 py-3 ml-0 mt-3 mt-sm-0 ml-sm-3"
                          href="https://uifort.com/template/carolina-react-ui-kit-material-ui-free"
                          target="_blank"
                          title="Download Carolina React UI Kit with Material-UI Free">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'download']} />
                          </span>
                          <span className="btn-wrapper--label">
                            Download now
                          </span>
                        </Button>
                        <Button
                          variant="contained"
                          href="https://uifort.com/template/carolina-react-ui-kit-material-ui-pro"
                          target="_blank"
                          size="large"
                          color="primary"
                          className="px-5 py-3 d-block d-sm-inline-block ml-0 ml-sm-3 mt-3 mt-sm-0"
                          title="Learn more about Carolina React UI Kit Material-UI PRO version">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                              icon={['fas', 'external-link-alt']}
                            />
                          </span>
                          <span className="btn-wrapper--label">
                            PRO Version
                          </span>
                        </Button>
                      </div>
                      <small className="d-block pt-4">
                        For a comprehensive list of components &amp; commercial
                        licenses, we recommend the PRO version.
                      </small>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </div>
        <div className="py-5 bg-secondary my-5">
          <div className="container">
            <div className="px-0 col-lg-8 col-md-10 col-sm-12 mx-auto text-center">
              <h1 className="display-3 mb-4 font-weight-bold">
                Carolina UI Kit is available for multiple frameworks
              </h1>
              <p className="font-size-lg text-black-50">
                Carolina is also available with integrations for the following
                frontend/backend frameworks:
              </p>
            </div>
          </div>
          <div className="container-fluid">
            <div className="mt-4 text-center d-flex flex-row flex-wrap justify-content-center">
              <div>
                <a
                  className="bg-white card card-box card-box-hover-rise px-2 pt-2 pb-3 m-3"
                  href="https://uifort.com/template/carolina-react-ui-kit-material-ui-free"
                  title="Click to visit the presentation page for Carolina React version">
                  <b>Carolina for React</b>
                  <img
                    src="https://demo.uifort.com/github-static-assets/framework-logo/react-framework-logo.png"
                    alt="Carolina React UI Kit with Material-UI Free"
                  />
                  <span className="text-black-50 details-helper">
                    Click for details
                  </span>
                </a>
              </div>
              <div>
                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                  <b>Carolina for Angular</b>
                  <img
                    src="https://demo.uifort.com/github-static-assets/framework-logo/angular-framework-logo.png"
                    alt="Carolina for Angular"
                  />
                  <i className="details-helper text-black-50">
                    Not yet available
                  </i>
                </div>
              </div>
              <div>
                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                  <b>Carolina for Vue.js</b>
                  <img
                    src="https://demo.uifort.com/github-static-assets/framework-logo/vue-framework-logo.png"
                    alt="Carolina for Vue.js"
                  />
                  <i className="details-helper text-black-50">
                    Not yet available
                  </i>
                </div>
              </div>
              <div>
                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                  <b>Carolina for HTML5/jQuery</b>
                  <img
                    src="https://demo.uifort.com/github-static-assets/framework-logo/html-framework-logo.png"
                    alt="Carolina for HTML5/jQuery"
                  />
                  <i className="details-helper text-black-50">
                    Not yet available
                  </i>
                </div>
              </div>
              <div>
                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                  <b>Carolina for Laravel</b>
                  <img
                    src="https://demo.uifort.com/github-static-assets/framework-logo/laravel-framework-logo.png"
                    alt="Carolina for Laravel"
                  />
                  <i className="details-helper text-black-50">
                    Not yet available
                  </i>
                </div>
              </div>
              <div>
                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                  <b>Carolina for Node.js</b>
                  <img
                    src="https://demo.uifort.com/github-static-assets/framework-logo/nodejs-framework-logo.png"
                    alt="Carolina for Node.js"
                  />
                  <i className="details-helper text-black-50">
                    Not yet available
                  </i>
                </div>
              </div>
              <div>
                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                  <b>Carolina for ASP.NET</b>
                  <img
                    src="https://demo.uifort.com/github-static-assets/framework-logo/asp-framework-logo.png"
                    alt="Carolina for ASP.NET"
                  />
                  <i className="details-helper text-black-50">
                    Not yet available
                  </i>
                </div>
              </div>
              <div>
                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                  <b>Carolina for Nuxt.js</b>
                  <img
                    src="https://demo.uifort.com/github-static-assets/framework-logo/nuxtjs-framework-logo.png"
                    alt="Carolina for Nuxt.js"
                  />
                  <i className="details-helper text-black-50">
                    Not yet available
                  </i>
                </div>
              </div>
              <div>
                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                  <b>Carolina for Next.js</b>
                  <img
                    src="https://demo.uifort.com/github-static-assets/framework-logo/nextjs-framework-logo.png"
                    alt="Carolina for Next.js"
                  />
                  <i className="details-helper text-black-50">
                    Not yet available
                  </i>
                </div>
              </div>
              <div>
                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                  <b>Carolina for React Native</b>
                  <img
                    src="https://demo.uifort.com/github-static-assets/framework-logo/react-native-framework-logo.png"
                    alt="Carolina for React Native"
                  />
                  <i className="details-helper text-black-50">
                    Not yet available
                  </i>
                </div>
              </div>
              <div>
                <div className="card card-box px-2 pt-2 pb-3 m-3 opacity-6">
                  <b>Carolina for Flutter</b>
                  <img
                    src="https://demo.uifort.com/github-static-assets/framework-logo/flutter-framework-logo.png"
                    alt="Carolina for Flutter"
                  />
                  <i className="details-helper text-black-50">
                    Not yet available
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 px-lg-5">
          <div className="px-0 px-lg-5">
            <div className="mb-5">
              <Buttons />
            </div>
            <div className="mb-5">
              <Dropdowns />
            </div>
            <div className="mb-5">
              <NavigationMenus />
            </div>
            <div className="mb-5">
              <ProgressBars />
            </div>
            <div className="mb-5">
              <Pagination />
            </div>
            <div className="mb-5">
              <Scrollable />
            </div>
            <div className="mb-5">
              <Badges />
            </div>
            <div className="mb-5">
              <Icons />
            </div>
            <div className="mb-5">
              <UtilitiesHelpers />
            </div>
            <div className="mb-5">
              <Cards3 />
            </div>
            <div className="mb-5">
              <ListGroups />
            </div>
            <div className="mb-5">
              <Accordions />
            </div>
            <div className="mb-5">
              <Modals />
            </div>
            <div className="mb-5">
              <Notifications />
            </div>
            <div className="mb-5">
              <Carousels />
            </div>
            <div className="mb-5">
              <Popovers />
            </div>
            <div className="mb-5">
              <TabsExamples />
            </div>
            <div className="mb-5">
              <RegularTables1 />
            </div>
            <div className="mb-5">
              <RegularTables4 />
            </div>
            <div className="mb-5">
              <FormsControls />
            </div>
            <div className="mb-5">
              <ApexCharts />
            </div>
            <div className="mb-5">
              <Maps />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
