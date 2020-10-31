import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '@material-ui/core/Card';

export default function Writing() {
  return (
    <Fragment>
      <br />
      <br />
      <br />
      <br />
      <div className="py-3 py-xl-5">
        <Container className="py-3 py-xl-5">
          <div className="text-center mb-4">
            <h1 className="display-2 text-black mb-3 font-weight-bold">
              Writing: Activities and Projects
            </h1>
            <p className="font-size-xl mb-4 text-black-50">
              Click start to enter pool! System will get you grouped up in a
              second! Be ready to meet your new "friends"! Don't forget to wave
              at them!
            </p>
          </div>
          <Grid container spacing={4} className="d-flex align-items-center">
            <Grid item xs={12} md={6} lg={4}>
              <Card className="mb-4">
                <div className="card-body px-4 pb-4 pt-3 text-center">
                  <h3 className="display-4 my-4 font-weight-bold text-info">
                    "Sentence" Stories
                  </h3>
                  <div className="bg-neutral-info p-3 rounded mb-4">
                    <span className="display-2 font-weight-bold">
                      <FontAwesomeIcon
                        icon={['fas', 'clock']}
                        className="text-success mr-2"
                      />
                      12
                    </span>
                    <small className="text-uppercase text-black-50">min</small>
                  </div>
                  <ul className="list-unstyled text-lg-left mb-4 font-weight-bold font-size-sm">
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'smile-wink']}
                        className="text-success mr-2"
                      />
                      Quick and fun!
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'edit']}
                        className="text-success mr-2"
                      />
                      Clash of creativity!
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'ellipsis-h']}
                        className="text-success mr-2"
                      />
                      Extend to paragraphs!
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'layer-group']}
                        className="text-success mr-2"
                      />
                      Various modes!
                    </li>
                  </ul>
                  <Button size="large" variant="outlined" color="secondary">
                    Start!
                  </Button>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card className="card-box border-2 border-first mb-4">
                <div className="card-body px-5 pb-5 pt-4 text-center">
                  <h3 className="display-4 my-4 font-weight-bold text-first">
                    Paragraph Stories
                  </h3>
                  <div className="bg-neutral-first p-3 rounded mb-4">
                    <span className="display-2 font-weight-bold">
                      <FontAwesomeIcon
                        icon={['fas', 'clock']}
                        className="text-info mr-2"
                      />
                      30
                    </span>
                    <small className="text-uppercase text-black-50">min</small>
                  </div>
                  <ul className="list-unstyled text-lg-left mb-4 font-weight-bold font-size-sm">
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'users']}
                        className="text-success mr-2"
                      />
                      Ultimate socializing!
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'pen']}
                        className="text-success mr-2"
                      />
                      Intriguing prompts?
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'smile-beam']}
                        className="text-success mr-2"
                      />
                      Expect bloopers!
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'hourglass-half']}
                        className="text-success mr-2"
                      />
                      Extended rooms!
                    </li>
                  </ul>
                  <Link to="/Paragraph">
                    <Button size="large" variant="contained" color="primary">
                      Start!
                    </Button>
                  </Link>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Card className="mb-4">
                <div className="card-body px-4 pb-4 pt-3 text-center">
                  <h3 className="display-4 my-4 font-weight-bold text-warning">
                    Academic Research
                  </h3>
                  <div className="bg-neutral-warning p-3 rounded mb-4">
                    <span className="display-2 font-weight-bold">
                      <FontAwesomeIcon
                        icon={['fas', 'clock']}
                        className="text-warning mr-2"
                      />
                      75
                    </span>
                    <small className="text-uppercase text-black-50">min</small>
                  </div>
                  <ul className="list-unstyled text-lg-left mb-4 font-weight-bold font-size-sm">
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'brain']}
                        className="text-success mr-2"
                      />
                      Serious brainstorms
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'newspaper']}
                        className="text-success mr-2"
                      />
                      Potential project!
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'scroll']}
                        className="text-success mr-2"
                      />
                      Meet literature!
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'hourglass']}
                        className="text-success mr-2"
                      />
                      Long term commitment!
                    </li>
                  </ul>
                  <Button size="large" variant="outlined" color="secondary">
                    Start!
                  </Button>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Fragment>
  );
}
