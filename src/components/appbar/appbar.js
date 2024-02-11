import React from 'react';
import { connect } from 'react-redux';

import {
    AppBar,
    Typography,
    Toolbar,
    IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import pkg from '../../../package.json';

import './appbar.css';
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 55,
    },
}));

const Bar = _props => {
    return (
        <div>
            <AppBar
                position="relative"
                sx={{ zIndex: 1 }}
                elevation={4}>
                <StyledToolbar>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, alignSelf: 'center' }}>
                        Markdown to Medium
                    </Typography>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="code-appbar"
                        aria-haspopup="true"
                        color="inherit">
                        <a
                            href={pkg.repository.url}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="link">
                            <GitHubIcon sx={{ fontSize: '35px' }} />
                        </a>
                    </IconButton>
                </StyledToolbar>
            </AppBar>
        </div>
    );
};

export default connect(state => ({
    menuactive: state.menuactive,
}))(Bar);
