import Sidebar from "../../components/admin/sidebar.js";
//import Navbar from "../../components/admin/Navbar.js";
import "./Dashboard.css"
import Widget from "./widgets.js";
import Feartured from "../../components/admin/Feartured.js";
import Chart from "../../components/admin/Chart.js";
import Table from "./Table.js";

const Dashboard = () => {
    return(
    <div className ="dashboard">
        <Sidebar />
        <div className="dashbordContainer">
            <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="earning"/>
                <Widget type="balance"/>
            </div>
            <div className="charts">
                   <Feartured/>
                   <Chart title="Last six months (Revenue)" aspect={2/1}/>
            </div>
            <div className="listContainer">
                <div className="listTitle">Latest Transactions</div>
                <Table/>
            </div>
        </div>
        </div>
    );
}

export default Dashboard;