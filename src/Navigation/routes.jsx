import AdminAction from "../pages/AdminAction/AdminAction"
import CarView from "../pages/CarView/CarView"
import Customers from "../pages/Customers/Customers";

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PersonIcon from '@mui/icons-material/Person';


const routes=[
    {
        name:"Admin Action",
        key:'adminaction',
        path:'/adminactiion',
        component:<AdminAction/>,
         icon:<AdminPanelSettingsIcon/>
    },
    {
        name:"Car View",
        key:'carview',
        path:'/carview',
        component:<CarView/>,
        icon:<TimeToLeaveIcon/>
       
    },
    {
        name:"Customers",
        key:'customerview',
        path:'/customerview',
        component:<Customers/>,
        icon:<PersonIcon/>
       
    },
  
]
export default routes