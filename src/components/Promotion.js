import {Grid,Button,TextField} from '@mui/material';
import { useState } from 'react';
import {makeStyles} from "@mui/styles"
import { postData } from '../services/FetchNodeServices';
var useStyles=makeStyles({
root:{
    width:'100vw',
    height:'100%',
    display:'flex',
    justifyContent:'center'
},

box:{
    width:500,
    height:'auto',
    background:'#f1f2f6',
    padding:10,
    margin:10,
    borderRadius:10
},

center:{
    display:'flex',

}


})
export default function Promotion(){
    const useStyle=useStyles()
    const [employeeCode,setEmployeeCode]=useState('')
    const [employeeName,setEmployeeName]=useState('')
    const [previousPost,setPreviousPost]=useState('')
    const [promotedPost,setPromotedPost]=useState('')
    const [promotionDate,setPromotionDate]=useState('')

    const handleSubmit=async()=>{
 var body={employeecode:employeeCode, employeename:employeeName, previouspost:previousPost, promotedpost:promotedPost, promotiondate:promotionDate}
    //    var formData=new FormData()
    //    formData.append('employeecode',employeeCode) 
    //    formData.append('employeename',employeeName) 
    //    formData.append('previouspost',previousPost) 
    //    formData.append('promotedpost',promotedPost) 
    //    formData.append('promotiondate',promotionDate) 
       var response= await postData('promotion/submit_promotion',body)
       alert(response.status)
    }
    return(
        <div className={useStyle.root}>
            <div className={useStyle.box}>
             <Grid container spacing={3}>
               <Grid item xs={12}>
                <TextField onChange={(event)=>setEmployeeCode(event.target.value)} label="Employee Code" fullWidth/>

               </Grid>
               <Grid item xs={12}>
                <TextField onChange={(event)=>setEmployeeName(event.target.value)} label="Employee Name" fullWidth/>

               </Grid>
               <Grid item xs={6}>
                <TextField onChange={(event)=>setPreviousPost(event.target.value)} label="Previous Post" fullWidth/>

               </Grid>
               <Grid item xs={6}>
                <TextField onChange={(event)=>setPromotedPost(event.target.value)} label="Promoted Post" fullWidth/>

               </Grid>
               <Grid item xs={12}>
                <TextField onChange={(event)=>setPromotionDate(event.target.value)} label="Date Of Promotion" fullWidth/>

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
               >Reset</Button>
               </Grid>
             </Grid>
            </div>
             
        </div>
    )
}