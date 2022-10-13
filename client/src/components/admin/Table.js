import "./Table.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const listTable =()=>{
    const rows =[
        {
            id:111,
            product:"AAA",
            customer:"Ann",
            date:"1 May",
            amount: 456,
            method:"Cash on delivery",
            status:"Approved" 
        },
        {
            id:111,
            product:"BBB",
            customer:"Ann",
            date:"1 May",
            amount: 456,
            method:"Cash on delivery",
            status:"Approved"
        },
        {
            id:111,
            product:"BBB",
            
            customer:"Ann",
            date:"1 May",
            amount: 456,
            method:"Cash on delivery",
            status:"Approved"
        },
        {
            id:111,
            product:"CCC",
            customer:"Ann",
            date:"1 May",
            amount: 456,
            method:"Cash on delivery",
            status:"Pending"
        }



    ]
    return(
        <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Tracking ID</TableCell>
              <TableCell className="tableCell">Product</TableCell>
              <TableCell className="tableCell">Customer</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Amount</TableCell>
              <TableCell className="tableCell">Payment Method</TableCell>
              <TableCell className="tableCell">Status</TableCell>


            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}>
                <TableCell >
                  {row.id}
                </TableCell>
                <TableCell className="tableCell" >{row.product}</TableCell>
                <TableCell className="tableCell" >{row.customer}</TableCell>
                <TableCell className="tableCell" >{row.date}</TableCell>
                <TableCell className="tableCell" >{row.amount}</TableCell>
                <TableCell className="tableCell" >{row.method}</TableCell>
                <TableCell className="tableCell" ><span className={`tableStatus ${row.status}`}>{row.status}</span></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
export default listTable