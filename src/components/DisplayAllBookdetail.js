import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";
import {makeStyles} from "@mui/styles"
import { getData } from "../services/FetchNodeServices";
import { DialerSip } from "@mui/icons-material";
import { postData } from '../services/FetchNodeServices';
import {Grid,Button,TextField} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Books from "../assets/books.jpg"
import Swal from "sweetalert2";
import { DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
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

export default function DisplayAllBookDetail()
{   var classes=useStyles()
    var navigate=useNavigate()
 
 const [open,setOpen]=useState(false)

 const [lno,setLNo]=useState([])
 // const [D,setD]=useState('')
 // const [ACNO,setACNO]=useState('')
 // const [RB,setRB]=useState('')
 const [Author,setAuthor]=useState('')
 const [Title1,setTitle1]=useState('')
 const [Title2,setTitle2]=useState('')
 const [Title3,setTitle3]=useState('')
 // const [Subject1,setSubject1]=useState('')
 // const [Subject2,setSubject2]=useState('')
 const [Edition,setEdition]=useState('')
 const [Place,setPlace]=useState('')
 const [Publisher,setPublisher]=useState('')
 const [Volume,setVolume]=useState('')
 const [Year,setYear]=useState('')
 // const [Pages,setPages]=useState('')
 const [Cost,setCost]=useState('')
 const [FornCost,setFornCost]=useState('')
 const [Qty,setQty]=useState('')
 const [Noremd,setNoremd]=useState('')
 const [Rem,setRem]=useState('')
 const[Crvno,setCrvno]=useState('')
 const [Status,setStatus]=useState('')
 const[Itemcode,setItemCode]=useState('')
 const [bookdetailid,setBookdetailid]=useState('')
 // const [Source1,setSource1]=useState('')
 // const [Source2,setSource2]=useState('')
 // const [BillNo,setBillNo]=useState('')
 // const [BillDt,setBillDt]=useState('')

 
 // const [BoKKNo,setBoKKNo]=useState('')

 const [errors,setErrors]=useState({})
 const handleError=(error,label)=>{
     setErrors((prev)=>({...prev,[label]:error}))
 }

 const validation=()=>{
     var error=false
     if(lno.length==0)
     {error=true
     handleError('Please Input Employee Code...','lno')
     }
     // if(D.length==0)
     // {error=true
     // handleError('Please Input Employee Name...','D')
     // }
     // if(ACNO.length==0)
     // {error=true
     // handleError('Please Input Previous Post...','ACNO')
     // }
     // if(RB.length==0)
     // {error=true
     // handleError('Please Input Promoted Post...','RB')
     // }
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
         //         if(Subject1.length==0)
         //             {error=true
         //      handleError('Please Input Promotion Date...','Subject1')
         //   }
         //  if(Subject2.length==0)
         //   {error=true
         //   handleError('Please Input Promotion Date...','Subject2')
         // }
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

                         
                                 if(Volume.length==0)
                                     {error=true
                                     handleError('Please Input Promotion Date...','Volume')
                                     }
                                     if(Year.length==0)
                                         {error=true
                                         handleError('Please Input Promotion Date...','Year')
                                         }
                                         // if(Pages.length==0)
                                         //     {error=true
                                         //     handleError('Please Input Promotion Date...','Pages')
                                         //     }
                                             // if(Pages.length==0)
                                             //     {error=true
                                             //     handleError('Please Input Promotion Date...','Pages')
                                             //     }
             
                                     // if(Source1.length==0)
                                     //     {error=true
                                     //     handleError('Please Input Promotion Date...','Source1')
                                     //     }
                                     //     if(Source2.length==0)
                                     //         {error=true
                                     //         handleError('Please Input Promotion Date...','Source2')
                                     //         }
                                     //         if(BillNo.length==0)
                                     //             {error=true
                                     //             handleError('Please Input Promotion Date...','BillNo')
                                     //             }
                                     //             if(BillDt.length==0)
                                     //                 {error=true
                                     //                 handleError('Please Input Promotion Date...','BillDt')
                                     //                 }
                                                     if(Cost.length==0)
                                                         {error=true
                                                         handleError('Please Input Promotion Date...','Cost')
                                                         }
                                                         if(FornCost.length==0)
                                                             {error=true
                                                             handleError('Please Input Promotion Date...','FornCost')
                                                             }
                                                             // if(BoKKNo.length==0)
                                                             //     {error=true
                                                             //     handleError('Please Input Promotion Date...','BoKKNo')
                                                             //     }

                                                             if(Qty.length==0)
                                                                 {error=true
                                                                 handleError('Please Input Promotion Date...','Qty')
                                                                 }

                                                                 
                                                                     if(Rem.length==0)
                                                                         {error=true
                                                                         handleError('Please Input Promotion Date...','Rem')
                                                                         }
                                                                         if(Noremd.length==0)
                                                                             {error=true
                                                                             handleError('Please Input Promotion Date...','Noremd')
                                                                             }

                                                                         if(Crvno.length==0)
                                                                             {error=true
                                                                             handleError('Please Input Promotion Date...','Crvno')
                                                                             }
                                                                             if(Status.length==0)
                                                                                 {error=true
                                                                                 handleError('Please Input Promotion Date...','Status')
                                                                                 }
                                                                                 if(Itemcode.length==0)
                                                                                     {error=true
                                                                                     handleError('Please Input Promotion Date...','Itemcode')
                                                                                     }


     
     
     return error
     
 }

 const handleReset=()=>{
    setLNo('')
    // setD('')
    // setACNO('')
    // setRB('')
    setAuthor('')
    setTitle1('')
    setTitle2('')
    setTitle3('')
    // setSubject1('')
    // setSubject2('')
    setEdition('')
    setPlace('')
    setPublisher('')
    setVolume('')
    setYear('')
    // setPages('')
    
    // setSource1('')
    // setSource2('')
    // setBillNo('')
    // setBillDt('')
    setCost('')
    setFornCost('')
    // setBoKKNo('')
    setQty('')
    setNoremd('')
    setRem('')
    setCrvno('')
    setItemCode('')
}

    const handleDelete=async(rowData)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        toast:true,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
          var result= await postData ('employee/delete_book_data',{bookdetailid:rowData.bookdetailid})
         if(result.status)
         { Swal.fire(
            
             "Deleted!",
             "Record has been deleted.",
             "success"
          );
          fetchAllBookdetail()
        }
      else{
        Swal.fire(
            
          "Deleted!",
          "Fail to Delete Record",
          "success"
       );
      }
      }
      });

    }

    const handleSubmit=async()=>{
        var error=validation()
        if(error==false)
        {
        
 var body={bookdetailid:bookdetailid,lno:lno,author:Author,title1:Title1, title2:Title2, title3:Title3,edition:Edition, place:Place, publisher:Publisher,volume:Volume, year:Year,cost:Cost, forncost:FornCost, qty:Qty,noremd:Noremd,rem:Rem,crvno:Crvno,status:Status,itemcode:Itemcode}
    //    var formData=new FormData()
    //    formData.append('employeecode',employeeCode) 
    //    formData.append('employeename',employeeName) 
    //    formData.append('previouspost',previousPost) 
    //    formData.append('promotedpost',promotedPost) 
    //    formData.append('promotiondate',promotionDate) 
       var response= await postData('employee/edit_bookdetail',body)
       if(response.status)
       {
        Swal.fire({
        icon: "success",
        title: "Promotions",
        text: response.message,
        toast:true
        
})
  fetchAllBookdetail()
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
  const fetchAllBookdetail=async()=>{
  var response=await getData('employee/display_all_bookdetail')
     setLNo(response.data)

  }
const bookdetailForm=()=>{
    return(
        <div className={useStyles.root}>
            <div className={useStyles.box}>
             <Grid container spacing={3}>
               <Grid item xs={4}>
                <TextField 
                value={lno}
               onFocus={()=>handleError('','lno')}
               error={errors.lno}
               helperText={errors.lno}
                onChange={(event)=>setLNo(event.target.value)} label="lno" fullWidth/>

               </Grid>
               {/* <Grid item xs={4}>
                <TextField
                value={D}
                onFocus={()=>handleError('','d')}
                error={errors.D}
                helperText={errors.D}
                onChange={(event)=>setD(event.target.value)} label="D" fullWidth/>

               </Grid> */}
               {/* <Grid item xs={4}>
                <TextField
                value={ACNO}
                 onFocus={()=>handleError('','acno')}
                 error={errors.ACNO}
                 helperText={errors.ACNO}
                onChange={(event)=>setACNO(event.target.value)} label="ACNO" fullWidth/>

               </Grid> */}
               {/* <Grid item xs={4}>
                <TextField
                value={RB}
                onFocus={()=>handleError('','rb')}
                error={errors.RB}
                helperText={errors.RB}
                onChange={(event)=>setRB(event.target.value)} label="RB" fullWidth/>

               </Grid> */}
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
               {/* <Grid item xs={4}>
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

               </Grid> */}
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
               {/* <Grid item xs={4}>
                <TextField
                value={Year}
                onFocus={()=>handleError('','year')}
                error={errors.Year}
                helperText={errors.Year}
                onChange={(event)=>setYear(event.target.value)} label="Year" fullWidth/>

               </Grid> */}
               {/* <Grid item xs={4}>
                <TextField
                value={Pages}
                onFocus={()=>handleError('','pages')}
                error={errors.Pages}
                helperText={errors.Pages}
                onChange={(event)=>setPages(event.target.value)} label="Pages" fullWidth/>

               </Grid> */}
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
                value={Year}
                onFocus={()=>handleError('','year')}
                error={errors.Year}
                helperText={errors.Year}
                onChange={(event)=>setYear(event.target.value)} label="Year" fullWidth/>

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
                value={Qty}
                onFocus={()=>handleError('','qty')}
                error={errors.Qty}
                helperText={errors.Qty}
                onChange={(event)=>setQty(event.target.value)} label="Qty" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Noremd}
                onFocus={()=>handleError('','noremd')}
                error={errors.Noremd}
                helperText={errors.Noremd}
                onChange={(event)=>setNoremd(event.target.value)} label="No Remd" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Rem}
                onFocus={()=>handleError('','rem')}
                error={errors.Rem}
                helperText={errors.Rem}
                onChange={(event)=>setRem(event.target.value)} label="Rem" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Crvno}
                onFocus={()=>handleError('','crvno')}
                error={errors.Crvno}
                helperText={errors.Crvno}
                onChange={(event)=>setCrvno(event.target.value)} label="Crvno" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Status}
                onFocus={()=>handleError('','status')}
                error={errors.Status}
                helperText={errors.Status}
                onChange={(event)=>setStatus(event.target.value)} label="Status" fullWidth/>

               </Grid>
               <Grid item xs={4}>
                <TextField
                value={Itemcode}
                onFocus={()=>handleError('','itemcode')}
                error={errors.Itemcode}
                helperText={errors.Itemcode}
                onChange={(event)=>setItemCode(event.target.value)} label="Item Code" fullWidth/>

               </Grid>
               {/* <Grid item xs={6}>
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
               </Grid> */}
             </Grid>
            </div>
             
        </div>
    )
}


     useEffect(function(){
     fetchAllBookdetail()
    
     },[])

     const handleOpen=(rowData)=>{
      console.log("abc",rowData)
      setBookdetailid(rowData.bookdetailid)
      setLNo(rowData.lno)
      //setSNo(rowData.sno)
     // setD(rowData.d)
      //setACNO(rowData.acno)
      //setRB(rowData.rb)
      setAuthor(rowData.author)
      setTitle1(rowData.title1) 
      setTitle2(rowData.title2)
      setTitle3(rowData.title3)
      //setSubject1(rowData.subject1)
      //setSubject2(rowData.subject2)
      setEdition(rowData.edition)
      setPlace(rowData.place)
      setPublisher(rowData.publisher)
      setVolume(rowData.volume)
      setYear(rowData.year)
     // setPages(rowData.pages)
      
      //setSource1(rowData.source1)
     // setSource2(rowData.source2)
      //setBillNo(rowData.billno)
      //setBillDt(rowData.billdt)
      setCost(rowData.cost)
      setFornCost(rowData.forncost)
      //setBoKKNo(rowData.bokkno)
      setQty(rowData.qty)
      setNoremd(rowData.noremd)
      setRem(rowData.rem)
      setCrvno(rowData.crvno)
      setStatus(rowData.status)
      setItemCode(rowData.itemcode)
      setOpen(true)
     }

     const handleClose=()=>{
      setOpen(false)
     }

     const showBookdetailDialog=()=>{
      return(
        <div>
        <Dialog open={open}>
         <DialogTitle>
         Update Book Details
         </DialogTitle>
         <DialogContent>
         {bookdetailForm()}
         </DialogContent>
       
         <Button onClick={handleSubmit}>Edit</Button>
         <Button onClick={handleClose}>Close</Button>
         <DialogActions>

         </DialogActions>
        </Dialog>
        </div>
      )
     }
    function displayBookdetail() {
        return (
          <MaterialTable
            title={ 
               <div style={{display:'flex',flexDirection:'row'}}>
            <div>
                <img src={Books} width="40"/>

            </div>
            <div style={{fontFamily:'dosis',fontSize:25,fontWeight:'bold',paddingLeft:5}}>
                Books Detail List

            </div>
            </div>}
            columns={[
              { title: 'Lno', 
              field: 'bookdetailid',
              render:(rowData)=>
                <div>
                    <div>{rowData.bookdetailid}</div>
                    <div>{rowData.lno}</div>
                </div>


               },
            //   { title: 'D/ACNO',
               
            //    render:(rowData)=>
            //     <div>
            //         <div>{rowData.d}</div>
            //         <div>{rowData.acno}</div>
            //     </div>
            
            
            // },
              { title: 'Author', 
                
              render:(rowData)=>
                <div>
                    {/* <div>{rowData.rb}</div> */}
                    <div>{rowData.author}</div>
                </div>


             },
              { title: 'Title',
              render:(rowData)=>
                <div>
                    <div>{rowData.title1}</div>
                    <div>{rowData.title2}</div>
                    <div>{rowData.title3}</div>
                </div>
              },
            //   { title: 'Subject',
            //   render:(rowData)=>
            //     <div>
            //         <div>{rowData.subject1}</div>
            //         <div>{rowData.subject2}</div>
            //     </div>
            //   },
              { title: 'Edition/Place/Publisher',
              render:(rowData)=>
                <div>
                    <div>{rowData.edition}</div>
                    <div>{rowData.place}</div>
                    <div>{rowData.publisher}</div>
                </div>
              },
              { title: 'Volume/year',
              render:(rowData)=>
                <div>
                     <div>{rowData.volume}</div>
                    <div>{rowData.year}</div>
                    {/* <div>{rowData.pages}</div> */}
                   
                </div>
              },
            //   { title: 'Source',
            //   render:(rowData)=>
            //     <div>
            //         <div>{rowData.source1}</div>
            //         <div>{rowData.source2}</div>
                   
            //     </div>
            //   },
              { title: 'Cost/Forncost',
              render:(rowData)=>
                <div>
                     <div>{rowData.forncost}</div>
                    {/* <div>{rowData.billno}</div>
                    <div>{rowData.billdt}</div> */}
                    <div>{rowData.cost}</div>
                   
                </div>
              },
              { title: 'Qty/Noremd',
              render:(rowData)=>
                <div>
                     <div>{rowData.qty}</div>
                    {/* <div>{rowData.billno}</div>
                    <div>{rowData.billdt}</div> */}
                    <div>{rowData.noremd}</div>
                   
                </div>
              },
              { title: 'Rem/Crvno',
              render:(rowData)=>
                <div>
                     <div>{rowData.rem}</div>
                    {/* <div>{rowData.billno}</div>
                    <div>{rowData.billdt}</div> */}
                    <div>{rowData.crvno}</div>
                   
                </div>
              },
              { title: 'Status/Itemcode',
              render:(rowData)=>
                <div>
                     <div>{rowData.status}</div>
                    {/* <div>{rowData.billno}</div>
                    <div>{rowData.billdt}</div> */}
                    <div>{rowData.itemcode}</div>
                   
                </div>
              },
            //   { title: 'Forncost/BokkNo',
            //   render:(rowData)=>
            //     <div>
                   
            //         <div>{rowData.bokkno}</div>
                   
            //     </div>
            //   },
            
            ]}
            data={lno}     
            actions={[
              {
                icon: 'edit',
                tooltip: 'Save Details',
                onClick: (event, rowData) => handleOpen(rowData)
              },
              {
                icon: 'delete',
                tooltip: 'Delete Details',
                onClick: (event, rowData) => handleDelete(rowData)
              },
              {
                icon: 'add',
                tooltip: 'Add Book Details',
                isFreeAction:true,
                onClick: (event, rowData) => navigate('/bookdetail')
              },
            ]}
          />
        )
      }
  
  return(
    <div className={classes.reportroot}>
      <div className={classes.reportbox}>
      {displayBookdetail()}
      {showBookdetailDialog()}
      </div>
    </div>
  )


}