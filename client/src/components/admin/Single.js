import "./Single.css"
import Sidebar from "../../components/admin/sidebar.js";
import Chart from "../../components/admin/Chart.js";
import Table from "../../components/admin/Table.js";

const Single =() => {
    return(
      <div className="single">
        <Sidebar/>
        <div className="singleContainer">
            <div className="singleTop">
                <div className="singleLeft">
                    <div className="editButton">Edit</div>
                    <h1 className="singleTitle">Information</h1>
                    <div className="singleItem">
                        <img
                        src="https://static.remove.bg/remove-bg-web/bf2ec228bc55da2aaa8a6978c6fe13e205c3849c/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
                        alt=""
                        className="itemImg"
                        />
                        <div className="details">
                            <h2 className="itemTitle">Jane Doe</h2>
                            <div className="detailItem">
                                <span className="itemKey">Email : </span>
                                <span className="itemValue">Jane@com</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone : </span>
                                <span className="itemValue">0714266589</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address : </span>
                                <span className="itemValue">No : 52 park lane,colombo</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Province : </span>
                                <span className="itemValue">Western Province</span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="singleRight">
                    <Chart aspect={3/1} title="User Spending (Last six months)"/>
                </div>
            </div>
            <div className="singleBottom">
            <h1 className="singleTitle">Last Transactions </h1>

                <Table/>
            </div>
        </div>
      </div>
    )
}
export default Single