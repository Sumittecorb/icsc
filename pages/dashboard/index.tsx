import Footer from "@/component/common/Footer"
import Header from "@/component/common/Header"
import Dashboard from "@/component/pageComponent/dashboard"
import { FC } from "react"

const DashboardPage:FC<{}>=()=>{
    return(
        <>
        <Header/>
        <Dashboard/>
        <Footer/>
        </>
    )
}
export default DashboardPage