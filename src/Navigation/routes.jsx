import AdminAction from "../pages/AdminAction/AdminAction"
import CarView from "../pages/CarView/CarView"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';

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
  
]
export default routes