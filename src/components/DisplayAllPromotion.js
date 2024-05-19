import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";
import {makeStyles} from "@mui/styles"
import { getData } from "../services/FetchNodeServices";
import { DialerSip } from "@mui/icons-material";
import { postData } from '../services/FetchNodeServices';
import {Grid,Button,TextField} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Swal from "sweetalert2";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
var useStyles=makeStyles({
reportroot:{
    width:'100vw',
    height:'100%',
    display:'flex',
    justifyContent:'center'
},

reportbox:{
    width:'60%',
    height:'auto',
    background:'#f1f2f6',
    padding:10,
    margin:10,
    borderRadius:10
},

center:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'

},
box:{
  width:500,
  height:'auto',
   
  padding:10,
  margin:10,
  borderRadius:10
},




})

export default function DisplayAllPromotion()
{   var classes=useStyles()
    
 
 const [open,setOpen]=useState(false)

 const [employeeCode,setEmployeeCode]=useState([])
 const [employeeName,setEmployeeName]=useState('')
 const [previousPost,setPreviousPost]=useState('')
 const [promotedPost,setPromotedPost]=useState('')
 const [promotionDate,setPromotionDate]=useState('')
 const [errors,setErrors]=useState({})
 const handleError=(error,label)=>{
     setErrors((prev)=>({...prev,[label]:error}))
 }

 const validation=()=>{
     var error=false
     if(employeeCode.length==0)
     {error=true
     handleError('Please Input Employee Code...','employeeCode')
     }
     if(employeeName.length==0)
     {error=true
     handleError('Please Input Employee Name...','employeeName')
     }
     if(previousPost.length==0)
     {error=true
     handleError('Please Input Previous Post...','previousPost')
     }
     if(promotedPost.length==0)
     {error=true
     handleError('Please Input Promoted Post...','promotedPost')
     }
     if(promotionDate.length==0)
     {error=true
     handleError('Please Input Promotion Date...','promotionDate')
     }
     
     return error
     
 }

 const handleReset=()=>{
     setEmployeeCode('')
     setEmployeeName('')
     setPreviousPost('')
     setPromotedPost('')
     setPromotionDate('')
 }

 const handleSubmit=async()=>{
     var error=validation()
     if(error==false)
     {
     
var body={employeecode:employeeCode, employeename:employeeName, previouspost:previousPost, promotedpost:promotedPost, promotiondate:promotionDate}
 //    var formData=new FormData()
 //    formData.append('employeecode',employeeCode) 
 //    formData.append('employeename',employeeName) 
 //    formData.append('previouspost',previousPost) 
 //    formData.append('promotedpost',promotedPost) 
 //    formData.append('promotiondate',promotionDate) 
    var response= await postData('promotion/submit_promotion',body)
    if(response.status)
    {
     Swal.fire({
     icon: "success",
     title: "Promotions",
     text: response.message,
     toast:true
     
})
    }
    else{
     Swal.fire({
         icon: "error",
         title: "Oops...",
         text: response.message,
         toast:true
       
       });
    }
    }
 }
  const fetchAllPromotion=async()=>{
  var response=await getData('promotion/display_all_promotion')
    setEmployeeCode(response.data)

  }
const promotionForm=()=>{
  return(
  
        <div className={classes.box}>
         <Grid container spacing={3}>
           <Grid item xs={12}>
            <TextField 
            value={employeeCode}
           onFocus={()=>handleError('','employeecode')}
           error={errors.employeeCode}
           helperText={errors.employeeCode}
            onChange={(event)=>setEmployeeCode(event.target.value)} label="Employee Code" fullWidth/>

           </Grid>
           <Grid item xs={12}>
            <TextField
            value={employeeName}
            onFocus={()=>handleError('','employeename')}
            error={errors.employeeName}
            helperText={errors.employeeName}
            onChange={(event)=>setEmployeeName(event.target.value)} label="Employee Name" fullWidth/>

           </Grid>
           <Grid item xs={6}>
            <TextField
            value={previousPost}
             onFocus={()=>handleError('','previouspost')}
             error={errors.previousPost}
             helperText={errors.previousPost}
            onChange={(event)=>setPreviousPost(event.target.value)} label="Previous Post" fullWidth/>

           </Grid>
           <Grid item xs={6}>
            <TextField
            value={promotedPost}
            onFocus={()=>handleError('','promotedpost')}
            error={errors.promotedPost}
            helperText={errors.promotedPost}
            onChange={(event)=>setPromotedPost(event.target.value)} label="Promoted Post" fullWidth/>

           </Grid>
           <Grid item xs={12}>
            <TextField
            value={promotionDate}
            onFocus={()=>handleError('','promotiondate')}
            error={errors.promotionDate}
            helperText={errors.promotionDate}
            onChange={(event)=>setPromotionDate(event.target.value)} label="Date Of Promotion" fullWidth/>

           </Grid>
           <Grid item xs={6}>
        <Button component="label"
           fullWidth
           variant='contained'
           onClick={handleSubmit}
           >Submit</Button>
           </Grid>
           <Grid item xs={6}>
        <Button component="label"
           fullWidth
           variant='contained'
           onClick={handleReset}
           >Reset</Button>
           </Grid>
         </Grid>
        </div>
         
    
)
}

     useEffect(function(){
     fetchAllPromotion()
    
     },[])

     const handleOpen=(rowData)=>{
      setEmployeeCode(rowData.employeecode)
      setOpen(true)
     }

     const handleClose=()=>{
      setOpen(false)
     }

     const showPromotionDialog=()=>{
      return(
        <div>
        <Dialog open={open}>
         <DialogTitle>
         Update Promotion
         </DialogTitle>
         <DialogContent>
         {promotionForm()}
         </DialogContent>
         <Button onClick={handleClose}>Close</Button>
         <DialogActions>

         </DialogActions>
        </Dialog>
        </div>
      )
     }
    function displayPromotion() {
        return (
          <MaterialTable
            title="Promotions List"
            columns={[
              { title: 'Promotion Id', field: 'promotionsid' },
              { title: 'Employee Code', field: 'employeecode'},
              { title: 'Employee Name', field: 'employeename' },
              { title: 'Previous Post', field: 'previouspost'},
              { title: 'Promoted Post', field: 'promotedpost'},
              { title: 'Promotion Date', field: 'promotiondate'},
            
            ]}
            data={employeeCode}        
            actions={[
              {
                icon: 'edit',
                tooltip: 'Save Details',
                onClick: (event, rowData) => handleOpen(rowData)
              }
            ]}
          />
        )
      }
  
  return(
    <div className={classes.reportroot}>
      <div className={classes.reportbox}>
      {displayPromotion()}
      {showPromotionDialog()}
      </div>
    </div>
  )


}