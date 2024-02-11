import React from 'react';
import { connect } from 'react-redux';


import {AppBar, Typography, Toolbar, Box} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({

    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 55,
    },
}));

const Bar = props => {

    return (
      <div>
      <AppBar
          position="relative"
          sx={{ zIndex: 1 }}
          elevation={4}
      >
          <StyledToolbar>

              <Typography

              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'center' }}
          >
              Markdown to Medium
          </Typography>
          </StyledToolbar>
      </AppBar>
      </div>
  );
};

export default connect(state => ({
  menuactive: state.menuactive
}))(Bar);
