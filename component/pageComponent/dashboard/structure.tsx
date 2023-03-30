import { Box, Typography } from "@mui/material"
import { FC } from "react"
import dashboardData from "../../helpers/data/dashboard.json"
const Structure: FC<{}> = () => {
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
                minHeight: '424px',
                overflowY: 'auto',
                overflowX: 'hidden',
                maxHeight: '425px',
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
                Structures
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
                    width: '181px',
                }}>
                You have ordered the following structures in GES Expresso
            </Typography>
            <Box sx={{

            }}>
                {dashboardData.sturctureData.map((data) => {
                    return (
                        <Box sx={{
                            background: '#0000000d',
                            borderRadius: '9px',
                            width: '100%',
                            padding: '3px 11px',
                            display: 'inline-block',
                            margin: '5px 5px 5px 0',
                            font: '300 10px/29px Montserrat',
                            letterSpacing: '.55px',
                            color: '#222',
                            opacity: '1',
                        }}>
                            {data.title}
                            <Box sx={{
                                display: 'inline - block',
                                minWidth: '20px',
                                height: '20px',
                                background: '#707070',
                                borderRadius: '15px',
                                color: '#fff',
                                lineHeight: '1',
                                border: '1px solid #707070',
                                margin: '5px 1px 0 10px',
                                padding: '0 4px',
                                textAlign: 'center',
                                font: '400 10px/19px Montserrat',
                                float: 'right',
                            }}>
                                {data.count}</Box>
                        </Box>
                    );
                })}

            </Box>
        </Box >
    )
}
export default Structure