import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import ActivityCard from '../webapp-components/ActivityCard';
import Copyright from '../webapp-components/Copyright';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  button: {
    margin: theme.spacing(4)
  }
}));

export default function Activities() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Projects and Activities
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom>
              Projects and Activities
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph>
              Check out our new projects and activities on varous subjects! Find
              a pool and hop in! Meet new students and collaborate and socialyze
              on amazing projects and func activities!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={4} justify="center">
                <Link to="/Community">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}>
                      Community
                    </Button>
                  </Grid>
                </Link>
                <Link to="/SignIn">
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}>
                      My Activities
                    </Button>
                  </Grid>
                </Link>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <ActivityCard
              data={{
                imgurl:
                  'https://cdn.cnn.com/cnnnext/dam/assets/200416164101-3-underscored-creative-writing-lead-super-169.jpg',
                heading: 'Writing',
                content:
                  'Love creative writing? Join and mess around with some sick ideas!',
                to: '/Writing'
              }}
            />
            <ActivityCard
              data={{
                imgurl:
                  'https://www.incimages.com/uploaded_files/image/1920x1080/getty_648521078_2000136020009280129_393608.jpg',
                heading: 'Music',
                content:
                  'Damn, have you ever wanted to drop some sick beats with your friends?'
              }}
            />
            <ActivityCard
              data={{
                imgurl:
                  'https://www.dataiku.com/wp-content/uploads/2019/10/chris-ried-ieic5Tq8YMk-unsplash-1618x1080.jpg',
                heading: 'Coding',
                content: '"Im no hacker, but I do code"',
                to: '/Coding'
              }}
            />
            <ActivityCard
              data={{
                imgurl:
                  'https://portugalinews.eu/wp-content/uploads/2018/09/film.jpg',
                heading: 'Film',
                content: 'Why not try to be the next Leonardo Decaprio?'
              }}
            />
            <ActivityCard
              data={{
                imgurl:
                  'https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg',
                heading: 'Visual Art',
                content: 'Get those creative brain cells to work! '
              }}
            />
            <ActivityCard
              data={{
                imgurl:
                  'https://pro2-bar-s3-cdn-cf1.myportfolio.com/000909172f3cfec3f44bf971f9bfe486/c2a78af4-0920-48f1-9075-74d4e70bcd2f_car_202x158.png?h=2d924768f1f2722149817b3e25befe89',
                heading: 'More Comming Soon...',
                content: 'Many more criterias will be added! Enjoy!'
              }}
            />
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
