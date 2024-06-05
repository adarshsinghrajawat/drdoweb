import MaterialTable from "@material-table/core";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles"
import { getData } from "../services/FetchNodeServices";
import { DialerSip } from "@mui/icons-material";
import { postData } from '../services/FetchNodeServices';
import { Grid, Button, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Swal from "sweetalert2";
import books from "../../src/assets/books.jpg"
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
var useStyles = makeStyles({
    reportroot: {
        width: '100vw',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },

    reportbox: {
        width: '60%',
        height: 'auto',
        background: '#f1f2f6',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },

    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    box: {
        width: 500,
        height: 'auto',

        padding: 10,
        margin: 10,
        borderRadius: 10
    },




})

export default function DisplayAllIssue() {
    var classes = useStyles()
    var navigate = useNavigate()

    const [open, setOpen] = useState(false)
    const [issueid,setIssueid]=useState('')
    const[issueCode,setIssueCode]=useState([])
    const [issueDate,setIssueDate]=useState('')
    const [issueTo,setIssueTo]=useState('')
    const [returnDate,setReturnDate]=useState('')
    const [accesionNumber,setAccesionNumber]=useState('')
    const [returnBy,setReturnBy]=useState('')
    const [rby,setRby]=useState('')

    const [errors, setErrors] = useState({})
    const handleError = (error, label) => {
        setErrors((prev) => ({ ...prev, [label]: error }))
    }

    const validation = () => {
        var error = false
        if(issueDate.length==0)
            {error=true
            handleError('Please Input Employee Code...','issueDate')
            }
            if(issueTo.length==0)
            {error=true
            handleError('Please Input Employee Code...','issueTo')
            }
            // if(issueTo.length==0)
            // {error=true
            // handleError('Please Input Employee Name...','employeeName')
            // }
           
            if(returnDate.length==0)
            {error=true
            handleError('Please Input Previous Post...','returnDate')
            }
            if(accesionNumber.length==0)
            {error=true
            handleError('Please Input Promoted Post...','accesionNumber')
            }
            if(returnBy.length==0)
            {error=true
            handleError('Please Input Promotion Date...','returnBy')
            }
            if(rby.length==0)
            {error=true
             handleError('Please Input Promotion Date...','rby')
             }
    
            
            return error
            
        }

        const handleReset=()=>{
            setIssueDate('')
            setIssueTo('')
            returnDate('')
            setAccesionNumber('')
            setReturnBy('')
            setRby('')
            // setPromotedPost('')
            // setPromotionDate('')
        }
    const handleDelete = async (rowData) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            toast: true,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                var result = await postData('employee/delete_issue', { issueid: rowData.issueid })
                if (result.status) {
                    Swal.fire(

                        "Deleted!",
                        "Record has been deleted.",
                        "success"
                    );
                    fetchAllIssue()
                }
                else {
                    Swal.fire(

                        "Deleted!",
                        "Fail to Delete Record",
                        "success"
                    );
                }
            }
        });

    }

    const handleSubmit = async () => {
        var error = validation()
        if (error == false) {

            var body = { issueid:issueid, issuedate:issueDate, issueto:issueTo, returndate:returnDate, accessionnumber:accesionNumber, returnby:returnBy, rby:rby }
            //    var formData=new FormData()
            //    formData.append('employeecode',employeeCode) 
            //    formData.append('employeename',employeeName) 
            //    formData.append('previouspost',previousPost) 
            //    formData.append('promotedpost',promotedPost) 
            //    formData.append('promotiondate',promotionDate) 
            var response = await postData('employee/edit_issue', body)
            if (response.status) {
                Swal.fire({
                    icon: "success",
                    title: "Promotions",
                    text: response.message,
                    toast: true

                })

                fetchAllIssue()
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: response.message,
                    toast: true

                });
            }
        }
    }
    const fetchAllIssue = async () => {
        var response = await getData('employee/display_all_issue')
        setIssueCode(response.data)

    }
    const IssueForm = () => {
        return(
            <div className={useStyles.root}>
                <div className={useStyles.box}>
                 <Grid container spacing={3}>
                   <Grid item xs={6}>
                 
                   <TextField
                    value={issueDate}
                     onFocus={()=>handleError('','issuedate')}
                     error={errors.issueDate}
                     helperText={errors.issueDate}
                    onChange={(event)=>setIssueDate(event.target.value)} label="Issue Date" fullWidth/>
    
                   </Grid>
                   <Grid item xs={6}>
                   <TextField 
                    value={issueTo}
                   onFocus={()=>handleError('','issueto')}
                   error={errors.issueTo}
                   helperText={errors.issueTo}
                    onChange={(event)=>setIssueTo(event.target.value)} label="Issue To" fullWidth/>
    
                   </Grid>  
                   <Grid item xs={12}>
                    <TextField
                    value={returnDate}
                    onFocus={()=>handleError('','returndate')}
                    error={errors.returnDate}
                    helperText={errors.returnDate}
                    onChange={(event)=>setReturnDate(event.target.value)} label="Return Date" fullWidth/>
    
                   </Grid>
               
                   <Grid item xs={12}>
                    <TextField
                    value={accesionNumber}
                    onFocus={()=>handleError('','accessionnumber')}
                    error={errors.accesionNumberr}
                    helperText={errors.accesionNumber}
                    onChange={(event)=>setAccesionNumber(event.target.value)} label="Accession Number" fullWidth/>
    
                   </Grid>
                   <Grid item xs={12}>
                    <TextField
                    value={returnBy}
                    onFocus={()=>handleError('','returnby')}
                    error={errors.returnBy}
                    helperText={errors.returnBy}
                    onChange={(event)=>setReturnBy(event.target.value)} label="Return By" fullWidth/>
    
                   </Grid>
                   <Grid item xs={12}>
                    <TextField
                    value={rby}
                    onFocus={()=>handleError('','rby')}
                    error={errors.rby}
                    helperText={errors.rby}
                    onChange={(event)=>setRby(event.target.value)} label="Rby" fullWidth/>
    
                   </Grid>
                   </Grid>
                </div>

            </div>
        )
    }

    useEffect(function () {
        fetchAllIssue()

    }, [])

    const handleOpen = (rowData) => {
        console.log("abc", rowData)
        
        setIssueid(rowData.issueid)
        setIssueDate(rowData.issuedate)
        setIssueTo(rowData.issueto)
        setReturnDate(rowData.returndate)
        setAccesionNumber(rowData.accessionnumber)
        setReturnBy(rowData.returnby)
        setRby(rowData.rby)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const showIssueDialog = () => {
        return (
            <div>
                <Dialog open={open}>
                    <DialogTitle>
                        Update Supplier Details
                    </DialogTitle>
                    <DialogContent>
                        {IssueForm()}
                    </DialogContent>

                    <Button onClick={handleSubmit}>Edit</Button>
                    <Button onClick={handleClose}>Close</Button>
                    <DialogActions>

                    </DialogActions>
                </Dialog>
            </div>
        )
    }
    function displayIssue() {
        return (
            <MaterialTable
                title={
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <div>
                            <img src={books} width="40" />

                        </div>
                        <div style={{ fontFamily: 'dosis', fontSize: 25, fontWeight: 'bold', paddingLeft: 5 }}>
                            Issue List

                        </div>
                    </div>
                }
                columns={[
                    {
                        title: 'Issue Id',
                        field: 'issueid',
                        render: (rowData) =>
                            <div>
                                <div>{rowData.issueid}</div>

                            </div>


                    },
                    {
                        title: 'Issue Data/Issue To',

                        render: (rowData) =>
                            <div>
                                <div>{rowData.issuedate}</div>
                                <div>{rowData.issueto}</div>

                            </div>


                    },
                    {
                        title: 'Return Date',

                        render: (rowData) =>
                            <div>
                                <div>{rowData.returndate}</div>
                               

                            </div>


                    },
                    {
                        title: 'Accession Number/Return By',

                        render: (rowData) =>
                            <div>
                                <div>{rowData.accessionnumber}</div>
                                <div>{rowData.returnby}</div>

                            </div>


                    },
                    {
                        title: 'RBY',
                        render: (rowData) =>
                            <div>
                                <div>{rowData.rby}</div>

                            </div>
                    },


                ]}
                data={issueCode}
                actions={[
                    {

                        icon: 'edit',
                        tooltip: 'Save Details',
                        onClick: (event, rowData) => handleOpen(rowData),

                    },
                    {
                        icon: 'delete',
                        tooltip: 'Delete Details',
                        onClick: (event, rowData) => handleDelete(rowData)
                    },
                    {
                        icon: 'add',
                        tooltip: 'Add Books',
                        isFreeAction: true,
                        onClick: (event, rowData) => navigate('/issue')
                    },
                ]}
            />
        )
    }

    return (
        <div className={classes.reportroot}>
            <div className={classes.reportbox}>
                {displayIssue()}
                {showIssueDialog()}
            </div>
        </div>
    )


}