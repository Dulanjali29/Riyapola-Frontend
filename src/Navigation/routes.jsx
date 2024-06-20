import AdminAction from "../pages/AdminAction/AdminAction"
import CarView from "../pages/CarView/CarView"
import Customers from "../pages/Customers/Customers";
import Reservation from "../pages/Reservation/Reservation";

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


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
    {
        name:"Reservation",
        key:'reservationview',
        path:'/reservationview',
        component:<Reservation/>,
        icon:<ShoppingCartIcon/>
       
    },
  
]
export default routes