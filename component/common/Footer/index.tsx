import { Box, Grid, Link, Stack, Typography } from "@mui/material"
import { FC } from "react"

const Footer: FC<{}> = () => {
    return (
        <Box
            sx={{
                background: '#fff',
                boxShadow: '0 20px 70px #0000001a',
                height: '60px',
                position: 'fixed',
                width: '100%',
                bottom: '0',
                zIndex: '9999',
                padding: '18px 30px',
                textAlign: 'left',
                letterSpacing: '.8px',
                color: '#707070',
                opacity: 1,
                font: '400 14px/29px Montserrat',
            }}>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
            >
                <Grid item xs={8}>
                    <Box sx={{
                        display: 'inline-block',
                        float: 'left',
                    }}>
                        <img src="/images/GES.png"
                            style={{
                                width: '89px',
                                marginTop: '-3px',
                            }} />
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-block',
                            marginLeft: '15px',
                        }}
                    >
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
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
                                Developed by GES © 2023 All Rights Reserved
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            textAlign: 'center'
                        }}>
                        <Link
                            underline="none"
                            sx={{
                                letterSpacing: '.7px',
                                color: '#474299',
                                opacity: 1,
                                font: ' 400 14px/18px Montserrat',
                                position:'relative',
                                marginRight:'20px',

                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    height: '24px',
                                    width: '2px',
                                    backgroundColor: '#ddddddbf',
                                    right: '-10px',
                                    top: '-5px',
                                }
                            }}
                            href="#"
                        >
                            Terms & Conditions</Link>
                        <Link
                            underline="none"
                            sx={{
                                letterSpacing: '.7px',
                                color: '#474299',
                                opacity: 1,
                                font: ' 400 14px/18px Montserrat',
                            }}
                            href="#"
                        >
                            Privacy Policy</Link>
                    </Box>

                </Grid>
            </Grid>
        </Box >
    )
}
export default Footer