import MaterialTable from "@material-table/core";
import { useState,useEffect } from "react";
import {makeStyles} from "@mui/styles"
import { getData } from "../services/FetchNodeServices";
var useStyles=makeStyles({
root:{
    width:'100vw',
    height:'100%',
    display:'flex',
    justifyContent:'center'
},

box:{
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

}


})

export default function DisplayAllPromotion()
{   var classes=useStyles()
    
 const [employeeCode,setEmployeeCode]=useState([])
 const [employeeName,setEmployeeName]=useState([])
 const [previousPost,setPreviousPost]=useState([])
 const [promotedPost,setPromotedPost]=useState([])
 const [promotionDate,setPromotionDate]=useState([])

  const fetchAllPromotion=async()=>{
  var response=await getData('promotion/display_all_promotion')
    setEmployeeCode(response.data)

  }
     useEffect(function(){
     fetchAllPromotion()
    
     },[])
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
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
              }
            ]}
          />
        )
      }
  
  return(
    <div className={classes.root}>
      <div className={classes.box}>
      {displayPromotion()}
      </div>
    </div>
  )


}