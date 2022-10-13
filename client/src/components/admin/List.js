import "./List.css"
import Sidebar from "../../components/admin/sidebar.js";
import Datatable from "../../components/admin/Datatable.js";


const List =()=>{
    return(
        <div className="list">
            <Sidebar />
            <div className="containerList">
                
                <Datatable/>
            </div>
        </div>
    )
}
export default List