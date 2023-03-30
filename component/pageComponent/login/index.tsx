import { Box, Button, FormControl, FormControlLabel, Input, InputBase, InputLabel, Link, styled, Switch, SwitchProps, Typography } from "@mui/material"
import { FC } from "react"
const BootstrapInput = styled(InputBase)(({ }) => ({
    'label + &': {
        marginTop: '20px',
    },
    '& .MuiInputBase-input': {
        borderRadius: 8,
        position: 'relative',
        backgroundColor: 'transparent',
        width: '100%',
        padding: '10px 12px',
        border: '2px solid #474299',
        opacity: '1',
        font: '600 14px/40px Montserrat',
        color: '#141e4e',
        // transition: theme.transitions.create([
        //     'border-color',
        //     'background-color',
        //     'box-shadow',
        // ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'Montserrat'
        ].join(','),
        '&:focus': {
            boxShadow: `0 0 0 0.01rem`,
            border: '2px solid #474299',
            borderRadius: 8,
        },
    },
}));
const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 39,
    height: 24,
    padding: 0,
    border: '1px solid #322da3',
    borderRadius: '38px',
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: 'transparent',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 17,
        height: 17,
        backgroundColor: '#141e4e !important',
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: 'transparent',
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));
const Login: FC<{}> = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                margin: '0 auto',
                position: 'relative',
                background: 'url(../images/AuthBackground.png)',
                backgroundSize: 'cover',
            }}>
            <Button
                sx={{
                    font: "500 16px/25px Montserrat",
                    color: "#83c0ca",
                    opacity: "1",
                    display: 'block',
                    textAlign: "center",
                    zIndex: "1",
                    background: "transparent",
                    border: '2px solid #83c0ca',
                    height: "52px",
                    borderRadius: "25px",
                    boxShadow: '0 10px 20px #00000026',
                    width: 'fit - content',
                    margin: '20px 20px 0 0',
                    float: 'right',
                    padding: '0 20px',
                    "&:hover": {
                        background: "#83c0ca",
                        color: "#fff",
                    },
                }}
                variant="contained"
            >
                Booth Packages
            </Button>
            <Box
                sx={{
                    height: 'fit-content',
                    maxWidth: '44vw',
                    zIndex: '9',
                    boxShadow: ' 0 30px 40px #0000001a',
                    borderRadius: '30px',
                    position: 'absolute',
                    background: '#fff',
                    padding: '15px 33px 25px',
                    transform: 'translate(-50%,-31%)!important',
                    left: ' 50%!important',
                    top: '31%!important',
                    minWidth: '450px',
                }}>
                <Box
                    sx={{
                        margin: '10px auto',
                        overflow: 'hidden',
                        width: '115px',
                        height: '80px',
                    }}>
                    <img src="/images/logo.svg" />
                </Box>
                <Box sx={{
                    width: '100%'
                }}>
                    <FormControl
                        variant="standard"
                        sx={{
                            width: '100%',
                            margin: '5px 0 10px',
                        }}>
                        <InputLabel
                            htmlFor="bootstrap-input"
                            sx={{
                                textAlign: 'left',
                                letterSpacing: '.75px',
                                color: '#474299',
                                opacity: '1',
                                font: ' 600 12px/15px Montserrat',
                                display: 'block',
                            }}>
                            Email
                        </InputLabel>
                        <BootstrapInput
                            defaultValue="Email"
                            id="bootstrap-input" />
                    </FormControl>
                    <FormControl
                        variant="standard"
                        sx={{
                            width: '100%',
                            margin: '5px 0 10px',
                        }}>
                        <InputLabel
                            htmlFor="bootstrap-input"
                            sx={{
                                textAlign: 'left',
                                letterSpacing: '.75px',
                                color: '#474299',
                                opacity: '1',
                                font: ' 600 12px/15px Montserrat',
                                display: 'block',
                            }}>
                            Password
                        </InputLabel>
                        <BootstrapInput
                            defaultValue="Password"
                            id="bootstrap-input" />
                        <img src="/images/hide.svg" alt="password"
                            style={{
                                position: 'absolute',
                                right: '17px',
                                top: '38px',
                                cursor: 'pointer',
                            }}
                        />
                    </FormControl>
                    <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        label="Remember me?"
                        sx={{
                            color: '#474299',
                            font: '600 12px/15px Montserrat',
                            width: '100%',
                            display: 'flex',
                            marginTop: '10px',
                        }}
                    />
                    <Button
                        sx={{
                            font: "500 16px/25px Montserrat",
                            color: "#fff",
                            opacity: "1",
                            display: 'block',
                            marginBottom: {
                                xs: "15px !important",
                                md: "15px !important",
                            },
                            textAlign: "center",
                            zIndex: "1",
                            marginTop: "15px !important",
                            background: "#83c0ca",
                            width: "100%",
                            height: "52px",
                            borderRadius: "25px",
                            padding: "6px 1px",
                            boxShadow: '0 10px 20px #00000026',
                            "&:hover": {
                                background: "#83c0ca",
                            },
                        }}
                        variant="contained"
                    >
                        Login
                    </Button>
                </Box>
                <Box
                    sx={{
                        textAlign: 'center',
                        margin: '30px auto 0',
                        borderTop: '1px solid #ddd',
                        padding: '22px 0 0',
                        width: '80%',
                    }}>
                    <Link
                        underline="none"
                        sx={{
                            letterSpacing: '.7px',
                            color: '#474299',
                            opacity: 1,
                            font: '500 13px/20px Montserrat',
                        }}
                        href="#"
                    >
                        <img src="/images/forgotpassword.svg"
                            style={{
                                marginRight: '8px',
                            }} />
                        Forget Password?</Link>
                </Box>
            </Box>
        </Box>
    )
}
export default Login