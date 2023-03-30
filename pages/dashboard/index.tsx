import Header from "@/component/common/Header"
import Dashboard from "@/component/pageComponent/dashboard"
import { FC } from "react"

const DashboardPage:FC<{}>=()=>{
    return(
        <>
        <Header/>
        <Dashboard/>
        </>
    )
}
export default DashboardPage