import React from 'react';
import clsx from 'clsx';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Footer from './Footer';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    '& > :last-child': {
      marginTop: 'auto',
    },
  },
  main: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
});

const Layout = ({ className, title = '', ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Helmet
        htmlAttributes={{ lang: 'fr' }}
        title={title}
        titleTemplate="%s | OutdoorGeovision"
      />
      <header>
        header
      </header>

      <Container
        component="main"
        className={clsx(classes.main, className)}
        {...rest}
      />

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
