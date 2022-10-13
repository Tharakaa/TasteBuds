import "./Datatable.css"
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'User Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 190,
    renderCell:(params)=>{
      return(
        <>
        <span>{params.row.firstName}</span>
        <span>{params.row.lastName}</span>

        </>
      )
    }
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 190,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
    renderCell:(params) => {
return(
 
  <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
)
    }
  },

];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,email:"Jon@com",status:"active"},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,email:"Cersei@com",status:"pending"},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 ,email:"Jaime@com",status:"passive"},
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16,email:"Arya16@com" ,status:"active"},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null,email:"Daenerys@com",status:"pending" },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 15,email:"Melisandre@com" ,status:"passive"},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44,email:"Ferrara@com" ,status:"active"},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,email:"Rossini@com",status:"pending"},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65,email:"CHarvey@com",status:"passive" },
];

const Datatable = () =>{
  const actionColumn = [
    { field:"action",
      headerName:"Action",
      width:200,
      renderCell:() =>{
        return(
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>

          </div>
        )
      }

    }

  ]
    return(
        <div className="datatable" >
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
   
    )
}
export default Datatable