import { FC } from "react"
import { Box, Link, Typography } from "@mui/material"
const Exhibitor: FC<{}> = () => {
    return (
        <Box
            sx={{
                background: '#f4f6f8',
                boxShadow: '0 20px 50px #00000040',
                opacity: 1,
                borderRadius: '30px',
                padding: '15px',
                marginTop: '30px',
                position: 'relative', 
                width: '100%',
            }}>
            <Typography
                variant="h4"
                sx={{
                    textShadow: '0 7px 13px #0000001a',
                    marginBottom: '0',
                    font: '500 20px/50px Montserrat',
                    height: '41px',
                    textAlign: 'left',
                    letterSpacing: '.5px',
                    color: '#474299',
                    opacity: '1',
                }}>
                Exhibitor Resources
            </Typography>
            <Typography
                sx={{

                    display: 'flex',
                    marginBottom: '17px',
                    font: '400 13px/18px Montserrat',
                    letterSpacing: '.17px',
                    color: '#707070',
                    textShadow: '0 7px 13px #0000001a',
                    opacity: '1', 
                }}>
                Exhibitor tools, tips and guides necessary to have a successfull show.
            </Typography>
            <Box sx={{

            }}>
                <Link
                    underline="none"
                    sx={{
                        letterSpacing: '.44px',
                        color: '#474299',
                        opacity: 1,
                        font: ' 400 14px/18px Montserrat',
                        position: 'relative',
                        marginRight: '20px',

                    }}
                    href="#"
                >
                    Learn more about GES Resources
                    <img
                        src="/images/saftyIcon.svg"
                        style={{
                            marginLeft: '10px'
                        }} /></Link>

            </Box>
        </Box >
    )
}
export default Exhibitor