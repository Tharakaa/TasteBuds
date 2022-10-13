import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom"

const Sidebar =() =>{

return(
    <div className="sidebar">

{/* <div className="top"> 
<span className="logo">TasteBuds </span>
</div> */}
{/* <hr/> */}

<div className="center">
    <ul>
        <p className="title">MAIN</p>
        <li><DashboardIcon className="icon"/> <span>Dashboard</span> </li>
        <p className="title">LISTS</p>
        <Link to="/admin/Datatable" style={{ textDecoration:"none" }}>
        <li><PersonIcon className="icon"/><span>Users</span></li>
        </Link>
        <Link to="/admin/add-product" style={{ textDecoration:"none" }}>
        <li><ProductionQuantityLimitsIcon className="icon"/><span>Products</span></li>
        </Link>
        <li><ListAltIcon className="icon"/><span>Orders</span></li>
        <li><LocalShippingIcon className="icon"/><span>Delivery</span></li>
        <p className="title">USEFUL</p>
        <li><QueryStatsIcon className="icon"/><span>Stats</span></li>
        <li><NotificationsIcon className="icon"/><span>Notification</span></li>
        <p className="title">SERVICE</p>
        <li><HealthAndSafetyIcon className="icon"/><span>System Health</span></li>
        <li><AddToQueueIcon className="icon"/><span>Logs</span></li>
        <li><SettingsIcon className="icon"/><span>Settings</span></li>
        <p className="title">USER</p>
        <li><AccountBoxIcon className="icon"/><span>Profile</span></li>
        <li><LogoutIcon className="icon"/><span>Logout</span></li>
    </ul>
</div>

    </div>
)

}
export default Sidebar