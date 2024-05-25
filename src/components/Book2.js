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
    width:'40%',
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
export default function Book2(){
    const useStyle=useStyles()
    const [sno,setSNo]=useState('')
    const [D,setD]=useState('')
    const [ACNO,setACNO]=useState('')
    const [RB,setRB]=useState('')
    const [Author,setAuthor]=useState('')
    const [Title1,setTitle1]=useState('')
    const [Title2,setTitle2]=useState('')
    const [Title3,setTitle3]=useState('')
    const [Subject1,setSubject1]=useState('')
    const [Subject2,setSubject2]=useState('')
    const [Edition,setEdition]=useState('')
    const [Place,setPlace]=useState('')
    const [Publisher,setPublisher]=useState('')
    const [Year,setYear]=useState('')
    const [Pages,setPages]=useState('')
    const [Volume,setVolume]=useState('')
    const [Source1,setSource1]=useState('')
    const [Source2,setSource2]=useState('')
    const [BillNo,setBillNo]=useState('')
    const [BillDt,setBillDt]=useState('')
    const [Cost,setCost]=useState('')
    const [FornCost,setFornCost]=useState('')
    const [BoKKNo,setBoKKNo]=useState('')

    const [errors,setErrors]=useState({})
    const handleError=(error,label)=>{
        setErrors((prev)=>({...prev,[label]:error}))
    }

    const validation=()=>{
        var error=false
        if(sno.length==0)
        {error=true
        handleError('Please Input Employee Code...','sno')
        }
        if(D.length==0)
        {error=true
        handleError('Please Input Employee Name...','D')
        }
        if(ACNO.length==0)
        {error=true
        handleError('Please Input Previous Post...','ACNO')
        }
        if(RB.length==0)
        {error=true
        handleError('Please Input Promoted Post...','RB')
        }
        if(Author.length==0)
        {error=true
        handleError('Please Input Promotion Date...','Author')
        }
        if(Title1.length==0)
            {error=true
            handleError('Please Input Promotion Date...','Title1')
            }
            if(Title2.length==0)
                {error=true
                handleError('Please Input Promotion Date...','Title2')
                }
                if(Title3.length==0)
                    {error=true
                    handleError('Please Input Promotion Date...','Title3')
                    }
                    if(Subject1.length==0)
                        {error=true
                 handleError('Please Input Promotion Date...','Subject1')
              }
             if(Subject2.length==0)
              {error=true
              handleError('Please Input Promotion Date...','Subject2')
            }
            if(Edition.length==0)
                {error=true
                handleError('Please Input Promotion Date...','Edition')
                }
                if(Place.length==0)
                    {error=true
                    handleError('Please Input Promotion Date...','Place')
                    }
                    if(Publisher.length==0)
                        {error=true
                        handleError('Please Input Promotion Date...','Publisher')
                        }
                        if(Year.length==0)
                            {error=true
                            handleError('Please Input Promotion Date...','Year')
                            }

                            if(Pages.length==0)
                                {error=true
                                handleError('Please Input Promotion Date...','Pages')
                                }
                                if(Pages.length==0)
                                    {error=true
                                    handleError('Please Input Promotion Date...','Pages')
                                    }
                                    if(Volume.length==0)
                                        {error=true
                                        handleError('Please Input Promotion Date...','Volume')
                                        }
                                        if(Source1.length==0)
                                            {error=true
                                            handleError('Please Input Promotion Date...','Source1')
                                            }
                                            if(Source2.length==0)
                                                {error=true
                                                handleError('Please Input Promotion Date...','Source2')
                                                }
                                                if(BillNo.length==0)
                                                    {error=true
                                                    handleError('Please Input Promotion Date...','BillNo')
                                                    }
                                                    if(BillDt.length==0)
                                                        {error=true
                                                        handleError('Please Input Promotion Date...','BillDt')
                                                        }
                                                        if(Cost.length==0)
                                                            {error=true
                                                            handleError('Please Input Promotion Date...','Cost')
                                                            }
                                                            if(FornCost.length==0)
                                                                {error=true
                                                                handleError('Please Input Promotion Date...','FornCost')
                                                                }
                                                                if(BoKKNo.length==0)
                                                                    {error=true
                                                                    handleError('Please Input Promotion Date...','BoKKNo')
                                                                    }


        
        
        return error
        
    }

    const handleReset=()=>{
        setSNo('')
        setD('')
        setACNO('')
        setRB('')
        setAuthor('')
        setTitle1('')
        setTitle2('')
        setTitle3('')
        setSubject1('')
        setSubject2('')
        setEdition('')
        setPlace('')
        setPublisher('')
        setYear('')
        setPages('')
        setVolume('')
        setSource1('')
        setSource2('')
        setBillNo('')
        setBillDt('')
        setCost('')
        setFornCost('')
        setBoKKNo('')
    }

    const handleSubmit=async()=>{
        var error=validation()
        if(error==false)
        {
        
 var body={sno:sno, d:D, acno:ACNO, rb:RB, author:Author,title1:Title1, title2:Title2, title3:Title3, subject1:Subject1, subject2:Subject2,edition:Edition, place:Place, publisher:Publisher, year:Year, pages:Pages,volume:Volume, source1:Source1, source2:Source2, billno:BillNo, billdt:BillDt,cost:Cost, forncost:FornCost, bokkno:BoKKNo}
    //    var formData=new FormData()
    //    formData.append('employeecode',employeeCode) 
    //    formData.append('employeename',employeeName) 
    //    formData.append('previouspost',previousPost) 
    //    formData.append('promotedpost',promotedPost) 
    //    formData.append('promotiondate',promotionDate) 
       var response= await postData('employee/submit_book',body)
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

             <Grid item xs={12}>
                <Heading image={books} caption="Books" link="/displayallbook2"/>
                </Grid>
               <Grid item xs={4}>
                <TextField 
                value={sno}
               onFocus={()=>handleError('','sno')}
               error={errors.sno}
               helperText={errors.sno}
                onChange={(event)=>setSNo(event.target.value)} label="Sno" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={D}
                onFocus={()=>handleError('','d')}
                error={errors.D}
                helperText={errors.D}
                onChange={(event)=>setD(event.target.value)} label="D" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={ACNO}
                 onFocus={()=>handleError('','acno')}
                 error={errors.ACNO}
                 helperText={errors.ACNO}
                onChange={(event)=>setACNO(event.target.value)} label="ACNO" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={RB}
                onFocus={()=>handleError('','rb')}
                error={errors.RB}
                helperText={errors.RB}
                onChange={(event)=>setRB(event.target.value)} label="RB" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Author}
                onFocus={()=>handleError('','author')}
                error={errors.Author}
                helperText={errors.Author}
                onChange={(event)=>setAuthor(event.target.value)} label="Author" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Title1}
                onFocus={()=>handleError('','title1')}
                error={errors.Title1}
                helperText={errors.Title1}
                onChange={(event)=>setTitle1(event.target.value)} label="Title1" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Title2}
                onFocus={()=>handleError('','title2')}
                error={errors.Title2}
                helperText={errors.Title2}
                onChange={(event)=>setTitle2(event.target.value)} label="Title2" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Title3}
                onFocus={()=>handleError('','title3')}
                error={errors.Title3}
                helperText={errors.Title3}
                onChange={(event)=>setTitle3(event.target.value)} label="Title3" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Subject1}
                onFocus={()=>handleError('','subject1')}
                error={errors.Subject1}
                helperText={errors.Subject1}
                onChange={(event)=>setSubject1(event.target.value)} label="Subject1" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Subject2}
                onFocus={()=>handleError('','subject2')}
                error={errors.Subject2}
                helperText={errors.Subject2}
                onChange={(event)=>setSubject2(event.target.value)} label="Subject2" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Edition}
                onFocus={()=>handleError('','edition')}
                error={errors.Edition}
                helperText={errors.Edition}
                onChange={(event)=>setEdition(event.target.value)} label="Edition" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Place}
                onFocus={()=>handleError('','place')}
                error={errors.Place}
                helperText={errors.Place}
                onChange={(event)=>setPlace(event.target.value)} label="Place" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Publisher}
                onFocus={()=>handleError('','publisher')}
                error={errors.Publisher}
                helperText={errors.Publisher}
                onChange={(event)=>setPublisher(event.target.value)} label="Publisher" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Year}
                onFocus={()=>handleError('','year')}
                error={errors.Year}
                helperText={errors.Year}
                onChange={(event)=>setYear(event.target.value)} label="Year" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Pages}
                onFocus={()=>handleError('','pages')}
                error={errors.Pages}
                helperText={errors.Pages}
                onChange={(event)=>setPages(event.target.value)} label="Pages" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Volume}
                onFocus={()=>handleError('','volume')}
                error={errors.Volume}
                helperText={errors.Volume}
                onChange={(event)=>setVolume(event.target.value)} label="Volume" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Source1}
                onFocus={()=>handleError('','source1')}
                error={errors.Source1}
                helperText={errors.Source1}
                onChange={(event)=>setSource1(event.target.value)} label="Source1" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Source2}
                onFocus={()=>handleError('','source2')}
                error={errors.Source2}
                helperText={errors.Source2}
                onChange={(event)=>setSource2(event.target.value)} label="Source2" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={BillNo}
                onFocus={()=>handleError('','billno')}
                error={errors.BillNo}
                helperText={errors.BillNo}
                onChange={(event)=>setBillNo(event.target.value)} label="Billno" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={BillDt}
                onFocus={()=>handleError('','billdt')}
                error={errors.BillDt}
                helperText={errors.BillDt}
                onChange={(event)=>setBillDt(event.target.value)} label="Billdt" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Cost}
                onFocus={()=>handleError('','cost')}
                error={errors.Cost}
                helperText={errors.Cost}
                onChange={(event)=>setCost(event.target.value)} label="Cost" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={FornCost}
                onFocus={()=>handleError('','forncost')}
                error={errors.FornCost}
                helperText={errors.FornCost}
                onChange={(event)=>setFornCost(event.target.value)} label="Forn Cost" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={BoKKNo}
                onFocus={()=>handleError('','bokkno')}
                error={errors.BoKKNo}
                helperText={errors.BoKKNo}
                onChange={(event)=>setBoKKNo(event.target.value)} label="Bokkno" fullWidth/>

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