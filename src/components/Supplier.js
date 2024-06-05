import { Grid, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { postData } from '../services/FetchNodeServices';
import Swal from 'sweetalert2';
import Heading from './projectComponent/Heading';
import books from "../../src/assets/books.jpg"
import { makeStyles } from "@mui/styles"
var useStyles = makeStyles({
    root: {
        width: '100vw',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },

    box: {
        width: 500,
        height: 'auto',
        background: '#f1f2f6',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },

    center: {
        display: 'flex',

    }


})
export default function Supplier() {
    const useStyle = useStyles()
    const [supplyCode, setSupplyCode] = useState('')
    const [supplyName, setSupplyName] = useState('')
    const [supplyAddress, setSupplyAddress] = useState('')
    // const [suppadd1,setsuppadd1]=useState('')
    // const [suppadd2,setsuppadd2]=useState('')
    // const [rby,setRby]=useState('')
    // const [previousPost,setPreviousPost]=useState('')
    //const [promotedPost,setPromotedPost]=useState('')
    // const [promotionDate,setPromotionDate]=useState('')
    const [errors, setErrors] = useState({})
    const handleError = (error, label) => {
        setErrors((prev) => ({ ...prev, [label]: error }))
    }

    const validation = () => {
        var error = false
        if (supplyCode.length == 0) {
            error = true
            handleError('Please Input Employee Code...', 'supplyCode')
        }
        if (supplyName.length == 0) {
            error = true
            handleError('Please Input Employee Code...', 'supplyName')
        }
        // if(issueTo.length==0)
        // {error=true
        // handleError('Please Input Employee Name...','employeeName')
        // }

        if (supplyAddress.length == 0) {
            error = true
            handleError('Please Input Previous Post...', 'supplyaAddress')
        }
        // if(suppadd1.length==0)
        // {error=true
        // handleError('Please Input Promoted Post...','suppadd1')
        // }
        // if(suppadd2.length==0)
        // {error=true
        // handleError('Please Input Promotion Date...','suppadd2')
        // }
        // if(rby.length==0)
        // {error=true
        //  handleError('Please Input Promotion Date...','rby')
        //  }


        return error

    }

    const handleReset = () => {
        setSupplyCode('')
        setSupplyName('')
        setSupplyAddress('')
        // setsuppadd1('')
        // setsuppadd2('')
        // setRby('')
        // setPromotedPost('')
        // setPromotionDate('')
    }

    const handleSubmit = async () => {
        var error = validation()
        if (error == false) {

            var body = { supplycode: supplyCode, supplyname: supplyName, supplyaddress: supplyAddress }
            //    var formData=new FormData()
            //    formData.append('employeecode',employeeCode) 
            //    formData.append('employeename',employeeName) 
            //    formData.append('previouspost',previousPost) 
            //    formData.append('promotedpost',promotedPost) 
            //    formData.append('promotiondate',promotionDate) 
            var response = await postData('employee/submit_supplier', body)
            if (response.status) {
                Swal.fire({
                    icon: "success",
                    title: "Promotions",
                    text: response.message,
                    toast: true

                })
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
    return (
        <div className={useStyle.root}>
            <div className={useStyle.box}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Heading image={books} caption="Supplier" link='/displayallsupplier' />
                    </Grid>
                    <Grid item xs={6}>

                        <TextField
                            value={supplyCode}
                            onFocus={() => handleError('', 'supplycode')}
                            error={errors.supplyCode}
                            helperText={errors.supplyCode}
                            onChange={(event) => setSupplyCode(event.target.value)} label="Supply Code" fullWidth />

                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            value={supplyName}
                            onFocus={() => handleError('', 'supplyname')}
                            error={errors.supplyName}
                            helperText={errors.supplyName}
                            onChange={(event) => setSupplyName(event.target.value)} label="Supply Name" fullWidth />

                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            value={supplyAddress}
                            onFocus={() => handleError('', 'supplyaddress')}
                            error={errors.supplyAddress}
                            helperText={errors.supplyAddress}
                            onChange={(event) => setSupplyAddress(event.target.value)} label="Supplier Address" fullWidth />

                    </Grid>

                    {/* <Grid item xs={12}>
                <TextField
                value={suppadd1}
                onFocus={()=>handleError('','suppadd1')}
                error={errors.suppadd1}
                helperText={errors.suppadd2}
                onChange={(event)=>setsuppadd1(event.target.value)} label="Supplier Address 1" fullWidth/>

               </Grid>
               <Grid item xs={12}>
                <TextField
                value={suppadd2}
                onFocus={()=>handleError('','suppadd2')}
                error={errors.suppadd2}
                helperText={errors.suppadd2}
                onChange={(event)=>setsuppadd2(event.target.value)} label="Supplier 2" fullWidth/>

               </Grid> */}
                    {/* <Grid item xs={12}>
                <TextField
                value={rby}
                onFocus={()=>handleError('','rby')}
                error={errors.rby}
                helperText={errors.rby}
                onChange={(event)=>setRby(event.target.value)} label="Rby" fullWidth/>

               </Grid> */}
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