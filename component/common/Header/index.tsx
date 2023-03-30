import { Box, Link, List, ListItem, Typography } from "@mui/material"
import { FC } from "react"

const Header: FC<{}> = () => {
    return (
        <>
            <Box
                sx={{
                    background: ' transparent linear-gradient(180deg,#312e6a,#191735)',
                    transform: 'translateX(0)',
                    marginTop: '108px',
                    paddingTop: '20px',
                    float: 'left!important',
                   
                }}>
                <List sx={{
                    paddingLeft: '0',
                    listStyle: 'none',
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'transparent',
                    height:'100vh',
                }}>
                    <ListItem
                        sx={{
                            width: '100%',
                            height: '46px',
                            position: 'relative',
                            marginBottom: '5px',
                        }}>
                        <Link
                            underline="none"
                            sx={{
                                letterSpacing: '1.5px',
                                textDecoration: 'none',
                                display: 'block',
                                padding: '13px 33px',
                                color: ' #eee',
                                opacity: '1',
                                font: '600 15px/15px Montserrat',
                            }}
                            href="#"
                        >
                            <img
                                src="/images/dashboard.svg"
                                alt=""
                                style={{
                                    float: 'left',
                                    marginRight: '30px',
                                    marginTop: '-3px',
                                }} />
                            Dashboard</Link>
                    </ListItem>
                    <ListItem
                        sx={{
                            width: '100%',
                            height: '46px',
                            position: 'relative',
                            marginBottom: '5px',
                        }}>
                        <Link
                            underline="none"
                            sx={{
                                letterSpacing: '1.5px',
                                textDecoration: 'none',
                                display: 'block',
                                padding: '13px 33px',
                                color: ' #eee',
                                opacity: '1',
                                font: '600 15px/15px Montserrat',
                            }}
                            href="#"
                        >
                            <img
                                src="/images/graphictemplate.svg"
                                alt=""
                                style={{
                                    float: 'left',
                                    marginRight: '30px',
                                    marginTop: '-3px',
                                }} />
                            Graphic Templates
                        </Link>
                    </ListItem>
                    <ListItem
                        sx={{
                            width: '100%',
                            height: '46px',
                            position: 'relative',
                            marginBottom: '5px',
                        }}>
                        <Link
                            underline="none"
                            sx={{
                                letterSpacing: '1.5px',
                                textDecoration: 'none',
                                display: 'block',
                                padding: '13px 33px',
                                color: ' #eee',
                                opacity: '1',
                                font: '600 15px/15px Montserrat',
                            }}
                            href="#"
                        >
                            <img
                                src="/images/designinspiration.svg"
                                alt=""
                                style={{
                                    float: 'left',
                                    marginRight: '30px',
                                    marginTop: '-3px',
                                }} />
                            Booth Packages
                        </Link>
                    </ListItem>
                    <ListItem
                        sx={{
                            width: '100%',
                            height: '46px',
                            position: 'relative',
                            marginBottom: '5px',
                        }}>
                        <Link
                            underline="none"
                            sx={{
                                letterSpacing: '1.5px',
                                textDecoration: 'none',
                                display: 'block',
                                padding: '13px 33px',
                                color: ' #eee',
                                opacity: '1',
                                font: '600 15px/15px Montserrat',
                            }}
                            href="#"
                        >
                            <img
                                src="/images/fileupload.svg"
                                alt=""
                                style={{
                                    float: 'left',
                                    marginRight: '30px',
                                    marginTop: '-3px',
                                }} />
                            File Upload
                        </Link>
                    </ListItem>
                    <ListItem
                        sx={{
                            width: '100%',
                            height: '46px',
                            position: 'relative',
                            marginBottom: '5px',
                        }}>
                        <Link
                            underline="none"
                            sx={{
                                letterSpacing: '1.5px',
                                textDecoration: 'none',
                                display: 'block',
                                padding: '13px 33px',
                                color: ' #eee',
                                opacity: '1',
                                font: '600 15px/15px Montserrat',
                            }}
                            href="#"
                        >
                            <img
                                src="/images/designreview.svg"
                                alt=""
                                style={{
                                    float: 'left',
                                    marginRight: '30px',
                                    marginTop: '-3px',
                                }} />
                            Design Review
                        </Link>
                    </ListItem>
                    <ListItem
                        sx={{
                            width: '100%',
                            height: '46px',
                            position: 'relative',
                            marginBottom: '5px',
                        }}>
                        <Link
                            underline="none"
                            sx={{
                                letterSpacing: '1.5px',
                                textDecoration: 'none',
                                display: 'block',
                                padding: '13px 33px',
                                color: ' #eee',
                                opacity: '1',
                                font: '600 15px/15px Montserrat',
                            }}
                            href="#"
                        >
                            <img
                                src="/images/inbox.svg"
                                alt=""
                                style={{
                                    float: 'left',
                                    marginRight: '30px',
                                    marginTop: '-3px',
                                }} />
                            Inbox
                        </Link>
                    </ListItem>
                    <ListItem
                        sx={{
                            width: '100%',
                            height: '46px',
                            position: 'relative',
                            marginBottom: '5px',
                        }}>
                        <Link
                            underline="none"
                            sx={{
                                letterSpacing: '1.5px',
                                textDecoration: 'none',
                                display: 'block',
                                padding: '13px 33px',
                                color: ' #eee',
                                opacity: '1',
                                font: '600 15px/15px Montserrat',
                            }}
                            href="#"
                        >
                            <img
                                src="/images/setting.svg"
                                alt=""
                                style={{
                                    float: 'left',
                                    marginRight: '30px',
                                    marginTop: '-3px',
                                }} />
                            Settings
                        </Link>
                    </ListItem>
                </List>
            </Box>
            <Box sx={{
                background: '#fff',
                boxShadow: '0 20px 70px #0000001a',
                padding: '0 1rem 0 0',
                position: 'fixed',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                zIndex: '99',
            }}>
                <Box sx={{
                    width: '295px',
                    height: '120px',
                    padding: '15px 8px',
                    display: 'inline-block',
                    borderBottom: '1px solid #141e4e',
                    background: '#141e4e',
                    textAlign: 'center',
                }}>
                    <img
                        width="120"
                        src="/images/icsclogo.svg"
                        alt=""
                        style={{ cursor: 'pointer' }} />
                </Box>
                <Box>
                    <Typography
                        gutterBottom
                        variant="h2"
                        // color={theme.palette.text[""]}
                        sx={{

                            opacity: "1",
                            marginBottom: "0px",
                            letterSpacing: '.8px',
                            color: '#222',
                            font: ' 500 26px/15px Montserrat',
                            marginLeft: '35px',
                            textTransform: 'capitalize',
                            padding: '0px',
                        }}
                    >
                        Dashboard
                    </Typography>
                </Box>
            </Box >
        </>
    )
}
export default Header