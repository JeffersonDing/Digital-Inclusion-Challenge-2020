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
              Coding: Activities and Projects
            </h1>
            <p className="font-size-xl mb-4 text-black-50">
              Click start to enter pool! System will get you grouped up in a
              second! Be ready to meet your new "friends"! Don't forget to wave
              at them!
            </p>
          </div>
          <Grid container spacing={4} className="d-flex align-items-center">
            <Grid item xs={6}>
              <Card className="card-box border-2 border-first mb-4">
                <div className="card-body px-5 pb-5 pt-4 text-center">
                  <h3 className="display-4 my-4 font-weight-bold text-first">
                    Web Development
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
                        icon={['fas', 'file-code']}
                        className="text-success mr-2"
                      />
                      Front end development!
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'server']}
                        className="text-success mr-2"
                      />
                      Server and hosting!
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'microchip']}
                        className="text-success mr-2"
                      />
                      Ultimit "Geek" Squad
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'user-plus']}
                        className="text-success mr-2"
                      />
                      Future Collaboration!
                    </li>
                  </ul>
                  <Link to="/Ide">
                    <Button size="large" variant="contained" color="primary">
                      Start!
                    </Button>
                  </Link>
                </div>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className="mb-4">
                <div className="card-body px-4 pb-4 pt-3 text-center">
                  <h3 className="display-4 my-4 font-weight-bold text-warning">
                    Algorithms
                  </h3>
                  <div className="bg-neutral-warning p-3 rounded mb-4">
                    <span className="display-2 font-weight-bold">
                      <FontAwesomeIcon
                        icon={['fas', 'clock']}
                        className="text-warning mr-2"
                      />
                      45
                    </span>
                    <small className="text-uppercase text-black-50">min</small>
                  </div>
                  <ul className="list-unstyled text-lg-left mb-4 font-weight-bold font-size-sm">
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'brain']}
                        className="text-success mr-2"
                      />
                      Pure genius?
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'code']}
                        className="text-success mr-2"
                      />
                      Algorithms and data structures!
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'comments']}
                        className="text-success mr-2"
                      />
                      Code discussions!
                    </li>
                    <li className="px-4 py-2">
                      <FontAwesomeIcon
                        icon={['fas', 'question']}
                        className="text-success mr-2"
                      />
                      Topnotch Problems
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
