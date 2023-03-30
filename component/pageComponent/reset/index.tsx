import { Box, Button, FormControl, InputBase, InputLabel, Stack, styled, Typography } from "@mui/material"
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
const Reset: FC<{}> = () => {
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
                        width: '80px',
                        height: '80px',
                    }}>
                    <img
                        style={{
                            width: '100%'
                        }}
                        src="/images/resetpassword.svg"
                    />
                </Box>
                <Box
                    sx={{
                        width: '100%'
                    }}
                >
                    <Stack alignItems="center" justifyContent="center" spacing={1}>
                        <Typography
                            gutterBottom
                            variant="h2"
                            // color={theme.palette.text[""]}
                            sx={{
                                font: {
                                    xs: "600 20px/24px Montserrat",
                                    md: "600 20px/24px Montserrat",
                                },
                                letterSpacing: "0px",
                                color: '#474299',
                                opacity: "1",
                                marginBottom: "0px",
                                zIndex: "1",
                                textAlign: "center",
                            }}
                        >
                            Reset Password
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h2"
                            // color={theme.palette.text[""]}
                            sx={{
                                font: {
                                    xs: "400 14px/18px Montserrat",
                                    md: "400 14px/18px Montserrat",
                                },
                                letterSpacing: "0px",
                                color: '#707070',
                                opacity: "1",
                                marginBottom: "10px !important",
                                zIndex: "1",
                                textAlign: "center",
                            }}
                        >
                            Enter your email address and we'll send
                            you a temporary password.
                        </Typography>
                    </Stack>
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
                            Email Address
                        </InputLabel>
                        <BootstrapInput
                            defaultValue="Email"
                            id="email" />
                    </FormControl>
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
                            marginTop: "20px !important",
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
                       Reset
                    </Button>
                </Box>

            </Box>
        </Box>
    )
}
export default Reset