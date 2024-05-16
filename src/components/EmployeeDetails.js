import {Grid,Button,TextField} from '@mui/material';
import { useState } from 'react';
import { postData } from '../services/FetchNodeServices';
import Swal from 'sweetalert2';
import {makeStyles} from "@mui/styles"
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
export default function EmployeeDetails(){
    const useStyle=useStyles()
    const [Code,setCode]=useState('')
    const [employeeCode,setEmployeeCode]=useState('')
    const [employeeName,setEmployeeName]=useState('')
    const [department,setDepartment]=useState('')
    const [designation,setDesignation]=useState('')
    // const [previousPost,setPreviousPost]=useState('')
    //const [promotedPost,setPromotedPost]=useState('')
   // const [promotionDate,setPromotionDate]=useState('')
    const [errors,setErrors]=useState({})
    const handleError=(error,label)=>{
        setErrors((prev)=>({...prev,[label]:error}))
    }

    const validation=()=>{
        var error=false
        if(Code.length==0)
        {error=true
        handleError('Please Input Employee Code...','Code')
        }
        if(employeeCode.length==0)
        {error=true
        handleError('Please Input Employee Code...','employeeCode')
        }
        if(employeeName.length==0)
        {error=true
        handleError('Please Input Employee Name...','employeeName')
        }
       
        if(department.length==0)
        {error=true
        handleError('Please Input Previous Post...','department')
        }
        if(designation.length==0)
        {error=true
        handleError('Please Input Promoted Post...','designation')
        }
        // if(promotionDate.length==0)
        // {error=true
        // handleError('Please Input Promotion Date...','promotionDate')
        // }
        
        return error
        
    }

    const handleReset=()=>{
        setCode('')
        setEmployeeCode('')
        setEmployeeName('')
        setDepartment('')
        setDesignation('')
        // setPreviousPost('')
        // setPromotedPost('')
        // setPromotionDate('')
    }

    const handleSubmit=async()=>{
        var error=validation()
        if(error==false)
        {
        
 var body={code:Code,employeecode:employeeCode, employeename:employeeName,department:department,designation:designation}
    //    var formData=new FormData()
    //    formData.append('employeecode',employeeCode) 
    //    formData.append('employeename',employeeName) 
    //    formData.append('previouspost',previousPost) 
    //    formData.append('promotedpost',promotedPost) 
    //    formData.append('promotiondate',promotionDate) 
       var response= await postData('employee/submit_employeedetails',body)
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
    return(
        <div className={useStyle.root}>
            <div className={useStyle.box}>
             <Grid container spacing={3}>
               <Grid item xs={6}>
             
               <TextField
                value={Code}
                 onFocus={()=>handleError('','code')}
                 error={errors.Code}
                 helperText={errors.Code}
                onChange={(event)=>setCode(event.target.value)} label="Code" fullWidth/>

               </Grid>
               <Grid item xs={6}>
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
           
               <Grid item xs={12}>
                <TextField
                value={department}
                onFocus={()=>handleError('','department')}
                error={errors.department}
                helperText={errors.department}
                onChange={(event)=>setDepartment(event.target.value)} label="Department" fullWidth/>

               </Grid>
               <Grid item xs={12}>
                <TextField
                value={designation}
                onFocus={()=>handleError('','designation')}
                error={errors.designation}
                helperText={errors.designation}
                onChange={(event)=>setDesignation(event.target.value)} label="Designation" fullWidth/>

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
             
        </div>
    )
}