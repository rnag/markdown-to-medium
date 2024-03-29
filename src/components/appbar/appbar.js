import React from 'react';
import { connect } from 'react-redux';

import {
    AppBar,
    Typography,
    Toolbar,
    IconButton,
} from '@mui/material';
import { FaMedium } from 'react-icons/fa6';
import { styled } from '@mui/material/styles';
import { BugReport, GitHub } from '@mui/icons-material';
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
                        aria-label="link to code"
                        aria-controls="code-appbar"
                        aria-haspopup="true"
                        color="inherit">
                        <a
                            href={pkg.repository.url}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="link">
                            <GitHub sx={{ fontSize: '35px' }} />
                        </a>
                    </IconButton>
                    <IconButton
                        aria-label="link to code"
                        aria-controls="code-appbar"
                        aria-haspopup="true"
                        sx={{ marginLeft: '10px' }}
                        color="inherit">
                        <a
                            href={`${pkg.repository.url.replace(
                                '.git',
                                ''
                            )}/issues/new/choose`}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="link">
                            <BugReport sx={{ fontSize: '37px' }} />
                            {/*https://medium.com/me/stories*/}
                        </a>
                    </IconButton>
                    <IconButton
                        aria-label="link to your medium stories"
                        aria-controls="code-appbar"
                        aria-haspopup="true"
                        sx={{ fontSize: '35px', ml: '10px', mr: -2 }}
                        color="inherit">
                        <a
                            href="https://medium.com/me/stories"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="link">
                            <FaMedium />
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
