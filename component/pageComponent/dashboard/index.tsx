import { Box, Grid } from "@mui/material"
import { FC } from "react"
import Exhibitor from "./exhibitor"
import InfoCenter from "./infoCenter"
import MyTask from "./myTask"
import Structure from "./structure"

const Dashboard: FC<{}> = () => {
    return (
        <Box sx={{
            transition: 'all .3s ease-in-out',
            background: '#e9ecef',
            padding: '120px 40px 127px',
            width: 'calc(100% - 296px)',
            marginLeft: '296px',
        }}>
            <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
            >
                <Grid item md={6}
                    xs={12}
                    sx={{
                        paddingTop: {
                            xs: '0px !important',
                            md: '32px !important'
                        }
                    }}
                >
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={2}
                    >
                        <Grid item md={5}
                            xs={12}
                        >
                            <Structure />
                        </Grid>
                        <Grid item md={7}
                            xs={12}
                        >
                            <MyTask />
                        </Grid>
                        <Grid item md={12}
                            xs={12}
                        >
                            <Exhibitor />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item md={6}
                    xs={12}
                    sx={{
                        paddingTop: {
                            xs: '0px !important',
                            md: '32px !important'
                        }
                    }}
                >
                    <InfoCenter />
                </Grid>
            </Grid>
        </Box>
    )
}
export default Dashboard