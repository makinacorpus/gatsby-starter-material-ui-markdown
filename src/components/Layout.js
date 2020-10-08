import React from 'react';
import clsx from 'clsx';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {},
});

const Layout = ({ children, className, title = '', ...rest }) => {
  const classes = useStyles();

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'fr' }}
        title={title}
        titleTemplate="%s | OutdoorGeovision"
      />

      <main
        className={clsx(classes.main, className)}
        {...rest}
      >
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
