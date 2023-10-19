import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';
import '../../styles/layout/NavBar.css';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar style={{background: '#0093f0eb'}}>
          <Toolbar>
            <Typography style={{fontWeight: 'bold', textTransform: 'uppercase'}} variant="h5" component="div">
              Pavitos
            </Typography>
            <div className='container-menu'>
              <ul className='menu-nav'>
                <li> <Link to={'/'}> Inicio </Link> </li>
                <li> <Link to={'/'}> Ayuda </Link> </li>
              </ul>
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
    </React.Fragment>
  );
}