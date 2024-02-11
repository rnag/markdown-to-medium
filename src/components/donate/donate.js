import * as React from 'react';
import {
    Alert,
    Box,
    Button,
    Collapse,
    IconButton,
} from '@mui/material';
import { FaRegHandPointRight as PointRight } from 'react-icons/fa';
import {
    Close,
    VolunteerActivismTwoTone as Heart,
    CoffeeTwoTone as Coffee,
    PaymentsTwoTone as PayPal,
} from '@mui/icons-material';
import pkg from '../../../package.json';

export default function DonateAlerts() {
    const [open, setOpen] = React.useState(true);

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert
                    severity="success"
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}>
                            <Close fontSize="inherit" />
                        </IconButton>
                    }>
                    <Heart
                        sx={{
                            marginLeft: '5px',
                            marginBottom: '12px',
                            marginRight: '7px',
                            verticalAlign: 'middle',
                            fontSize: '25px',
                        }}
                    />
                    <strong style={{ fontSize: '15px' }}>
                        If this project has helped you, please
                        consider making a donation
                    </strong>
                    <PointRight
                        style={{
                            fontSize: '21px',
                            marginLeft: '10px',
                            marginBottom: '5px',
                            marginRight: '30px',
                            verticalAlign: 'middle',
                        }}></PointRight>
                    <Button
                        size="large"
                        underline="hover"
                        sx={{ alignItems: 'center' }}
                        color="inherit"
                        href={pkg.links.bmac}>
                        <Coffee
                            sx={{
                                mr: 0.7,
                                verticalAlign: 'middle',
                            }}
                        />
                        Buy Me a Coffee
                    </Button>
                    <Button
                        size="large"
                        underline="hover"
                        sx={{ ml: 1 }}
                        color="inherit"
                        href={pkg.links.paypal}>
                        <PayPal
                            sx={{
                                mr: 0.7,
                                fontSize: '25px',
                                verticalAlign: 'middle',
                            }}
                        />
                        PayPal
                    </Button>
                </Alert>
            </Collapse>
        </Box>
    );
}
