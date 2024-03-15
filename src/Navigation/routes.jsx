import AdminAction from "../pages/AdminAction/AdminAction"
import CarView from "../pages/CarView/CarView"

const routes=[
    {
        name:"Car View",
        key:'carview',
        path:'/carview',
        component:<CarView/>,
        // icon:<PersonSearch/>
       
    },
    {
        name:"Admin Action",
        key:'adminaction',
        path:'/adminactiion',
        component:<AdminAction/>,
        // icon:<PersonIcon/>
    },
]
export default routes