import "./Feartured.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const Feartured =() => {
return(
    <div className="feartured">
        <div className="topFeartured">
            <h1 className="titleFeartured">Total Revenue</h1>
            <MoreVertIcon fontsize="small"/>
        </div>
        <div className="bottomFeartured">
            <div className="fearturedChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="titleSales">Total Sales Made Today</p>
            <p className="amountSales">$40</p>
            <p className="desSales">Description about sales</p>

            <div className="summary">
                <div className="summaryItem">
                    <div className="itemTitle"> Target</div>
                    <div className="itemResults negetive">
                        <KeyboardArrowDownIcon fontSize="small"/>
                        <div className="resultsAmount">$12.4</div>
                    </div>


                </div>
                <div className="summaryItem">
                    <div className="itemTitle"> Last Week</div>
                    <div className="itemResults positive">
                        <KeyboardArrowUpIcon fontSize="small"/>
                        <div className="resultsAmount">$12.4</div>
                    </div>

                </div>
                <div className="summaryItem">
                    <div className="itemTitle"> Last Month</div>
                    <div className="itemResults positive">
                        <KeyboardArrowUpIcon fontSize="small"/>
                        <div className="resultsAmount">$12.4</div>
                    </div>
                </div>


            </div>
        </div>
    </div>
)
}
export default Feartured