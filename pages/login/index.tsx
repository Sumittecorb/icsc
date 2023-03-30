import Footer from "@/component/common/Footer"
import Login from "@/component/pageComponent/login"
import { Box } from "@mui/material"
import { FC } from "react"

const LoginPage: FC<{}> = () => {

    return (
        <Box>
            <Login />
            <Footer />
        </Box>
    )
}
export default LoginPage