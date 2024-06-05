import {Grid,Button,TextField} from '@mui/material';
import { useState } from 'react';
import { postData } from '../services/FetchNodeServices';
import Swal from 'sweetalert2';
import Heading from './projectComponent/Heading';
import books from "../../src/assets/books.jpg"
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
export default function Issue(){
    const useStyle=useStyles()
    const [issueDate,setIssueDate]=useState('')
    const [issueTo,setIssueTo]=useState('')
    const [returnDate,setReturnDate]=useState('')
    const [accesionNumber,setAccesionNumber]=useState('')
    const [returnBy,setReturnBy]=useState('')
    const [rby,setRby]=useState('')
    // const [previousPost,setPreviousPost]=useState('')
    //const [promotedPost,setPromotedPost]=useState('')
   // const [promotionDate,setPromotionDate]=useState('')
    const [errors,setErrors]=useState({})
    const handleError=(error,label)=>{
        setErrors((prev)=>({...prev,[label]:error}))
    }

    const validation=()=>{
        var error=false
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

    const handleSubmit=async()=>{
        var error=validation()
        if(error==false)
        {
        
 var body={issuedate:issueDate,issueto:issueTo, returndate:returnDate,accessionnumber:accesionNumber,returnby:returnBy,rby:rby}
    //    var formData=new FormData()
    //    formData.append('employeecode',employeeCode) 
    //    formData.append('employeename',employeeName) 
    //    formData.append('previouspost',previousPost) 
    //    formData.append('promotedpost',promotedPost) 
    //    formData.append('promotiondate',promotionDate) 
       var response= await postData('employee/submit_issue',body)
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
            <Grid item xs={12}>
                        <Heading image={books} caption="Issue" link='/displayallissue' />
                    </Grid>
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