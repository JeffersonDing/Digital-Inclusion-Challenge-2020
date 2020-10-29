import React, { Fragment, Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Container,
  InputAdornment,
  IconButton,
  Card,
  CardContent,
  Button,
  Tooltip,
  TextField
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg-first py-5">
          <div>
            <div className="divider border-2 d-sm-none d-md-block rounded-circle border-white bg-white opacity-1 mx-auto mb-4 mt-5 w-50" />
            <div className="d-flex justify-content-center">
              <Tooltip arrow title="LinkdIn">
                <IconButton
                  className="nav-link text-white-50"
                  href="https://www.linkedin.com/in/j3of0/"
                  rel="nofollow"
                  target="_blank">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'linkedin']}
                      className="font-size-xxl"
                    />
                  </span>
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Github">
                <IconButton
                  className="nav-link text-white-50"
                  href="https://github.com/JeffersonUCC/Digital-Inclusion-Challenge-2020"
                  rel="nofollow"
                  target="_blank">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fab', 'github']}
                      className="font-size-xxl"
                    />
                  </span>
                </IconButton>
              </Tooltip>
            </div>
            <div className="divider border-2 d-sm-none d-md-block rounded-circle border-white bg-white opacity-1 mx-auto my-4 w-50" />
            <Container maxWidth="md" className="text-center">
              <Card className="mt-5 card-box">
                <CardContent className="p-3">
                  <div className="text-black">
                    <h1 className="display-4 mb-3 font-weight-bold">
                      Newsletter updates
                    </h1>
                    <p className="font-size-md mb-4 text-black-50">
                      Subscribe to our newsletter to be the first to find out
                      when we offer promotions or discounts for our products.
                    </p>
                    <div id="mc_embed_signup">
                      <form
                        className="validate"
                        id="mc-embedded-subscribe-form"
                        method="post"
                        name="mc-embedded-subscribe-form"
                        noValidate
                        target="_blank">
                        <Grid container spacing={4}>
                          <Grid xs={8} item>
                            <div id="mc_embed_signup_scroll">
                              <div className="mc-field-group">
                                <TextField
                                  fullWidth
                                  className="mt-0"
                                  margin="dense"
                                  id="mce-EMAIL"
                                  name="EMAIL"
                                  type="email"
                                  variant="outlined"
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <MailOutlineTwoToneIcon />
                                      </InputAdornment>
                                    )
                                  }}
                                />
                              </div>
                              <div className="clear" id="mce-responses">
                                <div
                                  className="response"
                                  id="mce-Errorresponse"
                                  style={{ display: 'none' }}
                                />
                                <div
                                  className="response"
                                  id="mce-success-response"
                                  style={{ display: 'none' }}
                                />
                              </div>
                              <div
                                aria-hidden="true"
                                style={{
                                  position: 'absolute',
                                  left: '-5000px'
                                }}>
                                <input
                                  name="b_3ebc33a3d37f2278158d74721_a122e673aa"
                                  tabIndex="-1"
                                  type="text"
                                />
                              </div>
                            </div>
                          </Grid>
                          <Grid xs={4} item>
                            <Button
                              className="w-100"
                              color="primary"
                              variant="contained"
                              id="mc-embedded-subscribe"
                              name="subscribe"
                              type="submit">
                              <span className="btn-wrapper--label">Signup</span>
                            </Button>
                          </Grid>
                        </Grid>
                      </form>
                    </div>
                    <small className="text-black-50 d-block pt-3">
                      We promise not to spam your inbox. We also hate spam!
                    </small>
                  </div>
                </CardContent>
              </Card>
            </Container>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
